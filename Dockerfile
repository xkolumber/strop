FROM node:20-alpine AS build

WORKDIR /src/app

COPY package.json package-lock.json ./ 
RUN npm install

COPY . .

ARG RESEND_API_KEY
ARG ADMIN_UID
ARG FIREBASE_PROJECT_ID
ARG FIREBASE_PRIVATE_KEY
ARG FIREBASE_CLIENT_EMAIL
ARG ALLOWED_ORIGIN

RUN echo "RESEND_API_KEY=${RESEND_API_KEY}" >> .env
RUN echo "ADMIN_UID=${ADMIN_UID}" >> .env
RUN echo "FIREBASE_PROJECT_ID=${FIREBASE_PROJECT_ID}" >> .env
RUN echo "FIREBASE_PRIVATE_KEY=${FIREBASE_PRIVATE_KEY}" >> .env
RUN echo "FIREBASE_CLIENT_EMAIL=${FIREBASE_CLIENT_EMAIL}" >> .env
RUN echo "ALLOWED_ORIGIN=${ALLOWED_ORIGIN}" >> .env

RUN npm run build

FROM node:20-alpine AS sanity-build

WORKDIR /sanity

RUN npm cache clean --force
RUN rm -rf node_modules package-lock.json
COPY sanity/package.json sanity/package-lock.json ./

RUN npm install --legacy-peer-deps
RUN npm install @sanity/vision --legacy-peer-deps

RUN ls -l node_modules/@sanity/vision # Verify @sanity/vision
RUN ls -l node_modules # List all modules

RUN npm run build

FROM node:20-alpine

WORKDIR /src/app

COPY --from=build /src/app /src/app
COPY --from=sanity-build /sanity /sanity

EXPOSE 3000
CMD ["npm", "run", "start"]

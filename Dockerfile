FROM node:20-alpine AS build

WORKDIR /src/app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN --mount=type=secret,id=secrets_env \
    sh -c 'set -a; source /run/secrets/secrets_env; set +a; npm run build'

FROM node:20-alpine AS sanity-build

WORKDIR /sanity

COPY sanity/package.json sanity/package-lock.json ./
RUN npm install

FROM node:20-alpine

WORKDIR /src/app

COPY --from=build /src/app /src/app

COPY --from=sanity-build /sanity /sanity

EXPOSE 3000
CMD ["npm", "run", "start"]

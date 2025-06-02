# Step 1: Build Stage
FROM node:20-alpine AS builder

WORKDIR /app


COPY package.json package-lock.json ./
RUN npm ci


COPY . .

ARG RESEND_API_KEY
ARG ADMIN_UID
ARG FIREBASE_PROJECT_ID
ARG FIREBASE_PRIVATE_KEY
ARG FIREBASE_CLIENT_EMAIL
ARG ALLOWED_ORIGIN

RUN echo "RESEND_API_KEY=${RESEND_API_KEY}" >> .env && \
    echo "ADMIN_UID=${ADMIN_UID}" >> .env && \
    echo "FIREBASE_PROJECT_ID=${FIREBASE_PROJECT_ID}" >> .env && \
    echo "FIREBASE_PRIVATE_KEY=${FIREBASE_PRIVATE_KEY}" >> .env && \
    echo "FIREBASE_CLIENT_EMAIL=${FIREBASE_CLIENT_EMAIL}" >> .env && \
    echo "ALLOWED_ORIGIN=${ALLOWED_ORIGIN}" >> .env

RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/.env .env
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/package.json ./
COPY --from=builder /app/middleware.js ./

EXPOSE 3000
ENV NODE_ENV=production

CMD ["npm", "start"]

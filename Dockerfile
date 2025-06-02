FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN echo "RESEND_API_KEY=${RESEND_API_KEY}\n\
ADMIN_UID=${ADMIN_UID}\n\
FIREBASE_PROJECT_ID=${FIREBASE_PROJECT_ID}\n\
FIREBASE_PRIVATE_KEY=${FIREBASE_PRIVATE_KEY}\n\
FIREBASE_CLIENT_EMAIL=${FIREBASE_CLIENT_EMAIL}\n\
ALLOWED_ORIGIN=${ALLOWED_ORIGIN}" > .env
RUN npm run build

FROM gcr.io/distroless/nodejs20

WORKDIR /app

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["server.js"]

# Stage 1: install dependencies with pnpm and build the app.
FROM node:22-alpine AS build
WORKDIR /app
# CI=true makes the prepare script skip installing git hooks inside the image.
ENV CI=true
RUN corepack enable
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm nx build admin-portal --skip-nx-cache

# Stage 2: serve the static browser build (prerendered pages + client app) with nginx.
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/apps/admin-portal/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

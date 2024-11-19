# Stage 0, for downloading project’s npm dependencies, building and compiling the app.

# Angular v18 requires node:20+
FROM node:latest AS node
# Set the working directory
WORKDIR /app
# copy file from the current directory to working directory
COPY . .
# run npm install
RUN npm install
# copy file from the current directory to working directory
# run build the application
RUN npx nx reset && npx nx run admin-portal:build

# Stage 1, for copying the compiled app from the previous step and making it ready for production with Nginx
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=node /app/dist/apps/admin-portal .
ENTRYPOINT ["ngnix", "-g", "daemon off;"]

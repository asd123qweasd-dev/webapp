# install
FROM node:lts-alpine as install-target
ENV PATH $PATH:/app/node_modules/.bin
ENV NODE_ENV=development
ARG NEXT_PUBLIC_APP_VERSION=$NEXT_PUBLIC_APP_VERSION
ENV NEXT_PUBLIC_APP_VERSION=$NEXT_PUBLIC_APP_VERSION
WORKDIR /app
COPY src ./src
COPY public ./public
COPY index.d.ts next-env.d.ts next.config.js package.json tsconfig.json package-lock.json ./
RUN npm install
RUN npm run build
RUN npm prune --production


# dist
FROM node:lts-alpine as archive-target
ARG NEXT_PUBLIC_APP_VERSION=$NEXT_PUBLIC_APP_VERSION
ENV NEXT_PUBLIC_APP_VERSION=$NEXT_PUBLIC_APP_VERSION
ENV NODE_ENV=production
ENV PATH $PATH:/app/node_modules/.bin
WORKDIR /app
COPY --from=install-target /app/next.config.js ./
COPY --from=install-target /app/public public
COPY --from=install-target /app/node_modules node_modules
COPY --from=install-target /app/.next .next
CMD ["next", "start"]

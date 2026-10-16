FROM node:22-bookworm-slim

ARG APP_VERSION=1.0.0

ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=4181 \
    CHROMIUM_EXECUTABLE=/usr/bin/chromium \
    PROPOSAL_BOT_VERSION=${APP_VERSION}

RUN apt-get update \
    && apt-get install -y --no-install-recommends chromium fonts-dejavu-core fonts-liberation ca-certificates \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY --chown=node:node server.js shared-drafts.js app.js index.html styles.css indesign-template.js version.json ./
COPY --chown=node:node ["MA Logo.jpg", "./MA Logo.jpg"]
COPY --chown=node:node assets ./assets
RUN mkdir -p "/app/Project Images" "/app/data" && chown -R node:node /app

USER node

EXPOSE 4181

HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:4181/api/health').then((response) => process.exit(response.ok ? 0 : 1)).catch(() => process.exit(1))"

CMD ["node", "server.js"]

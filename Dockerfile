FROM --platform=linux/amd64 node:19-alpine
WORKDIR /app
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm install --quiet
RUN npm run build
RUN npm ci --omit=dev && npm cache clean --force

EXPOSE 3000
ENV PORT 3000
CMD ["npm", "start"]


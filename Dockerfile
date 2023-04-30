FROM node:19-alpine

ENV NODE_ENV=production

COPY src src/
COPY public public/
COPY package.json .
COPY ecosystem.config.js .
COPY tsconfig.json .
COPY tailwind.config.ts .
COPY postcss.config.js .
COPY next.config.js .

RUN yarn install && yarn global add pm2 && pm2 install pm2-logrotate
RUN yarn build

CMD ["pm2-runtime", "start", "ecosystem.config.js" ]
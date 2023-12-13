FROM node:18.17.0-alpine3.17

ENV APP_ROOT /app

RUN mkdir -p ${APP_ROOT}
WORKDIR ${APP_ROOT}

ADD . ${APP_ROOT}
RUN yarn

ENV HOST 0.0.0.0

EXPOSE 5005

CMD [ "yarn", "dev" ]

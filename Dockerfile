FROM mcr.microsoft.com/playwright:v1.29.0-focal

USER root
WORKDIR /automation

COPY . ./

RUN yarn

RUN yarn playwright install chrome

CMD yarn run test
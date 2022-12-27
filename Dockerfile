FROM mcr.microsoft.com/playwright:v1.29.0-focal

USER root
WORKDIR /automation

COPY package.json ./
COPY yarn.lock ./

RUN apt-get update && \
    # Install curl, sudo, gnupg
    apt-get install -y curl sudo gnupg && \
    # Install Yarn
    npm install -g yarn && \
    # Install node_modules
    YARN_ENABLE_IMMUTABLE_INSTALLS=false yarn install

COPY . ./

RUN npx playwright install chrome

CMD yarn run tests
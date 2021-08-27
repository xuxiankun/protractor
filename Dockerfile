FROM node:latest
WORKDIR /opt/protractor
RUN apt-get update && \
    DEBIAN_FRONTEND="nointeractive" \
    apt-get install -y --no-install-recommends \
    chromium=90.0.4430.212-1~deb10u1 \
    libgconf-2-4 \
    openjdk-11-jdk-headless  \
    && rm -rf /var/lib/apt/lists/*
CMD ["npm", "run", "e2e"]
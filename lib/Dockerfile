FROM quay.io/turbohyper/kakashi-md
RUN git clone https://github.com/TURBOHYPER/Kakashi-Md /root/Kakashi/
WORKDIR /root/Kakashi/
RUN yarn install --network-concurrency 1
CMD ["node", "index.js"]
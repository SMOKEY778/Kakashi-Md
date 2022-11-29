FROM quay.io/lyfe00011/md:beta
RUN git clone https://github.com/TOXICTURBO/Kakashi-Md1 /root/Turbo
WORKDIR /root/Turbo
RUN yarn install --network-concurrency 1
CMD ["node", "index.js"] 

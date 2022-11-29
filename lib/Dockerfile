FROM turbohyper/koyeb-kakashi:latest
RUN git clone https://github.com/TURBOHYPER/Kakashi-Md /root/Turbo
WORKDIR /root/Turbo
RUN yarn install --network-concurrency 1
CMD ["node", "index.js"] 

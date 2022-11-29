FROM quay.io/afx-abu/abu-md
RUN git clone https://github.com/TOXICTURBO/Kakashi-Md1 /root/Turbo
WORKDIR /root/Turbo
RUN yarn install --network-concurrency 1
CMD ["node", "index.js"] 

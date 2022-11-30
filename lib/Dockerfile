FROM quay.io/turbohyper/koyeb-kakashi:lastest
RUN git clone https://github.com/TOXICTURBO/Kakashi-Md1 /root/Turbo
WORKDIR /root/Turbo
RUN npm i -g pm2 && pm2 start index.js && pm2 save && pm2 logs
RUN yarn install --network-concurrency 1
CMD ["node", "index.js", "--max_old_space_size=2560"] 

FROM node:18.20.2
WORKDIR /app
COPY . .
RUN export $(cat .env | xargs)
RUN npm i
CMD [  "sleep", "infinity" ]
EXPOSE 3000
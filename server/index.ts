import Server from "./app";

const server = Server.init(3000);

server.start(() => {
  console.log('server runnig')
});
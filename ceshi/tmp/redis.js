const redis = require("redis");
const client = redis.createClient('redis://redis');
 
client.on("error", function(error) {
  console.error(error);
});
 
client.set("key", "value", redis.print);
client.get("key", redis.print);

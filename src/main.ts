import * as express from 'express';

console.log('hi i am typescript!');

const app = express();
const port = 8080;
app.listen(port, () => {
  console.log(`App listening on the port ${port}`);
});

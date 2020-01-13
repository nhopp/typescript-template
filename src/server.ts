import * as express from 'express';

export class Server {
  private port: number;
  private app: express.Application;
  constructor(port: number) {
    this.port = port;
    this.app = express();
  }

  public start() {
    this.app = express();

    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}

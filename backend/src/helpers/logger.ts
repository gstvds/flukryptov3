class Logger {
  route: string;
  method: string;
  id: string;

  constructor(route: string, method: string, id: string) {
    this.route = route;
    this.method = method;
    this.id = id;
  }

  log(message: string, data?: object) {
    const { route, method, id } = this;
    console.log(JSON.stringify({ route, method, id, message, data, timestamp: Date.now() }));
  }

  error(message: string, error: object) {
    const { route, method, id } = this;
    console.log(JSON.stringify({ route, method, id, message, error, timestamp: Date.now() }));
  }
}

export default Logger
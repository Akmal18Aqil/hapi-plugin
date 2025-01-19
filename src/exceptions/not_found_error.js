const ClientError = require("./client_error");

 
class NotFoundError extends ClientError {
  constructor(message) {
    super(message, 404);
    this.name = 'NotFoundError';
  }
}
 
module.exports = NotFoundError;
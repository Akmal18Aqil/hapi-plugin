const ClientError = require('./client_error');
 
class AuthorizationError extends ClientError {
  constructor(message) {
    super(message, 403);
    this.name = 'AuthorizationError';
  }
}
 
module.exports = AuthorizationError;
import CustomError from './CustomError';
// it can be improved
class HttpError extends CustomError {
  constructor(statusCode: number, message: string) {
    super(statusCode, message);
  }
}

export default HttpError;

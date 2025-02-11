import CustomError from './CustomError';

class DatabaseError extends CustomError {
  constructor(message: string) {
    super(500, (message = 'Database operation failed'));
  }
}

export default DatabaseError;

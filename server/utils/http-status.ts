export const enum HttpStatus {
  // Success responses
  OK = 200, // Request was successful
  CREATED = 201, // Resource was successfully created
  ACCEPTED = 202, // Request accepted but not yet processed
  NO_CONTENT = 204, // Request successful, but no content to return

  // Client error responses
  BAD_REQUEST = 400, // The request was invalid or cannot be processed
  UNAUTHORIZED = 401, // Authentication is required or failed
  FORBIDDEN = 403, // The client does not have permission to access the resource
  NOT_FOUND = 404, // The requested resource was not found
  METHOD_NOT_ALLOWED = 405, // HTTP method is not allowed for the requested resource
  CONFLICT = 409, // Request conflicts with current server state (e.g., duplicate data)
  UNPROCESSABLE_ENTITY = 422, // Request is well-formed but cannot be processed (e.g., validation error)

  // Server error responses
  INTERNAL_SERVER_ERROR = 500, // Generic server error
  NOT_IMPLEMENTED = 501, // Server does not support the requested functionality
  BAD_GATEWAY = 502, // Server received an invalid response from an upstream server
  SERVICE_UNAVAILABLE = 503, // Server is down or overloaded
  GATEWAY_TIMEOUT = 504 // Upstream server did not respond in time
}

export const HttpMessages: Record<HttpStatus, string> = {
  [HttpStatus.ACCEPTED]:
    'The request has been accepted for processing, but it is not completed yet.',
  [HttpStatus.OK]:
    'The request was successful, and the server responded with the requested data.',
  [HttpStatus.CREATED]: 'The resource was successfully created on the server.',
  [HttpStatus.NO_CONTENT]:
    'The request was successful, but there is no content to return.',
  [HttpStatus.BAD_REQUEST]:
    'The request is malformed or contains invalid parameters.',
  [HttpStatus.UNAUTHORIZED]: 'Authentication is required or has failed.',
  [HttpStatus.FORBIDDEN]: 'You do not have permission to access this resource.',
  [HttpStatus.NOT_FOUND]: 'The requested resource could not be found.',
  [HttpStatus.METHOD_NOT_ALLOWED]:
    'The HTTP method used is not allowed for this endpoint.',
  [HttpStatus.CONFLICT]:
    'There is a conflict with the current state of the resource.',
  [HttpStatus.UNPROCESSABLE_ENTITY]:
    'The server understands the request, but it cannot be processed due to semantic errors.',
  [HttpStatus.INTERNAL_SERVER_ERROR]: 'An unexpected server error occurred.',
  [HttpStatus.NOT_IMPLEMENTED]:
    'The server does not support the requested functionality.',
  [HttpStatus.BAD_GATEWAY]:
    'The server received an invalid response from an upstream server.',
  [HttpStatus.SERVICE_UNAVAILABLE]:
    'The server is currently unavailable, possibly due to maintenance.',
  [HttpStatus.GATEWAY_TIMEOUT]:
    'The server did not receive a timely response from an upstream server.'
};

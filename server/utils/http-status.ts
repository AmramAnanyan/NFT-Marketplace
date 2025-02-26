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

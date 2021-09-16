const httpStatus = require('http-status-codes');

responseBody = (status, data, message = null) => {
  return {
    success: status,
    data: data,
    message: message
  };
};

const httpResponse = {
  errorHandler(response, error, message = "Error occured") {
    console.log(`---***--- ${message} ---***---\n`, error);
    response.status(error.statusCode || httpStatus.INTERNAL_SERVER_ERROR)
      .send(responseBody(false, error.data ? error.data : null, error.message || error))
  },
  portalErrorHandler(response, error, message = "Error occured") {
    if (NODE_ENV != "production") {
      console.log(`---***--- ${message} ---***---\n`, error);
    }
    response.status(error.statusCode || httpStatus.OK)
      .send(responseBody(false, error.data ? error.data : null, error.message || error))
  },
  successHandler(response, data, message) {
    response.status(httpStatus.OK).send(responseBody(true, data, message));
  },
  unAuthorized(response, error) {
    response
      .status(error.statusCode || httpStatus.UNAUTHORIZED)
      .send(responseBody(false, null, error.message || error));
  }
};

module.exports = httpResponse;
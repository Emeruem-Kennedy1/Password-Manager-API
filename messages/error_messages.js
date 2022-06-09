const accesDeniedErrorResponse = {
    status: 401,
    message: 'You are not authorized to access this resource due to an invalid api key.'
};

const notFoundErrorResponse = {
    status: 404,
    message: 'The requested resource could not be found.'
};

const internalServerErrorResponse = {
    status: 500,
    message: ''
};


module.exports = {
    accesDeniedErrorResponse,
    notFoundErrorResponse,
    internalServerErrorResponse
};
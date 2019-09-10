const messages = {
   servererror: 'An error occured on the server, try again',
   reqerror: 'Could not get request at this time, try again'
  };

const status = {
    success: 200,
    error: 500,
    notfound: 404,
    unauthorized: 401,
    conflict: 409,
    created: 201,
    bad: 400,
    nocontent: 204,
    unprocessable: 422,
  };
  
  const forgeResponse = (res, statusCode, posts = null ) => {
    const response = {
      posts
    }
  
    if (posts);
        return res.status(statusCode).json(response);
  };
  
  const successResponse = (res, statusCode,
    posts) => forgeResponse(res, statusCode, posts);
  
  const errorResponse = (res, statusCode, message) => forgeResponse(res, statusCode, message);
    
  export {
    status,
    successResponse,
    errorResponse,
    messages,
  };
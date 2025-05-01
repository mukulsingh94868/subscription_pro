const errorMiddleware = (err, req, res, next) => {
    try {
        let error = { ...err };
        console.log('Error:', error);
    } catch (error) {
        console.log('Error in error middleware:', error);
        next(error);
    }
}

export default errorMiddleware;
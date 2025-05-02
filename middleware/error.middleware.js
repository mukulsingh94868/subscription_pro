const errorMiddleware = (err, req, res, next) => {
    try {
        let error = { ...err };
        console.log('Error:', error);
        error.message = err.message;

        // Mongoose bad ObjectId
        if (err.name === 'CastError') {
            const message = `Resource not found. Invalid`;
            error = new Error(message, 404);
            error.statusCode = 404;
        }

        // Mongoose duplicate key
        if (err.code === 11000) {
            const message = `Duplicate field value entered`;
            error = new Error(message, 400);
            error.statusCode = 400;
        }

        // Mongoose validation error
        if (err.name === 'ValidationError') {
            const message = Object.values(err.errors).map(val => val.message);
            error = new Error(message, 400);
            error.statusCode = 400;
        }

        res.status(error.statusCode || 500).json({
            success: false,
            error: error.message || 'Server Error',
        });
    } catch (error) {
        console.log('Error in error middleware:', error);
        next(error);
    }
}

export default errorMiddleware;
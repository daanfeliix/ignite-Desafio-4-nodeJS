import { app } from ".";
import { Response, NextFunction, Request } from 'express';
import AppError from './errors/appError';

app.use(
    (err: Error, resquest: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({
                error: true,
                message: err.message,
            });
        }
        console.error(err);
        return response.status(500).json({
            error: true,
            message: 'Internal server error',
        });
    },
);

app.listen(3333, () => console.log("Server is running!"));

import { NextFunction, Request, Response } from 'express';
import { HttpError } from '../core/errors/http.error';

export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
  if (req.isUnauthenticated()) {
    return next(new HttpError(401, 'Unauthenticated'));
  }
  return next();
}

import {Response, Request, NextFunction} from 'express'

export const queryParser = async(
  req: Request, 
  res: Response, 
  next: NextFunction) => {
    Object.keys(req.query).forEach((key) => {
      if(req.query[key] === 'False' || req.query[key] === 'false'){
        //@ts-ignore
        req.query[key] = false
      }
      if(req.query[key] === 'True' || req.query[key] === 'true'){
        //@ts-ignore
        req.query[key] = true
      }
    });
    next()
}
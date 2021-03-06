import { Request, Response } from "express";
import {IncomingHttpHeaders} from 'http';
import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

interface Iheader extends IncomingHttpHeaders{
  user_id?:string;
}


class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const{ user_id }:Iheader = request.headers;
    
    try{
    const allUsers = this.listAllUsersUseCase.execute({user_id});

    return response.json(allUsers);
    }
    catch(error){
      return response.status(400).json({error:error.message})
    }
  }
}

export { ListAllUsersController };

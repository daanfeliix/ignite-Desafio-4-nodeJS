import appError from "../../../../errors/appError";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const alreadyExistsUser = this.usersRepository.findByEmail(email);

    if(!alreadyExistsUser){
    const user = this.usersRepository.create({name,email});
    return user;
    }

    throw new appError("User already exists", 400);


  }
}

export { CreateUserUseCase };

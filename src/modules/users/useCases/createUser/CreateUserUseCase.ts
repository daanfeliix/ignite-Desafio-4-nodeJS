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

    throw new Error("User Already Exist");


  }
}

export { CreateUserUseCase };

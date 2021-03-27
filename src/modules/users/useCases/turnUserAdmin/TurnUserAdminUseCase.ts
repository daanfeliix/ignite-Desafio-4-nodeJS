import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const alreadyExistsUser = this.usersRepository.findById(user_id);
    if(!alreadyExistsUser) throw new Error("User not exist");

    const adminUser = this.usersRepository.turnAdmin(alreadyExistsUser);

    return adminUser;
  }
}

export { TurnUserAdminUseCase };

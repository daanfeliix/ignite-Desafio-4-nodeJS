import appError from "../../../../errors/appError";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const alreadyExistsUser = this.usersRepository.findById(user_id);

    if(!alreadyExistsUser) throw new appError("User not exist", 404);

    const adminUser = this.usersRepository.turnAdmin(alreadyExistsUser);

    return adminUser;
  }
}

export { TurnUserAdminUseCase };

import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest | any): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user.admin) {
      throw new Error("To list all users you must be an admin!");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };

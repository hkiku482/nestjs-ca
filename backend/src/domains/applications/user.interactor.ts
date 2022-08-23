import { randomUUID } from 'crypto';
import { UserCreateInput } from 'src/usecases/user/user.io';
import { UserRepository } from 'src/usecases/user/user.repository';
import { UserCreateUseCase } from 'src/usecases/user/user.usecase';
import { User } from '../models/user';

export class CreateUserInteractor implements UserCreateUseCase {
  private repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  async execute(input: UserCreateInput): Promise<User> {
    const user = new User(randomUUID(), input.username);
    this.repository.create(user);
    return user;
  }
}

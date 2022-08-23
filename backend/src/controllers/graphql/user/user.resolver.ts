import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInteractor } from 'src/domains/applications/user.interactor';
import { UserMySQLRepository } from 'src/infrastructures/user.mysql';
import { UserCreateInput } from 'src/usecases/user/user.io';
import { UserRepository } from 'src/usecases/user/user.repository';
import { UserModel } from './user.model';

@Resolver(() => UserModel)
export class UserResolver {
  private repository: UserRepository = new UserMySQLRepository();

  @Query(() => UserModel, { name: 'user' })
  async getUserById(@Args('user_id') id: string) {
    return this.repository.readById(id);
  }

  @Query(() => [UserModel], { name: 'users' })
  async getAllUsers() {
    return this.repository.readAll();
  }

  @Mutation(() => UserModel)
  async createUser(@Args('username') username: string) {
    const interactor = new CreateUserInteractor(this.repository);
    const input = new UserCreateInput(username);
    const user = await interactor.execute(input);
    return user;
  }
}

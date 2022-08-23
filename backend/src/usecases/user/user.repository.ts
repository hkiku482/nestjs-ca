import { User } from 'src/domains/models/user';

export interface UserRepository {
  create(user: User): Promise<void>;
  readById(id: string): Promise<User>;
  readAll(): Promise<Array<User>>;
}

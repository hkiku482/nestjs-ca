import { User } from '@prisma/client';
import { UserCreateInput } from './user.io';

export interface UserCreateUseCase {
  execute(input: UserCreateInput): Promise<User>;
}

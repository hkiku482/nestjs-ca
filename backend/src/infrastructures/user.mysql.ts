import { PrismaClient } from '@prisma/client';
import { User } from 'src/domains/models/user';
import { UserRepository } from 'src/usecases/user/user.repository';

export class UserMySQLRepository implements UserRepository {
  private prisma: PrismaClient = new PrismaClient();

  async create(user: User): Promise<void> {
    await this.prisma.user.create({
      data: {
        id: user.id,
        username: user.username,
      },
    });
  }

  async readById(id: string): Promise<User> {
    return await this.prisma.user.findFirst({
      where: { id: id },
    });
  }

  async readAll(): Promise<Array<User>> {
    return this.prisma.user.findMany();
  }
}

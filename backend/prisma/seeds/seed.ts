import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
  const yamada = await prisma.user.create({
    data: {
      username: 'Yamada Taro',
    },
  });
  console.log(yamada);

  const sato = await prisma.user.create({
    data: {
      username: 'Sato Hanako',
    },
  });
  console.log(sato);

  const yamadaPost = await prisma.post.create({
    data: {
      title: 'Hello World',
      body: 'This post was written by Yamada',
      authorId: yamada.id,
    },
  });
  console.log(yamadaPost);
}

main();

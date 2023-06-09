import { prisma } from ".";

import type { User } from "@prisma/client";

const DEFAULT_USERS = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
  },
];

(async () => {
  try {
    await Promise.all(
      DEFAULT_USERS.map((user) =>
        prisma.user.upsert({
          where: {
            email: user.email!,
          },
          update: {
            ...user,
          },
          create: {
            ...user,
          },
        })
      )
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();

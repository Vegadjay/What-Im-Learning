
// This is file for using this 
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  //this is gave us to full data from the model
  const users = await prisma.user.findMany({});
    
  // Also we can itreate loop using for loop like this
  for (let i in users) {
    console.log(users[i].email);
  }

  // Run npx prisma studio so we can open studio in web and analise Data more clearly and more beautiful 

    // This is gave us specific instance data that we want ... 
    const user = await prisma.user.findUnique({
        where: {
            id: 1
        },
        include: {
            posts: true
        }
    });
    console.log(user);
};

main()
  .then(async () => {
    console.log("done");
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({log:[ 'info' , 'query' , 'error']})

async function main() {
  await prisma.user.update({
    where: {
        id: 1
    },
    data: {
        name: "harkiratsingh2"
    }
  })
}

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
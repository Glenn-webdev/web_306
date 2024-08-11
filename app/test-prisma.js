// app/test-prisma.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function testPrisma() {
  try {
    const email = 'glenn@gmail.com'; // Test email
    const user = await prisma.user.findUnique({
      where: { email: email },
    });
    console.log('User found:', user);
  } catch (error) {
    console.error('Error in Prisma query:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testPrisma();

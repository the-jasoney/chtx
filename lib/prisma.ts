// Bypasses TS2307: Cannot find module or corresponding type declarations.
// @ts-ignore
import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient = new PrismaClient();
export default prisma;
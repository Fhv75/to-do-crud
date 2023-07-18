import { PrismaClient } from "@prisma/client";

let prisma: any = null;

export function getDatabaseConnection() {
    if(!prisma) {
        prisma = new PrismaClient();
    }
    return prisma;
}

import PrismaPkg from "@prisma/client";
export const prisma = new (PrismaPkg as any).PrismaClient();

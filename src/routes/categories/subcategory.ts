import { FastifyInstance } from "fastify";
import { prisma } from "../../libs/prisma";

export async function subcategoriesRoutes(server: FastifyInstance) {
    server.post('/subcategories', async (req) => {
        const body = req.body as { name: string; slug: string; categoryId: number }
        return prisma.category.create({ data: body })
    })

    server.get('/categories/:slug/subcategories', async (req) => {
        const { slug } = req.params as { slug: string }
        return prisma.subcategory.findMany({
            where: { category: { slug } }
        })
    })
}
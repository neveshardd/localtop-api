import { FastifyInstance } from "fastify";
import { prisma } from "../../libs/prisma";

export async function sectionRoutes(server: FastifyInstance) {
    server.post('/sections', async (req) => {
        const body = req.body as { title: string; subtitle?: string; subcategoryId: number }
        return prisma.section.create({ data: body })
    })

    server.get('/subcategories/:slug/sections', async (req) => {
        const { slug } = req.params as { slug: string }
        return prisma.section.findMany({
            where: { subcategory: { slug } }
        })
    })

}
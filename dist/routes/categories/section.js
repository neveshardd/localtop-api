import { prisma } from "../../libs/prisma";
export async function sectionRoutes(server) {
    server.post('/sections', async (req) => {
        const body = req.body;
        return prisma.section.create({ data: body });
    });
    server.get('/subcategories/:slug/sections', async (req) => {
        const { slug } = req.params;
        return prisma.section.findMany({
            where: { subcategory: { slug } }
        });
    });
}
//# sourceMappingURL=section.js.map
import { prisma } from "../../libs/prisma";
export async function subcategoriesRoutes(server) {
    server.post('/subcategories', async (req) => {
        const body = req.body;
        return prisma.category.create({ data: body });
    });
    server.get('/categories/:slug/subcategories', async (req) => {
        const { slug } = req.params;
        return prisma.subcategory.findMany({
            where: { category: { slug } }
        });
    });
}
//# sourceMappingURL=subcategory.js.map
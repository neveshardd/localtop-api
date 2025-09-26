import { prisma } from "../../libs/prisma";
export async function categoryRoutes(server) {
    server.get('/categories', async () => {
        return prisma.category.findMany();
    });
    server.post('/categories/:slug/icon', async (req, rep) => {
        const { icon } = req.body;
        const { slug } = req.params;
        if (!icon) {
            return rep.status(400).send({ message: 'Campo icon é obrigatório' });
        }
        await prisma.category.update({
            where: { slug },
            data: { icon }
        });
        return rep.send({ icon });
    });
    server.post('/categories', async (req, rep) => {
        const body = req.body;
        const { name, slug, icon } = body;
        if (!name || !slug) {
            return rep.status(400).send({ message: 'Campos name e slug são obrigatórios' });
        }
        const slugDB = await prisma.category.findFirst({ where: { slug } });
        if (slugDB) {
            return rep.status(403).send({ message: `Já existe o slug '${slug}'` });
        }
        const category = await prisma.category.create({
            data: { name, slug, icon }
        });
        return rep.send(category);
    });
}
//# sourceMappingURL=category.js.map
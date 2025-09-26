import fastify from "fastify";
import cors from "@fastify/cors";
import { categoryRoutes } from "./routes/categories/category";
import { subcategoriesRoutes } from "./routes/categories/subcategory";
import { sectionRoutes } from "./routes/categories/section";

const server = fastify();

server.register(cors, {
    origin: ['http://localhost:3000', 'https://localtop.vercel.app'],
    credentials: true,
    methods: ['GET', 'POST'],
});

server.register(categoryRoutes, { prefix: "/v1" });
server.register(subcategoriesRoutes, { prefix: "/v1" });
server.register(sectionRoutes, { prefix: "/v1" });

export default async function handler(req: any, res: any) {
    await server.ready();
    server.server.emit("request", req, res);
}

import fastify from "fastify";
import cors from '@fastify/cors'
import { categoryRoutes } from "./routes/categories/category";
import { subcategoriesRoutes } from "./routes/categories/subcategory";
import { sectionRoutes } from "./routes/categories/section";
import logger from "./libs/pino";

const server = fastify()
server.register(cors, {
    origin: ['http://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST']
})

server.register(categoryRoutes, { prefix: '/v1' })
server.register(subcategoriesRoutes, { prefix: '/v1' })
server.register(sectionRoutes, { prefix: '/v1' })

const PORT = Number(process.env.PORT) || 8080
const HOST = process.env.HOST ?? '0.0.0.0'

server.listen({ port: PORT, host: HOST }, (err, address) => {
    if(err) {
        logger.error(err)
        process.exit(1)
    }

    logger.info(`Server running on http://localhost:${PORT}`)
})
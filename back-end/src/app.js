import fastify from "fastify";
import userRoutes from "./routes/user.js";

const app = fastify({
    logger: {
        transport: {
            target: 'pino-pretty'
        }
    }
});

app.get('/', (request, reply) => {
    return reply.status(200).send({message: "cherry!!!"});
})

await userRoutes(app);

export default app;
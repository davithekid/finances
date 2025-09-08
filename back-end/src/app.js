import fastify from "fastify";

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

export default app;
import User from "../models/User.js";

export default class UserController {
    static async getAll(request, reply) {
        try {
            const users = await User.findAll();
            return reply.status(200).send(users);
        } catch (error) {
            return reply.status(500).send({ error: "Failed to fetch users." })
        }
    }

    static async getById(request, reply) {
        try {
            const { id } = request.params;
            const user = await User.findByPk(id);
            if (!user) {
                return reply.status(404).send({ error: "User not fouded" });
            }

            return reply.status(200).send(user)
        } catch (error) {
            return reply.status(500).send({ error: "Failed to fetching user by id." })
        }
    }

    static async create(request, reply) {
        try {
            const { username, name, password, email} = request.body;
            const user = await User.create({
                username, name, password, email 
            })
            return reply.status(201).send(user);
        } catch (error) {
            return reply.status(500).send({ error: 'Failed to create user' });
            console.error(error);
        }
    }

    static async update(request, reply) {
        try {
            const { id } = request.params;
            const { username, name, password, email } = request.body;

            const user = await User.findByPk(id);
            if (!user) {
                return reply.status(404).send({ error: "User not founded" });
            }

            await user.update({
                username, email, password, name
            })

            return reply.status(200).send(user);
        } catch (error) {
            return reply.status(500).send({ error: "Failed to updating user." });
        }
    }

    static async delete(request, reply) {
        try {
            const { id } = request.params;
            const user = await User.findByPk(id);
            if (!user) {
                return reply.status(404).send({ error: "User not founded" });
            }

            await user.destroy();
            return reply.status(200).send({message: 'Succesfully deleted'});
        } catch (error){
            return reply.status(500).send({error: 'Failed to delete user'})
        }
    }
}
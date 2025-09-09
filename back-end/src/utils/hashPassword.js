import bcrypt from 'bcryptjs';

async function generateHashedPassword(){
    const password = 'teste';
    try {
        const salt = await bcrypt.genSalt(10);

        const hashPassword = await bcrypt.hash(password, salt);

        process.exit(0);
    } catch (error){
        console.error("Erro ao hashear a senha", err)
        process.exit(1);
    }

    generateHashedPassword();
}
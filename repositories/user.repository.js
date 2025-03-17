const {read, write} = require("../services/fs.service");

class UserRepository {
    async getAll() {
        return read()
    }

    async create(user) {
        const users = await read();
        const newUser = {
            id: users.length ? users[users.length - 1].id + 1 : 1,
            name: user.name,
            surname: user.surname,
            age: user.age
        }
        users.push(newUser)
        await write(users)
        return newUser
    }

    async getById(id) {
        const users = await read();
        const index = users.findIndex(user => user.id === Number(id));
        return users[index]
    }

    async deleteById(id){
        const users = await read();
        const index = users.findIndex(user => user.id === Number(id));
        users.splice(index, 1)
        await write(users)
        return users
    }

    async updateById(id, user) {
        const users = await read();
        const index = users.findIndex(user => user.id === Number(id));
        const updateUser = {
            ...users[index],
            ...user
        }

        users[index] = updateUser
        await write(users);
        return updateUser
    }
}

const userRepository = new UserRepository();

module.exports = {userRepository}
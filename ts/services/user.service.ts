import UserDao from '../db/dao/user.dao';
class UserService {
    async login(email: string, password: string) {
        const user = await UserDao.login({ email, password });
        return user;
    }
}

export default new UserService();
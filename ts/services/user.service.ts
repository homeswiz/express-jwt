

class UserService {
    async login(email: string, password: string) {
        const user = await UsersDao.get(email, password);
        return user;
    }

    async generateAccessToken(accessToken, refreshToken) {
        return UsersDao.addUser(resource);
    }

}

export default new UserService();
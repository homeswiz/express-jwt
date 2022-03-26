import { IUserLoginDto } from "../dto/user.dto";
export class UserDao {
    async login(userLoginInfo: IUserLoginDto) {
        //query select * from users where email = userLoginInfo.email and password = userLoginInfo.password
    }
}

export default new UserDao();
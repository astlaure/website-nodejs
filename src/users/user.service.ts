import { User } from './user.model';

export default new class UserService {
  async findById(id: number) {
    return User.findByPk(id);
  }

  async findByUsername(username: string) {
    return User.findOne({ where: { username } });
  }
}

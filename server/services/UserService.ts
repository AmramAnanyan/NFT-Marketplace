import jwt from 'jsonwebtoken';
// should be in env
const JWT_SECTRET_KEY = 'JWT_SECTRET_KEY';
class UserService {
  createToken(id: string) {
    return jwt.sign({ id }, JWT_SECTRET_KEY, {
      expiresIn: '7d'
    });
  }
  verifyToken(token: string) {
    try {
      const decode = jwt.verify(token, JWT_SECTRET_KEY);
      console.log(decode, 'decode');
    } catch (err) {
      console.error(err, 'jwt decode error');
    }
  }
  authorizeJWT({ name = '', id = '' }) {
    this.verifyToken(this.createToken(id));
  }
}
export default UserService;

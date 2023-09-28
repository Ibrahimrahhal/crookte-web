import jwtDecode from 'jwt-decode';

export default class TokenUtil {
  static decode(token) {
    return jwtDecode(token);
  }

  static saveToken(token) {
    localStorage.setItem('token', token);
  }

  static getToken() {
    return localStorage.getItem('token');
  }
}

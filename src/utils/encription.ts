import { hashSync, compare } from 'bcrypt';

export default class Encription {
  static encrypt(textToEncrypt: string) {
    return hashSync(textToEncrypt, Number.parseInt(process.env.SALT_ROUNDS));
  }

  static compare(encripted: string, originalText: string) {
    return compare(originalText, encripted);
  }
}

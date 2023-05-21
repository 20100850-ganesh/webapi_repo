import jwt from 'jsonwebtoken';

export default class TokenManager {
    constructor(secretKey) {
        this.secretKey = secretKey;
    }

    generate(payload) {
        return jwt.sign(payload, this.secretKey);
    }

    decode(token) {
        return jwt.verify(token, this.secretKey);
    }
}

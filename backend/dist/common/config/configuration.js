"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    jwt: {
        secret: process.env.AUTH_SECRET,
        expiresIn: '1d',
    },
});
//# sourceMappingURL=configuration.js.map
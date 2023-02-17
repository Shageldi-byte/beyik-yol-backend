"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editFileName = void 0;
const path_1 = require("path");
const crypto_1 = require("crypto");
const editFileName = (req, file, callback) => {
    const name = file.originalname.split('.')[0];
    const fileExtName = (0, path_1.extname)(file.originalname);
    const randomName = Array(32)
        .fill(null)
        .map(() => Math.round(Math.random() * 16).toString(16))
        .join('');
    callback(null, `${name}-${randomName}-${(0, crypto_1.randomUUID)().toString()}${fileExtName}`);
};
exports.editFileName = editFileName;
//# sourceMappingURL=file.helper.js.map
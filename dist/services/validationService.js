"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const check_height_and_width = (width, height) => {
    if (!Number.parseInt(width) || !Number.parseInt(height))
        return false;
    return true;
};
exports.default = check_height_and_width;

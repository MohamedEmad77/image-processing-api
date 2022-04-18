"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizeImage = exports.check_if_image_exist = void 0;
const fs = __importStar(require("fs"));
const sharp_1 = __importDefault(require("sharp"));
const check_if_image_exist = (filename, width, height, dir = 'assets/thumbs') => {
    let flag;
    flag = false;
    if (dir === 'assets/thumbs') {
        fs.readdirSync(dir).forEach((file) => {
            if (file === `${filename}_thumb_${width}_${height}.jpg`) {
                flag = true;
                return flag;
            }
        });
    }
    else if (dir === 'assets/full') {
        fs.readdirSync(dir).forEach((file) => {
            if (file === `${filename}.jpg`) {
                flag = true;
                return flag;
            }
        });
    }
    return flag;
};
exports.check_if_image_exist = check_if_image_exist;
const resizeImage = (filename, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    const image = yield (0, sharp_1.default)(`assets/full/${filename}.jpg`)
        .resize({
        width: width,
        height: height,
    })
        .toFile(`assets/thumbs/${filename}_thumb_${width}_${height}.jpg`);
    const imageInterface = {
        format: image.format,
        width: image.width,
        height: image.height,
        channels: image.channels,
        premultiplied: image.premultiplied,
        size: image.size,
    };
    return imageInterface;
});
exports.resizeImage = resizeImage;

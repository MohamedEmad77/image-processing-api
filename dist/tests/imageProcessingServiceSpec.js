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
Object.defineProperty(exports, "__esModule", { value: true });
const imageProcessingService = __importStar(require("../services/imageProcessingService"));
describe('testing check_if_image_exist function', () => {
    it('returns true as image exist', () => {
        const filename = 'fjord';
        const width = '50';
        const height = '50';
        expect(imageProcessingService.check_if_image_exist(filename, width, height))
            .toBeTrue;
    });
    it('returns false as image does not exist', () => {
        const filename = 'fjord';
        const width = '5000';
        const height = '5000';
        expect(imageProcessingService.check_if_image_exist(filename, width, height))
            .toBeFalse;
    });
    it('returns false as image does not exist', () => {
        const filename = 'wrongname';
        const width = '5000';
        const height = '5000';
        expect(imageProcessingService.check_if_image_exist(filename, width, height))
            .toBeFalse;
    });
});
describe('testing resize function', () => {
    it('resizes image with 700 width and 450 height', () => __awaiter(void 0, void 0, void 0, function* () {
        const filename = 'fjord';
        const width = 700;
        const height = 450;
        const image = yield imageProcessingService.resizeImage(filename, width, height);
        expect(image.width).toEqual(700);
        expect(image.height).toEqual(450);
    }));
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validationService_1 = __importDefault(require("../services/validationService"));
describe('testing check_height_and_widtht function', () => {
    it('returns true if width and height are numbers', () => {
        const width = '50';
        const height = '50';
        expect((0, validationService_1.default)(width, height)).toBeTrue;
    });
    it('returns false if width is not number', () => {
        const width = 'text';
        const height = '50';
        expect((0, validationService_1.default)(width, height)).toBeFalse;
    });
    it('returns false if height is not number', () => {
        const width = '65';
        const height = 'test';
        expect((0, validationService_1.default)(width, height)).toBeFalse;
    });
    it('returns false if height and width are not numbers', () => {
        const width = 'string';
        const height = 'test';
        expect((0, validationService_1.default)(width, height)).toBeFalse;
    });
});

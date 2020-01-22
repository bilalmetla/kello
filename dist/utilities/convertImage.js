"use strict";
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
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const util_1 = __importDefault(require("util"));
const writeFilePromise = util_1.default.promisify(fs_1.default.writeFile);
class ConvertImage {
    //abc (){}
    convertbase64image(displayName, image) {
        return __awaiter(this, void 0, void 0, function* () {
            let base64String = image;
            let base64Image = base64String.split(';base64,').pop();
            let imageName = displayName.replace(' ', '') + '.png';
            let imagePath = path_1.default.join(__dirname, '../../public/products/images/') + imageName;
            let imageUrl = '/products/images/' + imageName;
            yield writeFilePromise(imagePath, base64Image, { encoding: 'base64' });
            return imageUrl;
        });
    }
}
exports.ConvertImage = ConvertImage;
//# sourceMappingURL=convertImage.js.map
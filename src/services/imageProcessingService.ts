import * as fs from 'fs';
import sharp from 'sharp';
import Image from '../interfaces/imageInterface';

export const check_if_image_exist = (
  filename: string,
  width: string,
  height: string,
  dir = 'assets/thumbs'
): boolean => {
  let flag: boolean;
  flag = false;

  if (dir === 'assets/thumbs') {
    fs.readdirSync(dir).forEach((file) => {
      if (file === `${filename}_thumb_${width}_${height}.jpg`) {
        flag = true;
        return flag;
      }
    });
  } else if (dir === 'assets/full') {
    fs.readdirSync(dir).forEach((file) => {
      if (file === `${filename}.jpg`) {
        flag = true;
        return flag;
      }
    });
  }

  return flag;
};

export const resizeImage = async (
  filename: string,
  width: number,
  height: number
) => {
  const image = await sharp(`assets/full/${filename}.jpg`)
    .resize({
      width: width,
      height: height,
    })
    .toFile(`assets/thumbs/${filename}_thumb_${width}_${height}.jpg`);
  const imageInterface: Image = {
    format: image.format,
    width: image.width,
    height: image.height,
    channels: image.channels,
    premultiplied: image.premultiplied,
    size: image.size,
  };
  return imageInterface;
};

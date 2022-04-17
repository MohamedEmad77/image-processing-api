import * as fs from 'fs';
import sharp from 'sharp';

export const check_if_image_exist = (
  filename: string,
  width: string,
  height: string
): boolean => {
  let flag: boolean;
  flag = false;
  fs.readdirSync('assets/thumbs').forEach((file) => {
    if (file === `${filename}_thumb_${width}_${height}.jpg`) {
      flag = true;
      return flag;
    }
  });

  return flag;
};

export const resizeImage = async (
  filename: string,
  width: number,
  height: number
) => {
  try {
    await sharp(`assets/full/${filename}.jpg`)
      .resize({
        width: width,
        height: height,
      })
      .toFile(`assets/thumbs/${filename}_thumb_${width}_${height}.jpg`);
  } catch (error) {
    return error;
  }
};

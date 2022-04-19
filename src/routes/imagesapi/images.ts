import express from 'express';
import * as imageProcessingService from '../../services/imageProcessingService';
import path from 'path';
import check_height_and_width from '../../services/validationService';

const images = express.Router();

images.get('/', (req, res): void => {
  let width: string;
  width = '';
  let height: string;
  height = '';
  let filename: string;
  filename = '';
  if (req.query.width) width = req.query.width as string;
  if (req.query.height) height = req.query.height as string;
  if (req.query.filename) filename = req.query.filename as string;
  if (imageProcessingService.check_if_image_exist(filename, width, height)) {
    const filepath = `assets/thumbs/${filename}_thumb_${width}_${height}.jpg`;
    res.sendFile(path.join(__dirname, '../../../' + filepath));
  } else {
    if (
      !imageProcessingService.check_if_image_exist(
        filename,
        width,
        height,
        'assets/full'
      ) ||
      !check_height_and_width(width, height)
    ) {
      res.send('Error occured please check parameters');
      return;
    }
    const resizeAndRender = async () => {
      await imageProcessingService.resizeImage(
        filename,
        Number.parseInt(width),
        Number.parseInt(height)
      );

      const filepath = `assets/thumbs/${filename}_thumb_${width}_${height}.jpg`;
      res.sendFile(path.join(__dirname, '../../../' + filepath));
    };
    resizeAndRender();
  }
});

export default images;

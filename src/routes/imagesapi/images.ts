import express from 'express';
import * as imageProcessingService from '../../services/imageProcessingService';
import path from 'path';

const images = express.Router();

images.get('/', (req, res) => {
  let width = '';
  let height = '';
  let filename = '';
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
      )
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

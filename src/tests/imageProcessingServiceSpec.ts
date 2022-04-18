import * as imageProcessingService from '../services/imageProcessingService';
import Image from '../interfaces/imageInterface';

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
  it('resizes image with 700 width and 450 height', async () => {
    const filename = 'fjord';
    const width = 700;
    const height = 450;

    const image: Image = await imageProcessingService.resizeImage(
      filename,
      width,
      height
    );
    expect(image.width).toEqual(700);
    expect(image.height).toEqual(450);
  });
});

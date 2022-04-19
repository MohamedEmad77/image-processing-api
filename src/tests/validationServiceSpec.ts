import check_height_and_width from '../services/validationService';

describe('testing check_height_and_widtht function', () => {
  it('returns true if width and height are numbers', () => {
    const width = '50';
    const height = '50';
    expect(check_height_and_width(width, height)).toBeTrue;
  });

  it('returns false if width is not number', () => {
    const width = 'text';
    const height = '50';
    expect(check_height_and_width(width, height)).toBeFalse;
  });

  it('returns false if height is not number', () => {
    const width = '65';
    const height = 'test';
    expect(check_height_and_width(width, height)).toBeFalse;
  });

  it('returns false if height and width are not numbers', () => {
    const width = 'string';
    const height = 'test';
    expect(check_height_and_width(width, height)).toBeFalse;
  });
});

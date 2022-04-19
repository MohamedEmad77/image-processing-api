const check_height_and_width = (width: string, height: string): boolean => {
  if (!Number.parseInt(width) || !Number.parseInt(height)) return false;
  return true;
};

export default check_height_and_width;

const generateHex = (): string => {
  let color: string = '#';
  const alphaValue: string[] = '012345678ABCEDF'.split('');

  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * alphaValue.length);
    color += alphaValue[index];
  }

  return color;
};

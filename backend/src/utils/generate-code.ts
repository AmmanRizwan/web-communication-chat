const generateCode = (): string => {
  let code = '';
  const alphaValue: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');

  for (let i = 0; i < 12; i++) {
    const index = Math.floor(Math.random() * alphaValue.length);
    if (i % 4 === 0 && i !== 0) {
      code += '-';
    }

    code += alphaValue[index];
  }

  return code;
};

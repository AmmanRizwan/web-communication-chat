import bcrypt from "bcryptjs";

const hashPassword = (password: string): string => {
  const genSalt = bcrypt.genSaltSync(12);
  const hash = bcrypt.hashSync(password, genSalt);

  return hash;
}

const verifyPassword = (password: string, hashPassword: string): boolean => {
  const verify = bcrypt.compareSync(password, hashPassword);

  return verify;
}

export { 
  hashPassword,
  verifyPassword
}
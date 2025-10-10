import { Request, Response, NextFunction } from "express";
import { throwCustomError } from "../../utils/error";
import { User } from "../../modules";
import { verifyPassword } from "../../utils/bcrypt";
import { generateToken } from "../../utils/jwt";


const sigin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return throwCustomError(400, "Email and Password are required");
    }

    const user = await User.findOne({ where: { email: email.toLowerCase() }});

    if (!user) {
      return throwCustomError(400, "Cannot find the user! Please signup");
    }

    const isPasswordValid = verifyPassword(password, user.dataValues.password);
    
    if (!isPasswordValid) {
      return throwCustomError(400, "Invalid email and password");
    }

    const token = generateToken({ id: user.dataValues.id });

    res.status(200).json({
      message: "Login Successfully!",
      data: {
        token
      }
    })
  }
  catch (err) {
    next(err);
  }
}

export { sigin };
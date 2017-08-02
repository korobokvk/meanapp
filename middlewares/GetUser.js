import { getUserByToken } from "../services/UserServices";

export default async function(req,res,next) {
  const { token } = req;

  try {
    var user = getUserByToken(token);
  } catch({message}) {
    return next({
      status: 500,
      message
    });
  }

  req.user = user;
  next()
}

"use server";

import { IAuthResponse } from "@/models/general";
import { hash } from "bcryptjs";
import { createUsersTable, findUserByEmail, insertUser } from "./auth";

const hashPassword = async (password: string) => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};

export const createUser = async (
  _prevState: any,
  formData: FormData
): Promise<IAuthResponse> => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const repeatPassword = formData.get("repeatPassword") as string;

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7 ||
    !repeatPassword ||
    repeatPassword.trim().length < 7 ||
    repeatPassword.trim() !== password.trim()
  ) {
    return {
      message: "invalid input data",
      status: 500,
    };
  }
  try {
    await createUsersTable();
    const userExists = await findUserByEmail(email);
    if (userExists.length) {
      return {
        message: "User already exists",
        status: 500,
      };
    }
    const pass = await hashPassword(password);
    await insertUser(email, pass);
    return {
      message: "Sign in success",
      status: 200,
    };
  } catch (e) {
    return {
      message: "Auth failed",
      status: 500,
    };
  }
};

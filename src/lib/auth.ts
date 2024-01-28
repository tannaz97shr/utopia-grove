"use server";

import { sql } from "@vercel/postgres";

export const createUsersTable = async () => {
  await sql`CREATE TABLE IF NOT EXISTS users 
    (
        id             SERIAL,
        email          VARCHAR(255),
        password       VARCHAR(255),
        created_at     TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at     TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (id)
      );`;
};

export const insertUser = async (email: string, hashedPass: string) => {
  // console.log(
  //   "insert sql",
  //   `INSERT INTO users (email, password) VALUES
  // (${email}, ${hashedPass});`
  // );
  const res = await sql`INSERT INTO users (email, password) VALUES 
    (${email}, ${hashedPass});`;
  console.log("res", res);
};

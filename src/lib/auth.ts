"use server";

import { QueryResult, sql } from "@vercel/postgres";

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
  await sql`INSERT INTO users (email, password) VALUES 
    (${email}, ${hashedPass});`;
};

export const findUserByEmail = async (email: string) => {
  const response: Promise<
    QueryResult<any>
  > = sql`SELECT * FROM users WHERE email=${email};`;
  return (await response).rows;
};

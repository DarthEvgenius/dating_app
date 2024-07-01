// get profiles for find-match from the server

import { returnUsers } from "../API-mock.js"

// fetch amount of accounts
const AMOUNT = 4

// return an array of users' profiles
export async function fetchFindMatches() {
  const users = await returnUsers(AMOUNT)

  return users
}

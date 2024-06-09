// get profiles for find-match from the server

// fetch amount of accounts
const AMOUNT = 5

// return an array of users' profiles
export async function fetchFindMatches() {
  const users = await fetchUsersProfile(AMOUNT)

  return users
}

async function fetchUsersProfile() {

}

import axios from "axios";

export async function getAllUsers(url, data) {
  try {
    let users = await axios.get(url);
    return users;
  } catch (e) {
    console.log(e);
  }
}

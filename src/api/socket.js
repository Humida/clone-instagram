import axios from "axios";

export async function joinRoomChat(url, dataRoom) {
  try {
    let response = await axios.post(url, dataRoom);
    return response;
  } catch (error) {
    console.log(error);
  }
}

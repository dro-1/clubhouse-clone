const TOKEN_ENDPOINT = process.env.TOKEN_ENDPOINT;
const ROOM_ID = process.env.ROOM_ID;

export const getToken = async (userRole, userName) => {
  const role = userRole.toLowerCase();
  const user_id = userName;
  const room_id = ROOM_ID;
  let payload = {
    user_id,
    role,
    room_id,
  };
  let url = `${TOKEN_ENDPOINT}api/token`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  let resp = await response.json();
  return resp.token;
};

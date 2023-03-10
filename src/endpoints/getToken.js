const endPoint = process.env.REACT_APP_TOKEN_ENDPOINT;
const room_id = process.env.REACT_APP_ROOM_ID;

console.log(endPoint,room_id)


const getToken = async (user_id , user_role) => {
  console.log(user_id)
  console.log(user_role)
  const response = await fetch(`${endPoint}api/token`, { 
    method: "POST",
    body: JSON.stringify({
      user_id,
      role: user_role, //host, teacher, guest, student
      type: "app",
      room_id
    })
  });
  const { token } = await response.json();
  return token;
};

export default getToken

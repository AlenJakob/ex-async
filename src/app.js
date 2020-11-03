const axios = require("axios");
import "regenerator-runtime/runtime";
// ******************************
// function loadImageAsync(url) {
//   return new Promise((resolve, reject) => {
//     const img = new Image();
//     img.addEventListener("load", (ev) => resolve(img));
//     img.addEventListener("error", (reason) =>
//       reject(new Error(`Error failed to load ${url}`))
//     );
//     url.src = img;
//   });
// }
// const url = "https://api.thecatapi.com/v1/images/search";

// async function loadImg() {
//   try {
//     const image = await loadImageAsync(url);
//     document.querySelector("#img").appendChild(image);
//   } catch (err) {
//     console.log(Error(err));
//   }
// }
// loadImg();

// const getUsers = async (url) => {
//   const users = await axios
//     .get(url)
//     .then((res) => res.data)
//     .catch((err) => console.log(err));
//   return users.data;
// };

const url = "https://gorest.co.in/public-api/users";
const getUsers = async (url) => {
  try {
    const users = await axios.get("https://gorest.co.in/public-api/users");
    const userList = users.data.data;
    addToDom(userList);
  } catch (error) {
    console.log(Object.keys(error), error.message);
  }
};

const addToDom = (listOfUsers) => {
  const mainDiv = document.querySelector(".main");
  for (let {
    name,
    id,
    email,
    gender,
    status,
    updated_at,
    created_at,
  } of listOfUsers) {
    console.log(name);
    mainDiv.innerHTML += `
    <ul>
    <h5>${name}</h5>
    </ul>
    `;
  }
};

getUsers(url);

// console.log("step 1");
// console.log("step 2");

// async function add() {
//   const data = await "step 3";
//   console.log(data);
// }
// add();

// console.log("step 4");

// old method

// fetch("https://dummyjson.com/users")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data.users);
//   })
//   .catch((error) => {
//     console.log(`Internal server error ${error}`);
//   });

const fetchData = async () => {
  try {
    const respone = await fetch("https://dummyjson.com/users");
    const data = await respone.json();
    console.log(data.users[0].address.coordinates.lat);
  } catch (error) {
    console.log(`Fetch data error ${error}`);
  }
};

fetchData();

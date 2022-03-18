/** @format */

const postList = [
  { name: "Post 1", author: "Writer 1" },
  { name: "Post 2", author: "Writer 2" },
  { name: "Post 3", author: "Writer 3" },
];

const getPost = () => {
  postList.map((value) => {
    console.log(value);
  });
};

const addlist = (value, isSucces) => {
  return new Promise((resolve, reject) => {
    if (isSucces) {
      postList.push(value);
      resolve("Eklendi");
    } else {
      reject("Hata");
    }
  });
};

async function proceedlist() {
  try {
    await addlist({ name: "Post 4", author: "Writer 4" }, true);
    console.log("yeni Postlar");
    getPost();
  } catch (error) {
    console.log("errors");
  }
}
getPost();
proceedlist();

let startingId = JSON.parse(localStorage.getItem("startingId")) || 0;
var currId;
let postsData = JSON.parse(localStorage.getItem("postsData")) || {};
const samplePosts = document.getElementsByClassName("sample-posts")[0];
const editDialog = document.getElementsByClassName("edit-dialog")[0];
const deleteDialog = document.getElementsByClassName("delete-dialog")[0];
const deleteOkBtn = document.getElementsByClassName("deleteOkBtn")[0];

export function saveAddingPost(postTitle, postDate, postSummary) {
  let contentInput = `${postTitle}-${postDate}-${postSummary}`;
  let postPack = document.createElement("li");
  postPack.id = startingId;

  let post = document.createElement("p");
  post.innerText = contentInput;

  let editPack = document.createElement("button");
  editPack.classList.add("edit-button");
  editPack.textContent = "Edit";

  let deletePack = document.createElement("button");
  deletePack.classList.add("delete-button");
  deletePack.textContent = "Delete";

  postPack.append(post, editPack, deletePack);

  samplePosts.append(postPack);

  editPack.addEventListener("click", () => {
    editDialog.show();
    currId = postPack.id;
  });

  deletePack.addEventListener("click", () => {
    deleteDialog.show();
    currId = postPack.id;
  });

  postsData[postPack.id] = {
    postTitle: postTitle,
    postDate: postDate,
    postSummary: postSummary,
  };
  localStorage.setItem("postsData", JSON.stringify(postsData));
  startingId += 1;
  localStorage.setItem("startingId", JSON.stringify(startingId));
}

export function linkItem(postPack) {
  postPack.querySelector("button.edit-button").addEventListener("click", () => {
    editDialog.show();
    currId = postPack.id;
  });

  postPack
    .querySelector("button.delete-button")
    .addEventListener("click", () => {
      deleteDialog.show();
      currId = postPack.id;
    });
}

export function saveEditingPost(postTitle, postDate, postSummary) {
  let post = document.getElementById(`${currId}`).querySelector("p");
  let contentInput = `${postTitle}-${postDate}-${postSummary}`;
  post.innerText = contentInput;
  postsData[currId] = {
    postTitle: postTitle,
    postDate: postDate,
    postSummary: postSummary,
  };
  localStorage.setItem("postsData", JSON.stringify(postsData));
}

export function deleteItem() {
  deleteOkBtn.addEventListener("click", () => {
    samplePosts.removeChild(document.getElementById(`${currId}`));
    delete postsData[currId];
    localStorage.setItem("postsData", JSON.stringify(postsData));
    localStorage.removeItem("startingId");
  });
}

for (let postId in postsData) {
  let postPack = document.createElement("li");
  postPack.id = postId;

  let post = document.createElement("p");
  post.innerText = `${postsData[postId].postTitle}-${postsData[postId].postDate}-${postsData[postId].postSummary}`;

  let editPack = document.createElement("button");
  editPack.classList.add("edit-button");
  editPack.textContent = "Edit";

  let deletePack = document.createElement("button");
  deletePack.classList.add("delete-button");
  deletePack.textContent = "Delete";

  postPack.append(post, editPack, deletePack);

  samplePosts.append(postPack);

  linkItem(postPack);
  console.log(postId);
  console.log(startingId);
}

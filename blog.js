import { saveAddingPost, saveEditingPost, deleteItem } from "./crudmodule.js";

const addButton = document.getElementsByClassName("add-button")[0];
const addSaveButton = document.getElementsByClassName("save-add-button")[0];
const editSaveButton = document.getElementsByClassName("edit-save-button")[0];

const addDialog = document.getElementsByClassName("add-dialog")[0];
const editDialog = document.getElementsByClassName("edit-dialog")[0];

addButton.addEventListener("click", () => {
  addDialog.show();
});

addSaveButton.addEventListener("click", () => {
  let postTitle = DOMPurify.sanitize(
    document.getElementById("add-title").value
  );
  let postDate = DOMPurify.sanitize(document.getElementById("add-date").value);
  let postSummary = DOMPurify.sanitize(
    document.getElementById("add-summary").value
  );

  postTitle === "" || postDate === "" || postSummary === ""
    ? addDialog.close()
    : saveAddingPost(postTitle, postDate, postSummary);
});

editSaveButton.addEventListener("click", () => {
  let postTitle = DOMPurify.sanitize(
    document.getElementById("edit-title").value
  );
  const postDate = DOMPurify.sanitize(
    document.getElementById("edit-date").value
  );
  let postSummary = DOMPurify.sanitize(
    document.getElementById("edit-summary").value
  );

  postTitle === "" || postDate === "" || postSummary === ""
    ? editDialog.close()
    : saveEditingPost(postTitle, postDate, postSummary);
});

deleteItem();

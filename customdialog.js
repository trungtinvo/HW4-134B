const alertButton = document.getElementById("alert-button");
const alertDialog = document.getElementById("alert-dialog");
const okAlertButton = document.getElementById("ok-alert-button");

const confirmButton = document.getElementById("confirm-button");
const confirmDialog = document.getElementById("confirm-dialog");
const okConfirmButton = document.getElementById("ok-confirm-button");
const cancelConfirmButton = document.getElementById("cancel-confirm-button");
const confirmOutput = document.getElementById("confirm-check");

const promptButton = document.getElementById("prompt-button");
const promptDialog = document.getElementById("promt-dialog");
const okPromptButton = document.getElementById("ok-prompt-button");
const cancelPromptButton = document.getElementById("cancel-prompt-button");
const promtOutput = document.getElementById("promt-check");

// alert functionality
function showAlertDialog() {
  alertDialog.showModal();
}
function closeAlertDialog() {
  alertDialog.close();
}

// confirm functionality
function showConfirmDialog() {
  confirmDialog.showModal();
}

function returnOKConfirm() {
  confirmOutput.textContent = "Confirm result: true";
  confirmDialog.close();
}

function returnCancelConfirm() {
  confirmOutput.textContent = "Confirm result: false";
  confirmDialog.close();
}

// prompt functionality
function showPromtDialog() {
  promptDialog.showModal();
}

function returnOKPrompt() {
  const input = promptInput.value;
  let clean = DOMPurify.sanitize(input);
  clean === null || clean === ""
    ? (promtOutput.innerHTML = "User didn’t enter anything.")
    : (promtOutput.innerHTML = `Promt result: ${clean}`);
  promptDialog.close();
}

function returnCancelPrompt() {
  promtOutput.innerHTML = "User didn’t enter anything.";
  promptDialog.close();
}

alertButton.addEventListener("click", showAlertDialog);
okAlertButton.addEventListener("click", closeAlertDialog);

confirmButton.addEventListener("click", showConfirmDialog);
okConfirmButton.addEventListener("click", returnOKConfirm);
cancelConfirmButton.addEventListener("click", returnCancelConfirm);

promptButton.addEventListener("click", showPromtDialog);
okPromptButton.addEventListener("click", returnOKPrompt);
cancelPromptButton.addEventListener("click", returnCancelPrompt);

// make all textareas auto-resizable

const textareas = document.getElementsByTagName("textarea");

for (let i = 0; i < textareas.length; i++) {
  textareas[i].setAttribute("style", "height:" + (textareas[i].scrollHeight) + "px;overflow-y:hidden;");
  textareas[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + "px";
}

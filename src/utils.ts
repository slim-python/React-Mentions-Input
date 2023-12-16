// @ts-nocheck

export function setCaretToEnd(element) {
  element.focus();
  const range = document.createRange();
  const selection = window.getSelection();
  range.selectNodeContents(element);
  range.collapse(false);
  selection.removeAllRanges();
  selection.addRange(range);
}

export const UsersList = [
  {
    id: 235075,
    name: "Nitin P",
    userAvatar:
      "https://cdn.pixabay.com/photo/2018/03/27/21/43/startup-3267505_640.jpg",
  },
  {
    id: 473839,
    name: "Nitin P",
    userAvatar:
      "https://cdn.pixabay.com/photo/2018/03/27/21/43/startup-3267505_640.jpg",
  },
  {
    id: 2360589,
    name: "Nitin Pahwa",
    userAvatar:
      "https://cdn.pixabay.com/photo/2018/03/27/21/43/startup-3267505_640.jpg",
  },
  {
    id: 713607,
    name: "Nitin Pal",
    userAvatar:
      "https://cdn.pixabay.com/photo/2018/03/27/21/43/startup-3267505_640.jpg",
  },
  {
    id: 1496449,
    name: "Nitin Pandey",
    userAvatar:
      "https://cdn.pixabay.com/photo/2018/03/27/21/43/startup-3267505_640.jpg",
  },
];

export const createSpanDiv = (name, main_text_area) => {
  var spanElement = document.createElement("span");
  spanElement.textContent = name;
  spanElement.classList = "text-indigo-500 font-bold mentioned-user";
  spanElement.setAttribute("contenteditable", "false");
  main_text_area.appendChild(spanElement);
};

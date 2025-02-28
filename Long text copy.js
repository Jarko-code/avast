// Long text function
const longTextCopy = (elements) => {
  [...elements].forEach((item) => {
    item.textContent =
      "I love candy canes brownie croissant cotton candy. Biscuit I love I love dessert pudding. I love candy canes brownie candy.";
  });
};

// Tags, feel free use own tags
const tags = ["p", "span", "h1", "h2", "h3", "h4", "h5", "h6"];

// Update text content
tags.forEach((tag) => {
  longTextCopy(document.getElementsByTagName(tag));
});

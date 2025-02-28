let direction = document.documentElement.getAttribute("dir");

const updateClass = (elements, oldClass, newClass) => {
  [...elements].forEach((item) => {
    item.classList.add(newClass);
    item.classList.remove(oldClass);
  });
};

if (direction === "rtl") {
  const mlClasses = [
    "ml-4",
    "ml-6",
    "ml-8",
    "ml-10",
    "ml-12",
    "ml-14",
    "ml-16",
    "pr-8",
  ];
  const mrClasses = [
    "mr-4",
    "mr-6",
    "mr-8",
    "mr-10",
    "mr-12",
    "mr-14",
    "mr-16",
    "pl-8",
  ];

  // Update text alignment
  updateClass(
    document.getElementsByClassName("text-left"),
    "text-left",
    "text-right"
  );

  // Update margin-left to margin-right
  mlClasses.forEach((mlClass, index) => {
    updateClass(
      document.getElementsByClassName(mlClass),
      mlClass,
      mrClasses[index]
    );
  });
}

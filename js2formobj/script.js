const formEl = document.querySelector("form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const userInfo = {};

  const inputElements = formEl.childNodes;

  inputElements.forEach((node) => {
    // console.log(node);
    if (node.name != null && node.name != "") {
      console.log(node.name, node.value);
      userInfo[node.name] = node.value;
    }
  });
  console.log(inputElements);
  //   userInfo.name = document.querySelector("input").value;
  console.log(userInfo);
});

// const obj = {};
// obj.egenskap = 10;
// obj["entill"] = 99;

// const text = "entredje";
// obj[text] = 8787;

// console.log(obj);

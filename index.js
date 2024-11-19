const inputs = document.getElementById("inputs");
const firstEle = inputs.children[0];
const secondEle = inputs.children[1];
const thirdEle = inputs.children[2];
const fourthEle = inputs.children[3];
const verifyBtn = document.getElementById("btn");
console.log(document.getElementById("inputs").children);

window.onload = function () {
  firstEle.focus();

  firstEle.addEventListener("input", () => {
    if (firstEle.value !== "") {
      secondEle.focus();
    }
  });

  secondEle.addEventListener("input", () => {
    if (secondEle.value !== "") {
      thirdEle.focus();
    }
  });

  thirdEle.addEventListener("input", () => {
    if (thirdEle.value !== "") {
      fourthEle.focus();
    }
  });

  fourthEle.addEventListener("input", () => {
    if (fourthEle.value !== "") {
      disableInputs();
      setTimeout(() => {
        verifyBtn.click();
      }, 100);
    }
  });

  verifyBtn.addEventListener("click", () => {
    alert("verified successfully");
  });

  function disableInputs() {
    firstEle.disabled = true;
    secondEle.disabled = true;
    thirdEle.disabled = true;
    fourthEle.disabled = true;
  }
};

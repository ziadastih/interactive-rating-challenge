const submitBtn = document.querySelector(".submit-btn");
const numbers = document.querySelectorAll(".number");
const response = document.querySelector(".response");
const responseContainer = document.querySelector(".response-container");
numbers.forEach(function (number) {
  number.addEventListener("click", function (e) {
    numbers.forEach(function (item) {
      if (item !== number) {
        item.classList.remove("selected");
      }
      number.classList.add("selected");
    });
    submitBtn.addEventListener("click", function () {
      responseContainer.classList.add("response-display");
      if (number.classList.contains("selected")) {
        response.textContent = `you selected ${number.textContent} out of 5 `;
      }
    });
  });
});

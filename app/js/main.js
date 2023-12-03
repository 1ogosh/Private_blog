//Dropdown

function dropdown() {
  const selectItem = document.querySelectorAll(".navbar_def_dropdown_btn");

  selectItem.forEach((item, i) => {
    item.addEventListener("click", (event) => {
      const selectBody = document.querySelectorAll(".navbar_def_dropdown_content");

      selectBody[i].classList.toggle("show");
      item.classList.toggle("shadow");
    });
  });
}

dropdown();



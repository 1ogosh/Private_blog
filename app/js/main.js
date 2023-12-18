//Dropdown

function dropdown() {
  const selectItem = document.querySelectorAll(".navbar_def_dropdown_btn");
  const selectBtn = document.querySelectorAll(".navbar_def_dropdown_btn_img");


  selectItem.forEach((item, i) => {
    item.addEventListener("click", (event) => {
      const selectBody = document.querySelectorAll(".navbar_def_dropdown_content");


      selectBtn[i].classList.toggle("rotate");
      selectBody[i].classList.toggle("show");
      item.classList.toggle("shadow");
    });
  });

}

dropdown();



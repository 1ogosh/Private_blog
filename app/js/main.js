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


///File selection

window.URL = window.URL || window.webkitURL;

let fileSelect = document.getElementsByClassName("text-field__aicon_1"),
  fileElem = document.getElementById("fileElem"),
  fileList = document.getElementById("fileList");

fileSelect.addEventListener("click", function (e) {
  if (fileElem) {
    fileElem.click();
  }
  e.preventDefault();
},
  false,
);

function handleFiles(files) {
  if(!files.lengh) {
    fileList.innerHTML = "<p>No files selected!</p>";
  }else{
    let list = document.createElement("ul");
    for (let i = 0; i < file.length; i++){
      let li = document.createElement("li");
      list.appendChild(li);
      
      let img = document.createElement("img");
      img.src = window.URL.createObjectURL(files[i]);
      img.height = 60;
      img.onload = function() {
        window.URL.revokeObjectURL(this.src);
      };
      li.appendChild(img);
      let info = document.createElement("span");
          info.innerHTML = files[i].name + ": " + files[i].size + " bytes";
          li.appendChild(info);
    }
  }
}




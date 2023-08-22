function dropDown() {
        document.querySelector('navbar_def_dropdown_btn').classList.toggle("show");
}

window.onclick = function (event) {
        if (!event.target.matches('.navbar_def_dropdown_btn')) {
                let dropdowns = document.getElementsByClassName("navbar_def_dropdown_btn_content");
                let i;
                for (i = 0; i < dropdowns.length; i++) {
                        let openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains('show')) {
                                openDropdown.classList.remove('show');
                        }
                }
        }
}

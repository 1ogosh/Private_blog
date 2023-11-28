function dropDown() {
        document.getElementById('Dropdown').classList.toggle('hide');
}

window.onclick = function (event) {
        if (!event.target.matches('navbar_def_dropdown_btn')) {
                let dropdowns = document.getElementsByClassName('navbar_def_dropdown_content');
                let i;
                for (i = 0; i < dropdowns.length; i++) {
                        let openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains('hide')) {
                                openDropdown.classList.remove('hide');
                        }
                }
        }
}


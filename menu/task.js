let menuLink = document.querySelectorAll("ul.menu.menu_main > li.menu__item > a.menu__link");
console.log(menuLink);

menuLink.forEach(e => {
    e.onclick = () => {
        let menuActive = document.querySelectorAll("ul.menu.menu_main > li.menu__item > ul.menu.menu_sub.menu_active");
        console.log(menuActive);
        // let a = e.closest(".menu__item").querySelector("ul.menu.menu_sub");// главная кнопка со ссылками
        // console.log(a);

        if (e.closest(".menu__item").querySelector("ul.menu.menu_sub") !== null) {            
            if (menuActive.length !== 0 && menuActive[0].closest(".menu__item") !== e.closest(".menu__item")) {
                menuActive[0].classList.remove("menu_active");
            }
            e.closest(".menu__item").querySelector("ul.menu.menu_sub").classList.toggle("menu_active");
            let sd = e.closest(".menu__item").querySelector("ul.menu.menu_sub");
            console.log(sd);

            return false;
        }
    }
});

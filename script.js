document.addEventListener("DOMContentLoaded", () => {

    const tabs = document.querySelectorAll(".hero-tab");
    const hoverImage = document.querySelector(".hero-hover-image");
    const heroTabs = document.querySelector(".hero-tabs");

    if (!tabs.length || !hoverImage) {
        console.warn("Hero tabs или hero-hover-image не найдены");
        return;
    }

    // Показать изображение выбранной вкладки
    function showImage(tab) {

        const image = tab.dataset.image;

        if (!image) return;

        // Активная вкладка
        tabs.forEach(item => {
            item.classList.remove("active");
        });

        tab.classList.add("active");

        // Меняем изображение
        hoverImage.style.backgroundImage = `url("${image}")`;

        // Показываем изображение
        hoverImage.classList.add("active");
    }


    // Вернуться к видео
    function hideImage() {

        hoverImage.classList.remove("active");

        tabs.forEach(item => {
            item.classList.remove("active");
        });

    }


    // Наведение на вкладки
    tabs.forEach(tab => {

        tab.addEventListener("mouseenter", () => {
            showImage(tab);
        });


        // Для телефона
        tab.addEventListener("click", () => {
            showImage(tab);
        });

    });


    // Когда мышь ушла со всех вкладок
    if (heroTabs) {

        heroTabs.addEventListener("mouseleave", () => {
            hideImage();
        });

    }


    // Предварительно загружаем все фотографии
    tabs.forEach(tab => {

        const image = tab.dataset.image;

        if (!image) return;

        const preload = new Image();
        preload.src = image;

    });

});

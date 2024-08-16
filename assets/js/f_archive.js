(function() {
    "use strict";

    /**
     * Gallery Navigation
     */
    const galleryImages = [
        { src: 'assets/img/archive/1.jpg', description: 'Description for image 1' },
        { src: 'assets/img/archive/2.jpg', description: 'Description for image 2' },
        { src: 'assets/img/archive/3.jpg', description: 'Description for image 3' },
        { src: 'assets/img/archive/4.jpg', description: 'Description for image 4' },
        { src: 'assets/img/archive/5.jpg', description: 'Description for image 5' },
        { src: 'assets/img/archive/6.jpg', description: 'Description for image 6' },
        { src: 'assets/img/archive/7.jpg', description: 'Description for image 7' },
        { src: 'assets/img/archive/8.jpg', description: 'Description for image 8' },
        { src: 'assets/img/archive/9.jpg', description: 'Description for image 9' },
        { src: 'assets/img/archive/10.jpg', description: 'Description for image 10' },
        { src: 'assets/img/archive/11.jpg', description: 'Description for image 11' },
        { src: 'assets/img/archive/12.jpg', description: 'Description for image 12' },
        { src: 'assets/img/archive/13.jpg', description: 'Description for image 13' },
        { src: 'assets/img/archive/14.jpg', description: 'Description for image 14' },
        { src: 'assets/img/archive/15.jpg', description: 'Description for image 15' },
        { src: 'assets/img/archive/16.jpg', description: 'Description for image 16' },
        { src: 'assets/img/archive/17.jpg', description: 'Description for image 17' },
        { src: 'assets/img/archive/18.jpg', description: 'Description for image 18' },
        { src: 'assets/img/archive/19.jpg', description: 'Description for image 19' },
        { src: 'assets/img/archive/20.jpg', description: 'Description for image 20' },
        { src: 'assets/img/archive/21.jpg', description: 'Description for image 21' },
        { src: 'assets/img/archive/22.jpg', description: 'Description for image 22' },
        { src: 'assets/img/archive/23.jpg', description: 'Description for image 23' },
        { src: 'assets/img/archive/24.jpg', description: 'Description for image 24' },
        { src: 'assets/img/archive/25.jpg', description: 'Description for image 25' },
        { src: 'assets/img/archive/26.jpg', description: 'Description for image 26' },
        { src: 'assets/img/archive/27.jpg', description: 'Description for image 27' },
        { src: 'assets/img/archive/28.jpg', description: 'Description for image 28' },
        { src: 'assets/img/archive/29.jpg', description: 'Description for image 29' },
        { src: 'assets/img/archive/30.jpg', description: 'Description for image 30' },
        { src: 'assets/img/archive/31.jpg', description: 'Description for image 31' },
        { src: 'assets/img/archive/32.jpg', description: 'Description for image 32' },
        { src: 'assets/img/archive/33.jpg', description: 'Description for image 33' },
        { src: 'assets/img/archive/34.jpg', description: 'Description for image 34' },
        { src: 'assets/img/archive/35.jpg', description: 'Description for image 35' },
        { src: 'assets/img/archive/36.jpg', description: 'Description for image 36' },
        { src: 'assets/img/archive/37.jpg', description: 'Description for image 37' },
        { src: 'assets/img/archive/38.jpg', description: 'Description for image 38' },
        { src: 'assets/img/archive/39.jpg', description: 'Description for image 39' },
        { src: 'assets/img/archive/40.jpg', description: 'Description for image 40' },
        { src: 'assets/img/archive/41.jpg', description: 'Description for image 41' },
        { src: 'assets/img/archive/42.jpg', description: 'Description for image 42' },
        { src: 'assets/img/archive/43.jpg', description: 'Description for image 43' },
        { src: 'assets/img/archive/44.jpg', description: 'Description for image 44' },
        { src: 'assets/img/archive/45.jpg', description: 'Description for image 45' },
        { src: 'assets/img/archive/46.jpg', description: 'Description for image 46' },
        { src: 'assets/img/archive/47.jpg', description: 'Description for image 47' },
        { src: 'assets/img/archive/48.jpg', description: 'Description for image 48' },
        { src: 'assets/img/archive/49.jpg', description: 'Description for image 49' },
        { src: 'assets/img/archive/50.jpg', description: 'Description for image 50' },
        { src: 'assets/img/archive/51.jpg', description: 'Description for image 51' },
        { src: 'assets/img/archive/52.jpg', description: 'Description for image 52' },
        { src: 'assets/img/archive/53.jpg', description: 'Description for image 53' },
        { src: 'assets/img/archive/54.jpg', description: 'Description for image 54' },

        // 추가 이미지가 있을 경우 여기에 추가

    ];

    let currentIndex = 0;

    function updateGallery() {
        const gallery = document.querySelector('#gallery img');
        const description = document.querySelector('#gallery p');
        gallery.src = galleryImages[currentIndex].src;
        description.textContent = galleryImages[currentIndex].description;
    }

    document.querySelector('#prev').addEventListener('click', function() {
        currentIndex = (currentIndex === 0) ? galleryImages.length - 1 : currentIndex - 1;
        updateGallery();
    });

    document.querySelector('#next').addEventListener('click', function() {
        currentIndex = (currentIndex === galleryImages.length - 1) ? 0 : currentIndex + 1;
        updateGallery();
    });


    /**
     * Mobile nav toggle
     */
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

    function mobileNavToogle() {
        document.querySelector('body').classList.toggle('mobile-nav-active');
        mobileNavToggleBtn.classList.toggle('bi-list');
        mobileNavToggleBtn.classList.toggle('bi-x');
    }
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
        navmenu.addEventListener('click', () => {
            if (document.querySelector('.mobile-nav-active')) {
                mobileNavToogle();
            }
        });

    });

    /**
     * Preloader (optional, if needed for this page)
     */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.remove();
        });
    }

    /**
     * Scroll top button
     */
    let scrollTop = document.querySelector('.scroll-top');

    function toggleScrollTop() {
        if (scrollTop) {
            window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
        }
    }
    scrollTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);

    /**
     * Animation on scroll initialization (if using AOS on this page)
     */
    function aosInit() {
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }
    window.addEventListener('load', aosInit);

    // 초기화 함수 호출
    updateGallery();


    function navmenuScrollspy() {
        navmenulinks.forEach(navmenulink => {
            if (!navmenulink.hash) return;
            let section = document.querySelector(navmenulink.hash);
            if (!section) return;
            let position = window.scrollY + 200;
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
                navmenulink.classList.add('active');
            } else {
                navmenulink.classList.remove('active');
            }
        })
    }
    window.addEventListener('load', navmenuScrollspy);
    document.addEventListener('scroll', navmenuScrollspy);


})();
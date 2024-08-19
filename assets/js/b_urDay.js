(function() {

    "use strict";

    document.addEventListener("DOMContentLoaded", function() {
        loadQuotes();
    });

    function loadQuotes() {
        // Fetch quotes from JSON file
        fetch('assets/data/quotes.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                const today = new Date().toISOString().split('T')[0]; // Current date in YYYY-MM-DD format
                const storedDate = localStorage.getItem('quoteDate');
                const storedQuote = localStorage.getItem('quoteText');

                // Check if the stored quote is for today
                if (storedDate === today && storedQuote) {
                    displayQuote(storedQuote);
                } else {
                    // Choose a new random quote if there's no stored quote or the date has changed
                    const randomIndex = Math.floor(Math.random() * data.quotes.length);
                    const newQuote = data.quotes[randomIndex];

                    // Store new quote and date in localStorage
                    localStorage.setItem('quoteDate', today);
                    localStorage.setItem('quoteText', newQuote);

                    displayQuote(newQuote);
                }
            })
            .catch(error => {
                console.error('Error loading quotes:', error);
            });
    }

    function displayQuote(quote) {
        const quoteElement = document.getElementById('quote');
        quoteElement.textContent = quote;
    }


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

    function navmenuScrollspy() {
        // Define navmenulinks here
        const navmenulinks = document.querySelectorAll('#navmenu a');

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
        });
    }
    window.addEventListener('load', navmenuScrollspy);
    document.addEventListener('scroll', navmenuScrollspy);

})();
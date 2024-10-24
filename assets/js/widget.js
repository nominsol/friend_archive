(function() {
    "use strict";

    function displayQuote(quote) {
        const quoteElement = document.getElementById('quote');
        quoteElement.textContent = quote;
    }

    function loadQuoteFromLocalStorage() {
        const storedQuote = localStorage.getItem('quoteText');
        const storedDate = localStorage.getItem('quoteDate');
        const today = new Date().toISOString().split('T')[0]; // Current date in YYYY-MM-DD format

        // Check if the stored quote is for today
        if (storedDate === today && storedQuote) {
            displayQuote(storedQuote);
        } else {
            displayQuote("오늘의 명언을 찾을 수 없습니다."); // 기본 메시지
        }
    }

    // Load the quote when the widget loads
    document.addEventListener("DOMContentLoaded", function() {
        loadQuoteFromLocalStorage();
    });
})();
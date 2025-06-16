function updateReviewCounter(displayId = "counter") {
    // Get current count from localStorage or start at 0
    let count = localStorage.getItem("reviewCount");
  
    if (!count) {
      count = 0;
    }
  
    // Convert to number, increment, and save it back
    count = parseInt(count) + 1;
    localStorage.setItem("reviewCount", count);
  
    // Display the count on the page, if the element exists
    document.addEventListener("DOMContentLoaded", () => {
      const display = document.getElementById(displayId);
      if (display) {
        display.textContent = `the page has receveid ${count} review(s).`;
      }
    });
  }

  updateReviewCounter();

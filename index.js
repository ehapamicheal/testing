let hamburger = document.querySelector(".hamburger_menu");
let navMenu = document.querySelector(".mobile_navbar_container");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active")
});



// FOOTER YEAR
const currentYear = new Date().getFullYear();

document.getElementById("year").textContent = currentYear;





const faqs = document.querySelectorAll('.flex-container');

faqs.forEach(faq => {
  const content = faq.querySelector('.faq-content');
  const plusIcon = faq.querySelector('.plus-icon'); // Select the plus icon

  faq.addEventListener('click', function () {
    // Close any other open FAQ
    faqs.forEach(item => {
      if (item !== faq) {
        item.classList.remove('active');
        item.querySelector('.faq-content').style.height = '0';
        item.querySelector('.plus-icon').textContent = '+'; // Reset to plus sign
      }
    });

    // Toggle the clicked FAQ
    faq.classList.toggle('active');

    if (faq.classList.contains('active')) {
      const contentHeight = content.scrollHeight + 'px'; // Get full height of content
      content.style.height = contentHeight; // Apply full height
      plusIcon.textContent = '–'; // Change to minus sign
    } else {
      content.style.height = '0'; // Collapse back to 0 height
      plusIcon.textContent = '+'; // Reset to plus sign
    }
  });
});
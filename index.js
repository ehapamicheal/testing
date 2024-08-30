let hamburger = document.querySelector(".hamburger_menu");
let navMenu = document.querySelector(".mobile_navbar_container");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active")
});



// FOOTER YEAR
const currentYear = new Date().getFullYear();

document.getElementById("year").textContent = currentYear;





// Select all faq_question elements
const faqQuestions = document.querySelectorAll('.faq_question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        // Toggle the 'show' class on the corresponding faq_answer
        const answer = question.nextElementSibling;
        answer.classList.toggle('show');
        
        // Toggle between add and minus icons
        const addBtn = question.querySelector('.add_btn');
        const minusBtn = question.querySelector('.minus_btn');
        
        addBtn.classList.toggle('active');
        minusBtn.classList.toggle('active');

        if(addBtn.classList.contains('active')){
            addBtn.style.display = 'none';
            minusBtn.style.display = 'inline-block';
        } else {
            addBtn.style.display = 'inline-block';
            minusBtn.style.display = 'none';
        }
    });
});

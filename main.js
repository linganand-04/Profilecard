// Current date in Footer.. //
const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

// End //

// *************** Sticky For Profile Bio ******************** //

    function applyStickyStyle() {
      const bio = document.querySelectorAll(".profile-bio");

      bio.forEach((el) => {
        const style = window.getComputedStyle(el);
        if (style.position === 'sticky') {
          el.style.color = 'black';
          el.style.backgroundColor = 'white'
        }
      });
    }

    // Call the function for specific elements
    applyStickyStyle('.sticky');

// ******** End of Sticky For Profile Bio ************ //


//change navbar stcccle//
window.addEventListener("scroll", () => {
  document.querySelector(".main-nav")
    .classList.toggle("window_scroll", window.scrollY > 0);
});

window.addEventListener("scroll", () => {
  document.querySelector(".container-navbar-2")
    .classList.toggle("navbar-2-scroll", window.scrollY > 0);
});

window.addEventListener("scroll", () => {
  document.querySelector(".course")
    .classList.toggle("course-scroll", window.scrollY > 0);
});

window.addEventListener("scroll", () => {
  document.querySelectorAll(".list-items").forEach((item) => {
    item.classList.toggle("list-items-scroll", window.scrollY > 0);
  });
});


// *********************************

//show /hide faq answer//

const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");
    //change icon
    const icon = faq.querySelector(".faq__icon i");
    if (icon.className === "uil uil-plus") {
      icon.className = "uil uil-minus";
    } else {
      icon.className = "uil uil-plus";
    }
  });
});
//===========show /hide nav menu==========//
const menu = document.querySelector(".nav__menu ");
const menubtn = document.querySelector("#open-menu-btn ");
const closebtn = document.querySelector("#close-menu-btn ");

menubtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closebtn.style.display = "inline-block";
  menubtn.style.display = "none";
});

//=============close nav menu===========//

const closenav = () => {
  menu.style.display = "none";
  closebtn.style.display = "none";
  menubtn.style.display = "inline-block";
};
closebtn.addEventListener("click", closenav);

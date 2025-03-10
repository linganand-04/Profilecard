//change navbar stcccle//
window.addEventListener("scroll", () => {
    document
      .querySelector("nav")
      .classList.toggle("window_scroll", window.scrollY > 0);
  });
  
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
  
  // BATCH ONCLICK //

const batch = document.querySelector(".batch");
const batchYear = document.querySelector(".batch-year");
const body = document.querySelector("body")

batch.addEventListener("click", () => {
batchYear.classList.toggle("batch-child");
});

body.addEventListener("click", () => {
batchYear.classList.remove("batch-child");
},true);

// ************************ //


//===========show /hide nav menu==========//
const menu = document.querySelector(".nav__menu ");
const menubtn = document.querySelector("#open-menu-btn ");
const closebtn = document.querySelector("#close-menu-btn ");

menubtn.addEventListener("click", () => {
menu.style.display = "flex";
menu.style.flexDirection = "column";
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

//========== *** END *** ============//


// Current date in Footer.. //
const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

// End //
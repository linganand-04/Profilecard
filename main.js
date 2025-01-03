// Current date in Footer.. //
const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

// End //

//

const profile = document.querySelector("#students");
const webdevelopment = document.querySelector("#webdevelopment");
const fundamentals = document.querySelector("#funda");
const english = document.querySelector("#engTyp");

fetch("./demo.json")
  .then((res) => res.json())
  .then((data) => {
    const intern = data[0].intership;
    const web = data[0].webdevelopment;
    const funda = data[0].fundamentals;
    const eng = data[0].english;

    // **** INTERNSHIP **** //

    intern.forEach((post) => {
      profile.insertAdjacentHTML(
        "beforeend",
        `<div class="new-profile">
<div class="profile-bg">
  <img
    class="profile-banner"
    src="${post.profile_banner}"
    alt="Coding Img"
  />
  <img
    class="student-profile"
    src="${post.student_profile}"
    alt="Paramanand"
  />
</div>
<h3 class="heading-secondary">${post.heading_secondary}</h3>
<div class="content-box">
  <p class="skills">My skills</p>
  <p class="profile-skills">
    ${post.profile_skills}
  </p>
  <p class="profile-bio">Bio :</p>
  <p class="profile-content">
    ${post.profile_content}
  </p>
</div>
<div class="profile-link">
  <a
    class="btn btn-1"
    target="_blank"
    href="${post.profile_view}"
    >View Profile</a
  >
  <a
    class="btn btn-2"
    target="_blank"
    href="${post.profile_projects}"
    >View Projects</a
  >
</div>
</div>`
      );
    });

    // **** WEB DEVELOPMENT **** //

    web.forEach((post) => {
      webdevelopment.insertAdjacentHTML(
        "beforeend",
        `<div class="new-profile">
  <div class="profile-bg">
    <img
       class="profile-banner"
       src="${post.profile_banner}"
       alt="Coding Img"
     />
     <img
       class="student-profile"
       src="${post.student_profile}"
       alt="Paramanand"
     />
   </div>
   <h3 class="heading-secondary">${post.heading_secondary}</h3>
   <div class="content-box">
     <p class="skills">My skills</p>
     <p class="profile-skills">
       ${post.profile_skills}
     </p>
     <p class="profile-bio">Bio :</p>
     <p class="profile-content">
      ${post.profile_content}
     </p>
   </div>
   <div class="profile-link">
     <a
       class="btn btn-1"
       target="_blank"
       href="${post.profile_view}"
       >View Profile</a
     >
     <a
       class="btn btn-2"
       target="_blank"
       href="${post.profile_projects}"
       >View Projects</a
     >
   </div>
   </div>`
      );
    });

    // **** COMPUTER FUNDAMENTAL **** //

    funda.forEach((post) => {
      fundamentals.insertAdjacentHTML(
        "beforeend",
        `<div class="new-profile">
      <div class="profile-bg">
        <img
           class="profile-banner"
           src="${post.profile_banner}"
           alt="Coding Img"
         />
         <img
           class="student-profile"
           src="${post.student_profile}"
           alt="Paramanand"
         />
       </div>
       <h3 class="heading-secondary">${post.heading_secondary}</h3>
       <div class="content-box">
         <p class="skills">My skills</p>
         <p class="profile-skills">
           ${post.profile_skills}
         </p>
         <p class="profile-bio">Bio :</p>
         <p class="profile-content">
          ${post.profile_content}
         </p>
       </div>
       <div class="profile-link">
         <a
           class="btn btn-1"
           target="_blank"
           href="${post.profile_view}"
           >View Profile</a
         >
         <a
           class="btn btn-2"
           target="_blank"
           href="${post.profile_projects}"
           >View Projects</a
         >
       </div>
       </div>`
      );
    });

    // ***** SPOKEN ENGLISH ***** //

    eng.forEach((post) => {
      english.insertAdjacentHTML(
        "beforeend",
        `<div class="new-profile">
          <div class="profile-bg">
            <img
               class="profile-banner"
               src="${post.profile_banner}"
               alt="Coding Img"
             />
             <img
               class="student-profile"
               src="${post.student_profile}"
               alt="Paramanand"
             />
           </div>
           <h3 class="heading-secondary">${post.heading_secondary}</h3>
           <div class="content-box">
             <p class="skills">My skills</p>
             <p class="profile-skills">
               ${post.profile_skills}
             </p>
             <p class="profile-bio">Bio :</p>
             <p class="profile-content">
              ${post.profile_content}
             </p>
           </div>
           <div class="profile-link">
             <a
               class="btn btn-1"
               target="_blank"
               href="${post.profile_view}"
               >View Profile</a
             >
             <a
               class="btn btn-2"
               target="_blank"
               href="${post.profile_projects}"
               >View Projects</a
             >
           </div>
           </div>`
      );
    });
  });


// *************** Sticky For Profile Bio ******************** //

function applyStickyStyle() {
  const bio = document.querySelectorAll(".profile-bio");

  bio.forEach((el) => {
    const style = window.getComputedStyle(el);
    if (style.position === "sticky") {
      el.style.color = "black";
      el.style.backgroundColor = "white";
    }
  });
}

// Call the function for specific elements
applyStickyStyle(".sticky");

// ******** End of Sticky For Profile Bio ************ //

// BATCH ONCLICK //

const batch = document.querySelector(".batch");
const batchYear = document.querySelector(".batch-year");
const body = document.querySelector("#body")

batch.addEventListener("click", () => {
  batchYear.classList.toggle("batch-child");
});

body.addEventListener("click", () => {
  batchYear.classList.remove("batch-child");
},true);

// ************************ //

//change navbar stcccle//

window.addEventListener("scroll", () => {
  document
    .querySelector(".main-nav")
    .classList.toggle("window_scroll", window.scrollY > 0);
});

window.addEventListener("scroll", () => {
  document
    .querySelector(".container-navbar-2")
    .classList.toggle("navbar-2-scroll", window.scrollY > 0);
});

window.addEventListener("scroll", () => {
  document
    .querySelector(".course")
    .classList.toggle("course-scroll", window.scrollY > 0);
});

window.addEventListener("scroll", () => {
  document.querySelectorAll(".list-items").forEach((item) => {
    item.classList.toggle("list-items-scroll", window.scrollY > 0);
  });
});

window.addEventListener("scroll", () => {
  document.querySelectorAll(".list-items-icon").forEach((item) => {
    item.classList.toggle("list-items-icon-scroll", window.scrollY > 0);
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


<<<<<<< HEAD
// // Select all instances of the menu buttons and close buttons
// const menus = document.querySelectorAll('.nav');

// menus.forEach(menu => {
//   const menubtn = menu.querySelector('.open-menu-btn');
//   const closebtn = menu.querySelector('.close-menu-btn');
//   const menuContent = menu.querySelector('.nav__menu');

//   // When the open button is clicked, show the menu
//   menubtn.addEventListener('click', () => {
//     menuContent.classList.add('open');
//   });

//   // When the close button is clicked, hide the menu
//   closebtn.addEventListener('click', () => {
//     menuContent.classList.remove('open');
//   });
// });

=======
>>>>>>> 04d0794707fd7f8069c2d016fc4d2d9efddfa901

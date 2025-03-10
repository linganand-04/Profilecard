//change navbar stcccle//
window.addEventListener("scroll", () => {
    document
      .querySelector("nav")
      .classList.toggle("window_scroll", window.scrollY > 0);
  });
  // ======================================
  const clientTabItems = document.querySelectorAll(".client-item");
  const showDiv = document.querySelector(".show-info");
  
  clientTabItems.forEach((item) => {
    item.addEventListener("click", () => {
      showInfo(item);
    });
  });
  
  function showInfo(item) {
    showDiv.querySelector(".show-img img").src = item.querySelector(".client-thumbnail img").src;

    showDiv.querySelector(".show-name").innerHTML = item.querySelector(".client-name").innerHTML;
    
    showDiv.querySelector(".show-designation").innerHTML = item.querySelector(".client-designation").innerHTML;
    
    showDiv.querySelector(".show-description").innerHTML = item.querySelector(".client-description").innerHTML

    setActiveTab(item);
  }
  
  function setActiveTab(item) {
    clientTabItems.forEach((item) => {
      item.classList.remove("active"); // resetting active tab
    });
    item.classList.add("active");
  }
  
  showInfo(clientTabItems[0]); // default active tab
  
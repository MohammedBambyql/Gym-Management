const navItems = document.querySelectorAll(".nav-item");
const page =document.getElementById ("page");
const page_src=["./home.html","../views/view_view.htm","../views/newView.html","about.html","../plan/tableOfPlan.htm","../Home/about.html"]

navItems.forEach((navItem, i) => {
  navItem.addEventListener("click", () => {
    navItems.forEach((item, j) => {
      item.className = "nav-item";
      if(j == i){
    
        page.src=page_src[i];
    
    }

    });
    navItem.className = "nav-item active";
    
    // if(navItem.className= "nav-item active p1"){
    //     page.src="./home.html";
    // }else if (navItem.className = "nav-item active p2"){
    //   page.src="./404.html";
    // } else {
    //     page.src="./index.html"
  
    
  });
});

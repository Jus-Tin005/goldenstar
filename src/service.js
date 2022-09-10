// START HEADER SECTION
// Start nav bar
const getNavbartoggler = document.querySelector(".navbar-toggler"),

         getNavbartogglerIcon = document.querySelector(".navbar-toggler-icon");

         getNavbartogglerIcon.addEventListener('click', (e) => {
                getNavbartoggler.classList.toggle('change');
         });

// End nav bar
// END HEADER SECTION

// START FOOTER SECTION
var getYears = document.querySelector("#get-years"),
      getDate = new Date();
getYears.textContent = getDate.getUTCFullYear();

// END FOOTER SECTION
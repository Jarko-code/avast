// Select all navigation items and tab content elements
const navItems = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-item]');

// Add click event to each navigation item
navItems.forEach((item) => {
    item.addEventListener('click', () => {

        // Hide all content and remove active classes
        tabContents.forEach((content) => content.classList.remove('active-tab-content'));
        navItems.forEach((nav) => nav.classList.remove('active-tab'));

        // Set active class for the clicked tab and display the corresponding content
        item.classList.add('active-tab');
        document.getElementById(item.getAttribute('data-tab-target')).classList.add('active-tab-content')        

    });
});


//navigate to current tab on click 
let navTabs = document.querySelectorAll(".tabs span");

navTabs.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.currentTarget.scrollIntoView({
      behavior: "smooth",
    });
  });
});


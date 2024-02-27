//* Scroll Timeline Observer
//? Declaration
const observer = new IntersectionObserver((entries) => {
  // https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver ~ Intersection Observer uses "entries" and "entry" parameters to see if your screen is viewing each section.
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      // if it is intersection, target the classlist and add show..
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden"); // this tells it to only add things to elements with .hidden. without this, it'll try to add .show to everything it touches, very time consuming for the console.
//? Activation
hiddenElements.forEach((el) => observer.observe(el)); // el = elements ~ for each .hidden element, execute the function we made, and execute it using the elements we're observing.

// Observe(<element to be observed>): observe is used to tell intersectionObserver what to monitor, it's needed to work, kind of like an event listener, but the event isn't waiting for a click or button, but to see your screen. If you want to learn more here's the official doc, the example they give is very similar to how this code works. https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/observe


//? Dark Mode Script
const items = document.querySelectorAll('*'); // assigns all elements which exist to "items".

if(window.matchMedia("(prefers-color-scheme: dark)").matches) { // if the browser prefers dark-mode, the function which assigns dark mode will automatically run.
    addDarkMode();
}

function addDarkMode() {
    items.forEach((item) => { // Scroller row
        item.setAttribute('dark-mode', true);
    });
}

function removeDarkMode() {
  items.forEach((item) => {
    item.removeAttribute('dark-mode');
  });
}

const checkBox = document.getElementById("cb3-8"); // Assigns the checkbox from the HTML

checkBox.addEventListener('click', () => { // Added an event listener so that the if function knows to run and check if the box is checked every time it's clicked. Otherwise it only does it once because of the "onClick="addDarkMode()"" in the HTML.
    if (checkBox.checked == true) {
    addDarkMode();
  } else if (checkBox.checked == false) {
    removeDarkMode();
  };
})


//? Form handler
  //! Need to change some of the variable names since they clash.

function showvalues() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  alert("Congratulations.You are logged in as: " + username);
}
function showform() {
  document.getElementById("login").className = "shown";
  document.getElementById("hideform").className = "shown";
  // document.getElementById("showloginbutton").className = "hide";
}
function hideform() {
  document.getElementById("login").className = "hide";
  document.getElementById("hideform").className = "hide";
  document.getElementById("showloginbutton").className = "shown";
}

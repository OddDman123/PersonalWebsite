const scrollContainer = document.getElementById('scroll');
const mainFrame = document.getElementById('mainFrame');

const left_button = document.getElementById('left_button')
const right_button = document.getElementById('right_button')

// Event listners
scrollContainer.addEventListener('wheel', (event) => {

  event.preventDefault(); // Prevents default vertical page scrolling

  // Adjust scroll amount based on wheel direction (deltaY)
  scrollContainer.scrollBy({
    left: event.deltaY < 0 ? -90 : 90, // Scroll left or right
    behavior: 'smooth'
  });
});

left_button.addEventListener('mouseover', function(event) {
    scroll_icons(-1)
});

right_button.addEventListener('mouseover', function(event) {
    scroll_icons(1)
});

//Functions
function change_page(index) {
  if (!Number.isInteger(index))
    return; //If the page index isn't an int return

  switch (index) {
    case 0:
      mainFrame.src = 'AboutmePage/aboutme.html'
      break;
    default:
      mainFrame.src = 'blog.html'
  }
}



function scroll_icons(direction) {
  if (!Number.isInteger(direction))
    return; //If the page index isn't an int return

  scrollContainer.scrollBy({
    left: direction < 0 ? -90 : 90, // Scroll left or right
    behavior: 'smooth'
  });
}
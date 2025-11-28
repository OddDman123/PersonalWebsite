const scrollContainer = document.getElementById('scroll');
const mainFrame = document.getElementById('mainFrame');

scrollContainer.addEventListener('wheel', (event) => {

  event.preventDefault(); // Prevents default vertical page scrolling

  // Adjust scroll amount based on wheel direction (deltaY)
  scrollContainer.scrollBy({
    left: event.deltaY < 0 ? -90 : 90, // Scroll left or right
    behavior: 'smooth'
  });
});

function change_page(index) {
  if (!Number.isInteger(index))
    return; //If the page index isn't an int return

  switch (index) {
    case 0:
      mainFrame.src = 'https://github.com/OddDman123'
      break;
    default:
      mainFrame.src = 'blog.html'
  }
}
// Get a reference to the element you want to animate

export function Scroll(){

    const elementToAnimate = document.querySelector('.Projects');
    
    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    
    // Function to handle the scroll event
    function handleScroll() {
      if (isElementInViewport(elementToAnimate)) {
        // Add a class to trigger the animation
        elementToAnimate.classList.add('element-to-animate');
        elementToAnimate.classList.remove('hiddenItem');
        // Remove the scroll event listener to prevent triggering again
        window.removeEventListener('scroll', handleScroll);
      }
    }
    
    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);
}
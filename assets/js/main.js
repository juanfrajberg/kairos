(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox',
    autoplayVideos: false
  });

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

})();

// ------------------------------------------------------------------------------------- //

// Change active link while scrolling
function setActiveLinkOnScroll() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".li__a");

  let currentSectionId = "";

  // Check current section in the viewport
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight) {
      currentSectionId = section.getAttribute("id");
    }
  });

  // Change the active section in the nav links
  navLinks.forEach(link => {
    link.classList.remove("active__a");
    if (link.getAttribute("href") === `#${currentSectionId}`) {
      link.classList.add("active__a");
    }
  });
}

// Scroll event to execute function
document.addEventListener("scroll", setActiveLinkOnScroll);
window.addEventListener("load", setActiveLinkOnScroll);

// Click event to keep color when user clicks link
document.querySelectorAll(".li__a").forEach(link => {
  link.addEventListener("click", (event) => {
    document.querySelectorAll(".li__a").forEach(link => {
      link.classList.remove("active__a");
    });
    event.target.classList.add("active__a");
  });
});


// Hides scroll-top button when menu is opened
const navMobile = document.querySelector(".mobile-nav-toggle");
const scrollTop = document.getElementById("scroll-top");

navMobile.addEventListener("click", () => {
  
  if (scrollTop.classList.contains('activeScroll')) {
    scrollTop.classList.remove("activeScroll");
    scrollTop.classList.remove("active");
} else {
  scrollTop.classList.add("activeScroll");
  scrollTop.classList.remove("active");
}
    
})
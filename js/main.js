// FJR Teleprompter Landing Page Javascript

// Global Helper Functions for Navigation and WhatsApp
function scrollToSection(selector) {
  if (selector === 'body') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

function openWhatsApp() {
  window.open("https://wa.me/5511998855701", "_blank", "noopener,noreferrer");
}

function openInstagram() {
  window.open("https://www.instagram.com/fjrteleprompter/", "_blank", "noopener,noreferrer");
}

// 1. Mobile Menu Toggle Logic
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

function toggleMobileMenu() {
  const isOpen = mobileMenu.classList.contains('translate-y-[0%]');
  if (isOpen) {
    mobileMenu.classList.remove('translate-y-[0%]', 'opacity-100');
    mobileMenu.classList.add('translate-y-[-100%]', 'opacity-0');
  } else {
    mobileMenu.classList.remove('translate-y-[-100%]', 'opacity-0');
    mobileMenu.classList.add('translate-y-[0%]', 'opacity-100');
  }
}

menuBtn.addEventListener('click', toggleMobileMenu);
closeMenuBtn.addEventListener('click', toggleMobileMenu);

mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Close mobile menu on link click
    mobileMenu.classList.remove('translate-y-[0%]', 'opacity-100');
    mobileMenu.classList.add('translate-y-[-100%]', 'opacity-0');
  });
});

// 2. Custom Gallery Lightbox Logic
const images = [
  "artes/img01.jpeg",
  "artes/img02.jpeg",
  "artes/img03.jpeg",
  "artes/img04.jpeg",
  "artes/img06.jpeg",
  "artes/img07.jpeg",
  "artes/img08.jpeg",
  "artes/img09.jpeg",
  "artes/img10.jpeg",
  "artes/img11.jpeg",
  "artes/img12.jpeg",
  "artes/img13.jpeg"
];

let currentIndex = 0;
const lightboxModal = document.getElementById('lightbox-modal');
const lightboxImg = document.getElementById('lightbox-img');

function openLightbox(index) {
  currentIndex = index;
  lightboxImg.src = images[currentIndex];
  lightboxModal.classList.remove('opacity-0', 'pointer-events-none');
  lightboxModal.classList.add('opacity-100', 'pointer-events-auto');
  document.body.style.overflow = 'hidden'; // Lock page scroll
}

function closeLightbox() {
  lightboxModal.classList.remove('opacity-100', 'pointer-events-auto');
  lightboxModal.classList.add('opacity-0', 'pointer-events-none');
  document.body.style.overflow = ''; // Unlock page scroll
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex];
}

// Close Lightbox on Click Outside of Image Content
lightboxModal.addEventListener('click', (e) => {
  if (e.target === lightboxModal) {
    closeLightbox();
  }
});

// Keyboard Accessibility Support (Esc, Left, Right keys)
document.addEventListener('keydown', (e) => {
  const isOpen = lightboxModal.classList.contains('opacity-100');
  if (!isOpen) return;

  if (e.key === 'Escape') {
    closeLightbox();
  } else if (e.key === 'ArrowRight') {
    nextImage();
  } else if (e.key === 'ArrowLeft') {
    prevImage();
  }
});

// 3. Navigation Bar Scroll Shadow Effect
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.classList.remove('top-6', 'w-[92%]', 'max-w-5xl');
    nav.classList.add('top-0', 'w-full', 'max-w-none', 'border-x-0', 'border-t-0');
  } else {
    nav.classList.add('top-6', 'w-[92%]', 'max-w-5xl');
    nav.classList.remove('top-0', 'w-full', 'max-w-none', 'border-x-0', 'border-t-0');
  }
});

// 4. Reveal on Scroll Animation Logic using Intersection Observer
document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));
});

// 5. 3D Photo Stack Interactivity Logic
let isHeroAnimating = false;
let heroStackInterval;

function cycleHeroStack() {
  if (isHeroAnimating) return;
  isHeroAnimating = true;
  
  const container = document.getElementById('hero-photo-stack');
  if (!container) return;
  
  const cards = container.querySelectorAll('.photo-card');
  const activeIndicator = document.getElementById('hero-stack-active-indicator');
  const topCard = container.querySelector('.card-0');
  
  if (!topCard || cards.length === 0) {
    isHeroAnimating = false;
    return;
  }
  
  // 1. Add cycle animation to top card (slide out to side)
  topCard.classList.add('card-cycling');
  
  // 2. Wait 300ms (peak of the slide-out animation) to swap classes
  setTimeout(() => {
    cards.forEach(card => {
      if (card.classList.contains('card-0')) {
        card.classList.remove('card-0');
        card.classList.add('card-3');
      } else if (card.classList.contains('card-1')) {
        card.classList.remove('card-1');
        card.classList.add('card-0');
      } else if (card.classList.contains('card-2')) {
        card.classList.remove('card-2');
        card.classList.add('card-1');
      } else if (card.classList.contains('card-3')) {
        card.classList.remove('card-3');
        card.classList.add('card-2');
      }
    });
    
    // Update pagination active indicator (01 to 04)
    const newTopCard = container.querySelector('.card-0');
    if (newTopCard && activeIndicator) {
      const newIndex = parseInt(newTopCard.getAttribute('data-index')) + 1;
      activeIndicator.textContent = '0' + newIndex;
    }
  }, 300);
  
  // 3. Remove cycling animation class and unlock interaction
  setTimeout(() => {
    topCard.classList.remove('card-cycling');
    isHeroAnimating = false;
  }, 650);
}

// Auto-cycle stack slideshow
document.addEventListener('DOMContentLoaded', () => {
  const stackContainer = document.getElementById('hero-photo-stack');
  if (stackContainer) {
    // Start auto cycle
    heroStackInterval = setInterval(cycleHeroStack, 4500);
    
    // Pause auto cycle on hover, resume on mouse leave
    stackContainer.addEventListener('mouseenter', () => {
      clearInterval(heroStackInterval);
    });
    
    stackContainer.addEventListener('mouseleave', () => {
      clearInterval(heroStackInterval);
      heroStackInterval = setInterval(cycleHeroStack, 4500);
    });
  }
});


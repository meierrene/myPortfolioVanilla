const subject = document.querySelector('.subject');
const content = document.querySelector('.content');
const ctaBtn = document.querySelector('.cta-btn');

ctaBtn.addEventListener('click', () => {
  ctaBtn.href = `mailto:renemeier.de@gmail.com?&subject=${subject.value}&body=${content.value}`;
  console.log(ctaBtn.href);
});

document
  .querySelector('.footer-copyright')
  .insertAdjacentText(
    'beforeEnd',
    ` ${new Date().getFullYear()} by René Meier`
  );

// Sticky navigation

const obs = new IntersectionObserver(
  entries => {
    entries[0].isIntersecting
      ? document.body.classList.remove('sticky')
      : document.body.classList.add('sticky');
  },
  { root: null, threshold: 0, rootMargin: '200px' }
);
obs.observe(document.querySelector('.greetings-container'));

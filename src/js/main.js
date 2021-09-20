const closeBtn = document.getElementById('closeBtn');
const count = document.getElementById('count');
const spans = count.querySelectorAll('span');

spans.forEach(span => {
  span.addEventListener('click', e => {
    const current = e.currentTarget;
    current.classList.toggle('active');
  });
});

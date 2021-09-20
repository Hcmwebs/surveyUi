const closeBtn = document.getElementById('closeBtn');
const count = document.getElementById('count');
const spans = count.querySelectorAll('span');

spans.forEach(span => {
  span.addEventListener('click', () => {
    spans.forEach(item => {
      if (item !== span) {
        item.classList.remove('active');
      }
    });
    span.classList.toggle('active');
  });
});

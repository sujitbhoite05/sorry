const names = { her: 'Srushhhh', you: 'Sujit' };
document.querySelectorAll('[data-her-name]').forEach(el => el.textContent = names.her);
document.querySelectorAll('[data-your-name]').forEach(el => el.textContent = names.you);

const fireflies = document.getElementById('fireflies');
for (let i = 0; i < 22; i++) {
  const dot = document.createElement('i');
  dot.className = 'firefly';
  dot.style.left = `${4 + Math.random() * 92}%`;
  dot.style.top = `${12 + Math.random() * 78}%`;
  dot.style.setProperty('--duration', `${4 + Math.random() * 7}s`);
  dot.style.setProperty('--delay', `${-Math.random() * 8}s`);
  dot.style.setProperty('--drift', `${Math.round(Math.random() * 54 - 27)}px`);
  fireflies.append(dot);
}

const openButton = document.getElementById('openLetter');
const letter = document.getElementById('letter');
openButton.addEventListener('click', () => {
  const isOpen = !letter.hidden;
  letter.hidden = isOpen;
  openButton.setAttribute('aria-expanded', String(!isOpen));
  document.getElementById('envelopeHint').textContent = isOpen ? 'A letter for you · tap to open' : 'A letter for you · tap to close';
  if (!isOpen) letter.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

const note = document.getElementById('responseNote');
document.getElementById('talkButton').addEventListener('click', () => {
  note.textContent = 'Thank you for telling me. I’m here to listen, whenever you’re ready.';
});
document.getElementById('timeButton').addEventListener('click', () => {
  note.textContent = 'Of course. Take all the time you need. I’ll respect your space.';
});

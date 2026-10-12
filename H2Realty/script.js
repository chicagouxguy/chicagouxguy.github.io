const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
document.querySelectorAll('[data-interest]').forEach(link => link.addEventListener('click', () => {
  document.querySelector('#interest').value = link.dataset.interest;
}));
document.querySelector('#year').textContent = new Date().getFullYear();
const form = document.querySelector('#contact-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const fields = new FormData(form);
  document.querySelector('#inquiry').value = `H2 Signature Realty inquiry\n\nName: ${fields.get('firstName')} ${fields.get('lastName')}\nEmail: ${fields.get('email')}\nInterest: ${fields.get('interest')}\n\n${fields.get('message')}`;
  document.querySelector('#form-result').hidden = false;
  document.querySelector('#inquiry').focus();
});
document.querySelector('#copy-inquiry').addEventListener('click', async event => {
  const inquiry = document.querySelector('#inquiry');
  const button = event.currentTarget;
  try {
    await navigator.clipboard.writeText(inquiry.value);
    button.textContent = 'Copied ✓';
  } catch {
    inquiry.focus();
    inquiry.select();
    button.textContent = 'Select and copy the inquiry above';
  }
});

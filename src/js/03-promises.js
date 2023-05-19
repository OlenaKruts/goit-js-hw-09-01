import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const btn = document.querySelector('button');
btn.classList.add('button-create');

form.addEventListener('submit', onSubmitForm);
function onSubmitForm(event) {
  event.preventDefault();
  btn.setAttribute('disabled', 'disabled');
  const firstDelay = Number(form.elements.delay.value);
  const step = Number(form.elements.step.value);
  const amount = Number(form.elements.amount.value);

  for (let i = 0; i < amount; i += 1) {
    let delay = firstDelay + step * i;
    createPromise(i + 1, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );

        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }

  setTimeout(() => {
    form.reset();
    btn.removeAttribute('disabled');
  }, firstDelay + step * amount);
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
        // Fulfill
      } else {
        reject({ position, delay });
        // Reject
      }
    }, delay);
  });
}

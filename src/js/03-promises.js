import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formInput = document.querySelector('.form');

 formInput.addEventListener('submit', onSubmitCreatePromise);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay })
      } else {
        reject({ position, delay })
      }
    }, delay)
  })
};

function onSubmitCreatePromise(event) {
  event.preventDefault();
  const inputDelay = +event.currentTarget.delay.value;
  const delayStep = +event.currentTarget.step.value;
  const inputAmount = +event.currentTarget.amount.value;

  for (let i = 0; i < inputAmount; i += 1) {
    const promiseDelay = inputDelay + delayStep * i;
  createPromise(i + 1, promiseDelay)
  .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  })
    }
}

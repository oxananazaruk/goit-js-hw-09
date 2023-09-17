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
  let inputDelay = +event.currentTarget.delay.value;
  const delayStep = +event.currentTarget.step.value;
  const inputAmount = +event.currentTarget.amount.value;

  for (let i = 1; i <= inputAmount; i += 1) {
    inputDelay += delayStep * (i-1);
  createPromise(i, inputDelay)
  .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  })
    }
}

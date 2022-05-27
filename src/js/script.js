// const widgets = document.querySelectorAll('.rating');
// const stars = document.querySelectorAll('.rating__star');
// let textRating = document.querySelector('.rating__value');

// console.log(widgets);
// console.log(stars);

// widgets.forEach(() => {
//   stars.forEach((star, index) => {
//     star.addEventListener('click', (e) => {
//       textRating.textContent = index + 1;
//       for (let i = 0; i < stars.length; i++) {
//         if (i <= index) {
//           stars[i].classList.add('rating__star--on');
//         } else {
//           stars[i].classList.remove('rating__star--on');
//         }
//       }
//     });
//   });
// });

import { Widget } from './Widget';

const Widget1 = new Widget('Movie One', 0);
const Widget2 = new Widget('Movie Two', 0);
const Widget3 = new Widget('Movie Three', 0);
const Widget4 = new Widget('Movie Four', 0);
const Widget5 = new Widget('Movie Five', 0);
const Widget6 = new Widget('Movie Six', 0);
const Widget7 = new Widget('Movie Seven', 0);
const Widget8 = new Widget('Movie Eight', 0);
const Widget9 = new Widget('Movie Nine', 0);
const Widget10 = new Widget('Movie Ten', 0);

// sendRatings(Widget1);

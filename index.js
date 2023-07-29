// console.log('funguju!');

// const hours = [
//   {
//     hours: 12,
//     minutes: 34,
//   },
// ];

// const Clock = (props) => {
//   const { hours, minutes } = props;
//   return `<div class="clock">
//   <span ="clock__hours">${hours}<span>:
//   <span ="clock__minutes">${minutes}<span>
//   </div>`;
// };

// const renderClock = (hours) => {
//   const clockAdd = document.querySelector('#app');
//   clockAdd.innerHTML = hours.map((hour) => Clock(hour)).join('');
// };

// renderClock(hours);

const times = [
  {
    hours: 12,
    minutes: 34,
  },
  {
    hours: 5,
    minutes: 23,
  },
  {
    hours: 17,
    minutes: 10,
  },
];
const Clock = (props) => {
  const { hours, minutes } = props;
  const paddedHours = String(hours).padStart(2, '0');
  const paddedMinutes = String(minutes).padStart(2, '0');

  return `
    <div class="clock">
      <span class="clock__hours">${paddedHours}</span>:<span class="clock__minutes">${paddedMinutes}</span>
    </div>
<div class="clock">
      <span class="clock__hours">${paddedHours}</span>:<span class="clock__minutes">${paddedMinutes}</span>
    </div>
<div class="clock">
      <span class="clock__hours">${paddedHours}</span>:<span class="clock__minutes">${paddedMinutes}</span>
    </div>
  `;
};

const appElm = document.querySelector('#app');
appElm.innerHTML = times.map((time) => Clock(time)).join('');

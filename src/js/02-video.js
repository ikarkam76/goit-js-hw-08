import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {});


const onPlay = (evt) => {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(evt));
};

player.on('timeupdate', throttle(onPlay, 1000));


const savedTime = localStorage.getItem('videoplayer-current-time');
const parsedTime = JSON.parse(savedTime);

console.log(parsedTime);

player.setCurrentTime(parsedTime.seconds).then(function (seconds) {
    }).catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
// -----другий варіант, він також працює, і код чистіше ------------

// const onPlay = evt => {
//     localStorage.setItem('videoplayer-current-time', evt.seconds);
// };

// const savedTime = localStorage.getItem('videoplayer-current-time');

// player.on('timeupdate', throttle(onPlay, 1000));

// player
//   .setCurrentTime(savedTime)
//   .then(function (seconds) {
//     // seconds = the actual time that the player seeked to
//   })
//   .catch(function (error) {
//     switch (error.name) {
//       case 'RangeError':
//         // the time was less than 0 or greater than the video’s duration
//         break;

//       default:
//         // some other error occurred
//         break;
//     }
//   });
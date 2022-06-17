import Player from '@vimeo/player';

const player = new Player('vimeo-player', {});

// не знаю який варіант вірний

// --------------- перший варіант ------------

// const onPlay = (evt) => {
//     localStorage.setItem('videoplayer-current-time', JSON.stringify(evt));
// };

// const savedTime = localStorage.getItem('videoplayer-current-time');
// const parsedTime = JSON.parse(savedTime);
// console.log(parsedTime);

// player.on('timeupdate', onPlay);

// player.setCurrentTime(parsedTime.seconds);

// -----другий варіант, він також працює, і код чистіше ------------

const onPlay = evt => {
  localStorage.setItem('videoplayer-current-time', evt.seconds);
};

const savedTime = localStorage.getItem('videoplayer-current-time');
console.log(savedTime);

player.on('timeupdate', onPlay);

player.setCurrentTime(savedTime);
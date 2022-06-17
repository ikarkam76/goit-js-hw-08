import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {});

// не знаю який варіант вірний

// --------------- перший варіант ------------

// const onPlay = (evt) => {
//     localStorage.setItem('videoplayer-current-time', JSON.stringify(evt));
// };

// const savedTime = localStorage.getItem('videoplayer-current-time');
// const parsedTime = JSON.parse(savedTime);

// player.on('timeupdate', throttle(onPlay, 1000));

// player.setCurrentTime(parsedTime.seconds);

// -----другий варіант, він також працює, і код чистіше ------------

const onPlay = evt => {
    localStorage.setItem('videoplayer-current-time', evt.seconds);
};

const savedTime = localStorage.getItem('videoplayer-current-time');

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(savedTime);
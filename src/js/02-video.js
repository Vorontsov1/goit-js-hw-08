import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

const onPlay = data => {
  localStorage.setItem(STORAGE_KEY, data.seconds);
  console.log(data.seconds);
};

player.on('timupdate', throttle(onPlay, 1000));
const time = localStorage.getItem(STORAGE_KEY);
if (time) {
  player.setCurrentTime(time);
}
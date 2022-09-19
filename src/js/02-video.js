import Player from '@vimeo/player';

import { throttle } from 'lodash';

  const iframe = document.querySelector('#vimeo-player');
  const player = new Vimeo.Player(iframe);

  player.on('play', function () {
    console.log('played the video!');
  });

    const timeKey = 'videoplayer-current-time';

  player.getVideoTitle().then(function (title) {
    console.log('title:', title);
  });
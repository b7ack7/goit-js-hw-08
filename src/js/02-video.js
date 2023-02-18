import throttle from 'lodash.throttle'
import Player from '@vimeo/player';
const currentSecond = localStorage.getItem("current-second");
const player = new Player("vimeo-player");
player.on("playing", (res) => {
    console.log(res);
    localStorage.setItem("current-second", res.seconds);
})

if (currentSecond) {
    player.setCurrentTime(currentSecond);
    
} else {
    player.setCurrentTime(0);
}

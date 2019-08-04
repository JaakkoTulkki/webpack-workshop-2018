const play = () => process.stdin.write('\x07')
let t = 0;
let int = 300;
play();
t += 200;
setTimeout(play, t += int);
setTimeout(play, t += int);
setTimeout(play, t += int);
setTimeout(play, t += int);
setTimeout(play, t += int);
t += 750;
setTimeout(play, t += int);
setTimeout(play, t += int);
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

window.addEventListener('DOMContentLoaded', () => {
    console.log('init javascript')
    const audio = new Audio('https://myradio24.org/vinila'),
          player = document.querySelector('.player'),
          screen = player.querySelector('.player__live'),
          playBtn = player.querySelector('.player__nav-play'),
          volumeBar = player.querySelector('.player__nav-vol-progress'),
          volumeImg = player.querySelector('.player__nav-volbar-img'),
          qualityBtn = player.querySelector('.player__quality-btn'),
          eqBtn = player.querySelector('.player__nav-eq'),
          eqScreen = player.querySelector('#player__eq'),
          playerScreen = player.querySelector('#player__wrap'),
          eqClose = player.querySelector('.player__eq-icon'),
          eqRanges = document.querySelectorAll('.player__eq-input'),
          eqPatBtn = player.querySelector('.player__eq-select-btn'),
          eqWrap = player.querySelector('.player__eq-select-wrap'),
          eqOn = player.querySelector('.player__eq-controls-checkbox'),
          eqPatterns = player.querySelectorAll('.player__eq-select-item'),
          cover = player.querySelector('.player__cover'),
          duration = player.querySelector('.player__live-duration'),
          durHours = duration.querySelector('#hours'),
          durMinutes = duration.querySelector('#minutes'),
          durSeconds = duration.querySelector('#seconds'),
          knob = player.querySelector('.player__eq-balance-range'),
          switchText = player.querySelector('.player__eq-controls-switch span'),
          nextSongText = player.querySelector('.player__next-song span'),
          radiator = player.querySelector('.player__quality'),
          playBtnSlider = document.querySelector('#radio-play-btn');

    let seconds = 0,
        minutes = 0,
        hours = 0;

    let durTimer,
        volumeStat = 50;
        
    function coverInterval() {
        if (cover.getAttribute('style') == 'background-image: url("//myradio24.com/img/nocover.jpg");') {
            cover.setAttribute('style', 'background-image: url(https://vinilavanila.online/wp-content/uploads/2021/05/logo_cover_300.png);');
        }
    }   
    setInterval(coverInterval, 1);

    audio.volume = 0.5;
    audio.setAttribute('crossorigin', "anonymous");

    function changeIcon() {
        if (audio.paused) {
            playBtn.classList.remove('lightPlayOn');
            playBtn.classList.add('lightPlayOff');
        } else {
            playBtn.classList.remove('lightPlayOff');
            playBtn.classList.add('lightPlayOn');
        }
    }

    function changeVolumeIcon(value, icon) {

        if (value == 0) {
            icon.setAttribute('src', 'https://vinilavanila.online/wp-content/uploads/2021/05/volume_icon_off.png');
        }

        if (value > 1 && value < 80 ) {
            icon.setAttribute('src', 'https://vinilavanila.online/wp-content/uploads/2021/05/volume_icon_half.png');
        }

        if (value > 80) {
            icon.setAttribute('src', 'https://vinilavanila.online/wp-content/uploads/2021/05/volume_icon_full.png');
        }
    }

    function checkTimer(item) {
        if (item <= 9) {
            return '0' + item;
        } else {
            return item;
        }
    }

    function timer() {
        seconds++;
        if (seconds == 59) {
            minutes++;
            seconds = 0;
        }
        if (minutes == 59) {
            hours++;
            minutes = 0;
        }
        durSeconds.innerHTML = checkTimer(seconds);
        durMinutes.innerHTML = checkTimer(minutes);
        durHours.innerHTML = checkTimer(hours);
    }

    function closeEq(boll = true) {
        if (boll) {
            radiator.classList.remove('lightLampOff');
            screen.classList.remove('lightScreenOff');
            playerScreen.style.display = 'flex';
            eqScreen.style.display = 'none';
            eqWrap.style.display = 'none';
            eqPatBtn.setAttribute('data-open', 0);
            eqBtn.setAttribute('data-active', 0);
        } else {
            playerScreen.style.display = 'none';
            eqScreen.style.display = 'flex';
        }
    }

    function playAudio() {
        durTimer = setInterval(timer, 1000);
        screen.style.opacity = '1';
        screen.classList.remove('lightScreenOff');
        screen.classList.add('lightScreenOn');
        radiator.classList.remove('lightLampOff');
        radiator.classList.add('lightLampOn');
        playBtn.setAttribute('data-play', 1);
        audio.play();
        changeIcon();
    }

    function pauseAudio() {
        playBtn.setAttribute('data-play', 0);
        console.log(screen.childNodes);
        screen.style.opacity = '0.7';
        screen.classList.remove('lightScreenOn');
        screen.classList.add('lightScreenOff');
        radiator.classList.remove('lightLampOn');
        radiator.classList.add('lightLampOff');
        audio.pause();
        clearInterval(durTimer);
        changeIcon();
    }

    const reg = /@/i;

    function regInterval() {
        if (reg.test(nextSongText)) {
            nextSongText.innerHTML = ''
        }
    }
    setInterval(regInterval, 1000);

    playBtn.addEventListener('click', () => {
        if (playBtn.getAttribute('data-play') == 0) {
            playAudio();
        } else {
            pauseAudio();
        }
    });

    playBtnSlider.addEventListener('click', () => {
        if (playBtn.getAttribute('data-play') == 0) {
            playAudio();
        } else {
            pauseAudio();
        }
    });

    volumeBar.addEventListener('input', () => {
        const value = volumeBar.value;

        audio.volume = value / 100;
        changeVolumeIcon(value, volumeImg);
    }); 

    volumeImg.addEventListener('click', () => {
        if (audio.volume == 0 ) {
            volumeBar.value = volumeStat;
            audio.volume = volumeStat / 100;
            volumeImg.setAttribute('src', 'https://vinilavanila.online/wp-content/uploads/2021/05/volume_icon_half.png');
        } else {
            volumeStat = volumeBar.value;
            volumeBar.value = 0;
            audio.volume = 0;
            volumeImg.setAttribute('src', 'https://vinilavanila.online/wp-content/uploads/2021/05/volume_icon_off.png');
        } 
    });

    eqClose.addEventListener('click', () => {
        closeEq();
    });

    qualityBtn.addEventListener('click', () => {
        if (qualityBtn.getAttribute('data-quality') == 320) {
            qualityBtn.setAttribute('src', 'https://vinilavanila.online/wp-content/uploads/2021/05/bitrate_left.png');
            audio.setAttribute('src', 'https://myradio24.org/vinila_128');
            if (playBtn.getAttribute('data-play') == 1) {
                audio.play();
            }
            qualityBtn.setAttribute('data-quality', 128);
        } else {
            qualityBtn.setAttribute('src', 'https://vinilavanila.online/wp-content/uploads/2021/05/bitrate_right.png');
            audio.setAttribute('src', 'https://myradio24.org/vinila');
            if (playBtn.getAttribute('data-play') == 1) {
                audio.play();
            }
            qualityBtn.setAttribute('data-quality', 320);
        }
    });

    eqPatBtn.addEventListener('click', () => {
        if (eqPatBtn.getAttribute('data-open') == 0) {
            eqPatBtn.setAttribute('data-open', 1);
            eqWrap.style.display = 'flex';
        } else {
            eqPatBtn.setAttribute('data-open', 0);
            eqWrap.style.display = 'none';
        }
    });

    document.addEventListener('click', (e) => {
        const target = e.target;

        if (target != eqWrap && target != eqWrap.childNodes && target != eqPatBtn) {
            eqWrap.style.display = 'none';
            eqPatBtn.setAttribute('data-open', 0);
        }
    });

    eqBtn.addEventListener('click', () => {
        if (eqBtn.getAttribute('data-active') == 0) {
            if (!eqOn.checked) {
                eqOn.click();
            }
            eqBtn.setAttribute('data-active', 1);
            closeEq(false);
        } else {
            closeEq();
            eqBtn.setAttribute('data-active', 0);
        }
    });

    eqOn.addEventListener('change', () => {
        if (eqOn.checked) {
            switchText.innerHTML = 'EQ enable';
            eqBtn.classList.remove('lightEqOff');
            eqBtn.classList.add('lightEqOn');
        } else {
            switchText.innerHTML = 'EQ disable';
            eqBtn.classList.remove('lightEqOn');
            eqBtn.classList.add('lightEqOff');
        }
    });

    // eq 

    const audioCtx = window.AudioContext || window.webkitAudioContext,
          context = new audioCtx();

    const source = context.createMediaElementSource(audio),
          filters = createFilters();

    let eqObject = {
        filters: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        balanceTransform: 'transfom: rotate(0deg)',
        balanceValue: 0,
        namePattern: 'Zero'
    }

    function createFilter(frequency) {
        const filter = context.createBiquadFilter();

        filter.type = 'peaking';
        filter.frequency.value = frequency;
        filter.Q.value = 1;
        filter.gain.value = 0;

        return filter;
    }

    function createFilters() {
        const frequencies = [32, 64, 125, 250, 500, 1000, 2000, 4000, 8000, 14000];
        let filters;

        filters = frequencies.map(createFilter);

        filters.reduce(function (prev, curr) {
            prev.connect(curr);
            return curr;
        });
        
        return filters;
    }

    function equalize(audio) {
      
        audio.onplay = (e)=>{context.resume();}
        audio.addEventListener('play',() => context.resume());

        source.connect(filters[0]);
        filters[filters.length - 1].connect(context.destination);

        eqRanges.forEach((input, i) => {
            input.addEventListener('change', (e) => {
                filters[i].gain.value = e.target.value;
                eqPatBtn.innerHTML = 'Custom Preset';
                if (eqOn.checked == false) {
                    eqOn.click();
                }
            });
        });
    };
    
    equalize(audio);

    function savingEqObject() {
        filters.forEach((item, n) => {
            eqObject.filters[n] = item.gain.value
        });
        eqObject.balanceTransform = knob.getAttribute('style');
        eqObject.balanceValue = stereoPanner.pan.value;
        eqObject.namePattern = eqPatBtn.textContent;
    }

    function getEqSettings() {
        filters.forEach((item, n) => {
            item.gain.value = eqObject.filters[n];
        });
        eqRanges.forEach((item, i) => {
            item.value = eqObject.filters[i];
        });
        knob.setAttribute('style', eqObject.balanceTransform);
        stereoPanner.pan.value = eqObject.balanceValue;
        eqPatBtn.textContent = eqObject.namePattern;
    }

    // patterns

    const patterns = {
        'rock': [5.4, 4.5, -3.6, -6.6, -2.7, 2.1, 6, 7.5, 7.8, 8.1],
        'jazz': [3, 6.3, 3.6, -3.9, -5.1, 1.2, 9, 1.4, 2, 2.5],
        'dub': [5.1, 4.8, 4.1, 1.5, -2.4, -3.2, -1.6, 1.6, 5.2, 5.5],
        'trance': [7.4, 6.6, 4.2, 2.1, 0, -2.1, 0, 2.1, 4.2, 6.6],
        'classic': [1.8, 2.1, 2.1, -0.3, -2.7, -3.9, -3.9, 1, 2.4, 8.1]
    };

    function resetFilters() {
        filters.forEach(item => {
            item.gain.value = 0;
        });
        eqRanges.forEach(item => {
            item.value = 0;
        });
    }

    eqPatterns.forEach(item => {
        item.addEventListener('click', (e) => {
            const target = e.target.getAttribute('data-pattern');
            eqPatBtn.innerHTML = e.target.textContent;

            if (target == 'flat') {
                resetFilters();
            } else if (!(target == 'custom')) {
                if (!eqOn.checked) {
                    eqOn.click();
                    eqPatBtn.innerHTML = e.target.textContent;
                }
                patterns[target].forEach((kh, i) => {
                    filters[i].gain.value = kh;
                    eqRanges[i].value = kh;
                });
            }
        });
    });

    eqOn.addEventListener('change', () => {
        if (eqOn.checked == false) {
            savingEqObject();
            resetFilters();
            resetBalance();
            eqPatBtn.innerHTML = 'Zero';
        } else {
            getEqSettings();
        }
    }); 

    eqPatterns.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.classList.add('player__eq-select-item_before');
        });
        item.addEventListener('mouseout', () => {
            item.classList.remove('player__eq-select-item_before');
        });
    });

    document.querySelector('button').addEventListener('click', function() {
        context.resume().then(() => {
          console.log('Playback resumed successfully');
        });
    });

    // balance

    const stereoPanner = new StereoPannerNode(context);

    Draggable.create(knob, {
        type: 'rotation',
        force3D: false,
        bounds: {maxRotation: 150, minRotation: -150},
        onDrag: function() {
            const rotation = parseInt(this.rotation % 360, 10);
            
            stereoPanner.pan.value = (rotation / 15) / 10;
        }
    });

    knob.addEventListener('dblclick', () => {
        resetBalance();
    });

    function resetBalance() {
        stereoPanner.pan.value = 0;
        knob.setAttribute('style', 'transform: rotate(0deg)');
    }

    
    source.connect(stereoPanner).connect(context.destination);
    // time

    const moskowUtc = 3;
    const timerId = setInterval(() => {
        let t = new Date(),
            tt = t.getUTCHours() + moskowUtc;
        document.querySelector('.player__live-time').innerHTML = (tt > 24 ? "0" : "") + (tt > 24 ? tt - 24 : tt) + ":" + (t.getMinutes() < 10 ? '0' : '') + t.getMinutes();
    }, 1000);
});
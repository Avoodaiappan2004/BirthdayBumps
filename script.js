/**
 * ============================================================================
 * PREMIUM BIRTHDAY SURPRISE WEBSITE — MASTER JAVASCRIPT
 * Strict Midnight Lock, Midnight Cinematic Reveal & Jigsaw Puzzle Fix
 * ============================================================================
 * 
 * 1. SINGLE CONFIGURATION SECTION:
 * Customize friend details, birthday date (strictly local time), music & photos here.
 */

const birthdayConfig = {
    // Friend's Name
    friendName: "ARUN",

    // Birthday Date & Time (Strictly interpreted as LOCAL TIME)
    // Locked until exactly 12:00 AM midnight on this date!
    birthdayDate: "2026-10-06T19:40:00",

    // Birthday BGM File (Plays only when birthday unlocks at midnight)
    music: "assets/birthday.mp3",

    // Jigsaw Puzzle Target Image
    puzzleImage: "assets/puzzle.jpg",

    // Featured Photos & Final Celebration Photo
    finalPhoto: "assets/final.jpg",
    photos: [
        "assets/photo1.jpg",
        "assets/photo2.jpg",
        "assets/photo3.jpg",
        "assets/photo4.jpg"
    ],

    // Memory Gallery Captions
    gallery: [
        {
            src: "assets/photo1.jpg",
            caption: "That one unforgettable rooftop night ❤️",
            title: "Golden Hour Memories"
        },
        {
            src: "assets/photo2.jpg",
            caption: "Chaos + coffee + endless laughter = us 😂",
            title: "Late Night Talks"
        },
        {
            src: "assets/photo3.jpg",
            caption: "Some memories never get old ✨",
            title: "Mountain Adventures"
        },
        {
            src: "assets/photo4.jpg",
            caption: "Besties for life, through thick and thin! 🥂",
            title: "Celebration Vibes"
        },
        {
            src: "assets/puzzle.jpg",
            caption: "The sweetest cake cutting moments 🎂",
            title: "Birthday Cheer"
        }
    ],

    // Friendship Timeline Milestones
    timeline: [
        {
            tag: "THE BEGINNING",
            title: "Two Strangers, One Random Encounter",
            desc: "We started as two people who barely knew each other, yet somehow fate knew we'd become inseparable."
        },
        {
            tag: "THE FIRST CONVERSATION",
            title: "Talking For Hours About Everything & Nothing",
            desc: "That first real conversation where we realized our sense of humor is identically broken and hilarious."
        },
        {
            tag: "THE CRAZY DAYS",
            title: "Unfiltered Chaos & Inside Jokes",
            desc: "Late-night road trips, spontaneous decisions, food runs, and memories we'll still laugh at when we're 80."
        },
        {
            tag: "THE UNFORGETTABLE MOMENTS",
            title: "Always Having Each Other's Back",
            desc: "Through highs and lows, celebrations and quiet days—knowing you always had my back made all the difference."
        },
        {
            tag: "TODAY ❤️",
            title: "Celebrating Another Year of YOU!",
            desc: "Here we are today, celebrating your birthday with endless gratitude for having you in my life."
        }
    ],

    // Heartfelt & Humorous Quotes
    quotes: [
        "Friends like you make ordinary days feel extraordinary.",
        "Some people enter your life and quietly become a part of your story.",
        "Years may change, places may change, but some friendships stay forever.",
        "Life is better when you're laughing with the right person.",
        "A true friend is someone who knows all about you and still loves you anyway.",
        "Good friends are like stars: you don't always see them, but you know they're always there.",
        "Here's to the person who makes every memory ten times louder and brighter!"
    ],

    // "Open When..." Letters
    letters: [
        {
            id: "sad",
            icon: "🥺",
            title: "Open When You're Sad",
            message: "Hey bestie,\n\nIf today feels heavy, take a deep breath. Remember that you have survived 100% of your worst days so far. You are strong, loved, and never alone. Drop whatever you're doing and text me—I'll always be here to listen or send you 50 dumb memes to make you smile.",
            sign: "Sending you the biggest virtual hug ❤️"
        },
        {
            id: "miss",
            icon: "💌",
            title: "Open When You Miss Me",
            message: "Distance or busy schedules can never weaken our bond. Close your eyes and remember the funniest moment we shared—I bet you're smiling right now! Pick up your phone and call me right now, no matter what time it is.",
            sign: "Always a phone call away 📞❤️"
        },
        {
            id: "motivation",
            icon: "🔥",
            title: "Open When You Need Motivation",
            message: "Listen to me: You are capable of extraordinary things. Stop doubting yourself for a single second. You have the grit, talent, and passion to conquer whatever challenge is in front of you. Go show the world what you're made of!",
            sign: "Your #1 Fan & Cheerleader 🚀"
        },
        {
            id: "laugh",
            icon: "😂",
            title: "Open When You Want To Laugh",
            message: "Remember that time we thought we had our lives together? Yeah, good joke! Just remember: no matter how clumsy, chaotic, or weird things get, at least you have an equally unhinged best friend standing right beside you.",
            sign: "Your partner in crime 🍕"
        },
        {
            id: "awesome",
            icon: "👑",
            title: "Open When You Forget How Awesome You Are",
            message: "Quick reminder: You light up every room you walk into. Your kindness, humor, and loyalty make you irreplaceable. Never let anyone dim your sparkle, because you are truly one of a kind.",
            sign: "Stay royal and radiant ✨"
        }
    ],

    // Personality Quiz Questions
    quiz: [
        {
            q: "Who is more likely to be late to plans?",
            options: ["Definitely You 😂", "Definitely Me 🤷", "Both of us together", "We're actually on time miraculously"],
            correct: 0,
            feedback: "Spot on! Punctuality is a suggestion anyway!"
        },
        {
            q: "Who starts the most random conversations at 2 AM?",
            options: ["You with 50 memes", "Me with existential thoughts", "Both equally chaotic", "Neither, we sleep early (lie)"],
            correct: 2,
            feedback: "Yup, 2 AM is peak friendship hour."
        },
        {
            q: "What's our official solution to a bad day?",
            options: ["Good food & venting", "Long nap", "Impulsive shopping", "Listening to loud music"],
            correct: 0,
            feedback: "Food and venting solves 99.9% of our problems!"
        },
        {
            q: "Who laughs the loudest at the wrong time?",
            options: ["You without a doubt", "Me trying not to choke", "Both of us making eye contact", "Silent wheezing both"],
            correct: 2,
            feedback: "One eye contact and it's game over 😂"
        },
        {
            q: "How long will this friendship last?",
            options: ["A few years", "Until we get old and forget stuff", "Forever & Beyond", "Infinite infinity %"],
            correct: 3,
            feedback: "Correct answer! You're stuck with me forever ❤️"
        }
    ],

    // Random Surprises ("Surprise Me ✨")
    surprises: [
        {
            type: "quote",
            emoji: "✨",
            title: "Friendship Reminder",
            text: "Having a best friend who understands your unspoken thoughts is one of life's greatest blessings."
        },
        {
            type: "joke",
            emoji: "🍕",
            title: "Friendship Rule #1",
            text: "Best friends don't judge each other... they judge everyone else together!"
        },
        {
            type: "memory",
            emoji: "📸",
            title: "Secret Bestie Fact",
            text: "Scientists say laughing with your best friend burns calories. Basically, we're athletes at this point!"
        },
        {
            type: "wish",
            emoji: "🌟",
            title: "A Special Wish For You",
            text: "May this year bring you massive breakthroughs, peaceful days, and moments that take your breath away."
        },
        {
            type: "love",
            emoji: "💖",
            title: "From The Heart",
            text: "I am grateful for your existence every single day, not just on your birthday. Cheers to you!"
        }
    ]
};


/* ============================================================================
   WEB AUDIO SOUND ENGINE & MUSIC MANAGER
   ============================================================================ */
class SoundEngine {
    constructor() {
        this.ctx = null;
        this.isPlayingMelody = false;
        this.melodyTimeout = null;
    }

    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContext();
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    playTone(freq, type = 'sine', duration = 0.3, volume = 0.15, delay = 0) {
        if (!this.ctx) return;
        setTimeout(() => {
            try {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();

                osc.type = type;
                osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
                gain.gain.setValueAtTime(volume, this.ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

                osc.connect(gain);
                gain.connect(this.ctx.destination);

                osc.start();
                osc.stop(this.ctx.currentTime + duration);
            } catch (e) {
                // Silently ignore audio context errors
            }
        }, delay * 1000);
    }

    startBirthdayMelody() {
        if (this.isPlayingMelody) return;
        this.init();
        this.isPlayingMelody = true;

        const notes = [
            { f: 261.63, d: 0.35 }, { f: 261.63, d: 0.35 }, { f: 293.66, d: 0.6 }, { f: 261.63, d: 0.6 }, { f: 349.23, d: 0.6 }, { f: 329.63, d: 1.0 },
            { f: 261.63, d: 0.35 }, { f: 261.63, d: 0.35 }, { f: 293.66, d: 0.6 }, { f: 261.63, d: 0.6 }, { f: 392.00, d: 0.6 }, { f: 349.23, d: 1.0 },
            { f: 261.63, d: 0.35 }, { f: 261.63, d: 0.35 }, { f: 523.25, d: 0.6 }, { f: 440.00, d: 0.6 }, { f: 349.23, d: 0.6 }, { f: 329.63, d: 0.6 }, { f: 293.66, d: 0.9 },
            { f: 466.16, d: 0.35 }, { f: 466.16, d: 0.35 }, { f: 440.00, d: 0.6 }, { f: 349.23, d: 0.6 }, { f: 392.00, d: 0.6 }, { f: 349.23, d: 1.2 }
        ];

        let currentTime = 0;
        notes.forEach(n => {
            this.playTone(n.f, 'triangle', n.d * 1.2, 0.12, currentTime);
            currentTime += n.d * 0.7;
        });

        this.melodyTimeout = setTimeout(() => {
            if (this.isPlayingMelody) {
                this.isPlayingMelody = false;
                this.startBirthdayMelody();
            }
        }, (currentTime + 2.5) * 1000);
    }

    stopBirthdayMelody() {
        this.isPlayingMelody = false;
        if (this.melodyTimeout) {
            clearTimeout(this.melodyTimeout);
            this.melodyTimeout = null;
        }
    }

    playPop() {
        this.init();
        this.playTone(587.33, 'sine', 0.12, 0.18);
    }

    playSnap() {
        this.init();
        this.playTone(440, 'triangle', 0.1, 0.2);
        this.playTone(880, 'sine', 0.15, 0.2, 0.05);
    }

    playSuccessChime() {
        this.init();
        [523.25, 659.25, 783.99, 1046.50].forEach((f, idx) => {
            this.playTone(f, 'sine', 0.4, 0.15, idx * 0.1);
        });
    }

    playWhoosh() {
        this.init();
        this.playTone(180, 'sine', 0.3, 0.15);
    }
}

const sounds = new SoundEngine();


/* ============================================================================
   DATE & TIME UTILITIES (STRICT LOCAL TIME)
   ============================================================================ */
function parseLocalDate(dateStr) {
    if (dateStr instanceof Date) return dateStr;
    const parts = String(dateStr).match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/);
    if (parts) {
        return new Date(
            parseInt(parts[1], 10),
            parseInt(parts[2], 10) - 1,
            parseInt(parts[3], 10),
            parseInt(parts[4], 10),
            parseInt(parts[5], 10),
            parseInt(parts[6], 10)
        );
    }
    return new Date(dateStr);
}


/* ============================================================================
   MASTER APPLICATION CONTROLLER
   ============================================================================ */
let countdownTimerInterval = null;
let isCinematicRevealRunning = false;
let isBirthdayUnlockedState = false;

document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.remove("is-loading");
    initializeBirthdayExperience();
});

function initializeBirthdayExperience() {
    initParticleStarfield();
    initCursorTrail();
    initFriendPersonalization();
    initLockedInteractiveElements();

    const targetDate = parseLocalDate(birthdayConfig.birthdayDate);
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    // Check query string for developer testing if needed (e.g. ?unlock=1)
    const urlParams = new URLSearchParams(window.location.search);
    const forceUnlock = urlParams.get("unlock") === "1" || urlParams.get("unlocked") === "true";

    if (difference <= 0 || forceUnlock) {
        // Birthday already arrived -> Show unlocked experience directly
        unlockBirthdayExperience();
    } else {
        // STRICT LOCK: Before midnight -> Show countdown ONLY
        showLockedState();
    }
}


/* ----------------------------------------------------------------------------
   2. STRICT LOCKED STATE & COUNTDOWN CONTROLLER
   ---------------------------------------------------------------------------- */
function showLockedState() {
    isBirthdayUnlockedState = false;
    document.body.classList.remove("birthday-unlocked");

    const stateCountdown = document.getElementById("state-countdown");
    const stateUnlocked = document.getElementById("state-unlocked");
    const floatingControls = document.getElementById("floating-controls");
    const floatingNav = document.getElementById("floating-nav");

    if (stateCountdown) stateCountdown.classList.remove("hidden");
    if (stateUnlocked) stateUnlocked.classList.add("hidden");
    if (floatingControls) floatingControls.classList.add("hidden");
    if (floatingNav) floatingNav.classList.add("hidden");

    // Strictly ensure no music is playing before midnight
    stopBirthdayMusic();

    // Start timer interval
    if (countdownTimerInterval) clearInterval(countdownTimerInterval);
    updateCountdown();
    countdownTimerInterval = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    if (isCinematicRevealRunning || isBirthdayUnlockedState) return;

    const targetDate = parseLocalDate(birthdayConfig.birthdayDate);
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
        clearInterval(countdownTimerInterval);
        startMidnightReveal();
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((difference % (1000 * 60)) / 1000);

    const daysEl = document.getElementById("count-days");
    const hoursEl = document.getElementById("count-hours");
    const minsEl = document.getElementById("count-minutes");
    const secsEl = document.getElementById("count-seconds");

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minsEl) minsEl.textContent = String(mins).padStart(2, '0');
    if (secsEl) secsEl.textContent = String(secs).padStart(2, '0');

    // Dynamic countdown message based on remaining time
    const dynamicMsgEl = document.getElementById("countdown-dynamic-msg");
    if (dynamicMsgEl) {
        if (difference > 7 * 24 * 3600 * 1000) {
            dynamicMsgEl.textContent = "Something beautiful is getting closer...";
        } else if (difference > 24 * 3600 * 1000) {
            dynamicMsgEl.textContent = "The countdown has begun... 👀";
        } else if (difference > 3600 * 1000) {
            dynamicMsgEl.textContent = "Tomorrow, the surprise unlocks. ❤️";
        } else if (difference > 10 * 60 * 1000) {
            dynamicMsgEl.textContent = "Almost time...";
        } else if (difference > 60 * 1000) {
            dynamicMsgEl.textContent = "The secret is getting closer...";
        } else {
            dynamicMsgEl.textContent = "Get ready... ❤️";
        }
    }

    // 30 Seconds intensification
    const bgCanvas = document.getElementById("bg-canvas");
    if (difference <= 30 * 1000 && difference > 10 * 1000) {
        if (bgCanvas) bgCanvas.style.filter = "brightness(1.4)";
    }

    // Cinematic Last 10 Seconds Enlarge Overlay
    const cinematicOverlay = document.getElementById("cinematic-countdown-overlay");
    const cinematicNumber = document.getElementById("cinematic-number");

    if (difference <= 10 * 1000 && difference > 0) {
        if (cinematicOverlay) {
            cinematicOverlay.classList.remove("hidden");
            const secondsLeft = Math.ceil(difference / 1000);
            if (cinematicNumber) cinematicNumber.textContent = secondsLeft;
        }
    } else {
        if (cinematicOverlay) cinematicOverlay.classList.add("hidden");
    }
}


/* ----------------------------------------------------------------------------
   3. LOCKED SCREEN INTERACTIVE FEATURES (LOCK, HINTS, MYSTERY)
   ---------------------------------------------------------------------------- */
function initLockedInteractiveElements() {
    // 1. Lock Icon Click Interaction
    const lockBtn = document.getElementById("lock-icon-btn");
    const lockDeniedToast = document.getElementById("lock-denied-toast");
    let lockToastTimeout = null;

    if (lockBtn && lockDeniedToast) {
        lockBtn.addEventListener("click", () => {
            sounds.playWhoosh();
            lockBtn.classList.add("shake");
            setTimeout(() => lockBtn.classList.remove("shake"), 500);

            lockDeniedToast.classList.remove("hidden");
            if (lockToastTimeout) clearTimeout(lockToastTimeout);
            lockToastTimeout = setTimeout(() => {
                lockDeniedToast.classList.add("hidden");
            }, 3000);
        });
    }

    // 2. Hint Button ("Can I get a hint? 👀")
    const hintBtn = document.getElementById("btn-request-hint");
    const hintBox = document.getElementById("hint-response-box");
    const hintText = document.getElementById("hint-response-text");
    const hintResponses = [
        "Nice try 😂",
        "The surprise is still locked 🔐",
        "Midnight will tell you everything...",
        "No cheating 😌",
        "Patience, my friend... ❤️",
        "All secrets are guarded until 12:00 AM ✨"
    ];
    let hintTimeout = null;

    if (hintBtn && hintBox && hintText) {
        hintBtn.addEventListener("click", () => {
            sounds.playPop();
            const randomMsg = hintResponses[Math.floor(Math.random() * hintResponses.length)];
            hintText.textContent = randomMsg;
            hintBox.classList.remove("hidden");

            if (hintTimeout) clearTimeout(hintTimeout);
            hintTimeout = setTimeout(() => {
                hintBox.classList.add("hidden");
            }, 2500);
        });
    }

    // 3. Periodic Mystery Hints (Every 14s for 2.5s)
    const mysteryBanner = document.getElementById("mystery-hint-banner");
    const mysteryText = document.getElementById("mystery-hint-text");
    const mysteryMessages = [
        "Something is waiting...",
        "Not yet 👀",
        "Patience...",
        "Almost...",
        "Keep watching...",
        "Midnight knows..."
    ];

    if (mysteryBanner && mysteryText) {
        setInterval(() => {
            if (isBirthdayUnlockedState || isCinematicRevealRunning) return;
            const randomText = mysteryMessages[Math.floor(Math.random() * mysteryMessages.length)];
            mysteryText.textContent = randomText;
            mysteryBanner.classList.remove("hidden");

            setTimeout(() => {
                mysteryBanner.classList.add("hidden");
            }, 2800);
        }, 14000);
    }
}


/* ----------------------------------------------------------------------------
   4. MIDNIGHT CINEMATIC REVEAL (12 STEP SEQUENCE)
   ---------------------------------------------------------------------------- */
function startMidnightReveal() {
    if (isCinematicRevealRunning) return;
    isCinematicRevealRunning = true;

    // Step 1: Countdown freezes (interval already cleared)
    const cinematicOverlay = document.getElementById("cinematic-countdown-overlay");
    if (cinematicOverlay) cinematicOverlay.classList.add("hidden");

    const revealStage = document.getElementById("midnight-reveal-stage");
    const flashOverlay = document.getElementById("midnight-flash-overlay");
    const expandingCircle = document.getElementById("midnight-expanding-circle");
    const lockAnim = document.getElementById("midnight-lock-anim");
    const waitOverText = document.getElementById("midnight-wait-over");
    const happyBdayText = document.getElementById("midnight-happy-bday");

    // Reveal stage visible
    if (revealStage) revealStage.classList.remove("hidden");

    // Step 2: Screen becomes darker
    sounds.playWhoosh();

    // Step 3 & 4: Lock cracks & open animation plays
    setTimeout(() => {
        if (lockAnim) lockAnim.innerHTML = `<i class="fa-solid fa-lock-open fa-shake"></i>`;
        sounds.playSnap();
    }, 600);

    // Step 5: Circular light expands from center
    setTimeout(() => {
        if (expandingCircle) expandingCircle.classList.add("expanded");
        if (flashOverlay) flashOverlay.classList.add("active");
    }, 1200);

    // Step 6, 7, 8: Particles explode, Confetti appears, Stars brighten
    setTimeout(() => {
        if (flashOverlay) flashOverlay.classList.remove("active");
        if (typeof confetti === 'function') {
            confetti({
                particleCount: 160,
                spread: 120,
                origin: { y: 0.5 },
                colors: ['#ffd700', '#ff3377', '#8b5cf6', '#38bdf8']
            });
        }
        sounds.playSuccessChime();
    }, 1700);

    // Step 10: Show "THE WAIT IS OVER ✨"
    setTimeout(() => {
        if (lockAnim) lockAnim.classList.add("hidden");
        if (waitOverText) waitOverText.classList.remove("hidden");
    }, 2400);

    // Step 11: Show "HAPPY BIRTHDAY ❤️"
    setTimeout(() => {
        if (waitOverText) waitOverText.classList.add("hidden");
        if (happyBdayText) happyBdayText.classList.remove("hidden");
        if (typeof confetti === 'function') {
            confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
        }
    }, 3800);

    // Step 12: Reveal the full birthday experience & start music!
    setTimeout(() => {
        if (revealStage) revealStage.classList.add("hidden");
        isCinematicRevealRunning = false;
        unlockBirthdayExperience();
        startBirthdayMusic();
    }, 5500);
}


/* ----------------------------------------------------------------------------
   5. UNLOCKED BIRTHDAY EXPERIENCE
   ---------------------------------------------------------------------------- */
function unlockBirthdayExperience() {
    isBirthdayUnlockedState = true;
    document.body.classList.add("birthday-unlocked");

    const stateCountdown = document.getElementById("state-countdown");
    const stateUnlocked = document.getElementById("state-unlocked");
    const floatingControls = document.getElementById("floating-controls");
    const floatingNav = document.getElementById("floating-nav");

    if (stateCountdown) stateCountdown.classList.add("hidden");
    if (stateUnlocked) stateUnlocked.classList.remove("hidden");
    if (floatingControls) floatingControls.classList.remove("hidden");
    if (floatingNav) floatingNav.classList.remove("hidden");

    // Initialize all unlocked features
    initMusicControl();
    initSurpriseWidget();
    initPhotoReveal();
    initPolaroidGallery();
    initializePuzzle();
    initTimeline();
    initQuotes();
    initOpenWhenLetters();
    initBirthdayCake();
    initFriendshipMeter();
    initMemoryGame();
    initPersonalityQuiz();
    initSecretMessage();
    initFinalFinale();
    initScrollAnimations();
    initFloatingNav();

    document.title = `Happy Birthday ${birthdayConfig.friendName}! 🎂🎉`;
}


/* ----------------------------------------------------------------------------
   6. BIRTHDAY MUSIC & AUTOPLAY HANDLING
   ---------------------------------------------------------------------------- */
let isMusicActive = false;

function startBirthdayMusic() {
    const audioEl = document.getElementById("bgm-audio");
    const unlockModalOverlay = document.getElementById("unlock-modal-overlay");
    const btnEnterSurprise = document.getElementById("btn-enter-surprise");

    if (audioEl && birthdayConfig.music) {
        audioEl.src = birthdayConfig.music;
    }

    sounds.init();

    // Attempt automatic playback
    if (audioEl) {
        const playPromise = audioEl.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                // Music started automatically!
                setMusicPlayingState(true);
            }).catch((err) => {
                // Browser blocked autoplay -> Show graceful "Enter Your Surprise" button
                console.log("Autoplay was prevented by browser policy; showing enter button.", err);
                if (unlockModalOverlay) {
                    unlockModalOverlay.classList.remove("hidden");
                }
            });
        }
    }

    if (btnEnterSurprise) {
        btnEnterSurprise.onclick = () => {
            sounds.init();
            if (audioEl) {
                audioEl.play().catch(() => {
                    sounds.startBirthdayMelody();
                });
            } else {
                sounds.startBirthdayMelody();
            }
            setMusicPlayingState(true);
            if (unlockModalOverlay) unlockModalOverlay.classList.add("hidden");
        };
    }
}

function stopBirthdayMusic() {
    const audioEl = document.getElementById("bgm-audio");
    if (audioEl) audioEl.pause();
    sounds.stopBirthdayMelody();
    setMusicPlayingState(false);
}

function setMusicPlayingState(playing) {
    isMusicActive = playing;
    const musicBtn = document.getElementById("music-btn");
    const statusText = document.getElementById("music-status-text");

    if (musicBtn) {
        if (playing) {
            musicBtn.classList.add("playing");
            if (statusText) statusText.textContent = "Playing";
        } else {
            musicBtn.classList.remove("playing");
            if (statusText) statusText.textContent = "Paused";
        }
    }
}

function initMusicControl() {
    const musicBtn = document.getElementById("music-btn");
    const audioEl = document.getElementById("bgm-audio");

    if (musicBtn) {
        musicBtn.onclick = () => {
            if (isMusicActive) {
                if (audioEl) audioEl.pause();
                sounds.stopBirthdayMelody();
                setMusicPlayingState(false);
            } else {
                sounds.init();
                if (audioEl && audioEl.src) {
                    audioEl.play().catch(() => {
                        sounds.startBirthdayMelody();
                    });
                } else {
                    sounds.startBirthdayMelody();
                }
                setMusicPlayingState(true);
            }
        };
    }

    if (audioEl) {
        audioEl.addEventListener("ended", () => {
            if (isMusicActive) audioEl.play().catch(() => { });
        });
    }
}


/* ----------------------------------------------------------------------------
   7. PHOTO JIGSAW PUZZLE (FIXED TO CLEARLY REVEAL COMPLETE PHOTO)
   ---------------------------------------------------------------------------- */
let puzzleGridSize = 3; // 3x3 = 9 pieces (smooth, fast, responsive)
let puzzleMoves = 0;
let puzzleSeconds = 0;
let puzzleTimerInterval = null;
let puzzleDraggedPiece = null;

function initializePuzzle() {
    const startBtn = document.getElementById("puzzle-start-btn");
    const previewBtn = document.getElementById("puzzle-preview-btn");
    const autoSolveBtn = document.getElementById("puzzle-auto-solve");
    const replayBtn = document.getElementById("puzzle-replay-btn");

    if (startBtn) startBtn.onclick = buildPuzzleArena;
    if (replayBtn) replayBtn.onclick = buildPuzzleArena;
    if (previewBtn) {
        previewBtn.onclick = () => {
            openLightbox(birthdayConfig.gallery.findIndex(g => g.src === birthdayConfig.puzzleImage) || 0);
        };
    }
    if (autoSolveBtn) {
        autoSolveBtn.onclick = () => {
            sounds.playSuccessChime();
            const board = document.getElementById("puzzle-board");
            const pool = document.getElementById("puzzle-pool");
            const slots = board.querySelectorAll(".puzzle-slot");
            const pieces = Array.from(pool.querySelectorAll(".puzzle-piece"));

            pieces.forEach(p => {
                const idx = parseInt(p.dataset.pieceIndex, 10);
                const slot = slots[idx];
                if (slot) {
                    slot.appendChild(p);
                    p.setAttribute("draggable", "false");
                    slot.classList.add("correct-placed");
                }
            });

            checkPuzzleCompletion();
        };
    }

    buildPuzzleArena();
}

function buildPuzzleArena() {
    if (puzzleTimerInterval) clearInterval(puzzleTimerInterval);
    puzzleSeconds = 0;
    puzzleMoves = 0;

    const board = document.getElementById("puzzle-board");
    const pool = document.getElementById("puzzle-pool");
    const movesEl = document.getElementById("puzzle-moves");
    const timerEl = document.getElementById("puzzle-timer");
    const placedEl = document.getElementById("puzzle-placed");
    const interactiveArena = document.getElementById("puzzle-interactive-arena");
    const completedCard = document.getElementById("puzzle-completed-card");

    if (movesEl) movesEl.textContent = "0";
    if (timerEl) timerEl.textContent = "00:00";
    if (placedEl) placedEl.textContent = `0 / ${puzzleGridSize * puzzleGridSize}`;

    // Hide completed card and reveal interactive arena
    if (completedCard) completedCard.classList.add("hidden");
    if (interactiveArena) {
        interactiveArena.classList.remove("hidden");
        interactiveArena.style.opacity = "1";
    }

    if (!board || !pool) return;
    board.innerHTML = "";
    pool.innerHTML = "";

    const totalPieces = puzzleGridSize * puzzleGridSize;

    // Build Board Target Slots
    for (let i = 0; i < totalPieces; i++) {
        const slot = document.createElement("div");
        slot.className = "puzzle-slot";
        slot.dataset.slotIndex = i;

        slot.addEventListener("dragover", (e) => {
            e.preventDefault();
            slot.classList.add("drag-over");
        });

        slot.addEventListener("dragleave", () => {
            slot.classList.remove("drag-over");
        });

        slot.addEventListener("drop", (e) => {
            e.preventDefault();
            slot.classList.remove("drag-over");
            if (puzzleDraggedPiece) handlePuzzlePieceDrop(puzzleDraggedPiece, slot);
        });

        // Mobile tap-to-place support
        slot.addEventListener("click", () => {
            const selectedPiece = pool.querySelector(".puzzle-piece.selected-mobile");
            if (selectedPiece) {
                handlePuzzlePieceDrop(selectedPiece, slot);
                selectedPiece.classList.remove("selected-mobile");
            }
        });

        board.appendChild(slot);
    }

    // Build Scrambled Pieces Pool
    const indices = Array.from({ length: totalPieces }, (_, i) => i);
    indices.sort(() => Math.random() - 0.5);

    const puzzleImgUrl = birthdayConfig.puzzleImage || "assets/puzzle.jpg";

    indices.forEach(correctIndex => {
        const piece = document.createElement("div");
        piece.className = "puzzle-piece";
        piece.dataset.pieceIndex = correctIndex;
        piece.setAttribute("draggable", "true");
        piece.style.backgroundImage = `url('${puzzleImgUrl}')`;

        const row = Math.floor(correctIndex / puzzleGridSize);
        const col = correctIndex % puzzleGridSize;
        const xPercent = (col / (puzzleGridSize - 1)) * 100;
        const yPercent = (row / (puzzleGridSize - 1)) * 100;
        piece.style.backgroundPosition = `${xPercent}% ${yPercent}%`;

        // Drag Events
        piece.addEventListener("dragstart", () => {
            puzzleDraggedPiece = piece;
            sounds.playPop();
        });

        piece.addEventListener("dragend", () => {
            puzzleDraggedPiece = null;
        });

        // Mobile Tap Selection
        piece.addEventListener("click", () => {
            pool.querySelectorAll(".puzzle-piece").forEach(p => p.classList.remove("selected-mobile"));
            piece.classList.add("selected-mobile");
            sounds.playPop();
        });

        pool.appendChild(piece);
    });

    // Start timer
    puzzleTimerInterval = setInterval(() => {
        puzzleSeconds++;
        const m = String(Math.floor(puzzleSeconds / 60)).padStart(2, '0');
        const s = String(puzzleSeconds % 60).padStart(2, '0');
        if (timerEl) timerEl.textContent = `${m}:${s}`;
    }, 1000);
}

function handlePuzzlePieceDrop(piece, slot) {
    puzzleMoves++;
    const movesEl = document.getElementById("puzzle-moves");
    if (movesEl) movesEl.textContent = puzzleMoves;

    const pieceIdx = parseInt(piece.dataset.pieceIndex, 10);
    const slotIdx = parseInt(slot.dataset.slotIndex, 10);

    if (pieceIdx === slotIdx) {
        sounds.playSnap();
        slot.appendChild(piece);
        piece.setAttribute("draggable", "false");
        piece.style.cursor = "default";
        slot.classList.add("correct-placed");

        checkPuzzleCompletion();
    } else {
        sounds.playWhoosh();
        piece.classList.add("shake");
        setTimeout(() => piece.classList.remove("shake"), 400);
    }
}

function checkPuzzleCompletion() {
    const board = document.getElementById("puzzle-board");
    if (!board) return;

    const totalPieces = puzzleGridSize * puzzleGridSize;
    const placedEl = document.getElementById("puzzle-placed");
    const correctlyPlacedSlots = board.querySelectorAll(".puzzle-slot.correct-placed");

    if (placedEl) placedEl.textContent = `${correctlyPlacedSlots.length} / ${totalPieces}`;

    // Verify EVERY piece is in its correct slot
    let isFullySolved = true;
    const slots = board.querySelectorAll(".puzzle-slot");

    if (slots.length !== totalPieces) return;

    slots.forEach(slot => {
        const piece = slot.querySelector(".puzzle-piece");
        if (!piece) {
            isFullySolved = false;
        } else {
            const pIdx = parseInt(piece.dataset.pieceIndex, 10);
            const sIdx = parseInt(slot.dataset.slotIndex, 10);
            if (pIdx !== sIdx) isFullySolved = false;
        }
    });

    if (isFullySolved && correctlyPlacedSlots.length === totalPieces) {
        completePuzzle();
    }
}

function completePuzzle() {
    if (puzzleTimerInterval) clearInterval(puzzleTimerInterval);

    // Step 1: All puzzle pieces briefly glow
    const pieces = document.querySelectorAll(".puzzle-board .puzzle-piece");
    pieces.forEach(p => {
        p.style.boxShadow = "0 0 25px #ffd700, inset 0 0 15px #ffd700";
        p.style.borderColor = "#ffd700";
    });

    // Step 2 & 3: Celebration sound + fanfare
    sounds.playSuccessChime();

    // Step 4: Confetti burst
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 140,
            spread: 90,
            origin: { y: 0.6 },
            colors: ['#ffd700', '#ff3377', '#8b5cf6', '#22c55e']
        });
    }

    // Step 5 & 6: Smoothly reveal the complete original full photo in dedicated card
    setTimeout(() => {
        revealCompletedPuzzleImage();
    }, 800);
}

function revealCompletedPuzzleImage() {
    const interactiveArena = document.getElementById("puzzle-interactive-arena");
    const completedCard = document.getElementById("puzzle-completed-card");
    const fullImg = document.getElementById("puzzle-full-image");

    if (fullImg) {
        fullImg.src = birthdayConfig.puzzleImage || "assets/puzzle.jpg";
    }

    if (interactiveArena) {
        interactiveArena.classList.add("hidden");
    }

    if (completedCard) {
        completedCard.classList.remove("hidden");
    }
}


/* ----------------------------------------------------------------------------
   8. HERO & FRIEND PERSONALIZATION
   ---------------------------------------------------------------------------- */
function initFriendPersonalization() {
    const friend = birthdayConfig.friendName || "BESTIE";

    const friendNameDisplay = document.getElementById("friend-name-display");
    if (friendNameDisplay) friendNameDisplay.textContent = `${friend} ❤️`;

    const finalFriendName = document.getElementById("final-friend-name");
    if (finalFriendName) finalFriendName.textContent = friend;

    const footerFriendName = document.getElementById("footer-friend-name");
    if (footerFriendName) footerFriendName.textContent = friend;
}


/* ----------------------------------------------------------------------------
   9. PHOTO REVEAL SECTION
   ---------------------------------------------------------------------------- */
let currentRevealPhotoIndex = 0;

function initPhotoReveal() {
    const btnReveal = document.getElementById("btn-reveal-memory");
    const placeholder = document.getElementById("reveal-placeholder");
    const revealedCard = document.getElementById("revealed-photo-card");
    const featuredImg = document.getElementById("featured-reveal-img");
    const btnNext = document.getElementById("btn-next-reveal");

    const revealCaptions = [
        { title: "That Radiant Smile ❤️", desc: "Some moments make time stand completely still. This will always be one of my favorite memories with you." },
        { title: "Pure Unfiltered Joy 😂", desc: "No filters, no posing, just genuine laughter and unforgettable memories." },
        { title: "Adventure & Spontaneity ✨", desc: "Every journey with you turns into an epic story we tell for years." },
        { title: "To Many More Years! 🥂", desc: "Looking back at our journey and looking forward to creating 1,000 more memories!" }
    ];

    if (btnReveal) {
        btnReveal.onclick = () => {
            sounds.playSuccessChime();
            placeholder.classList.add("hidden");
            revealedCard.classList.remove("hidden");
            if (typeof confetti === 'function') confetti({ particleCount: 60, spread: 70 });
        };
    }

    if (btnNext) {
        btnNext.onclick = () => {
            sounds.playPop();
            currentRevealPhotoIndex = (currentRevealPhotoIndex + 1) % birthdayConfig.photos.length;
            featuredImg.style.opacity = '0';
            setTimeout(() => {
                featuredImg.src = birthdayConfig.photos[currentRevealPhotoIndex];
                const captionData = revealCaptions[currentRevealPhotoIndex % revealCaptions.length];
                document.getElementById("reveal-photo-title").textContent = captionData.title;
                document.getElementById("reveal-photo-desc").textContent = `"${captionData.desc}"`;
                featuredImg.style.opacity = '1';
            }, 250);
        };
    }
}


/* ----------------------------------------------------------------------------
   10. POLAROID GALLERY & LIGHTBOX
   ---------------------------------------------------------------------------- */
let currentLightboxIndex = 0;

function initPolaroidGallery() {
    const grid = document.getElementById("polaroid-grid");
    if (!grid) return;
    grid.innerHTML = "";

    birthdayConfig.gallery.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "polaroid-card";
        card.setAttribute("tabindex", "0");
        card.setAttribute("role", "button");
        card.setAttribute("aria-label", `View photo: ${item.title}`);

        card.innerHTML = `
            <div class="polaroid-img-wrap">
                <img src="${item.src}" alt="${item.title}" loading="lazy">
            </div>
            <div class="polaroid-caption">${item.caption}</div>
        `;

        card.onclick = () => openLightbox(index);
        card.onkeydown = (e) => {
            if (e.key === 'Enter' || e.key === ' ') openLightbox(index);
        };

        grid.appendChild(card);
    });

    initLightboxControls();
}

function initLightboxControls() {
    const modal = document.getElementById("lightbox-modal");
    const backdrop = document.getElementById("lightbox-backdrop");
    const closeBtn = document.getElementById("lightbox-close-btn");
    const prevBtn = document.getElementById("lightbox-prev-btn");
    const nextBtn = document.getElementById("lightbox-next-btn");

    if (closeBtn) closeBtn.onclick = closeLightbox;
    if (backdrop) backdrop.onclick = closeLightbox;

    if (prevBtn) {
        prevBtn.onclick = () => {
            sounds.playPop();
            currentLightboxIndex = (currentLightboxIndex - 1 + birthdayConfig.gallery.length) % birthdayConfig.gallery.length;
            updateLightboxContent();
        };
    }

    if (nextBtn) {
        nextBtn.onclick = () => {
            sounds.playPop();
            currentLightboxIndex = (currentLightboxIndex + 1) % birthdayConfig.gallery.length;
            updateLightboxContent();
        };
    }

    document.addEventListener("keydown", (e) => {
        if (modal && !modal.classList.contains("hidden")) {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowLeft" && prevBtn) prevBtn.click();
            if (e.key === "ArrowRight" && nextBtn) nextBtn.click();
        }
    });
}

function openLightbox(index) {
    sounds.playPop();
    currentLightboxIndex = index;
    updateLightboxContent();
    const modal = document.getElementById("lightbox-modal");
    if (modal) modal.classList.remove("hidden");
}

function updateLightboxContent() {
    const item = birthdayConfig.gallery[currentLightboxIndex];
    const img = document.getElementById("lightbox-img");
    const caption = document.getElementById("lightbox-caption");

    if (img) img.src = item.src;
    if (caption) caption.textContent = `${item.title} — ${item.caption}`;
}

function closeLightbox() {
    sounds.playPop();
    const modal = document.getElementById("lightbox-modal");
    if (modal) modal.classList.add("hidden");
}


/* ----------------------------------------------------------------------------
   11. TIMELINE, QUOTES & OPEN WHEN LETTERS
   ---------------------------------------------------------------------------- */
function initTimeline() {
    const container = document.getElementById("timeline-items-container");
    if (!container) return;
    container.innerHTML = "";

    birthdayConfig.timeline.forEach(item => {
        const row = document.createElement("div");
        row.className = "timeline-item animate-on-scroll";
        row.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-card">
                <div class="timeline-tag">${item.tag}</div>
                <h3 class="timeline-title">${item.title}</h3>
                <p class="timeline-desc">${item.desc}</p>
            </div>
        `;
        container.appendChild(row);
    });
}

let currentQuoteIndex = 0;
function initQuotes() {
    const quoteText = document.getElementById("quote-text");
    const quoteAuthor = document.getElementById("quote-author");
    const nextBtn = document.getElementById("btn-next-quote");
    const copyBtn = document.getElementById("btn-copy-quote");

    function renderQuote() {
        const text = birthdayConfig.quotes[currentQuoteIndex];
        if (quoteText) {
            quoteText.style.opacity = '0';
            setTimeout(() => {
                quoteText.textContent = `"${text}"`;
                if (quoteAuthor) quoteAuthor.textContent = `— To My Best Friend ${birthdayConfig.friendName} ❤️`;
                quoteText.style.opacity = '1';
            }, 200);
        }
    }

    if (nextBtn) {
        nextBtn.onclick = () => {
            sounds.playPop();
            currentQuoteIndex = (currentQuoteIndex + 1) % birthdayConfig.quotes.length;
            renderQuote();
        };
    }

    if (copyBtn) {
        copyBtn.onclick = () => {
            sounds.playSnap();
            const textToCopy = `"${birthdayConfig.quotes[currentQuoteIndex]}" — To ${birthdayConfig.friendName}`;
            navigator.clipboard.writeText(textToCopy).then(() => {
                copyBtn.innerHTML = `<i class="fa-solid fa-check"></i> Copied!`;
                setTimeout(() => {
                    copyBtn.innerHTML = `<i class="fa-regular fa-copy"></i> Copy`;
                }, 2000);
            });
        };
    }

    renderQuote();
}

function initOpenWhenLetters() {
    const grid = document.getElementById("letters-grid");
    const modal = document.getElementById("letter-modal");
    const backdrop = document.getElementById("letter-modal-backdrop");
    const closeBtn = document.getElementById("letter-close-btn");
    const modalTitle = document.getElementById("letter-modal-title");
    const modalBody = document.getElementById("letter-modal-body");
    const modalSign = document.getElementById("letter-modal-signature");

    if (!grid) return;
    grid.innerHTML = "";

    birthdayConfig.letters.forEach(letter => {
        const card = document.createElement("div");
        card.className = "envelope-card";
        card.setAttribute("tabindex", "0");
        card.setAttribute("role", "button");
        card.setAttribute("aria-label", letter.title);

        card.innerHTML = `
            <div class="envelope-icon">${letter.icon}</div>
            <h3 class="envelope-title">${letter.title}</h3>
            <span class="envelope-hint">Click to open 💌</span>
        `;

        card.onclick = () => {
            sounds.playPop();
            modalTitle.textContent = letter.title;
            modalBody.textContent = letter.message;
            modalSign.innerHTML = `${letter.sign}<br>— Forever Your Best Friend ❤️`;
            modal.classList.remove("hidden");
        };

        grid.appendChild(card);
    });

    if (closeBtn) closeBtn.onclick = () => {
        sounds.playPop();
        modal.classList.add("hidden");
    };
    if (backdrop) backdrop.onclick = () => modal.classList.add("hidden");
}


/* ----------------------------------------------------------------------------
   12. CAKE, FRIENDSHIP METER, MEMORY GAME, QUIZ, SECRET & FINALE
   ---------------------------------------------------------------------------- */
function initBirthdayCake() {
    const cakeStage = document.getElementById("cake-stage");
    const blowBtn = document.getElementById("btn-blow-candles");
    const relightBtn = document.getElementById("btn-relight-candles");
    const wishBanner = document.getElementById("wish-accepted-banner");
    const flames = document.querySelectorAll(".flame");
    const smokes = document.querySelectorAll(".smoke");
    let areCandlesLit = true;

    function blowCandles() {
        if (!areCandlesLit) return;
        areCandlesLit = false;
        sounds.playWhoosh();
        flames.forEach(f => f.classList.add("blown-out"));
        smokes.forEach(s => s.classList.add("active"));
        if (blowBtn) blowBtn.classList.add("hidden");
        if (relightBtn) relightBtn.classList.remove("hidden");
        if (wishBanner) wishBanner.classList.remove("hidden");
        if (typeof confetti === 'function') confetti({ particleCount: 100, spread: 90, origin: { y: 0.65 } });
    }

    function relightCandles() {
        areCandlesLit = true;
        sounds.playPop();
        flames.forEach(f => f.classList.remove("blown-out"));
        smokes.forEach(s => s.classList.remove("active"));
        if (blowBtn) blowBtn.classList.remove("hidden");
        if (relightBtn) relightBtn.classList.add("hidden");
        if (wishBanner) wishBanner.classList.add("hidden");
    }

    if (cakeStage) cakeStage.onclick = blowCandles;
    if (blowBtn) blowBtn.onclick = blowCandles;
    if (relightBtn) relightBtn.onclick = relightCandles;
}

function initFriendshipMeter() {
    const scanBtn = document.getElementById("btn-scan-friendship");
    const circle = document.getElementById("meter-circle");
    const percentDisplay = document.getElementById("meter-percent-display");
    const statusTitle = document.getElementById("meter-status-title");
    const statusDesc = document.getElementById("meter-status-desc");
    const breakdown = document.getElementById("meter-breakdown");
    const circumference = 2 * Math.PI * 80;

    if (scanBtn) {
        scanBtn.onclick = () => {
            sounds.playPop();
            scanBtn.disabled = true;
            statusTitle.textContent = "Calibrating Friendship Algorithms...";
            statusDesc.textContent = "Scanning shared jokes, trust levels, and memories...";

            const duration = 1500;
            const startTime = performance.now();

            function animate(now) {
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const currentVal = Math.floor(progress * 100);

                const offset = circumference - (progress * circumference);
                circle.style.strokeDashoffset = offset;
                percentDisplay.textContent = `${currentVal}%`;

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    setTimeout(() => {
                        sounds.playSuccessChime();
                        percentDisplay.textContent = "9999%";
                        percentDisplay.style.color = "#ff3377";
                        statusTitle.textContent = "ERROR: Friendship Level Too High! 😂❤️";
                        statusDesc.textContent = "Our compatibility broke the scanner. Best friends for eternity certified!";
                        breakdown.classList.remove("hidden");
                        scanBtn.disabled = false;
                        scanBtn.innerHTML = `<i class="fa-solid fa-check"></i> Scanned Successfully!`;
                        if (typeof confetti === 'function') confetti({ particleCount: 70 });
                    }, 400);
                }
            }
            requestAnimationFrame(animate);
        };
    }
}

function initMemoryGame() {
    const grid = document.getElementById("memory-cards-grid");
    const flipsEl = document.getElementById("game-flips");
    const matchesEl = document.getElementById("game-matches");
    const restartBtn = document.getElementById("btn-restart-game");
    const winBox = document.getElementById("game-win-box");

    const icons = ["🎂", "🎁", "💖", "🍕", "🌟", "🥂"];
    let cards = [...icons, ...icons];
    let flippedCards = [];
    let matchedCount = 0;
    let flipCount = 0;
    let isLocked = false;

    function buildGame() {
        cards.sort(() => Math.random() - 0.5);
        if (grid) grid.innerHTML = "";
        flippedCards = [];
        matchedCount = 0;
        flipCount = 0;
        isLocked = false;

        if (flipsEl) flipsEl.textContent = "0";
        if (matchesEl) matchesEl.textContent = `0 / ${icons.length}`;
        if (winBox) winBox.classList.add("hidden");

        cards.forEach((icon, index) => {
            const card = document.createElement("div");
            card.className = "memory-card";
            card.dataset.icon = icon;
            card.dataset.cardId = index;
            card.innerHTML = `
                <div class="card-face card-front"><i class="fa-solid fa-heart"></i></div>
                <div class="card-face card-back">${icon}</div>
            `;
            card.onclick = () => handleCardFlip(card);
            if (grid) grid.appendChild(card);
        });
    }

    function handleCardFlip(card) {
        if (isLocked || card.classList.contains("flipped") || card.classList.contains("matched")) return;
        sounds.playPop();
        card.classList.add("flipped");
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            flipCount++;
            if (flipsEl) flipsEl.textContent = flipCount;
            isLocked = true;
            const [c1, c2] = flippedCards;

            if (c1.dataset.icon === c2.dataset.icon) {
                sounds.playSnap();
                c1.classList.add("matched");
                c2.classList.add("matched");
                matchedCount++;
                if (matchesEl) matchesEl.textContent = `${matchedCount} / ${icons.length}`;
                flippedCards = [];
                isLocked = false;

                if (matchedCount === icons.length) {
                    sounds.playSuccessChime();
                    if (winBox) winBox.classList.remove("hidden");
                    if (typeof confetti === 'function') confetti({ particleCount: 80 });
                }
            } else {
                setTimeout(() => {
                    c1.classList.remove("flipped");
                    c2.classList.remove("flipped");
                    flippedCards = [];
                    isLocked = false;
                }, 750);
            }
        }
    }

    if (restartBtn) restartBtn.onclick = buildGame;
    buildGame();
}

let currentQuizQuestion = 0;
let quizScore = 0;
function initPersonalityQuiz() {
    const qBox = document.getElementById("quiz-question-box");
    const rBox = document.getElementById("quiz-result-box");
    const qNum = document.getElementById("quiz-q-number");
    const qTitle = document.getElementById("quiz-q-title");
    const optionsList = document.getElementById("quiz-options-list");
    const progressFill = document.getElementById("quiz-progress-fill");
    const retakeBtn = document.getElementById("btn-retake-quiz");

    function renderQuestion() {
        const item = birthdayConfig.quiz[currentQuizQuestion];
        if (qNum) qNum.textContent = `Question ${currentQuizQuestion + 1} of ${birthdayConfig.quiz.length}`;
        if (qTitle) qTitle.textContent = item.q;
        if (progressFill) progressFill.style.width = `${((currentQuizQuestion + 1) / birthdayConfig.quiz.length) * 100}%`;

        if (optionsList) {
            optionsList.innerHTML = "";
            item.options.forEach((optText, optIdx) => {
                const btn = document.createElement("button");
                btn.className = "quiz-option-btn";
                btn.innerHTML = `<span>${optText}</span> <i class="fa-solid fa-chevron-right"></i>`;
                btn.onclick = () => {
                    sounds.playPop();
                    btn.classList.add("selected-correct");
                    quizScore++;
                    setTimeout(() => {
                        currentQuizQuestion++;
                        if (currentQuizQuestion < birthdayConfig.quiz.length) {
                            renderQuestion();
                        } else {
                            if (qBox) qBox.classList.add("hidden");
                            if (rBox) rBox.classList.remove("hidden");
                            sounds.playSuccessChime();
                            if (typeof confetti === 'function') confetti({ particleCount: 80 });
                        }
                    }, 400);
                };
                optionsList.appendChild(btn);
            });
        }
    }

    if (retakeBtn) {
        retakeBtn.onclick = () => {
            currentQuizQuestion = 0;
            quizScore = 0;
            if (rBox) rBox.classList.add("hidden");
            if (qBox) qBox.classList.remove("hidden");
            renderQuestion();
        };
    }

    renderQuestion();
}

function initSecretMessage() {
    const orbBtn = document.getElementById("secret-orb-btn");
    const secretBox = document.getElementById("secret-message-box");

    if (orbBtn && secretBox) {
        orbBtn.onclick = () => {
            sounds.playSuccessChime();
            secretBox.classList.toggle("hidden");
            if (!secretBox.classList.contains("hidden")) {
                if (typeof confetti === 'function') confetti({ particleCount: 70, spread: 70 });
            }
        };
    }
}

function initFinalFinale() {
    const finalTeaser = document.getElementById("final-teaser");
    const finalBtn = document.getElementById("btn-final-surprise");
    const unveiledStage = document.getElementById("final-unveiled-stage");
    const fireworksBtn = document.getElementById("btn-fireworks-burst");

    if (finalBtn) {
        finalBtn.onclick = () => {
            sounds.playSuccessChime();
            if (finalTeaser) finalTeaser.classList.add("hidden");
            if (unveiledStage) unveiledStage.classList.remove("hidden");
            launchFireworksCelebration();
        };
    }

    if (fireworksBtn) {
        fireworksBtn.onclick = () => {
            sounds.playPop();
            launchFireworksCelebration();
        };
    }
}

function launchFireworksCelebration() {
    if (typeof confetti !== 'function') return;
    const count = 200;
    const defaults = { origin: { y: 0.7 } };
    function fire(particleRatio, opts) {
        confetti(Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio)
        }));
    }
    fire(0.25, { spread: 26, startVelocity: 55, colors: ['#ff3377', '#ffd700'] });
    fire(0.2, { spread: 60, colors: ['#a855f7', '#38bdf8'] });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
}

function initSurpriseWidget() {
    const btn = document.getElementById("surprise-widget-btn");
    const modal = document.getElementById("surprise-modal");
    const backdrop = document.getElementById("surprise-modal-backdrop");
    const closeBtn = document.getElementById("surprise-modal-close");
    const anotherBtn = document.getElementById("surprise-another-btn");
    const emojiEl = document.getElementById("surprise-emoji");
    const titleEl = document.getElementById("surprise-title");
    const bodyEl = document.getElementById("surprise-body");

    function renderRandomSurprise() {
        const item = birthdayConfig.surprises[Math.floor(Math.random() * birthdayConfig.surprises.length)];
        if (emojiEl) emojiEl.textContent = item.emoji;
        if (titleEl) titleEl.textContent = item.title;
        if (bodyEl) bodyEl.textContent = `"${item.text}"`;
        sounds.playPop();
    }

    if (btn && modal) {
        btn.onclick = () => {
            renderRandomSurprise();
            modal.classList.remove("hidden");
        };
    }
    if (anotherBtn) anotherBtn.onclick = renderRandomSurprise;
    if (closeBtn && modal) closeBtn.onclick = () => modal.classList.add("hidden");
    if (backdrop && modal) backdrop.onclick = () => modal.classList.add("hidden");
}


/* ----------------------------------------------------------------------------
   13. BACKGROUND PARTICLES & STARFIELD CANVAS
   ---------------------------------------------------------------------------- */
function initParticleStarfield() {
    const canvas = document.getElementById("bg-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener("resize", () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const isMobile = window.innerWidth < 768;
    const numStars = isMobile ? 50 : 110;
    const stars = [];

    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 1.5 + 0.5,
            alpha: Math.random(),
            speed: Math.random() * 0.02 + 0.005,
            twinkleSpeed: Math.random() * 0.02 + 0.01
        });
    }

    const shootingStars = [];

    function addShootingStar() {
        if (Math.random() < 0.015 && shootingStars.length < 2) {
            shootingStars.push({
                x: Math.random() * width,
                y: Math.random() * (height / 2),
                len: Math.random() * 80 + 50,
                speed: Math.random() * 8 + 6,
                alpha: 1
            });
        }
    }

    function render() {
        ctx.clearRect(0, 0, width, height);

        stars.forEach(s => {
            s.alpha += s.twinkleSpeed;
            if (s.alpha > 1 || s.alpha < 0.2) s.twinkleSpeed = -s.twinkleSpeed;

            ctx.beginPath();
            ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${Math.abs(s.alpha)})`;
            ctx.fill();

            s.y -= s.speed;
            if (s.y < 0) s.y = height;
        });

        addShootingStar();
        for (let i = shootingStars.length - 1; i >= 0; i--) {
            const ss = shootingStars[i];
            ctx.beginPath();
            const grad = ctx.createLinearGradient(ss.x, ss.y, ss.x - ss.len, ss.y - ss.len * 0.5);
            grad.addColorStop(0, `rgba(255, 215, 0, ${ss.alpha})`);
            grad.addColorStop(1, `rgba(255, 51, 119, 0)`);

            ctx.strokeStyle = grad;
            ctx.lineWidth = 2;
            ctx.moveTo(ss.x, ss.y);
            ctx.lineTo(ss.x - ss.len, ss.y - ss.len * 0.5);
            ctx.stroke();

            ss.x += ss.speed;
            ss.y += ss.speed * 0.5;
            ss.alpha -= 0.02;

            if (ss.alpha <= 0) {
                shootingStars.splice(i, 1);
            }
        }

        requestAnimationFrame(render);
    }

    render();
}

function initCursorTrail() {
    const container = document.getElementById("cursor-trail");
    if (!container || window.innerWidth < 768) return;

    let lastSparkTime = 0;
    window.addEventListener("mousemove", (e) => {
        const now = Date.now();
        if (now - lastSparkTime > 50) {
            lastSparkTime = now;
            const spark = document.createElement("div");
            spark.className = "spark-dot";
            spark.style.left = `${e.clientX}px`;
            spark.style.top = `${e.clientY}px`;
            container.appendChild(spark);
            setTimeout(() => spark.remove(), 700);
        }
    });
}

function initScrollAnimations() {
    const elements = document.querySelectorAll(".animate-on-scroll");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
        });
    }, { threshold: 0.15 });

    elements.forEach(el => observer.observe(el));
}

function initFloatingNav() {
    const navItems = document.querySelectorAll(".nav-item");
    const sections = document.querySelectorAll(".surprise-section");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(sec => {
            const top = sec.offsetTop - 150;
            if (window.scrollY >= top) {
                current = sec.getAttribute("id");
            }
        });

        navItems.forEach(item => {
            item.classList.remove("active");
            if (item.getAttribute("href") === `#${current}`) {
                item.classList.add("active");
            }
        });
    });
}

// Global Testing Helpers for developers / verification:
window.__TEST_UNLOCK__ = () => {
    startMidnightReveal();
};
window.__TEST_LOCK__ = () => {
    showLockedState();
};

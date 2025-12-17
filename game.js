// Megamania Touch - Web Version

// Sprite Data - Pixel Art
const SPRITES = {
    player: [
        [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],
        [0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0],
        [0,0,0,0,1,1,1,2,2,1,1,1,0,0,0,0],
        [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1],
        [1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1]
    ],
    hamburger: [
        [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0],
        [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
        [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
        [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
        [0,0,3,0,3,0,3,0,3,0,3,0,3,0,0,0],
        [0,1,1,1,1,4,1,4,1,4,1,1,1,1,1,0],
        [0,0,3,0,3,0,3,0,3,0,3,0,3,0,0,0],
        [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
        [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
        [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
        [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0]
    ],
    cookie: [
        [0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0],
        [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
        [0,0,1,1,1,2,1,1,1,1,2,1,1,1,0,0],
        [0,1,1,1,1,1,1,1,2,1,1,1,1,1,1,0],
        [0,1,1,2,1,1,1,1,1,1,1,2,1,1,1,0],
        [1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1],
        [0,1,1,1,2,1,1,1,1,1,1,1,2,1,1,0],
        [0,1,1,1,1,1,1,2,1,1,1,1,1,1,1,0],
        [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
        [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
        [0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0]
    ],
    bug: [
        [0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0],
        [0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0],
        [0,0,0,0,1,0,2,2,2,2,0,1,0,0,0,0],
        [0,0,0,0,0,1,2,3,3,2,1,0,0,0,0,0],
        [0,0,0,1,1,1,2,2,2,2,1,1,1,0,0,0],
        [0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0],
        [0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0],
        [1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1],
        [0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0]
    ],
    tire: [
        [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0],
        [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
        [0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0],
        [0,1,1,1,0,0,2,2,2,2,0,0,1,1,1,0],
        [1,1,1,0,0,2,2,2,2,2,2,0,0,1,1,1],
        [1,1,0,0,2,2,2,0,0,2,2,2,0,0,1,1],
        [1,1,0,0,2,2,0,0,0,0,2,2,0,0,1,1],
        [1,1,0,0,2,2,0,0,0,0,2,2,0,0,1,1],
        [1,1,0,0,2,2,2,0,0,2,2,2,0,0,1,1],
        [1,1,1,0,0,2,2,2,2,2,2,0,0,1,1,1],
        [0,1,1,1,0,0,2,2,2,2,0,0,1,1,1,0],
        [0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0],
        [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
        [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0]
    ],
    diamond: [
        [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,2,2,1,0,0,0,0,0,0],
        [0,0,0,0,0,1,2,2,2,2,1,0,0,0,0,0],
        [0,0,0,0,1,2,2,3,3,2,2,1,0,0,0,0],
        [0,0,0,1,2,2,3,3,3,3,2,2,1,0,0,0],
        [0,0,1,2,2,3,3,3,3,3,3,2,2,1,0,0],
        [0,1,2,2,3,3,3,3,3,3,3,3,2,2,1,0],
        [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
        [0,1,2,2,2,2,2,2,2,2,2,2,2,2,1,0],
        [0,0,1,2,2,2,2,2,2,2,2,2,2,1,0,0],
        [0,0,0,1,2,2,2,2,2,2,2,2,1,0,0,0],
        [0,0,0,0,1,2,2,2,2,2,2,1,0,0,0,0],
        [0,0,0,0,0,1,2,2,2,2,1,0,0,0,0,0],
        [0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0]
    ],
    iron: [
        [0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0],
        [0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0],
        [0,0,0,0,0,0,1,1,2,2,2,1,1,1,1,0],
        [0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0],
        [0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0],
        [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
        [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
        [0,1,3,3,3,3,3,3,3,3,3,0,0,0,0,0],
        [1,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0],
        [0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0]
    ],
    bowtie: [
        [1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
        [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
        [0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0],
        [0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0],
        [0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0],
        [0,0,0,0,1,1,1,2,2,1,1,1,0,0,0,0],
        [0,0,0,0,1,1,1,2,2,1,1,1,0,0,0,0],
        [0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0],
        [0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0],
        [0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0],
        [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
        [1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1]
    ],
    dice: [
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,2,2,1,1,1,1,1,1,2,2,1,1,1],
        [1,1,1,2,2,1,1,1,1,1,1,2,2,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,2,2,1,1,1,1,1,1,2,2,1,1,1],
        [1,1,1,2,2,1,1,1,1,1,1,2,2,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]
    ]
};

// Color palettes for each sprite
const SPRITE_COLORS = {
    player: ['#2c8', '#5fb'],
    hamburger: ['#e96', '#2b7', '#631', '#f22'],
    cookie: ['#dcb', '#321'],
    bug: ['#2d8', '#4ea', '#f44'],
    tire: ['#444', '#777'],
    diamond: ['#4cf', '#8ef', '#eff'],
    iron: ['#bbc', '#448', '#667'],
    bowtie: ['#f38', '#dd4'],
    dice: ['#fff', '#222']
};

// Game Constants
const GAME = {
    WIDTH: 160,
    HEIGHT: 192,
    PIXEL_SCALE: 4,
    
    PLAYER: {
        WIDTH: 16,
        HEIGHT: 8,
        Y: 170,
        SPEED: 200,
        FIRE_RATE: 0.25,
        START_LIVES: 3
    },
    
    PROJECTILE: {
        WIDTH: 2,
        HEIGHT: 6,
        PLAYER_SPEED: 300,
        ENEMY_SPEED: 150
    },
    
    ENEMY: {
        WIDTH: 16,
        HEIGHT: 12,
        COUNT: 6,
        BASE_SPEED: 60,
        FIRE_CHANCE: 0.005
    },
    
    ENERGY: {
        MAX: 100,
        DEPLETION_RATE: 3.5,
        RESTORE_PER_KILL: 2.0
    },
    
    SCORE: {
        BASE_PER_ENEMY: 100,
        WAVE_BONUS: 500
    }
};

// Enemy Types
const ENEMY_TYPES = [
    { name: 'HAMBURGERS', color: '#e96' },
    { name: 'COOKIES', color: '#dcb' },
    { name: 'BUGS', color: '#2d8' },
    { name: 'RADIAL TIRES', color: '#555' },
    { name: 'DIAMONDS', color: '#4cf' },
    { name: 'STEAM IRONS', color: '#bbc' },
    { name: 'BOW TIES', color: '#f38' },
    { name: 'DICE', color: '#fff' }
];

// Game State
let gameState = {
    phase: 'menu', // menu, playing, paused, waveTransition, respawning, gameOver
    player: null,
    enemies: [],
    projectiles: [],
    explosions: [],
    score: 0,
    waveNumber: 1,
    energy: GAME.ENERGY.MAX,
    highScore: 0,
    gameTime: 0,
    lastFireTime: 0,
    waveTransitionTimer: 0,
    respawnTimer: 0,
    soundEnabled: true
};

// Canvas setup
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
let scale = 1;

function resizeCanvas() {
    const gameRatio = GAME.WIDTH / GAME.HEIGHT;
    const screenRatio = window.innerWidth / window.innerHeight;
    
    if (screenRatio > gameRatio) {
        canvas.height = window.innerHeight;
        canvas.width = canvas.height * gameRatio;
    } else {
        canvas.width = window.innerWidth;
        canvas.height = canvas.width / gameRatio;
    }
    
    scale = canvas.width / GAME.WIDTH;
    
    // Center canvas
    canvas.style.margin = 'auto';
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Player class
class Player {
    constructor() {
        this.x = GAME.WIDTH / 2;
        this.y = GAME.PLAYER.Y;
        this.lives = GAME.PLAYER.START_LIVES;
        this.isInvulnerable = false;
        this.invulnerabilityTimer = 0;
    }
    
    update(dt) {
        if (this.isInvulnerable) {
            this.invulnerabilityTimer -= dt;
            if (this.invulnerabilityTimer <= 0) {
                this.isInvulnerable = false;
            }
        }
    }
    
    reset() {
        this.x = GAME.WIDTH / 2;
        this.isInvulnerable = true;
        this.invulnerabilityTimer = 2.0;
    }
    
    getBounds() {
        return {
            x: this.x - GAME.PLAYER.WIDTH / 2,
            y: this.y - GAME.PLAYER.HEIGHT / 2,
            width: GAME.PLAYER.WIDTH,
            height: GAME.PLAYER.HEIGHT
        };
    }
}

// Enemy class
class Enemy {
    constructor(index, waveNumber) {
        this.type = (waveNumber - 1) % 8;
        this.typeData = ENEMY_TYPES[this.type];
        const spacing = GAME.WIDTH / (GAME.ENEMY.COUNT + 1);
        this.initialX = spacing * (index + 1);
        this.initialY = 30;
        this.x = this.initialX;
        this.y = this.initialY;
        this.phase = (index / GAME.ENEMY.COUNT) * Math.PI * 2;
        this.timeAlive = 0;
        this.isAlive = true;
        this.speedMult = 1 + Math.floor((waveNumber - 1) / 8) * 0.25;
    }
    
    update(dt) {
        if (!this.isAlive) return;
        
        this.timeAlive += dt;
        this.applyMovementPattern();
    }
    
    applyMovementPattern() {
        const t = this.timeAlive;
        const speed = GAME.ENEMY.BASE_SPEED * this.speedMult;
        
        switch (this.type) {
            case 0: // Hamburgers - horizontal sweep
                this.x = this.initialX + Math.sin(t * 2 + this.phase) * 40;
                this.y = this.initialY + t * 8 * this.speedMult;
                break;
            case 1: // Cookies - zigzag
                this.x = this.initialX + (Math.floor(t / 1.5) % 2 ? 1 : -1) * (t % 1.5) * 30;
                this.y = this.initialY + t * 10 * this.speedMult;
                break;
            case 2: // Bugs - sine wave
                this.x = this.initialX + Math.sin(t * 3 + this.phase) * 50;
                this.y = this.initialY + t * 12 * this.speedMult;
                break;
            case 3: // Radial Tires - circular
                this.x = this.initialX + Math.cos(t * 2.5 * this.speedMult + this.phase) * 30;
                this.y = this.initialY + Math.sin(t * 2.5 * this.speedMult + this.phase) * 15 + t * 6 * this.speedMult;
                break;
            case 4: // Diamonds - diamond path
                const phase = (t + this.phase / (Math.PI * 2)) % 2;
                if (phase < 0.5) {
                    this.x = this.initialX + phase * 4 * 40;
                    this.y = this.initialY + phase * 4 * 20;
                } else if (phase < 1.0) {
                    this.x = this.initialX + (1 - (phase - 0.5) * 4) * 40;
                    this.y = this.initialY + (1 - (phase - 0.5) * 4) * 20 + 20;
                } else if (phase < 1.5) {
                    this.x = this.initialX + (phase - 1.0) * 4 * -40;
                    this.y = this.initialY + (1 - (phase - 1.0) * 4) * 20 + 20;
                } else {
                    this.x = this.initialX + (1 - (phase - 1.5) * 4) * -40;
                    this.y = this.initialY + (phase - 1.5) * 4 * 20;
                }
                this.y += t * 5 * this.speedMult;
                break;
            case 5: // Steam Irons - fast horizontal
                this.x = this.initialX + Math.sin(t * 4 + this.phase) * 60;
                this.y = this.initialY + t * 5 * this.speedMult;
                break;
            case 6: // Bow Ties - figure 8
                this.x = this.initialX + Math.sin(t * 2 + this.phase) * 45;
                this.y = this.initialY + Math.sin((t * 2 + this.phase) * 2) * 15 + t * 8 * this.speedMult;
                break;
            case 7: // Dice - random jitter
                this.x = this.initialX + Math.sin(t * 3 + this.phase) * 25 + (Math.random() - 0.5) * 20;
                this.y = this.initialY + t * 10 * this.speedMult;
                break;
        }
        
        // Clamp x
        this.x = Math.max(GAME.ENEMY.WIDTH / 2, Math.min(GAME.WIDTH - GAME.ENEMY.WIDTH / 2, this.x));
    }
    
    getBounds() {
        return {
            x: this.x - GAME.ENEMY.WIDTH / 2,
            y: this.y - GAME.ENEMY.HEIGHT / 2,
            width: GAME.ENEMY.WIDTH,
            height: GAME.ENEMY.HEIGHT
        };
    }
}

// Projectile class
class Projectile {
    constructor(x, y, isPlayer) {
        this.x = x;
        this.y = y;
        this.isPlayer = isPlayer;
        this.speed = isPlayer ? -GAME.PROJECTILE.PLAYER_SPEED : GAME.PROJECTILE.ENEMY_SPEED;
        this.isActive = true;
    }
    
    update(dt) {
        this.y += this.speed * dt;
        
        if (this.y < -10 || this.y > GAME.HEIGHT + 10) {
            this.isActive = false;
        }
    }
    
    getBounds() {
        return {
            x: this.x - GAME.PROJECTILE.WIDTH / 2,
            y: this.y - GAME.PROJECTILE.HEIGHT / 2,
            width: GAME.PROJECTILE.WIDTH,
            height: GAME.PROJECTILE.HEIGHT
        };
    }
}

// Explosion class
class Explosion {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.frame = 0;
        this.maxFrames = 8;
        this.frameTime = 0;
        this.frameDuration = 0.04;
    }
    
    update(dt) {
        this.frameTime += dt;
        if (this.frameTime >= this.frameDuration) {
            this.frameTime = 0;
            this.frame++;
        }
    }
    
    isComplete() {
        return this.frame >= this.maxFrames;
    }
}

// Collision detection
function checkCollision(rect1, rect2) {
    return rect1.x < rect2.x + rect2.width &&
           rect1.x + rect1.width > rect2.x &&
           rect1.y < rect2.y + rect2.height &&
           rect1.y + rect1.height > rect2.y;
}

// Audio
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function playSound(type) {
    if (!gameState.soundEnabled) return;
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.type = 'square';
    
    const now = audioContext.currentTime;
    
    switch(type) {
        case 'shoot':
            oscillator.frequency.setValueAtTime(880, now);
            gainNode.gain.setValueAtTime(0.1, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
            oscillator.start(now);
            oscillator.stop(now + 0.05);
            break;
        case 'explosion':
            oscillator.frequency.setValueAtTime(150, now);
            oscillator.frequency.exponentialRampToValueAtTime(50, now + 0.1);
            gainNode.gain.setValueAtTime(0.2, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
            oscillator.start(now);
            oscillator.stop(now + 0.1);
            break;
        case 'hit':
            oscillator.frequency.setValueAtTime(220, now);
            gainNode.gain.setValueAtTime(0.15, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
            oscillator.start(now);
            oscillator.stop(now + 0.2);
            break;
        case 'wave':
            oscillator.frequency.setValueAtTime(523, now);
            oscillator.frequency.setValueAtTime(659, now + 0.1);
            oscillator.frequency.setValueAtTime(784, now + 0.2);
            oscillator.frequency.setValueAtTime(1047, now + 0.3);
            gainNode.gain.setValueAtTime(0.1, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
            oscillator.start(now);
            oscillator.stop(now + 0.4);
            break;
    }
}

// Game functions
function startGame() {
    gameState.player = new Player();
    gameState.enemies = [];
    gameState.projectiles = [];
    gameState.explosions = [];
    gameState.score = 0;
    gameState.waveNumber = 1;
    gameState.energy = GAME.ENERGY.MAX;
    gameState.gameTime = 0;
    gameState.lastFireTime = 0;
    
    startWave();
    showElement('pauseBtn');
}

function startWave() {
    gameState.enemies = [];
    for (let i = 0; i < GAME.ENEMY.COUNT; i++) {
        gameState.enemies.push(new Enemy(i, gameState.waveNumber));
    }
    gameState.energy = GAME.ENERGY.MAX;
    gameState.projectiles = [];
    gameState.phase = 'waveTransition';
    gameState.waveTransitionTimer = 2.0;
}

function fireProjectile() {
    if (gameState.phase !== 'playing') return;
    if (gameState.gameTime - gameState.lastFireTime < GAME.PLAYER.FIRE_RATE) return;
    
    gameState.lastFireTime = gameState.gameTime;
    gameState.projectiles.push(new Projectile(gameState.player.x, gameState.player.y - GAME.PLAYER.HEIGHT / 2, true));
    playSound('shoot');
}

function playerHit() {
    if (gameState.player.isInvulnerable) return;
    
    gameState.player.lives--;
    gameState.explosions.push(new Explosion(gameState.player.x, gameState.player.y));
    playSound('hit');
    
    if (gameState.player.lives <= 0) {
        gameOver();
    } else {
        gameState.phase = 'respawning';
        gameState.respawnTimer = 1.5;
    }
}

function gameOver() {
    gameState.phase = 'gameOver';
    
    if (gameState.score > gameState.highScore) {
        gameState.highScore = gameState.score;
        localStorage.setItem('megamaniaHighScore', gameState.highScore);
        document.getElementById('newHighScore').style.display = 'block';
    } else {
        document.getElementById('newHighScore').style.display = 'none';
    }
    
    document.getElementById('finalScore').textContent = gameState.score;
    document.getElementById('waveReached').textContent = `WAVE ${gameState.waveNumber} REACHED`;
    hideElement('pauseBtn');
    showElement('gameoverScreen');
}

// Update loop
let lastTime = performance.now();

function update() {
    const currentTime = performance.now();
    const dt = Math.min((currentTime - lastTime) / 1000, 1/30);
    lastTime = currentTime;
    
    if (gameState.phase === 'menu' || gameState.phase === 'gameOver') {
        render();
        requestAnimationFrame(update);
        return;
    }
    
    gameState.gameTime += dt;
    
    // Phase-specific updates
    if (gameState.phase === 'waveTransition') {
        gameState.waveTransitionTimer -= dt;
        if (gameState.waveTransitionTimer <= 0) {
            gameState.phase = 'playing';
        }
    } else if (gameState.phase === 'respawning') {
        gameState.respawnTimer -= dt;
        if (gameState.respawnTimer <= 0) {
            gameState.player.reset();
            gameState.phase = 'playing';
        }
    } else if (gameState.phase === 'playing') {
        // Update player
        gameState.player.update(dt);
        
        // Update projectiles
        gameState.projectiles.forEach(p => p.update(dt));
        gameState.projectiles = gameState.projectiles.filter(p => p.isActive);
        
        // Update enemies
        gameState.enemies.forEach(e => e.update(dt));
        
        // Enemy firing
        const aliveEnemies = gameState.enemies.filter(e => e.isAlive);
        if (aliveEnemies.length > 0 && Math.random() < GAME.ENEMY.FIRE_CHANCE) {
            const enemy = aliveEnemies[Math.floor(Math.random() * aliveEnemies.length)];
            gameState.projectiles.push(new Projectile(enemy.x, enemy.y + GAME.ENEMY.HEIGHT / 2, false));
        }
        
        // Collisions
        checkCollisions();
        
        // Update energy
        gameState.energy -= GAME.ENERGY.DEPLETION_RATE * dt;
        if (gameState.energy <= 0) {
            gameState.energy = 0;
            playerHit();
            gameState.energy = GAME.ENERGY.MAX;
        }
        
        // Check wave completion
        if (aliveEnemies.length === 0) {
            gameState.score += GAME.SCORE.WAVE_BONUS;
            playSound('wave');
            gameState.waveNumber++;
            startWave();
        }
    }
    
    // Update explosions
    gameState.explosions.forEach(e => e.update(dt));
    gameState.explosions = gameState.explosions.filter(e => !e.isComplete());
    
    render();
    requestAnimationFrame(update);
}

function checkCollisions() {
    const playerBounds = gameState.player.getBounds();
    
    // Player projectiles vs enemies
    gameState.projectiles.forEach(proj => {
        if (!proj.isPlayer || !proj.isActive) return;
        
        const projBounds = proj.getBounds();
        gameState.enemies.forEach(enemy => {
            if (!enemy.isAlive) return;
            
            if (checkCollision(projBounds, enemy.getBounds())) {
                proj.isActive = false;
                enemy.isAlive = false;
                gameState.explosions.push(new Explosion(enemy.x, enemy.y));
                gameState.score += GAME.SCORE.BASE_PER_ENEMY + enemy.type * 20;
                gameState.energy = Math.min(gameState.energy + GAME.ENERGY.RESTORE_PER_KILL, GAME.ENERGY.MAX);
                playSound('explosion');
            }
        });
    });
    
    // Enemy projectiles vs player
    if (!gameState.player.isInvulnerable) {
        gameState.projectiles.forEach(proj => {
            if (proj.isPlayer || !proj.isActive) return;
            
            if (checkCollision(proj.getBounds(), playerBounds)) {
                proj.isActive = false;
                playerHit();
            }
        });
        
        // Enemies vs player
        gameState.enemies.forEach(enemy => {
            if (!enemy.isAlive) return;
            
            if (checkCollision(enemy.getBounds(), playerBounds) || enemy.y >= GAME.PLAYER.Y - 10) {
                enemy.isAlive = false;
                playerHit();
            }
        });
    }
}

// Sprite drawing helper
function drawSprite(sprite, colors, x, y, alpha = 1) {
    const pixelSize = scale * (16 / sprite[0].length); // Scale based on sprite width
    
    ctx.globalAlpha = alpha;
    for (let row = 0; row < sprite.length; row++) {
        for (let col = 0; col < sprite[row].length; col++) {
            const colorIndex = sprite[row][col];
            if (colorIndex > 0 && colorIndex <= colors.length) {
                ctx.fillStyle = colors[colorIndex - 1];
                ctx.fillRect(
                    x * scale + col * pixelSize,
                    y * scale + row * pixelSize,
                    pixelSize,
                    pixelSize
                );
            }
        }
    }
    ctx.globalAlpha = 1;
}

// Get sprite for enemy type
function getEnemySprite(type) {
    const sprites = ['hamburger', 'cookie', 'bug', 'tire', 'diamond', 'iron', 'bowtie', 'dice'];
    return sprites[type];
}

// Rendering
function render() {
    // Clear
    ctx.fillStyle = '#001';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw stars
    ctx.fillStyle = '#fff';
    for (let i = 0; i < 50; i++) {
        const x = (i * 47.3 % GAME.WIDTH) * scale;
        const y = (i * 21.7 % GAME.HEIGHT) * scale;
        const brightness = 0.3 + (Math.sin(i + gameState.gameTime) + 1) / 4;
        ctx.globalAlpha = brightness;
        ctx.fillRect(x, y, scale, scale);
    }
    ctx.globalAlpha = 1;
    
    if (gameState.phase === 'menu' || gameState.phase === 'gameOver') {
        return;
    }
    
    // Draw enemies
    gameState.enemies.forEach(enemy => {
        if (!enemy.isAlive) return;
        const spriteName = getEnemySprite(enemy.type);
        const spriteData = SPRITES[spriteName];
        const colors = SPRITE_COLORS[spriteName];
        drawSprite(
            spriteData,
            colors,
            enemy.x - GAME.ENEMY.WIDTH / 2,
            enemy.y - GAME.ENEMY.HEIGHT / 2,
            1
        );
    });
    
    // Draw projectiles with glow
    gameState.projectiles.forEach(proj => {
        const color = proj.isPlayer ? '#ff4' : '#f44';
        // Glow
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.3;
        drawRect(proj.x - GAME.PROJECTILE.WIDTH, proj.y - GAME.PROJECTILE.HEIGHT, GAME.PROJECTILE.WIDTH * 2, GAME.PROJECTILE.HEIGHT * 2);
        ctx.globalAlpha = 1;
        // Core
        ctx.fillStyle = color;
        drawRect(proj.x - GAME.PROJECTILE.WIDTH / 2, proj.y - GAME.PROJECTILE.HEIGHT / 2, GAME.PROJECTILE.WIDTH, GAME.PROJECTILE.HEIGHT);
    });
    
    // Draw player
    if (gameState.player && gameState.phase !== 'respawning') {
        const flash = gameState.player.isInvulnerable && Math.sin(gameState.gameTime * 15) > 0;
        drawSprite(
            SPRITES.player,
            SPRITE_COLORS.player,
            gameState.player.x - GAME.PLAYER.WIDTH / 2,
            gameState.player.y - GAME.PLAYER.HEIGHT / 2,
            flash ? 0.3 : 1
        );
    }
    
    // Draw explosions
    gameState.explosions.forEach(exp => {
        const progress = exp.frame / exp.maxFrames;
        const radius = 12 * (0.3 + progress * 0.7);
        ctx.globalAlpha = 1 - progress;
        
        for (let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2;
            const x = exp.x + Math.cos(angle) * radius * (0.5 + progress * 0.5);
            const y = exp.y + Math.sin(angle) * radius * (0.5 + progress * 0.5);
            ctx.fillStyle = ['#ff0', '#f80', '#f00', '#fff'][Math.min(Math.floor(exp.frame / 2), 3)];
            drawRect(x - 1, y - 1, 2, 2);
        }
        ctx.globalAlpha = 1;
    });
    
    // HUD
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = '#fe8';
    ctx.font = 'bold 14px monospace';
    ctx.fillText(`SCORE: ${gameState.score}`, 10, 20);
    ctx.fillText(`WAVE ${gameState.waveNumber}`, canvas.width / 2 - 40, 20);
    ctx.fillText(`LIVES: ${gameState.player ? gameState.player.lives : 0}`, canvas.width - 100, 20);
    
    // Energy bar
    const barWidth = canvas.width * 0.6;
    const barHeight = 12;
    const barX = canvas.width / 2 - barWidth / 2;
    const barY = canvas.height - barHeight - 10;
    
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.fillRect(barX - 2, barY - 2, barWidth + 4, barHeight + 4);
    ctx.strokeStyle = '#fe8';
    ctx.lineWidth = 1;
    ctx.strokeRect(barX - 2, barY - 2, barWidth + 4, barHeight + 4);
    
    const energyWidth = barWidth * (gameState.energy / GAME.ENERGY.MAX);
    ctx.fillStyle = gameState.energy < 30 ? '#f44' : '#48c';
    ctx.fillRect(barX, barY, energyWidth, barHeight);
    
    ctx.fillStyle = '#fe8';
    ctx.fillText('ENERGY', barX - 60, barY + 10);
    
    // Wave transition
    if (gameState.phase === 'waveTransition') {
        const enemyType = ENEMY_TYPES[(gameState.waveNumber - 1) % 8];
        ctx.fillStyle = enemyType.color;
        ctx.font = 'bold 24px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(enemyType.name, canvas.width / 2, canvas.height / 2);
        ctx.textAlign = 'left';
    }
    
    ctx.restore();
}

function drawRect(x, y, w, h) {
    ctx.fillRect(x * scale, y * scale, w * scale, h * scale);
}

// UI helpers
function showElement(id) {
    document.getElementById(id).classList.remove('hidden');
}

function hideElement(id) {
    document.getElementById(id).classList.add('hidden');
}

// Touch controls
let primaryTouch = null;

canvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    
    if (gameState.phase !== 'playing' && gameState.phase !== 'respawning') return;
    
    for (let touch of e.changedTouches) {
        if (!primaryTouch) {
            primaryTouch = touch.identifier;
            handleMove(touch);
        } else {
            fireProjectile();
        }
    }
}, { passive: false });

canvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    
    for (let touch of e.changedTouches) {
        if (touch.identifier === primaryTouch) {
            handleMove(touch);
        }
    }
}, { passive: false });

canvas.addEventListener('touchend', (e) => {
    e.preventDefault();
    
    for (let touch of e.changedTouches) {
        if (touch.identifier === primaryTouch) {
            primaryTouch = null;
        }
    }
}, { passive: false });

function handleMove(touch) {
    if (!gameState.player) return;
    
    const rect = canvas.getBoundingClientRect();
    const canvasX = touch.clientX - rect.left;
    const gameX = (canvasX / canvas.width) * GAME.WIDTH;
    
    gameState.player.x = Math.max(GAME.PLAYER.WIDTH / 2, Math.min(GAME.WIDTH - GAME.PLAYER.WIDTH / 2, gameX));
}

// Button handlers
document.getElementById('startBtn').addEventListener('click', () => {
    hideElement('menuScreen');
    startGame();
    gameState.phase = 'playing';
});

document.getElementById('playAgainBtn').addEventListener('click', () => {
    hideElement('gameoverScreen');
    startGame();
    gameState.phase = 'playing';
});

document.getElementById('mainMenuBtn').addEventListener('click', () => {
    hideElement('gameoverScreen');
    showElement('menuScreen');
    gameState.phase = 'menu';
});

document.getElementById('soundBtn').addEventListener('click', function() {
    gameState.soundEnabled = !gameState.soundEnabled;
    this.textContent = `SOUND: ${gameState.soundEnabled ? 'ON' : 'OFF'}`;
});

document.getElementById('pauseBtn').addEventListener('click', () => {
    if (gameState.phase === 'playing') {
        gameState.phase = 'paused';
        document.getElementById('pauseBtn').textContent = '▶';
    } else if (gameState.phase === 'paused') {
        gameState.phase = 'playing';
        document.getElementById('pauseBtn').textContent = '❚❚';
    }
});

// Load high score
gameState.highScore = parseInt(localStorage.getItem('megamaniaHighScore') || '0');
if (gameState.highScore > 0) {
    document.getElementById('highScoreDisplay').textContent = `HIGH SCORE: ${gameState.highScore}`;
}

// Start
update();


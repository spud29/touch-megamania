// Megamania Touch - Web Version

// Sprite Data - Authentic Atari 2600 style pixel art
// Based on the original 1982 Activision Megamania sprites
// Using 8-pixel wide format doubled to 16 for display (each column repeated)
const SPRITES = {
    // Atari 2600 Blaster - triangular ship pointing up
    player: [
        [0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],
        [0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0],
        [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0],
        [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
        [0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0],
        [0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0],
        [1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1]
    ],
    // Atari 2600 Hamburger - horizontal striped burger (simple bun-patty-bun)
    hamburger: [
        [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
        [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
        [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
        [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0]
    ],
    // Atari 2600 Cookie - round with chocolate chips (dots)
    cookie: [
        [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0],
        [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
        [0,1,1,1,2,2,1,1,1,1,2,2,1,1,1,0],
        [0,1,1,1,2,2,1,1,1,1,2,2,1,1,1,0],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,2,2,2,2,1,1,1,1,1,1],
        [1,1,1,1,1,1,2,2,2,2,1,1,1,1,1,1],
        [1,1,2,2,1,1,1,1,1,1,1,1,2,2,1,1],
        [1,1,2,2,1,1,1,1,1,1,1,1,2,2,1,1],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
        [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0]
    ],
    // Atari 2600 Bug - insect with antennae and legs
    bug: [
        [1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
        [0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0],
        [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0],
        [1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1],
        [0,0,1,1,1,1,2,2,2,2,1,1,1,1,0,0],
        [0,0,0,0,1,1,2,2,2,2,1,1,0,0,0,0],
        [1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1],
        [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
        [0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0],
        [0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0]
    ],
    // Atari 2600 Radial Tire - circular with hub pattern
    tire: [
        [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0],
        [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
        [0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0],
        [0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0],
        [1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1],
        [1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1],
        [1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1],
        [1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1],
        [1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1],
        [1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1],
        [1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1],
        [1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1],
        [0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0],
        [0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0],
        [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
        [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0]
    ],
    // Atari 2600 Diamond - simple gem shape
    diamond: [
        [0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],
        [0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0],
        [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0],
        [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
        [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
        [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
        [0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0],
        [0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0],
        [0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0]
    ],
    // Atari 2600 Steam Iron - triangular iron shape
    iron: [
        [0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
        [0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1],
        [0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1],
        [0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1],
        [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0]
    ],
    // Atari 2600 Bow Tie - symmetrical bow shape
    bowtie: [
        [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1],
        [1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1],
        [1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1],
        [0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0],
        [0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0],
        [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
        [0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0],
        [0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0],
        [0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0],
        [1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1],
        [1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1],
        [1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1]
    ],
    // Atari 2600 Space Dice - square die with 5 pips
    dice: [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,2,2,2,1,1,1,1,1,1,2,2,2,1,1],
        [1,1,2,2,2,1,1,1,1,1,1,2,2,2,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,2,2,2,1,1,1,1,1,1,2,2,2,1,1],
        [1,1,2,2,2,1,1,1,1,1,1,2,2,2,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ]
};

// Authentic Atari 2600 color palettes for each sprite
// Based on the original 1982 Activision game
// Atari 2600 sprites were typically solid colors with minimal shading
const SPRITE_COLORS = {
    player: ['#6688ff'],                     // Blue blaster
    hamburger: ['#ff6688', '#aa4466'],       // Pink (cycle 1)
    cookie: ['#ffcc00', '#885500'],          // Yellow with brown chips (cycle 1)
    bug: ['#44dd66', '#226633'],             // Green (cycle 1)
    tire: ['#ff6688'],                       // Pink (cycle 1)
    diamond: ['#44dd66'],                    // Green (cycle 1)
    iron: ['#ffcc00'],                       // Yellow (cycle 1)
    bowtie: ['#ff8833'],                     // Orange (cycle 1)
    dice: ['#ffcc00', '#000000']             // Yellow with black pips
};

// MegaCycle color palettes - colors rotate after completing all 8 waves
// Based on authentic Atari 2600 appearance: colors alternate odd/even cycles
const CYCLE_PALETTES = {
    hamburger: [
        ['#ff6688', '#aa4466'],    // Cycle 1 (odd): Pink
        ['#44dd66', '#228844'],    // Cycle 2 (even): Green
        ['#ff6688', '#aa4466'],    // Cycle 3 (odd): Pink
        ['#44dd66', '#228844'],    // Cycle 4 (even): Green
    ],
    cookie: [
        ['#ffcc00', '#885500'],    // Cycle 1 (odd): Yellow
        ['#ff8833', '#884400'],    // Cycle 2 (even): Orange
        ['#ffcc00', '#885500'],    // Cycle 3 (odd): Yellow
        ['#ff8833', '#884400'],    // Cycle 4 (even): Orange
    ],
    bug: [
        ['#44dd66', '#226633'],    // Cycle 1 (odd): Green
        ['#ff6688', '#aa4466'],    // Cycle 2 (even): Pink
        ['#44dd66', '#226633'],    // Cycle 3 (odd): Green
        ['#ff6688', '#aa4466'],    // Cycle 4 (even): Pink
    ],
    tire: [
        ['#ff6688'],    // Cycle 1 (odd): Pink
        ['#44dd66'],    // Cycle 2 (even): Green
        ['#ff6688'],    // Cycle 3 (odd): Pink
        ['#44dd66'],    // Cycle 4 (even): Green
    ],
    diamond: [
        ['#44dd66'],    // Cycle 1 (odd): Green
        ['#ffcc00'],    // Cycle 2 (even): Yellow
        ['#44dd66'],    // Cycle 3 (odd): Green
        ['#ffcc00'],    // Cycle 4 (even): Yellow
    ],
    iron: [
        ['#ffcc00'],    // Cycle 1 (odd): Yellow
        ['#ff6688'],    // Cycle 2 (even): Pink
        ['#ffcc00'],    // Cycle 3 (odd): Yellow
        ['#ff6688'],    // Cycle 4 (even): Pink
    ],
    bowtie: [
        ['#ff8833'],    // Cycle 1 (odd): Orange
        ['#44dd66'],    // Cycle 2 (even): Green
        ['#ff8833'],    // Cycle 3 (odd): Orange
        ['#44dd66'],    // Cycle 4 (even): Green
    ],
    dice: [
        ['#ffcc00', '#000000'],    // Always yellow with black pips - never changes
    ]
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
        WAVE_BONUS: 500
    }
};

// Authentic Atari 2600 point values per enemy type
// Index corresponds to enemy type (0-7)
// First cycle uses firstCycle value, subsequent cycles use laterCycles value
const ENEMY_POINTS = [
    { firstCycle: 20, laterCycles: 90 },   // 0: Hamburger
    { firstCycle: 30, laterCycles: 90 },   // 1: Cookie
    { firstCycle: 40, laterCycles: 90 },   // 2: Bug
    { firstCycle: 50, laterCycles: 90 },   // 3: Radial Tire
    { firstCycle: 60, laterCycles: 90 },   // 4: Diamond
    { firstCycle: 70, laterCycles: 90 },   // 5: Steam Iron
    { firstCycle: 80, laterCycles: 90 },   // 6: Bow Tie
    { firstCycle: 90, laterCycles: 90 }    // 7: Space Dice (always 90)
];

// Enemy Types - Names and display colors matching Atari 2600 wave announcements
const ENEMY_TYPES = [
    { name: 'HAMBURGERS', color: '#ff6688' },      // Pink
    { name: 'COOKIES', color: '#ffcc00' },          // Yellow
    { name: 'BUGS', color: '#44dd66' },             // Green
    { name: 'RADIAL TIRES', color: '#ff6688' },    // Pink
    { name: 'DIAMONDS', color: '#44dd66' },         // Green
    { name: 'STEAM IRONS', color: '#ffcc00' },      // Yellow
    { name: 'BOW TIES', color: '#ff8833' },         // Orange
    { name: 'SPACE DICE', color: '#ffcc00' }        // Yellow
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

// Enemy class with row-based formation support
class Enemy {
    constructor(index, waveNumber, row = 0, col = 0, formationData = null) {
        this.type = (waveNumber - 1) % 8;
        this.typeData = ENEMY_TYPES[this.type];
        this.waveNumber = waveNumber;
        this.megaCycle = Math.floor((waveNumber - 1) / 8);  // Which MegaCycle we're in (0, 1, 2...)
        
        // Formation data
        this.row = row;
        this.col = col;
        this.index = index;
        this.formationData = formationData || {};
        
        // Position setup varies by enemy type
        this.setupInitialPosition();
        
        this.x = this.initialX;
        this.y = this.initialY;
        this.timeAlive = 0;
        this.isAlive = true;
        this.speedMult = 1 + this.megaCycle * 0.25;
        
        // Movement state
        this.direction = 1;  // 1 = right, -1 = left
        this.dipState = 0;   // For dip maneuvers
        this.dipTimer = 0;
        this.spinAngle = Math.random() * Math.PI * 2;  // For diamond spin
        
        // Dice-specific: random angle for diagonal movement in later cycles
        this.diceAngle = (Math.random() - 0.5) * Math.PI / 3;  // Random angle ±30 degrees
    }
    
    setupInitialPosition() {
        const spacing = GAME.WIDTH / (GAME.ENEMY.COUNT + 1);
        
        switch (this.type) {
            case 5: // Steam Irons - 3 vertical columns
                const colSpacing = GAME.WIDTH / 4;
                this.initialX = colSpacing * (this.col + 1);
                this.initialY = -20 - this.row * 25;  // Stagger rows coming from top
                break;
            case 7: // Dice - random horizontal positions
                this.initialX = 20 + Math.random() * (GAME.WIDTH - 40);
                this.initialY = -20 - this.index * 40;  // Stagger drops
                break;
            default: // Row-based enemies
                this.initialX = spacing * (this.col + 1);
                this.initialY = 20 + this.row * 18;
                break;
        }
        
        // Set initial direction for alternating patterns
        if (this.type === 3) { // Tires alternate by row
            this.direction = (this.row % 2 === 0) ? 1 : -1;
        } else {
            this.direction = 1;
        }
    }
    
    update(dt) {
        if (!this.isAlive) return;
        
        this.timeAlive += dt;
        this.spinAngle += dt * 5;  // Spin animation for diamonds
        this.applyMovementPattern(dt);
    }
    
    applyMovementPattern(dt) {
        const t = this.timeAlive;
        
        switch (this.type) {
            case 0: this.moveHamburger(t, dt); break;
            case 1: this.moveCookie(t, dt); break;
            case 2: this.moveBug(t, dt); break;
            case 3: this.moveTire(t, dt); break;
            case 4: this.moveDiamond(t, dt); break;
            case 5: this.moveIron(t, dt); break;
            case 6: this.moveBowtie(t, dt); break;
            case 7: this.moveDice(t, dt); break;
        }
        
        // Clamp x position
        this.x = Math.max(GAME.ENEMY.WIDTH / 2, Math.min(GAME.WIDTH - GAME.ENEMY.WIDTH / 2, this.x));
    }
    
    // Hamburgers - horizontal streaming rows; pause/accelerate in later cycles
    moveHamburger(t, dt) {
        const baseSpeed = 50 * this.speedMult;
        
        if (this.megaCycle === 0) {
            // Cycle 1: Constant streaming from side to side
            this.x += this.direction * baseSpeed * dt;
            
            // Bounce off edges
            if (this.x >= GAME.WIDTH - GAME.ENEMY.WIDTH / 2) {
                this.x = GAME.WIDTH - GAME.ENEMY.WIDTH / 2;
                this.direction = -1;
            } else if (this.x <= GAME.ENEMY.WIDTH / 2) {
                this.x = GAME.ENEMY.WIDTH / 2;
                this.direction = 1;
            }
        } else {
            // Later cycles: Pause and accelerate pattern
            const cycleTime = t % 3.0;
            if (cycleTime < 1.5) {
                // Pause phase - slight drift
                this.x += this.direction * 10 * dt;
            } else {
                // Accelerate phase - fast movement
                this.x += this.direction * baseSpeed * 2.5 * dt;
            }
            
            // Bounce off edges
            if (this.x >= GAME.WIDTH - GAME.ENEMY.WIDTH / 2 || this.x <= GAME.ENEMY.WIDTH / 2) {
                this.direction *= -1;
                this.x = Math.max(GAME.ENEMY.WIDTH / 2, Math.min(GAME.WIDTH - GAME.ENEMY.WIDTH / 2, this.x));
            }
        }
        
        // Slow descent
        this.y = this.initialY + t * 8 * this.speedMult;
    }
    
    // Cookies - unison horizontal with periodic "dip" maneuver
    moveCookie(t, dt) {
        const baseSpeed = 40 * this.speedMult;
        const dipInterval = this.megaCycle === 0 ? 2.5 : 1.8;  // Faster dips in later cycles
        
        // All cookies use shared direction from formation data
        const sharedDir = this.formationData.direction || 1;
        
        // Check for dip timing
        const dipPhase = t % dipInterval;
        
        if (dipPhase < 0.3) {
            // Dip down
            this.dipState = 1;
            const dipProgress = dipPhase / 0.3;
            const dipAmount = this.megaCycle === 0 ? 20 : 40;  // Dive-bomb in later cycles
            this.y = this.initialY + t * 6 * this.speedMult + Math.sin(dipProgress * Math.PI) * dipAmount;
        } else {
            this.dipState = 0;
            this.y = this.initialY + t * 6 * this.speedMult;
        }
        
        // Horizontal movement (all move in unison)
        this.x += sharedDir * baseSpeed * dt;
        
        // Update shared direction on edge hit
        if (this.x >= GAME.WIDTH - GAME.ENEMY.WIDTH / 2 || this.x <= GAME.ENEMY.WIDTH / 2) {
            this.formationData.direction = -sharedDir;
            this.x = Math.max(GAME.ENEMY.WIDTH / 2, Math.min(GAME.WIDTH - GAME.ENEMY.WIDTH / 2, this.x));
        }
    }
    
    // Bugs - horizontal with undulating vertical bob
    moveBug(t, dt) {
        const baseSpeed = 45 * this.speedMult;
        
        // Horizontal movement
        this.x += this.direction * baseSpeed * dt;
        
        // Bounce off edges
        if (this.x >= GAME.WIDTH - GAME.ENEMY.WIDTH / 2 || this.x <= GAME.ENEMY.WIDTH / 2) {
            this.direction *= -1;
            this.x = Math.max(GAME.ENEMY.WIDTH / 2, Math.min(GAME.WIDTH - GAME.ENEMY.WIDTH / 2, this.x));
        }
        
        // Undulating vertical bob while descending
        const bobAmount = 8;
        const bobSpeed = 4;
        const baseY = this.initialY + t * 10 * this.speedMult;
        this.y = baseY + Math.sin(t * bobSpeed + this.col * 0.5) * bobAmount;
    }
    
    // Tires - alternating row directions with quick dangerous dip
    moveTire(t, dt) {
        const baseSpeed = 60 * this.speedMult;  // Faster than cookies
        const dipInterval = 2.0;
        
        // Check for dip timing
        const dipPhase = t % dipInterval;
        
        if (dipPhase < 0.2) {
            // Quick dangerous dip
            const dipProgress = dipPhase / 0.2;
            const dipAmount = 30;
            this.y = this.initialY + t * 8 * this.speedMult + Math.sin(dipProgress * Math.PI) * dipAmount;
        } else {
            this.y = this.initialY + t * 8 * this.speedMult;
        }
        
        // Horizontal movement - alternating rows
        this.x += this.direction * baseSpeed * dt;
        
        // Bounce off edges
        if (this.x >= GAME.WIDTH - GAME.ENEMY.WIDTH / 2 || this.x <= GAME.ENEMY.WIDTH / 2) {
            this.direction *= -1;
            this.x = Math.max(GAME.ENEMY.WIDTH / 2, Math.min(GAME.WIDTH - GAME.ENEMY.WIDTH / 2, this.x));
        }
    }
    
    // Diamonds - horizontal with pronounced vertical wave + spinning animation
    moveDiamond(t, dt) {
        const baseSpeed = 35 * this.speedMult;
        
        // Horizontal movement
        this.x += this.direction * baseSpeed * dt;
        
        // Bounce off edges
        if (this.x >= GAME.WIDTH - GAME.ENEMY.WIDTH / 2 || this.x <= GAME.ENEMY.WIDTH / 2) {
            this.direction *= -1;
            this.x = Math.max(GAME.ENEMY.WIDTH / 2, Math.min(GAME.WIDTH - GAME.ENEMY.WIDTH / 2, this.x));
        }
        
        // Pronounced vertical wave (bobbing)
        const waveAmount = 15;
        const waveSpeed = 3;
        const baseY = this.initialY + t * 7 * this.speedMult;
        this.y = baseY + Math.sin(t * waveSpeed + this.col * 0.8) * waveAmount;
    }
    
    // Get diamond scale for spin animation (width changes)
    getDiamondScale() {
        return 0.5 + Math.abs(Math.cos(this.spinAngle)) * 0.5;
    }
    
    // Steam Irons - 3 vertical columns descending with side-to-side wiggle
    moveIron(t, dt) {
        const wiggleAmount = 8;
        const wiggleSpeed = 6;
        const fallSpeed = 35 * this.speedMult;
        
        // Side-to-side wiggle
        const baseX = this.initialX;
        this.x = baseX + Math.sin(t * wiggleSpeed + this.row * 0.5) * wiggleAmount;
        
        // Descend vertically
        this.y = this.initialY + t * fallSpeed;
    }
    
    // Bow Ties - horizontal with dramatic swooping up/down motion
    moveBowtie(t, dt) {
        const baseSpeed = 40 * this.speedMult;
        
        // Horizontal movement
        this.x += this.direction * baseSpeed * dt;
        
        // Bounce off edges
        if (this.x >= GAME.WIDTH - GAME.ENEMY.WIDTH / 2 || this.x <= GAME.ENEMY.WIDTH / 2) {
            this.direction *= -1;
            this.x = Math.max(GAME.ENEMY.WIDTH / 2, Math.min(GAME.WIDTH - GAME.ENEMY.WIDTH / 2, this.x));
        }
        
        // Dramatic swooping - large amplitude, slower frequency
        const swoopAmount = 25;
        const swoopSpeed = 2;
        const baseY = this.initialY + t * 8 * this.speedMult;
        this.y = baseY + Math.sin(t * swoopSpeed + this.col * 1.0) * swoopAmount;
    }
    
    // Dice - straight vertical drop (cycle 1); erratic diagonal (later cycles)
    moveDice(t, dt) {
        const fallSpeed = 80 * this.speedMult;
        
        if (this.megaCycle === 0) {
            // Cycle 1: Straight down with spin
            this.y = this.initialY + t * fallSpeed;
            // Slight random wobble for visual interest
            this.x = this.initialX + Math.sin(t * 8) * 3;
        } else {
            // Later cycles: Erratic diagonal angles
            this.y = this.initialY + t * fallSpeed;
            this.x = this.initialX + Math.tan(this.diceAngle) * t * fallSpeed;
            
            // Wrap around horizontally for more chaos
            if (this.x < 0) this.x += GAME.WIDTH;
            if (this.x > GAME.WIDTH) this.x -= GAME.WIDTH;
        }
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
    const type = (gameState.waveNumber - 1) % 8;
    
    // Shared formation data for coordinated movement
    const formationData = { direction: 1 };
    
    switch (type) {
        case 5: // Steam Irons - 3 vertical columns, 2 per column
            for (let col = 0; col < 3; col++) {
                for (let row = 0; row < 2; row++) {
                    const index = col * 2 + row;
                    gameState.enemies.push(new Enemy(index, gameState.waveNumber, row, col, formationData));
                }
            }
            break;
            
        case 7: // Dice - scattered, random drops
            for (let i = 0; i < GAME.ENEMY.COUNT; i++) {
                gameState.enemies.push(new Enemy(i, gameState.waveNumber, 0, i, formationData));
            }
            break;
            
        default: // Row-based enemies (hamburgers, cookies, bugs, tires, diamonds, bowties)
            const rowCount = 2;
            const colCount = Math.ceil(GAME.ENEMY.COUNT / rowCount);
            let index = 0;
            for (let row = 0; row < rowCount; row++) {
                for (let col = 0; col < colCount && index < GAME.ENEMY.COUNT; col++) {
                    gameState.enemies.push(new Enemy(index, gameState.waveNumber, row, col, formationData));
                    index++;
                }
            }
            break;
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
                // Authentic Atari 2600 scoring: different points for first cycle vs later cycles
                const pointData = ENEMY_POINTS[enemy.type];
                const points = enemy.megaCycle === 0 ? pointData.firstCycle : pointData.laterCycles;
                gameState.score += points;
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

// Sprite drawing with scale (for diamond spin animation)
function drawSpriteScaled(sprite, colors, x, y, scaleX, scaleY, alpha = 1) {
    const basePixelSize = scale * (16 / sprite[0].length);
    const pixelWidth = basePixelSize * scaleX;
    const pixelHeight = basePixelSize * scaleY;
    
    ctx.globalAlpha = alpha;
    for (let row = 0; row < sprite.length; row++) {
        for (let col = 0; col < sprite[row].length; col++) {
            const colorIndex = sprite[row][col];
            if (colorIndex > 0 && colorIndex <= colors.length) {
                ctx.fillStyle = colors[colorIndex - 1];
                ctx.fillRect(
                    x * scale + col * pixelWidth,
                    y * scale + row * pixelHeight,
                    pixelWidth,
                    pixelHeight
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

// Get colors for enemy based on MegaCycle
function getEnemyColors(enemy) {
    const spriteName = getEnemySprite(enemy.type);
    const palettes = CYCLE_PALETTES[spriteName];
    
    if (!palettes || palettes.length === 0) {
        return SPRITE_COLORS[spriteName];
    }
    
    // Dice always uses cycle 0 colors (always yellow)
    if (enemy.type === 7) {
        return palettes[0];
    }
    
    // Get color palette based on MegaCycle, cycling through available palettes
    const paletteIndex = enemy.megaCycle % palettes.length;
    return palettes[paletteIndex];
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
        const colors = getEnemyColors(enemy);
        
        // Special handling for diamonds - spin animation affects width
        if (enemy.type === 4) {
            const diamondScale = enemy.getDiamondScale();
            drawSpriteScaled(
                spriteData,
                colors,
                enemy.x - (GAME.ENEMY.WIDTH * diamondScale) / 2,
                enemy.y - GAME.ENEMY.HEIGHT / 2,
                diamondScale,
                1,
                1
            );
        } else {
            drawSprite(
                spriteData,
                colors,
                enemy.x - GAME.ENEMY.WIDTH / 2,
                enemy.y - GAME.ENEMY.HEIGHT / 2,
                1
            );
        }
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


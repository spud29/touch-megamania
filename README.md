# Megamania Touch - Web Version

A web-based recreation of the classic Atari 2600 game Megamania, optimized for mobile browsers.

## How to Play on Your iPhone

### Option 1: Open Directly
1. Host these files on any web server (see hosting options below)
2. Open the URL in Safari on your iPhone
3. Play directly in the browser!

### Option 2: Add to Home Screen (Recommended)
For the best fullscreen experience:

1. Open the game in Safari
2. Tap the Share button (square with arrow)
3. Scroll down and tap "Add to Home Screen"
4. Tap "Add"
5. Now launch it from your home screen like a native app!

This gives you:
- ✅ Fullscreen gameplay (no browser UI)
- ✅ Native app-like experience
- ✅ Quick access from home screen
- ✅ Offline play (after first load)

## Hosting Options

### Free & Easy Options:

**1. GitHub Pages (Recommended)**
- Create a GitHub account
- Create a new repository
- Upload these files
- Enable GitHub Pages in Settings
- Access at: `https://yourusername.github.io/repo-name`

**2. Netlify Drop**
- Go to https://app.netlify.com/drop
- Drag the `megamania-web` folder
- Get instant URL

**3. Vercel**
- Go to https://vercel.com
- Import the folder
- Deploy with one click

**4. CodePen**
- Paste HTML, CSS, and JS into CodePen
- Get shareable link

**5. Local Testing**
If you have Python installed:
```bash
cd megamania-web
python3 -m http.server 8000
```
Then visit `http://localhost:8000` on your phone (same WiFi)

## Controls

- **Move**: Touch and drag anywhere on screen
- **Fire**: While holding first finger, tap with a second finger
- **Pause**: Tap the pause button (top right)

## Features

- All 8 original enemy waves with unique movement patterns
- Energy bar depletion mechanic
- Score tracking and high score persistence
- Retro sound effects
- Responsive layout (works in portrait or landscape)
- Touch-optimized controls
- Works offline after first load

## Browser Requirements

- Safari on iOS 14+
- Chrome on Android 8+
- Any modern mobile browser with Canvas support

## Files

- `index.html` - Main HTML structure and UI
- `game.js` - Complete game logic and rendering
- `manifest.json` - Web app manifest for "Add to Home Screen"
- `README.md` - This file

## Tips

- For best performance, close other browser tabs
- Add to home screen for fullscreen mode
- Works in portrait or landscape orientation
- High scores are saved locally to your device

Enjoy!


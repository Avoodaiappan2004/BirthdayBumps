# ✨ Premium Birthday Surprise Experience (Strict Midnight Lock & Reveal)

An interactive digital birthday experience crafted for your best friend, featuring **strict midnight locking**, an **epic 12-step midnight cinematic reveal**, and a **jigsaw puzzle that reveals the complete photo upon solving**.

---

## 🔒 1. Strict Midnight Lock (Before 12:00 AM)

Before the configured date and time:
- **Zero Birthday Content**: No photos, no birthday messages, no names in greetings, no timeline, no quotes, no letters, no cake, and no scrollable content.
- **Silent Audio**: Birthday music remains completely off.
- **100vh Dreamy Countdown Screen**:
  - **Live Star Sky & Shooting Stars**: Floating celestial starfield.
  - **Glowing Moon 🌙**: Atmospheric soft glowing moon with subtle movement and pulsing haze.
  - **Mystery Orb 🔮**: Swirling gradient sphere emitting starry sparkles.
  - **Interactive Lock 🔒**: Clicking the lock displays *"Access denied. Come back at exactly midnight. 😌"*.
  - **"Can I get a hint? 👀"**: Playful interactive button with humorous responses (*"Nice try 😂"*, *"Midnight will tell you everything..."*, etc.).
  - **Periodic Mystery Hints**: Subtle floating reminders (*"Something is waiting..."*, *"Midnight knows..."*).
  - **Dynamic Countdown Messages**:
    - `> 7 days`: *"Something beautiful is getting closer..."*
    - `≤ 7 days`: *"The countdown has begun... 👀"*
    - `≤ 24 hours`: *"Tomorrow, the surprise unlocks. ❤️"*
    - `≤ 1 hour`: *"Almost time..."*
    - `≤ 10 minutes`: *"The secret is getting closer..."*
    - `≤ 60 seconds`: *"Get ready... ❤️"*
  - **Cinematic Last 10 Seconds**: Enormous screen-filling zoom and blur numbers (10, 9, ..., 1) counting down to midnight.

---

## 💥 2. Midnight Cinematic Reveal Sequence

At exactly 12:00 AM local time (`difference <= 0`):
1. **Countdown freezes**.
2. **Screen darkens**.
3. **Lock icon glows intensely**.
4. **Lock crack & open animation plays**.
5. **Circular shockwave expands from the center**.
6. **Particles explode outward**.
7. **Golden and pink confetti shower appears**.
8. **Stars brighten**.
9. **Background shifts from midnight lock to celebration theme**.
10. **"THE WAIT IS OVER ✨" appears**.
11. **"HAPPY BIRTHDAY ❤️" reveals**.
12. **Full birthday website unlocks and birthday music starts!**

### Autoplay Handling
- If the browser allows autoplay, the music starts automatically.
- If the browser blocks autoplay before user interaction, a graceful modal appears:
  *"Your surprise is ready ❤️"* → **[ENTER YOUR SURPRISE 🎵]** button to begin audio smoothly.
- Once unlocked, a floating music button (`🎵 Playing` / `🔇 Paused`) remains accessible.

---

## 🧩 3. Jigsaw Puzzle Complete Photo Reveal (FIXED)

- **Interactive 3×3 puzzle**: Responsive dragging, snapping, touch controls on mobile, timer, and moves counter.
- **Accurate completion detection**: Verifies that every piece is in its exact slot.
- **Clear Celebration & Reveal**:
  1. Pieces glow gold upon solving.
  2. Celebration fanfare and confetti shower.
  3. The puzzle smoothly transitions into a **dedicated Full Photo Reveal Card** showcasing the complete, uncropped photo (`object-fit: contain;`) with scale-in blur-to-clear animation.
  4. Displays caption: *"A memory worth putting back together. ❤️"*
  5. Includes a **[Play Again]** button that resets and shuffles the pieces without reloading the page.

---

## ⚙️ Configuration

Set your friend's name, local birthday timestamp, music, and images in [`script.js`](file:///d:/New%20folder%20(2)/script.js):

```javascript
const birthdayConfig = {
    // Friend's Name
    friendName: "ARUN",
    
    // Birthday Date & Time (Strict Local Time: YYYY-MM-DDTHH:mm:ss)
    birthdayDate: "2026-10-10T00:00:00",
    
    // Birthday BGM
    music: "assets/birthday.mp3",
    
    // Jigsaw Puzzle Image
    puzzleImage: "assets/puzzle.jpg",
    
    // Photos
    photos: [
        "assets/photo1.jpg",
        "assets/photo2.jpg",
        "assets/photo3.jpg",
        "assets/photo4.jpg"
    ]
};
```

---

## 🌐 Running Locally

The local server is running at:
- **`http://localhost:3000`**

### Testing Shortcuts (Console)
For testing the transitions without altering dates, open Developer Tools (F12) in the browser console:
- `window.__TEST_UNLOCK__()`: Triggers the 12-step midnight cinematic reveal sequence immediately.
- `window.__TEST_LOCK__()`: Returns the website to the locked countdown state.
- Or open with `http://localhost:3000/?unlock=1` to preview the unlocked state directly.

# Rock Paper Scissors Game 🎮
[LINK](https://rock-paper-sc-one.vercel.app/)
A modern, interactive Rock Paper Scissors game built with HTML, CSS, and JavaScript featuring an animated buffering system and smooth user experience.

## 🎯 Features

- **Interactive Gameplay**: Click on Rock (👊), Paper (✋), or Scissors (✌️) to play
- **Animated Buffering**: 1.5-second visual countdown before computer reveals choice
- **Visual Feedback**: Computer's choice is highlighted in red
- **Smooth UX**: Prevents multiple clicks during animation
- **Responsive Design**: Modern, clean interface with hover effects
- **Real-time Results**: Instant win/lose/tie determination

## 🚀 How to Play

1. **Open the game**: Simply open `index.html` in your web browser
2. **Make your choice**: Click on Rock, Paper, or Scissors
3. **Watch the animation**: Computer's choices will cycle through with red highlighting
4. **See the result**: After 1.5 seconds, the computer reveals its choice and the winner is determined


## 📁 File Breakdown

### `index.html`
- **Structure**: Clean HTML5 structure with semantic elements
- **Layout**: Two main game areas (Player vs Computer)
- **Elements**: 
  - Navigation header with game title
  - Player choice area (3 clickable options)
  - Computer choice area (3 visual indicators)
  - Results display section

### `style.css`
- **Design**: Modern, responsive layout using Flexbox
- **Styling**: 
  - Clean blue color scheme with rounded corners
  - Hover effects for interactive elements
  - Responsive design that works on different screen sizes
  - Box shadows and smooth transitions
- **Layout**: 
  - Flexbox-based grid system
  - Centered content with proper spacing
  - Visual hierarchy with different element sizes

### `scripts.js`
- **Core Logic**: Complete game implementation with advanced features
- **Key Functions**:
  - `buffering(start)`: Controls the animated countdown
  - `game(userInput)`: Determines winner and updates display
  - `stack(input)`: Orchestrates the 1.5-second delay sequence
- **Event Handling**: Click listeners for all three choices
- **Animation Control**: Manages visual feedback and timing

## ⚙️ Technical Implementation

### Game Flow
1. **User Input**: Player clicks on Rock, Paper, or Scissors
2. **Input Lock**: Prevents multiple clicks during animation (2-second cooldown)
3. **Buffering Animation**: Computer choices cycle through with red highlighting
4. **Delay**: 1.5-second timeout before revealing result
5. **Result Display**: Computer choice highlighted, winner determined
6. **Reset**: Animation stops, game ready for next round

### Key Technical Features

#### Buffering System
```javascript
function buffering(start) {
    // Controls the visual countdown animation
    // Cycles through computer choices every 50ms
    // Highlights current choice in red
}
```

#### Game Logic
```javascript
function game(userInput) {
    // Random computer choice generation
    // Win/lose/tie determination
    // Visual feedback for computer's choice
}
```

#### Timing Control
```javascript
function stack(input) {
    // 1.5-second delay implementation
    // Coordinates buffering animation with game logic
    // Manages the complete user interaction sequence
}
```

### Advanced Features

1. **Click Prevention**: Uses `pointerEvents = "none"` to prevent multiple clicks
2. **Visual Feedback**: Dynamic background color changes for computer choices
3. **Smooth Animation**: 50ms interval for fluid visual transitions
4. **Clean State Management**: Proper cleanup of intervals and visual states

## 🎨 Design Philosophy

- **User-Centric**: Clear visual feedback and intuitive interactions
- **Modern Aesthetics**: Clean design with rounded corners and subtle shadows
- **Responsive**: Works across different screen sizes
- **Accessible**: Large click targets and clear visual hierarchy
- **Engaging**: Smooth animations that enhance the gaming experience

## 🚀 Getting Started

1. **Clone or Download**: Get the project files
2. **Open**: Simply open `index.html` in any modern web browser
3. **Play**: No installation or setup required!

## 🔧 Customization

### Changing Animation Speed
- Modify the `50` in `setInterval()` for faster/slower buffering
- Adjust the `1500` in `setTimeout()` for longer/shorter delays

### Styling Changes
- Edit `style.css` to change colors, fonts, or layout
- Modify hover effects in the CSS selectors


## 🎯 Game Rules

- **Rock** beats **Scissors**
- **Paper** beats **Rock** 
- **Scissors** beats **Paper**
- Same choice = **Tie**

## 🛠️ Technologies Used

- **HTML5**: Semantic structure and accessibility
- **CSS3**: Modern styling with Flexbox and animations
- **Vanilla JavaScript**: No frameworks, pure ES6+ features
- **DOM Manipulation**: Dynamic content updates
- **Timing APIs**: `setTimeout()` and `setInterval()` for animations

---

**Enjoy playing Rock Paper Scissors!** 🎉

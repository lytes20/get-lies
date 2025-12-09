## About

**Get Lies** is a simple, interactive web application that displays randomly selected playful lies with a charming typewriter animation effect. The site is designed to bring smiles and lighten moods with creative, harmless stories that are perfect for cheering up someone special.

The website features:

- 🎨 Beautiful typewriter animation effect
- 🎲 Random lie generation from a curated collection
- 🔄 Easy refresh to get a new lie
- 📱 Responsive design
- 📊 Google Analytics integration for traffic tracking

## Features

- **Random Lie Generation**: Each visit displays a randomly selected lie from a collection of 50+ creative stories
- **Typewriter Effect**: Lies are displayed with a smooth, animated typewriter effect for an engaging user experience
- **Simple Interface**: Clean, minimal design focused on the content
- **Mobile Friendly**: Responsive layout that works on all devices

## Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Styling with animations
- **Vanilla JavaScript**: No frameworks, pure JavaScript
- **JSON**: Data storage for lies collection

## Getting Started

### Local Development

1. Clone the repository:

   ```bash
   git clone https://github.com/lytes20/get-lies.git
   cd get-lies
   ```

2. Open `index.html` in your web browser, or use a local server:

   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js (http-server)
   npx http-server
   ```

3. Visit `http://localhost:8000` in your browser

## How It Works

1. On page load, the JavaScript fetches the lies from `src/data/lies.json`
2. A random lie is selected from the collection
3. The lie is displayed with a typewriter animation effect
4. Users can click the "Refresh to view Next Lie" button to reload the page and get a new random lie

## Contributing

Contributions are welcome! Feel free to:

- Add more creative lies to `src/data/lies.json`
- Improve the design and styling
- Enhance the typewriter animation
- Add new features

## License

This project is open source and available for personal use.

---

Made with ❤️ to bring smiles and cheer up someone special

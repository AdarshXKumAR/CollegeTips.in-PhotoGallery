# CollegeTips Gallery 📸

A modern, responsive photo gallery website showcasing the best moments and memories from the CollegeTips.in journey. Features an elegant design with smooth animations, theme switching, and interactive filtering.

## ✨ Features

- **Responsive Design** - Optimized for all screen sizes and devices
- **Dark/Light Theme Toggle** - Switch between themes with smooth transitions
- **Category Filtering** - Filter photos by different categories (Team Vibes, Creative Events, etc.)
- **Modal Image Viewer** - Click any image to view in full-screen modal
- **Smooth Animations** - Hover effects, transitions, and micro-interactions
- **Glassmorphism UI** - Modern frosted glass effect design
- **Keyboard Navigation** - Close modal with Escape key
- **SEO Optimized** - Proper meta tags and semantic HTML

## 🎨 Categories

- **Team Vibes** - Team celebrations and group moments
- **Creative Events** - Creative campaigns and party moments  
- **How We Do It?** - Work processes and methodologies
- **WorkPlace** - Office environment and workspace shots

## 🚀 Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with CSS Grid, Flexbox, and animations
- **Vanilla JavaScript** - Interactive functionality and theme management
- **CSS Variables** - Dynamic theming system
- **Local Storage** - Theme preference persistence

## 📁 Project Structure

```
collegetips-gallery/
├── index.html              # Main HTML file
├── static/
│   ├── styles.css         # CSS styles and animations
│   └── script.js          # JavaScript functionality
└── README.md              # Project documentation
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/AdarshXKumAR/CollegeTips.in-PhotoGallery.git
   cd collegetips-gallery
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your preferred browser
   # Or use a local server for development
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

3. **For development with live reload** (optional)
   ```bash
   # Using Live Server extension in VS Code
   # Or any local development server
   ```

## 🎯 Usage

1. **Browse Gallery** - Scroll through the photo collection
2. **Filter Categories** - Click category buttons to filter images
3. **View Full Images** - Click any photo to open in modal viewer
4. **Switch Themes** - Use the theme toggle button in the header
5. **Close Modal** - Click X button or press Escape key

## 🎨 Customization

### Adding New Images

Edit the `galleryData` array in `static/script.js`:

```javascript
{
  id: '10',
  url: 'path/to/your/image.jpg',
  title: 'Your Image Title',
  description: 'Your image description',
  category: 'your-category',
  categoryName: 'Your Category Name'
}
```

### Modifying Themes

Update CSS variables in `static/styles.css`:

```css
html[data-theme='dark'] {
  --bg-primary: #your-color;
  --text-primary: #your-color;
  /* Add more custom colors */
}
```

### Adding New Categories

1. Add new filter button in HTML
2. Update JavaScript filtering logic
3. Add corresponding images with the new category

## 🌟 Key Features Explained

### Theme System
- Automatic theme persistence using localStorage
- Smooth transitions between light and dark modes
- Dynamic icon switching for theme toggle button

### Image Loading
- Optimized image loading with proper aspect ratios
- Hover effects with smooth scaling animations
- Category badges for easy identification

### Responsive Grid
- CSS Grid with auto-fill for optimal layout
- Maintains aspect ratios across different screen sizes
- Mobile-first responsive design approach

## 🔧 Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)

## 📱 Mobile Experience

- Touch-friendly interface
- Optimized grid layout for mobile screens
- Smooth scrolling and interactions
- Responsive modal viewer

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- CollegeTips.in team for the amazing photos and content
- Modern web design trends and inspiration
- Open source community for development tools

## 📞 Contact

For any questions or suggestions, please reach out to the CollegeTips.in team.

---

**Made with 💚 for the Web Development Project**

© 2025 CollegeTips.in. All rights reserved.

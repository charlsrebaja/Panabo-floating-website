# Images Folder

This folder contains all image assets for the Floating Beach Panabo City website.

## Folder Structure

```
images/
├── hero-beach.jpg          # Hero section background image (required)
├── gallery/                # Gallery section images
│   ├── beach-1.jpg
│   ├── beach-2.jpg
│   ├── beach-3.jpg
│   ├── sunset.jpg
│   ├── cottages.jpg
│   └── water-sports.jpg
├── about/                  # About section images
│   └── floating-beach.jpg
└── README.md              # This file
```

## Image Requirements

### Hero Background (`hero-beach.jpg`)

- **Recommended Size:** 1920x1080px or larger
- **Format:** JPG, PNG
- **Purpose:** Full-width hero section background
- **Notes:** Should showcase the beach/water. The CSS applies a teal gradient overlay for readability.

### Gallery Images (`gallery/`)

- **Recommended Size:** 600x600px minimum
- **Format:** JPG, PNG
- **Purpose:** Beach and activity photos for the gallery grid
- **Notes:** Images are displayed at 300x300px on desktop

### About Section Image (`about/`)

- **Recommended Size:** 400x400px minimum
- **Format:** JPG, PNG
- **Purpose:** Hero section display with text
- **Notes:** Displayed with rounded corners and hover effects

## CSS Integration

The hero background image is referenced in `css/style.css`:

```css
.hero {
  background-image: linear-gradient(
      rgba(41, 225, 230, 0.5),
      rgba(27, 163, 176, 0.6)
    ), url("../images/hero-beach.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
```

## How to Add Images

1. Place your beach/tourism images in this folder
2. Update image paths in `index.html` if needed
3. Test responsiveness on different screen sizes
4. Optimize images for web (use tools like TinyPNG or ImageOptim)

## Recommended Free Image Sources

- **Unsplash:** https://unsplash.com
- **Pexels:** https://www.pexels.com
- **Pixabay:** https://pixabay.com
- **Freepik:** https://www.freepik.com

Search for: "beach", "ocean", "coastal", "tropical paradise", "floating cottages"

## Image Optimization Tips

- Use modern formats (WebP for faster loading)
- Compress images to reduce file size
- Use responsive image techniques
- Lazy load gallery images for better performance
- Add descriptive alt text for accessibility

---

**Note:** Replace placeholder images with real Floating Beach photos for production.

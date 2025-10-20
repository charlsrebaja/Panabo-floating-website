# Image Integration Guide

This guide shows how to update the HTML file to use local images from the `images/` folder instead of placeholder URLs.

## Current Setup

The website currently uses placeholder images from `https://via.placeholder.com/`. To use local images, follow the steps below.

## Step 1: Add Hero Background Image

The hero section is already configured to use local images. Place your hero image as:

```
images/hero-beach.jpg
```

**The CSS already handles this:**

```css
.hero {
  background-image: linear-gradient(
      rgba(41, 225, 230, 0.5),
      rgba(27, 163, 176, 0.6)
    ), url("../images/hero-beach.jpg");
}
```

## Step 2: Update About Section Image

Find this in `index.html` (around line 65):

**Current:**

```html
<img
  src="https://via.placeholder.com/400x400?text=Floating+Beach"
  alt="Floating Beach"
/>
```

**Replace with:**

```html
<img
  src="images/about/floating-beach.jpg"
  alt="Floating Beach Panoramic View"
/>
```

## Step 3: Update Gallery Images

Find the gallery section (around line 115) and replace all 6 images:

**Current Example:**

```html
<img
  src="https://via.placeholder.com/300x300?text=Beach+1"
  alt="Beach Scene 1"
  onclick="openLightbox(this.src)"
/>
```

**Replace with:**

```html
<!-- Image 1 -->
<img
  src="images/gallery/beach-1.jpg"
  alt="Pristine White Sand Beach"
  onclick="openLightbox(this.src)"
/>

<!-- Image 2 -->
<img
  src="images/gallery/beach-2.jpg"
  alt="Crystal Clear Waters"
  onclick="openLightbox(this.src)"
/>

<!-- Image 3 -->
<img
  src="images/gallery/beach-3.jpg"
  alt="Beach Shoreline View"
  onclick="openLightbox(this.src)"
/>

<!-- Image 4 -->
<img
  src="images/gallery/sunset.jpg"
  alt="Beautiful Tropical Sunset"
  onclick="openLightbox(this.src)"
/>

<!-- Image 5 -->
<img
  src="images/gallery/cottages.jpg"
  alt="Floating Beach Cottages"
  onclick="openLightbox(this.src)"
/>

<!-- Image 6 -->
<img
  src="images/gallery/water-sports.jpg"
  alt="Water Sports Activities"
  onclick="openLightbox(this.src)"
/>
```

## File Paths Reference

```
images/
├── hero-beach.jpg              ← Hero section background
├── gallery/
│   ├── beach-1.jpg
│   ├── beach-2.jpg
│   ├── beach-3.jpg
│   ├── sunset.jpg
│   ├── cottages.jpg
│   └── water-sports.jpg
└── about/
    └── floating-beach.jpg
```

## Image Specifications

### Hero Background Image

- **Filename:** `hero-beach.jpg`
- **Recommended Resolution:** 1920x1080px or higher
- **Aspect Ratio:** 16:9
- **File Size:** 200-400 KB (optimized)
- **Content:** Panoramic beach view with ocean and sky

### Gallery Images

- **Resolution:** 600x600px or higher
- **Aspect Ratio:** 1:1 (square)
- **File Size:** 100-200 KB each (optimized)
- **Content:**
  - `beach-1.jpg` - Sandy beach area
  - `beach-2.jpg` - Ocean water close-up
  - `beach-3.jpg` - Beach shoreline
  - `sunset.jpg` - Sunset/sunrise over water
  - `cottages.jpg` - Floating cottages
  - `water-sports.jpg` - Water activities/sports

### About Section Image

- **Filename:** `about/floating-beach.jpg`
- **Resolution:** 400x400px or higher
- **Aspect Ratio:** 1:1 or flexible
- **File Size:** 80-150 KB (optimized)
- **Content:** Featured beach attraction photo

## Image Optimization Tips

### Before Uploading

1. **Resize** to recommended dimensions
2. **Compress** using online tools:
   - TinyPNG: https://tinypng.com
   - ImageOptim: https://imageoptim.com
   - Compress.com: https://compress.com
3. **Format:** Use JPG for photographs, PNG for graphics
4. **Quality:** Export at 80-85% JPG quality for web

### Browser Compatibility

- JPG: Universal support
- PNG: Universal support
- WebP: Modern browsers (consider for optimization)

## Testing Locally

1. Add all images to the respective folders
2. Open `index.html` in your browser
3. Check that all images load correctly
4. Verify responsive behavior on mobile devices
5. Check image quality and loading performance

## Troubleshooting

### Images Not Loading

- **Check path:** Verify file paths match exactly (case-sensitive on Linux/Mac)
- **File exists:** Confirm image files are in the correct folder
- **Browser cache:** Clear cache or use Ctrl+Shift+R (or Cmd+Shift+R)

### Image Quality Issues

- **Resolution too low:** Use higher resolution source images
- **Compression too high:** Re-export with better quality settings
- **Wrong format:** Use JPG for photos, PNG for graphics

### Performance Issues

- **File too large:** Compress images further
- **Too many images:** Consider lazy loading or pagination
- **Network slow:** Optimize with modern formats (WebP)

## Next Steps

1. Collect high-quality beach/tourism images
2. Organize them into respective folders
3. Optimize images for web
4. Update HTML file paths as shown above
5. Test thoroughly across different devices
6. Deploy website to hosting

---

**Ready to add images?** Start with the hero background image first to see the immediate visual impact!

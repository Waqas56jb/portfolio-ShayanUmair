# Quick Start Guide

## Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages including:
- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons

## Step 2: Run Development Server

```bash
npm run dev
```

The portfolio will be available at: http://localhost:3000

## Step 3: Customize Your Portfolio

### Update Personal Information

1. **Hero Section** (`components/Hero.tsx`):
   - Line 29: Update your name
   - Line 33: Update your title
   - Line 36-39: Update description
   - Line 78-95: Update social media links

2. **About Section** (`components/About.tsx`):
   - Line 22: Update subtitle
   - Line 32-46: Update about text
   - Line 58-72: Update statistics

3. **Skills Section** (`components/Skills.tsx`):
   - Update skill categories and technologies as needed

4. **Projects Section** (`components/Projects.tsx`):
   - Replace placeholder projects with your actual projects
   - Update descriptions, technologies, and links

5. **Experience Section** (`components/Experience.tsx`):
   - Add your work experience
   - Update education details

6. **Contact Section** (`components/Contact.tsx`):
   - Line 25: Update email
   - Line 30: Update LinkedIn
   - Line 35: Update GitHub
   - Line 40: Update location
   - Configure form submission (currently placeholder)

7. **Metadata** (`app/layout.tsx`):
   - Line 6: Update title
   - Line 7: Update description

## Step 4: Build for Production

```bash
npm run build
npm start
```

## Step 5: Deploy

The easiest way is using Vercel:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

## Notes

- All linting errors will disappear after running `npm install`
- The portfolio uses a blue and white theme (customizable in `tailwind.config.js`)
- All animations are handled by Framer Motion
- The design is fully responsive


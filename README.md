# Jumana P A — Software Engineer Portfolio

A minimal, modern, and fully responsive personal portfolio built with Next.js, TypeScript, and Tailwind CSS. 

This portfolio highlights my professional experience in backend engineering and agentic AI, featuring independent enterprise projects, collaborative platform contributions, and technical writing.

## 🚀 Live Demo
**[https://jumanapa.vercel.app](https://jumanapa.vercel.app)** *(Update this URL if your Vercel domain is different)*

## 🛠 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Fonts:** [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) (Inter)
- **Deployment:** [Vercel](https://vercel.com/)

## 🏗 Architecture & Features

- **Data-Driven UI:** All portfolio content (Experience, Projects, Skills, Education) is decoupled from the UI and stored in typed configuration files inside `src/config/`. This makes updating content effortless without touching component logic.
- **Component-Based Sections:** Modular sections for Hero, Experience, Projects, Technical Writing, Skills, and Education.
- **Clean Typography:** Utilizes a minimal, high-contrast design to emphasize readability and professional presentation.
- **Responsive Design:** Fully fluid layout that adapts seamlessly from mobile devices to large desktop monitors.
- **Professional Distinction:** Clearly distinguishes between independently developed enterprise projects and collaborative platform contributions.
- **SEO & Metadata:** Fully configured OpenGraph, Twitter cards, and favicon assets for professional link sharing.

## 📂 Project Structure

```text
jumana-portfolio/
├── public/                 # Static assets (favicons, og-image, company logos)
├── src/
│   ├── app/                # Next.js App Router (layout, page, globals)
│   ├── components/
│   │   ├── sections/       # Page sections (Hero, Projects, Skills, etc.)
│   │   └── Navbar.tsx      # Sticky top navigation
│   ├── config/             # Portfolio data (site, experience, projects, etc.)
│   └── lib/                # Utility functions
├── package.json
└── tailwind.config.ts
```
## Local Development

To run this project locally, follow these steps:

### 1. Clone the repository
```
git clone https://github.com/jumanapa07/jumana-portfolio.git
cd jumana-portfolio
```


### 2. Install dependencies
```
npm install
```


### 3. Run the development server

```
npm run dev
```


### 4. Open in your browser

Visit [http://localhost:3000](http://localhost:3000).

## License

This project is intended for personal portfolio and professional showcase purposes.


---


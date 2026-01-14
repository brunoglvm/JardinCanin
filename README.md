# <img src="./.github/logo.png" width="32" alt="Jardin Canin Logo" /> Jardin Canin | LP

![Preview](./.github/preview.jpg)

<div>
    <img src="https://img.shields.io/badge/astro-%232C2052.svg?style=for-the-badge&logo=astro&logoColor=white" alt="Astro Badge">
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript Badge">
    <img src="https://img.shields.io/badge/strapi-%232E7EEA.svg?style=for-the-badge&logo=strapi&logoColor=white" alt="Strapi Badge">
</div>

Jardin Canin is a boutique dog daycare landing page built as a personal showcase. The goal is to highlight visual storytelling, responsive layouts, and smooth interactions using Astro.

## About the Project

The experience is structured as a single-page brand narrative with distinct sections:

- **Hero**: Introduction with clear calls to action.
- **About**: Brand story, benefits, and service highlights.
- **Our Friends**: Image carousel to showcase the daycare routine.
- **FAQ**: Common questions and expectations.
- **CTA + Footer**: Final call to action and contact details.

### Key Features

- Fully responsive layout built with Astro and Tailwind CSS.
- Smooth scrolling and subtle motion using Lenis.
- Embla carousel with autoplay and dot navigation.
- Optimized images through `astro:assets`.
- Modular, reusable Astro components.

---

## Prerequisites

To run the project locally, you will need:

- **Node.js** (v18+ recommended; v20+ required if running the CMS)
- **pnpm**, **npm**, or **yarn**

---

## Running the Project

Follow the steps below to start the front-end:

### 1. Clone the Repository

```
git clone <repository-url>
```

### 2. Install Dependencies

From the project root, install the dependencies:

```bash
pnpm install
```

### 3. Start the Front-end

Start the development server:

```bash
pnpm dev
```

The app will be available at `http://localhost:4321`.

---

## CMS (Strapi)

This repo also includes a Strapi setup inside `cms/` in case you want to connect the landing page to a CMS.

```bash
cd cms
pnpm install
pnpm develop
```

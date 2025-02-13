# My Personal Portfolio App

## Overview

This is my personal portfolio built using **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion** for animations. The project follows a modular architecture with clear separation of concerns, making it scalable and maintainable.

## Features

- **Responsive Design** using Tailwind CSS
- **Animations** powered by Framer Motion
- **Authentication** (Google & GitHub Social Login)
- **CRUD Operations** for Blogs and Projects
- **Dynamic Theming** (Dark Mode & Light Mode)
- **Dashboard for Managing Content**
- **Optimized Performance with Next.js Features**
- **Error Handling & Custom Pages**

## Tech Stack

- **Frontend:** Next.js 15, TypeScript, Tailwind CSS, Framer Motion
- **Backend:** Node.js with Express.js
- **Database:** MongoDB, Vercel
- **Authentication:** NextAuth.js with Google & GitHub OAuth

## Project Structure

```
📦 my-portfolio
├── 📂 src
│   ├── 📂 actions
│   │   ├── action.ts  # Delete & Update Blog/Project
│   │   ├── createBlog.ts  # Blog Creation Logic
│   │   ├── createProject.ts  # Project Creation Logic
│   ├── 📂 app
│   │   ├── 📂 dashboardlayout
│   │   │   ├── 📂 blogs
|   |   |   |   |   ├── 📂 create # Create Page
│   │   │   │   ├── loading.tsx
│   │   │   │   ├── page.tsx
│   │   │   ├── 📂 projects
|   |   |   |   |   ├── 📂 create
│   │   │   │   ├── loading.tsx
│   │   │   │   ├── page.tsx
│   │   │   ├── 📂 messages
│   │   │   │   ├── loading.tsx
│   │   │   │   ├── page.tsx
│   │   │   ├── page.tsx
│   │   ├── 📂 withcommonlayout
│   │   │   ├── 📂 about
│   │   │   │   ├── page.tsx
│   │   │   ├── 📂 blog
│   │   │   │   ├── page.tsx
│   │   │   ├── 📂 contact
│   │   │   │   ├── page.tsx
│   │   │   ├── 📂 projects
│   │   │   │   ├── page.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   ├── 📂 api  # API Routes
│   │   ├── 📂 login
│   │   ├── error.tsx  # Error Page
│   │   ├── global.css  # Global Styles
│   │   ├── layout.tsx  # Root Layout
│   │   ├── loading.tsx  # Loading State
│   │   ├── not-found.tsx  # 404 Page
│   ├── 📂 components  # UI Components
│   │   ├── nav.tsx
│   │   ├── footer.tsx
│   │   ├── sidebar.tsx
│   │   ├── theme-provider.tsx
│   ├── 📂 assets  # Static Assets
│   ├── 📂 types  # TypeScript Type Definitions
│   ├── 📂 utils  # Utility Functions
│   ├── 📂 middleware  # Middleware Logic
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/thesanchitadevi/my-portfolio.git
   ```
2. Navigate into the project directory:
   ```bash
   cd my-portfolio
   ```
3. Install dependencies:
   ```bash
   npm install  # or yarn install
   ```
4. Run the development server:
   ```bash
   npm run dev  # or yarn dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- Visit `/` to see the homepage.
- Navigate to `/about`, `/blog`, `/projects`, or `/contact` for portfolio sections.
- Log in to access the dashboard.
- Use the dashboard to create, update, or delete blog posts and projects.

## Contributing

Feel free to fork this project and make improvements. If you find any issues, open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

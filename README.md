# Personal Portfolio of Randrita Sarkar

This is a modern, responsive personal portfolio website built with Next.js and styled with Tailwind CSS. It showcases professional experience, education, skills, projects, and public talks in a clean and elegant interface.

## ✨ Features

- **Responsive Design**: Looks great on all devices, from mobile phones to desktops.
- **Light & Dark Mode**: Switch between light and dark themes seamlessly.
- **Dynamic Content**: Content is managed through a central `content.json` file, making it easy to update.
- **Interactive UI**: Engaging user interface with hover effects, dialogs for project details, and a tab-based navigation.
- **Built with Modern Tech**: Leverages the best of the React ecosystem for a fast and scalable application.

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (React)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN/UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **AI/Generative**: [Genkit](https://firebase.google.com/docs/genkit)
- **Deployment**: Firebase App Hosting

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [npm](https://www.npmjs.com/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Development Server

To start the development server, run the following command:

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result. You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## 📂 Project Structure

- **`src/app`**: Contains the main pages and layout of the application.
- **`src/components`**: Reusable React components, including UI components from ShadCN.
- **`src/ai`**: Genkit flows and AI-related logic.
- **`src/content.json`**: Centralized JSON file for all the portfolio's text content.
- **`public`**: Static assets like images.
- **`tailwind.config.ts`**: Configuration file for Tailwind CSS.
- **`next.config.ts`**: Configuration file for Next.js.

# Movie Search

A modern movie search web application built with React and Vite, featuring a responsive design with Tailwind CSS.

## Technologies Used

- React 19
- Vite 7
- Tailwind CSS 4
- React Icons
- Axios for API calls

## Project Structure

```
MoiveSearch/
├── public/
├── src/
│   ├── Components/
│   │   ├── EmptyMessage.jsx
│   │   ├── ErrorMessage.jsx
│   │   ├── Header.jsx
│   │   ├── Loading.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieFilters.jsx
│   │   ├── MovieList.jsx
│   │   └── Pagination.jsx
│   ├── Context/
│   │   ├── MoviesContext.jsx
│   ├── Hooks/
│   │   ├── useApiCall.jsx
│   ├── Pages/
│   │   ├── Home.jsx
│   │   ├── MovieDetails.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── netlify.toml
├── vite.config.js
├── eslint.config.js
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/LeoAlexThomas/MovieSearch
   cd MovieSearch
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Development

To start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173` by default.

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

To preview the production build:

```bash
npm run preview
# or
yarn preview
```

## Features

- Modern React components using functional components and hooks
- Responsive design with Tailwind CSS
- Movie Search by name and category

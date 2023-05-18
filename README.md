# Netflix Clone

This project is a Netflix clone built using React and Next.js, aimed at providing a user-friendly interface for browsing and watching movies and TV shows. It mimics the popular streaming platform Netflix, allowing users to discover and enjoy a wide range of entertainment content.

## Table of Contents

- [Netflix Clone](#netflix-clone)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Demo](#demo)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Technologies Used](#technologies-used)
  - [Environment Variables](#environment-variables)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- User authentication: Sign up, log in, and log out functionality.
- Browse and search: Explore a vast collection of movies and TV shows, with the ability to search for specific titles.
- Categories: Browse content by different genres, such as action, comedy, drama, etc.
- Watchlist: Add movies and TV shows to your watchlist for easy access later.
- Player: Enjoy a seamless video playback experience with integrated controls.
- Responsive design: The application is optimized for various screen sizes, including mobile and tablet devices.

## Demo

You can access a live demo of the Netflix clone project at [Demo Link](https://your-demo-link.com).

## Installation

To run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/matheusrfferreira/netflix-next-web.git`
2. Navigate to the project directory: `cd netflix-next-web`
3. Install the dependencies: `npm install`

## Usage

After completing the installation steps, you can use the following scripts provided in the `package.json` file:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the production-ready optimized version of the application.
- `npm run start`: Starts the production server to run the built application.
- `npm run lint`: Runs the ESLint linter to check for code quality and consistency.

## Technologies Used

The main technologies and libraries used in this project are:

- React.js: A JavaScript library for building user interfaces.
- Next.js: A React framework for building server-side rendered and static websites.
- Tailwind CSS: A utility-first CSS framework for quickly styling the user interface.
- Axios: A library for making HTTP requests from the browser or Node.js.
- Prisma: A database toolkit for working with databases, including database query and migration capabilities.
- ESLint: A popular JavaScript linter for maintaining code quality and consistency.
- Bcrypt: A library for hashing and salting passwords for secure user authentication.
- Next-Auth: An authentication library for Next.js applications.
- Lodash: A utility library for simplifying JavaScript operations and data manipulation.
- React Icons: A library providing popular icon packs as React components.
- SWR: A data fetching library for efficient and reusable data fetching in React applications.
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
- Zustand: A small, fast, and scalable state management library for React.

## Environment Variables

The project uses environment variables to store sensitive or configurable information. To use environment variables, create a `.env` file in the root of the project and define the following variables:

```
DATABASE_URL=your_database_url
NEXTAUTH_JWT_SECRET=your_nextauth_jwt_secret
NEXTAUTH_SECRET=your_nextauth_secret

GITHUB_ID=your_github_id
GITHUB_SECRET=your_github_secret

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

Make sure to replace `your_database_url`, `your_nextauth_jwt_secret`, `your_nextauth_secret`, `your_github_id`, `your_github_secret`, `your_google_client_id`, and `your_google_client_secret` with your actual values.

To use environment variables in the code, you can access them using `process.env.VARIABLE_NAME`. For example:

```javascript
const databaseUrl = process.env.DATABASE_URL;
const nextAuthJwtSecret = process.env.NEXTAUTH_JWT_SECRET;
const nextAuthSecret = process.env.NEXTAUTH_SECRET;
const githubId = process.env.GITHUB_ID;
const githubSecret = process.env.GITHUB_SECRET;
const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
```

Ensure that you have the necessary credentials and secrets from the corresponding platforms (such as GitHub and Google) to fill in the values for the environment variables.

Remember not to share your `.env` file or expose sensitive information in your code repository.

## Contributing

Contributions to this project are welcome. If you have any suggestions or find any issues, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).


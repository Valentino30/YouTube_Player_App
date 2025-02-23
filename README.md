# YouTube Player

This is a simple React Typescript App bootstrapped with Vite using Tailwind CSS, React Router and React Hot Toast for styling, navigation and error handling.

## Getting Started

- Add the provided `.env` file to the project root folder
- Run the command `yarn` to install all the project dependencies
- Run the command `yarn dev` to launch the web app in development mode
- Run the command `yarn test` to run the test suite in watch mode
- Run the command `yarn coverage` to generate a coverage report

## User Flows

- Input an `invalid YouTube URL` to trigger validation and an error toast
- Input a `valid YouTube URL` and click on save to navigate to the video page
- Click on the `edit URL` button to navigate back to the home page and `enter a new URL`
- Navigate to the GIF page to see a `hopefully funny GIF` being displayed on your screen
- Click on the `back to video` button to go back and `resume the video` where you left off

# Deployment

- `Vercel` has been used as the hosting and deployment platform for speed and ease of use
- Pushing a new commit onto the project's main branch triggers an `automated deployment`
- Please find here the [`deployed version of the app`](https://you-tube-player-app.vercel.app/)

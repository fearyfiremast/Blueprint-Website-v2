# Blueprint Website v2

Official website for SFU Blueprint showcasing our projects, team, and mission.

## 📚 Documentation

- **[Quick Setup Guide](SETUP_GUIDE.md)** - Get started in 5 minutes
- **[Contributing Guide](CONTRIBUTING.md)** - Development workflow and best practices
- **[Technical Handover](TECHNICAL_HANDOVER.md)** - Comprehensive technical documentation
- **[Dependencies](DEPENDENCIES.md)** - Full dependency list and management

---

## Getting Started

### Prerequisites
- Node.js 22.x
- npm 10.x or higher

### Setup
```bash
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode with Vite's dev server.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

The page will reload when you make changes using hot module replacement (HMR).

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run preview`

Locally preview the production build from the `dist` folder.\
Useful for testing the production build before deployment.

# Website Data Management

This README guide is designed to help you understand and manage the data for your website effectively. All crucial data is stored in the `src/constants` directory, within specific JavaScript files organized by functionality. Below, you will find instructions on how to navigate and update each file.

## Directory Structure

The data for the website is organized into several files within the `src/constants` directory:

- **Team/** (mix of .js and .ts files)
  - `Alumni.js`: Contains data about alumni
  - `Blueprint.ts`: Team members who worked on the Blueprint project
  - `Execs.js`: Executive members of the organization
  - `Members.js`: Current team members not tied to a specific project
  - `Mosaic.ts`: Team members who worked on the Mosaic project
  - `Pedals.ts`: Team members who worked on the Pedals project
  - `OurCommunityBikes.ts`: Team members who worked on OCB project
  - `ReelYouth.ts`: Team members who worked on Reel Youth project
- `Event.js`: Upcoming and past events
- `Hiring.js`: Open roles and hiring status
- `Notification.js`: Notification messages displayed on the website
- `projects.ts`: Ongoing and past projects
- `caseStudies.tsx`: Case study content and layouts

## How to Modify Data

### 1. Events

To update or add new events, navigate to the `Events.js` file. This file contains an array of event objects. Each object represents an event with properties such as title, image, date, description, and a link. To add an event, append a new object to the array with the respective details.

### 2. Hiring

The `Hiring.js` file within the `Team` folder manages information related to job openings and roles. It is structured as an array of role objects, each with details like the role name, description, hiring status, and links for applications. Modify the `Hiring` property to `true` or `false` to open or close the hiring for a role, and update the link and description as necessary.

### 3. Notification

To update or change the notification messages displayed on the website, you should modify the `Notification.js` file located in the `src/constants` directory. This file controls the visibility and content of notifications across the site.


### 4. Projects

To add or update project information, go to the `projects.ts` file. This file contains a list of projects each defined by a comprehensive set of properties such as the project name, description, images, tags, and detailed descriptions of the project and the associated non-profit organization. Update the existing project details or add new ones as needed by following the same object structure.

### 5. Case Studies

To add or update case study pages, go to the `caseStudies.tsx` file. Each case study includes hero content, solution details, testimonials, and team member information. Case studies are dynamically routed via `/projects/:slug`.

## General Tips

- Always ensure that the structure of the data objects is consistent with existing entries to avoid issues in the frontend rendering.
- When adding images or links, make sure they are correctly pathed and accessible.
- The project uses a mix of JavaScript (.js) and TypeScript (.ts/.tsx) files. New files should use TypeScript when possible.


## Saving Changes

After making changes, save the files and commit the changes. 
Make sure to test the website to see that all data updates are appearing as expected.
Finally submit a Pull Request.



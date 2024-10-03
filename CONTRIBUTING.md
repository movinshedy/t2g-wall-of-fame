## This guide will walk you through how to contribute to this website

This React website was bootstrapped with Vite. To run the project, ensure that Vite is installed on your system. If not, you can install it using the following command:

```bash
npm install -g vite
```

## Step 1: fork this repository

Fork this repository to have your own copy.

1. Click the Fork button in the top-right corner of this page (to the right of the respository name).
1. Select your GitHub account as the destination for the fork.
1. After the process completes, you will have your own copy of the repository in your GitHub account.

## Step 2: clone the repository to your machine

Clone the forked repository to have a local copy, this is where you will make all the necessary changes

## Step 3: Create a branch for your contribution

To organize your work effectively, create a new branch for your contributions. Follow these guidelines for naming your branch:

1. Open your terminal or command prompt and navigate to your cloned repository.
1. Use the following command to create a new branch:

```bash
git branch <github-username>/portfolio
```

For example, if your GitHub username is codeme254, your branch name should be:

```bash
git branch codeme254/portfolio
```

This naming convention will make your contribution easy to identify.

## Step 4: Your contribution!

Carefully follow the guidelines below:

1. copy and paste your headshot to `/src/assets` folder.
1. Navigate to the src/data folder and locate the engineers.js file. This file contains an array of objects, with each object representing an engineer.
1. Add a new object to this array with your information, structured as follows:
   ```js
   {
   name: "Your Full Name",
   headshot: require('../assets/your-headshot-file.jpg'), // Import your headshot image
   excerpt: "A short excerpt (40-50 words) describing yourself briefly.",
   portfolioUrl: "/your-portfolio-path", // e.g., '/john'
   gitHubUrl: "https://github.com/your-github-username" // Your GitHub URL
   }
   ```
1. Under the src/pages folder, create a new folder that will contain all the components, code, images, etc., for your portfolio. Name this folder after your GitHub account. For example, if your github account's name is codeme254, then the folder will be named as codeme254.
1. In App.js file, set up a route for your portfolio page. The path should match the portfolioUrl you defined earlier in the engineers array.

### Heads Up! A few things to keep in mind

- The folder for your page should be completely isolated, which means that for any other images apart from the headshot, you will have to create a folder for those images in your page's folder and store them there, same case to other common folders such as components, data utils etc.
- Format your code using prettier regularly.
  ```bash
  npm install --global prettier
  ```
  ```bash
  prettier --write filename
  ```
- Your page should be a single page and should contain the following sections at least:
  - Hero section welcoming people to your page
  - A section for about you
  - A section listing the technologies you use and are good at (with images/icons/illustrations for each) eg nodejs, git, HTML, CSS, React et.c.
  - A section listing projects you've done in the past.
  - A way for potential employer or client to contact you i.e listing your contact information or even creating a form.

Once you are done, push your changes to the repository you forked and create a pull request for review.

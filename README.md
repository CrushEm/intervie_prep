# README - Interview Prep

This repository contains two separate applications: `interview-prep` and `mini-product-catalog`. Each application is independent and has its own setup instructions. Follow the steps below to get each app up and running.
<br><br>

## Overview

This repository includes two separate applications:
- Interview Prep - An app focused on preparing for TypeScript part of coding interview.
- Mini Product Catalog - A small product catalog application that I completed within a timed session to track my development speed and efficiency.
<br><br>


## Getting Started

Ensure you have the following installed on your system:

- Node.js (version 14 or higher recommended)
- npm (Node Package Manager)
<br><br>


## Setup Instructions

Each application requires a separate setup process. You’ll need to navigate into each app's directory, install dependencies, and start the app individually.
<br>

### Navigate to either app's directory:
```
cd interview-prep
```
-- or --

```
cd mini-product-catalog

```
<br>

### Install dependencies:
```
npm install
```
<br>

### Start the app:
```
npm start
```

The app should now be running on your local server (usually http://localhost:3000).
<br><br>


## Additional Notes

Both apps are set to run on the same port by default (http://localhost:3000). If you need to run them simultaneously, adjust the port for one of the apps in its configuration or specify an environment variable before starting the app, for example:
```
PORT=3001 npm start
```
<br><br>

## Additional Instructions for Running jstots_examples Files

The `interview-prep/src/jstots_examples` folder contains older JavaScript/TypeScript example files used for practice. Each of these files can be executed directly from the command line using [tsx](https://www.npmjs.com/package/tsx), a tool that allows TypeScript execution in a Node environment.
<br>

### Prerequisites
To run these examples, you need to have `tsx` installed globally or locally in the project.  If it’s not installed, add it with:
```
npm install -g tsx
```
-- or --
```
npm install tsx
```
<br>

## Running Example Files
To run a specific file from the `jstots_examples` directory, navigate to `interview-prep/src/jstots_examples` and use the following command:
```
tsx <filename>
```
<br>

### Example:

To run a file example named catagories_ex.ts in the jstots_examples folder, use:
```
cd interview-prep/src/jstots_examples
tsx catagories_ex.ts
```
This will execute the TypeScript file directly in the command line.
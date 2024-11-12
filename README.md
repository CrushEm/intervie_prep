# Interview Prep README

This repository contains two separate applications: interview-prep and mini-product-catalog. Each application is independent and has its own setup instructions. Follow the steps below to get each app up and running.


## Overview

This repository includes two separate applications:
- Interview Prep - An app focused on preparing for type script part of coding interview.
- Mini Product Catalog - A small product catalog application where I timed myself to complete.
Each application can be set up and run individually by following the instructions below.



## Getting Started

Ensure you have the following installed on your system:

- Node.js (version 14 or higher recommended)
- npm (Node Package Manager)



## Setup Instructions

Each application requires a separate setup process. You’ll need to navigate into each app's directory, install dependencies, and start the app individually.

### Navigate to either app's directory:
```
cd interview-prep
```
-- or --

```
cd mini-product-catalog

```

### Install dependencies:
```
npm install
```

### Start the app:
```
npm start
```

The app should now be running on your local server (usually http://localhost:3000).



## Additional Notes

Both apps are set to run on the same port by default (http://localhost:3000). If you need to run them simultaneously, adjust the port for one of the apps in its configuration or specify an environment variable before starting the app, for example:
```
PORT=3001 npm start
```


## Additional Instructions for Running jstots_examples Files

The `interview-prep/src/jstots_examples` folder contains older JavaScript/TypeScript example files used for practice. Each of these files can be executed directly from the command line using tsx, a tool that allows TypeScript execution in a Node environment.

### Prerequisites
To run these examples, you need to have ts-node installed globally or locally in the project. If not installed, run:
```
npm install -g tsx
```

## Running Example Files
To run a specific file from the `jstots_examples` directory, navigate to `interview-prep/src/jstots_examples` and use the following command:
```
tsx <filename>
```

Example:

To run a file named example.ts in the jstots_examples folder, use:
```
cd interview-prep/src/jstots_examples
tsx catagories_ex.ts
```
This will execute the TypeScript file directly in the command line.
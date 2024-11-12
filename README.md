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
mini-product-catalog`

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
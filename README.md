# react_demo_fall_23

A React-based web application that fetches and showcases data from an API, developed for the Server-Side Web Development (CPSC4125) course, Assignment 4, Fall 2023.

## 🎯 Objective
This project was crafted to deepen understanding of React, API integration, and testing with ___Jest___ and ___Cypress___.

## ✅ Requirements & Implementation
- __React Framework__: Utilized React to create an interactive and dynamic web application.
- __API Handling__: Integrated with an external API to fetch and display data, such as title, image, description, date, etc.
- __Bootstrap Styling__: Incorporated Bootstrap to ensure a modern and responsive design.
- __Image Adaptability__: Given the potential variability in image sizes from the API, the design has been optimized to handle and display images of varying sizes.
- __Deployment__: The application has been deployed for live access.
- __Testing__: Implemented Jest for unit testing and Cypress for end-to-end testing.

## 📌 Note
- This project marked my initial steps into JEST & Cypress. As such, there's potential for further optimization in the tests.
- In Jest, I focused on individual component tests. For components relying on axios, I utilized mock data to prevent unnecessary API calls. However, the data isn't actively used within these tests. I'm still exploring the best ways to leverage this data in Jest testing.
- With Cypress, I ensured that users encounter the expected content for specific URLs. Setting up mock API GET requests and integrating mock data was straightforward, and I verified that the mock data displays as intended.
- I'm still familiarizing myself with these tools, so while the tests are functional, I'm keen on aligning them more closely with best practices in the future.

## 🌐 Live Demo
Experience the [Live Demo](https://react-demo-fall-23-n9ogjw7wo-mariamills.vercel.app/) - Deployed with [Vercel](https://vercel.com/).

## 📸 Image Credits
- Space-themed images are sourced from NASA through their [API](https://api.nasa.gov/)
- The About page features an image courtesy of [Random Data API](https://random-data-api.com/)

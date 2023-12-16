# JavaScript Quiz Application

This is a simple quiz application created using HTML, CSS, and JavaScript.

## Table of Contents
- [Introduction](#introduction)
- [Running the Application](#running-the-application)
- [How to Add Questions](#how-to-add-questions)
- [Project Structure](#project-structure)


## Introduction

This project is a JavaScript quiz application that allows users to answer a series of questions and receive a score based on their answers. The questions are presented one at a time, and users can navigate through the quiz using the "Next" button.

## Running the Application

To run the quiz application, open the `index.html` file in any modern web browser.

```bash
open index.html
=> How to Add Questions
Questions and options are loaded from the main.js file. To add more questions, update the questions array with the details of each question.


const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Paris", "Madrid", "Rome"],
    correctAnswer: "Paris",
  },
  // Add more questions as needed
];

=> Project Structure
index.html: The main HTML file containing the structure of the quiz application.
style.css: The stylesheet file for styling the quiz.
main.js: The JavaScript file with functionality for the quiz.

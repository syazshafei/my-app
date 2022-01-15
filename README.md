# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Problem

The included json file contains a list of records with a name, id, and an array of tags.

Write a program that produces a list of each pair of names which have 2 or more tags in common, in the format
"name1, name2 - [commonTag1,commonTag2..commonTagN] |name1, name2 - [commonTag1,commonTag2..commonTagN]|...".

The program may be written in any progamming language of your choice, preferably Java/Groovy .

For example:

Jana Stevenson and Sylvia Norman have the following tags respectively:

campaign, shopping, buyer
shopping, buyer, clicker

Because they both have a  buyer and shopping tag, Jana Stevenson,Sylvia Norman should be added to the list.

Pearson Marquez and Fern Wise have the following tags respectively

shopping, non-clicker
promo, clicker, non-clicker

Because they only share one tag "non-clicker" the pair "Pearson Marquez, Fern Wise" should not appear on the list.

Acceptance Criteria

The output should be printed to the console.

Each pair of names should only appear once in the list, the order does not matter.

The json can be included as string or object in the file or loaded externally.

You may assume all tags are lowercase and are distinct per user (promo may only appear once in a list)

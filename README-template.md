# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [Tailwind](https://tailwindcss.com/docs) - For styles
- Mobile-first workflow


### What I learned

Tailwind specific learnings: 
- When styling an element based on the state of a sibling you need to mark a sibling with the `peer` class and use `peer-*` modifiers. Ex. I was trying to make the nav links arrow icon be tied to the checked or unchecked state of the checkbox input that expands or collapses the sub menus.
- Changing the fill color of an svg using tailwind based on a parent's state. The solution required three things: 1. I had to stop using an image tag to pull in the svg and use an svg directly 2. Using the hover of a parent element to cause styling to the child elements 3. The path element of the svg needs to inherit the styling of the parent svg element (which now has specific hover styling).

I learned that although Tailwind is very helpful due to its plethora of utility classes, it can also be quite challenging sometimes to do basic CSS things like sibling styling, child styling, and state-based styling.

### Continued development

I'm still working on getting as familiar with Tailwind as I am with pure CSS. So I look to continue to work through similar Tailwind-specific styling quirks to expand my understanding of how to do work with it.

I'd like to take on projects to improve my knowledge of JavaScript.

### Useful resources

- [Tailwind - Styling based on sibling state](https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-sibling-state) - This was a great resource when trying to learn how to style elements based on sibling state.


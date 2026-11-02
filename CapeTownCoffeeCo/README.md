# Cape Town Coffee Co - WEDE5020

Student: [Umile Mbombela ST10524342]
Module: WEDE5020 Formative 2 Part 2
Site: https://luminous-heliotrope-a730cf.netlify.app 
## Project Overview
A responsive website for Cape Town Coffee Co featuring Home, About, Menu, Order, and Contact pages. Built with semantic HTML and vanilla CSS.

## Folder Structure
CapeTownCoffeeCo/
index.html
about.html
menu.html
order.html
contact.html
README.md
css/style.css
images/coffee-small.jpg
images/coffee-large.jpg

## Design Choices
- Colour Palette: #3e2723 (dark brown), #4e342e (medium brown), #fdf6ec (cream background), #6d4c41 (hover), #bcaaa4 (border)
- Typography: Arial/Helvetica for body, Georgia serif for headings to give warm rustic coffee feel
- Layout: Mobile-first approach

## CSS Functionality Implemented
1. CSS Reset: * { margin:0; padding:0; box-sizing:border-box; }
2. Typography styling for h1, h2, p, body line-height
3. Flexbox navigation: nav { display:flex; flex-wrap:wrap; }
4. Form styling: inputs, textarea, button with full width and padding
5. Focus states: outline 2px solid #ffab40 for accessibility on all interactive elements
6. Desktop grid: main { display:grid; grid-template-columns:1fr; } with sections containing heading + paragraph together (fixed issue)
7. Two breakpoints:
- @media (min-width:480px) - 2 columns
- @media (min-width:768px) - 3 columns, content stacks cleanly
8. Responsive images: img { max-width:100%; } + srcset implementation on homepage
9. Hover states on nav and buttons

## Responsive Design
- Meta viewport tag included on ALL pages: <meta name="viewport" content="width=device-width, initial-scale=1.0">
- Images use srcset for different screen sizes

## Changelog / Commits
- Commit 1: Initial HTML structure
- Commit 2: Added viewport meta tag to all pages
- Commit 3: Removed redundant css/style.css link, fixed folder structure
- Commit 4: Added full CSS with flexbox nav and typography
- Commit 5: Added 480px and 768px breakpoints and fixed grid
- Commit 6: Added responsive images with srcset
- Commit 7: Final testing and README update

## AI Use Disclosure
AI (Meta AI) was used to assist with generating the CSS structure for breakpoints, flexbox navigation, and focus states, and to help draft this README. All code was reviewed, tested, and understood by me.

## How to Run
Open index.html in browser, or right-click > Open with Live Server in VS Code.
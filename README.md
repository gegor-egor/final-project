# Final project


|               Task               |  Deadline  |
| :------------------------------: | :--------: |
| Create the `pokedex` application | 14.12.2021 |



## Packages

-   [x] `react`
-   [x] `react-dom`
-   [x] `react-router-dom`
-   [x] `axios`
-   [x] `material-design`


## Requirements
### Basic

-   [x] **Pagination** Is one of:
    -   [ ] **A "Load More" button** loads the next section in the common list.
    -   [x] **Endless scroll** loads the next section as a page end is reached.
    -   [ ] **Numbered pages (traditional)** have only one section per a page.
-   [x] **Adaptive Design** desktop, tablet, mobile.
-   [x] **Navigation Menu**
-   [x] **Cross-browser compatibility** The latest versions of modern browsers must be supported.


### Pages

-   [x] **The home page** contains tiles with diferent pokemons. Each tile
        should have a picture of a pokemon, its name and a "Catch" button. If
        a pokemon is already caught, then a button should be disabled. When a
        pokemon is clicked, a user should be redirected to a pokemon page.
-   [x] **A pokemon page** contains information for a given pokemon, such as an
        ID, a name, a picture, whether it is caught. If a pokemon is caught, a
        date when a pokemon was caught should be shown.
-   [x] **The caught pokemons page** is same as the home page but only caught
        pokemons should be shown.

## Recommendations

-   [ ] Use a CSS framework to spend less time on creating the layout.
-   [x] Make a maintainable architecture, at least separate the business
        logic from the views.

## Nice to have 

-   [x]  If you have experience with additional packages not listed - feel free to use them
-   [ ] Making an accessible interface is encouraged.
-   [ ] Implementation of additional functionality: when a Pokemon is caught,   the "Catch" button does not become disabled, but changes to "Release", which allows you to release the captured Pokemon.
-   [x] Any other improvements that do not contradict the mandatory and general requirements 

## Installation

1. Install the dependencies by running `npm install`.
# Usage

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

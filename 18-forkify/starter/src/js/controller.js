
import * as model from './model.js';
import recipeView from './views/recipeView.js'
import searchView from './views/searchView.js';
import SearchView from './views/searchView.js'

import 'core-js/stable' // Polyfilling ES6 features
import 'regenerator-runtime/runtime' // Polyfilling async/await

const recipeContainer = document.querySelector('.recipe');



// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io

///////////////////////////////////////


const controlRecipes = async function() {
  try {
    const id = window.location.hash.slice(1);

    if(!id) return

    recipeView.renderSpinner()
    
    // 1. Loading Recipe
    await model.loadRecipe(id)

    // 2. Showing recipe
    recipeView.render(model.state.recipe)


  } catch(err) {
    recipeView.renderError();
  }
}

const controlSearchResults = async function() {
  try {
    const query = searchView.getQuery();
    if(!query) return;


    await model.loadSearchResults(query);
  } catch(err) {
    console.error(err);
  }
}

const init = function() {
  recipeView.addHandlerRender(controlRecipes)
  searchView.addHandlerSearch(controlSearchResults)
}
init()
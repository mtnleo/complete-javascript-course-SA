
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import ResultsView from './views/resultsView.js';
import PaginationView from './views/paginationView.js';

import 'core-js/stable' // Polyfilling ES6 features
import 'regenerator-runtime/runtime' // Polyfilling async/await
import paginationView from './views/paginationView.js';

if(module.hot) {
  module.hot.accept();
}

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
    recipeView.renderErrorresults
  }
}

const controlSearchResults = async function() {
  try {
    ResultsView.renderSpinner();

    // 1. Get search query
    const query = searchView.getQuery();
    if(!query) return;
    
    
    // 2. Load search results
    await model.loadSearchResults(query);
    
    // 3. Render results
    // resultsView.render(model.state.search.results)
    ResultsView.render(model.getSearchResultsPage(2))
    
    // 4. Render initial pagination buttons
    paginationView.render(model.state.search)
  } catch(err) {
    console.error(err);
  }
}

const controlPagination = function(goToPage) {
    // 1. Render new results
    ResultsView.render(model.getSearchResultsPage(goToPage))
    
    // 2. Render new pagination buttons
    paginationView.render(model.state.search)
}

const init = function() {
  recipeView.addHandlerRender(controlRecipes)
  searchView.addHandlerSearch(controlSearchResults)
  paginationView.addHandlerClick(controlPagination)
}
init()
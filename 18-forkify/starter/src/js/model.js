import {async } from 'regenerator-runtime'
import {API_URL, RES_PER_PAGE} from './config.js'
import { getJSON } from './helpers.js'

export const state = {
    recipe: {},
    search: {
        query: '',
        results: [],
        page: 1,
        resultsPerPage: RES_PER_PAGE
    }
}

export const loadRecipe = async function(id) {
    try {
    const data = await getJSON(`${API_URL}${id}`)

    const {recipe} = data.data;
    state.recipe = {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        sourceUrl: recipe.source_url,
        image: recipe.image_url,
        servings: recipe.cooking_time,
        ingredients: recipe.ingredients
    }
    } catch(err) {
        console.error(err + 'AAAAAHHH!!')
        throw err;
    }
}

export const loadSearchResults = async function(query) {
    try {
        state.search.query = query;
        const data = await getJSON(`${API_URL}?search=${query}`)

        state.search.results = data.data.recipes.map(rec => {
            return {
                id: rec.id,
                title: rec.title,
                publisher: rec.publisher,
                image: rec.image_url,
            }
        })
        console.log(state.search.results)
    } catch(err) {
        console.error(err + 'AAAAAHHH!!')
        throw err;
    }
}

export const getSearchResultsPage = function(page = state.search.page) {
    state.search.page = page;

    const start = (page - 1) * state.search.resultsPerPage;
    const end = page * state.search.resultsPerPage;

    return state.search.results.slice(start, end)
}
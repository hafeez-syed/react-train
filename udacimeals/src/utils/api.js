require('dotenv').config();
const API_ID = process.env.EDAMAM_APP_API_ID
const APP_KEY = process.env.EDAMAM_APP_APP_KEY

export function fetchRecipes (food = '') {
    food = food.trim();
    debugger;
    return fetch(`https://api.edamam.com/search?q=${food}&app_id=${API_ID}&app_key=${APP_KEY}`)
        .then((res) => res.json())
        .then(({ hits }) => hits.map(({ recipe }) => recipe))
}
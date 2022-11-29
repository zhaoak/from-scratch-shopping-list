/* Imports */
import { renderListItem } from './render-utils.js';
// this will check if we have a user and set signout link if it exists
import { checkAuth, fetchList } from './fetch-utils.js';

/* Get DOM Elements */
const addItemForm = document.getElementById('new-item-form');
const itemList = document.getElementById('item-list');
const resetListButton = document.getElementById('reset-list-button');

/* State */
let items = [];

/* Events */
// on list page load
window.addEventListener('load', async () => {
    checkAuth();
    items = await fetchList();
    displayList();
});

/* Display Functions */
function displayList() {
    itemList.innerHTML = '';
    for (let item of items) {
        const itemEl = renderListItem(item);
        itemList.append(itemEl);
    }
}

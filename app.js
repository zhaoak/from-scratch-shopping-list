/* Imports */
import { renderListItem } from './render-utils.js';
// this will check if we have a user and set signout link if it exists
//import './auth/user.js';

/* Get DOM Elements */
const addItemForm = document.getElementById('new-item-form');
const itemList = document.getElementById('item-list');
const resetListButton = document.getElementById('reset-list-button');

/* State */
let items = [
    { name: 'nanners', quantity: '1', marked: false },
    { name: 'apples', quantity: 'a few', marked: true },
    { name: 'bolt cutters', quantity: 'as many as possible', marked: false },
];

/* Events */

/* Display Functions */
function displayList() {
    itemList.innerHTML = '';
    for (let item of items) {
        const itemEl = renderListItem(item);
        itemList.append(itemEl);
    }
}

displayList();

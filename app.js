/* Imports */
import { renderListItem, renderMessage } from './render-utils.js';
// this will check if we have a user and set signout link if it exists
import { signOutUser, checkAuth, fetchList, addItem } from './fetch-utils.js';

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

addItemForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const itemData = new FormData(addItemForm);

    // create item, push to DB, reset form, rerender and display list
    await addItem({ name: itemData.get('itemName'), quantity: itemData.get('itemQuantity') });
    items = await fetchList();
    displayList();
    addItemForm.reset();
});

/* Display Functions */
function displayList() {
    itemList.innerHTML = '';
    for (let item of items) {
        const itemEl = renderListItem(item);
        itemList.append(itemEl);
    }
}

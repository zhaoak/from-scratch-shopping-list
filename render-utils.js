export function renderListItem(item) {
    // create elements
    const div = document.createElement('div');
    const name = document.createElement('h3');
    const quantity = document.createElement('span');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');

    // add classes, change visuals based item state and properties
    div.classList.add('list-item');
    checkbox.classList.add('checkbox');
    quantity.classList.add('quantity-display');
    if (item.marked === true) {
        checkbox.checked = true;
        div.classList.add('marked');
    } else {
        checkbox.marked = false;
        div.classList.add('unmarked');
    }

    name.textContent = item.name;
    quantity.textContent = ` (${item.quantity})`;

    // event handler for marking/unmarking item

    // append and return
    name.append(quantity);
    div.append(name, checkbox);
    return div;
}

export function renderMessage(message) {
    // create elements
    const div = document.createElement('div');
    const messageText = document.createElement('h2');

    // add classes, write message
    div.classList.add('list-message');
    messageText.textContent = message;

    // append and return
    div.append(messageText);
    return div;
}

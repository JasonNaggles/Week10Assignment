let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let createDate = new Date();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`)
});
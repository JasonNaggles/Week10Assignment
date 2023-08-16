document.getElementById("productForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const productName = document.getElementById("productName").value; //created a constant called productName, which is also an id 
    const category = document.getElementById("category").value; //created a constant called category, which is also an id
    const price = document.getElementById("price").value; //created a constant called price, which is also an id
    const stock = document.getElementById("stock").value; //created a constant called stock, which is also an id

    const tableBody = document.querySelector(".table tbody"); //created a constant called tableBody, targets a class called table and an element called tbody.
    const newRow = document.createElement("tr");  //created a constant called newRow. It will create a table row, after data is filled out and then click the Submit button.
    newRow.innerHTML = `
      <td></td>
      <td>${productName}</td>
      <td>${category}</td>
      <td>${price}</td>
      <td>${stock}</td>
    `;
    tableBody.appendChild(newRow); //add a new row when all 4 fields are filled out then by clicking the submit button only one time. 

    document.getElementById("productForm").reset();
  });
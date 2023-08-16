document.getElementById("productForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const productName = document.getElementById("productName").value;
    const category = document.getElementById("category").value;
    const price = document.getElementById("price").value;
    const stock = document.getElementById("stock").value;

    const tableBody = document.querySelector(".table tbody");
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td></td>
      <td>${productName}</td>
      <td>${category}</td>
      <td>${price}</td>
      <td>${stock}</td>
    `;
    tableBody.appendChild(newRow);

    document.getElementById("productForm").reset();
  });
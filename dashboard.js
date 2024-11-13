// Function to calculate the total before and after
function calculateTotal(row) {
    const quantityBefore = row.querySelector('td:nth-child(2)').innerText;
    const quantityAfter = row.querySelector('td:nth-child(3)').innerText;
    
    // Convert the values to numbers and calculate the total (quantityBefore - quantityAfter)
    const total = Number(quantityBefore) - Number(quantityAfter);
    
    // Update the Total column (fourth column)
    row.querySelector('td:nth-child(4)').innerText = total;
}

// Function to save changes made to the row
function saveChanges(button) {
    const row = button.closest('tr');
    calculateTotal(row); // Calculate total when saving changes
    alert('Changes saved successfully');
}

// Function to add a new row
function addRow() {
    const table = document.getElementById('inventoryTable').getElementsByTagName('tbody')[0];
    
    // Create a new row
    const newRow = document.createElement('tr');
    
    // Add editable cells to the new row
    newRow.innerHTML = `
        <td contenteditable="true">New Item</td>
        <td contenteditable="true">0</td>
        <td contenteditable="true">0</td>
        <td class="total">0</td> <!-- Default total value -->
        <td contenteditable="true">Item description</td>
        <td><button onclick="saveChanges(this)">Save Changes</button></td>
    `;
    
    // Append the new row to the table
    table.appendChild(newRow);
    
    // Call calculateTotal to set the initial total value
    calculateTotal(newRow);
}

// Function to handle logout (simplified for this example)
function logout() {
    alert('Logged out!');
    window.location.href = 'loginpage.html'; // Redirect to login page
}

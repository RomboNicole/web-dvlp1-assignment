// Change text content
document.getElementById("changeTextBtn").addEventListener("click", () => {
    document.getElementById("description").textContent = "The text has been updated with JavaScript!";
  });
  
  // Change styles
  document.getElementById("changeStyleBtn").addEventListener("click", () => {
    document.body.style.backgroundColor = "#f0f8ff";
    document.getElementById("main-heading").style.color = "crimson";
  });
  
  // Add list item
  document.getElementById("addItemBtn").addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.textContent = `Item ${document.querySelectorAll("#itemList li").length + 1}`;
    document.getElementById("itemList").appendChild(newItem);
  });
  
  // Remove last list item
  document.getElementById("removeItemBtn").addEventListener("click", () => {
    const list = document.getElementById("itemList");
    if (list.lastElementChild) {
      list.removeChild(list.lastElementChild);
    }
  });
  
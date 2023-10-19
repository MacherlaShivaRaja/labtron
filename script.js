// Sample image filenames from the assets folder
const imageFiles = [
  "p1.png",
  "p2.png",
  "p3.png",
  "p5.png",
  "p6.png",
  "p7.png",
  "p8.png",
  "p9.png",
];

// Sample names for each image
const imageNames = [
  "Salt Fog Chamber:",
  "Salt Spray Chamber",
  "Corrosion Test Chamber",
  "Salt Corrosion Chamber",
  "Environmental Chamber",
  "Cyclic Corrosion Chambe",
  "ASTM B117 Chamber",
  "CASS Chamber",
];

// Get the grid container
const imageGrid = document.getElementById("imageGrid");

// Function to create an image card
function createImageCard(imageFileName, imageName) {
  const card = document.createElement("div");
  card.className = "grid-item";

  const cardContent = document.createElement("div");
  cardContent.className = "card";

  const img = document.createElement("img");
  img.src = `assets/${imageFileName}`; // Set the image source
  img.alt = "Image";

  const p = document.createElement("p");
  p.textContent = imageName;

  cardContent.appendChild(img);
  cardContent.appendChild(p);
  card.appendChild(cardContent);

  return card;
}

// Populate the grid
imageFiles.forEach((imageFileName, index) => {
  const imageCard = createImageCard(imageFileName, imageNames[index]);
  imageGrid.appendChild(imageCard);
});

document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('gridContainer');
    const gridSize = 16; // Number of rows and columns in the grid
    const totalCells = gridSize * gridSize;
  
    // Create the grid cells
    for (let i = 0; i < totalCells; i++) {
      const gridCell = document.createElement('div');
      gridCell.classList.add('grid-cell');
      gridContainer.appendChild(gridCell);
  
      // Event listener for mouse enter to change cell color and darken progressively
      gridCell.addEventListener('mouseenter', () => {
        // Randomize RGB values
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        const randomColor = `rgb(${randomR},${randomG},${randomB})`;
  
        // Get current opacity or set to 1 if it doesn't exist
        let currentOpacity = parseFloat(gridCell.style.opacity) || 1;
        
        // Darken progressively by 10%
        currentOpacity -= 0.5;
        if (currentOpacity < 0) {
          currentOpacity = 0;
        }
  
        // Update cell background color and opacity
        gridCell.style.backgroundColor = randomColor;
        gridCell.style.opacity = currentOpacity;
      });
    }
  });
  
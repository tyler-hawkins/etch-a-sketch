const DEFAULT_GRID_SIZE = 16;

function onMouseover(e) {
	const squareHovered = e.target;
	if (squareHovered == null) {
		return;
	}
	squareHovered.style["background-color"] = "black";
}

function removeGridSquares(gridContainer) {
	while (gridContainer.firstChild) {
		gridContainer.removeChild(gridContainer.lastChild);
	}
}

function createGrid(size = DEFAULT_GRID_SIZE) {
	const gridContainer = document.getElementById("grid");
	removeGridSquares(gridContainer);
	gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
			const gridSquare = document.createElement("div")
			gridContainer.appendChild(gridSquare);
			gridSquare.addEventListener("mouseover", onMouseover);
		}
	}
	console.log(`Grid created of size ${size}`);
}

function promptUser() {
	let size = prompt("Enter new grid size: ");
	while (size >= 100) {
		size = prompt(`${size} is too big, please enter a size less than 100.`)
	}
	while (size <= 0) {
		size = prompt(`You cannot have a negative or 0-sided grid! Please enter a size greater than 0.`)
	}
	createGrid(size);
}

function resetGrid() {
	const grid = document.getElementById("grid");
	if (grid == null) {
		return console.error("Grid not found!");
	}
	grid.childNodes.forEach(square => {
		if (square.style !== "") {
			square.style = "";
		}
	});
	console.log("Grid cleared");
	promptUser();
}
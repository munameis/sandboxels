/* === Item Spawn Menu (Press K) === */

function openItemMenu() {
    let elementName = prompt("Enter element name (example: wood, sand, water):");
    if (!elementName) return;

    if (!elements[elementName]) {
        alert("Element not found!");
        return;
    }

    let count = prompt("Enter count:");
    if (!count) return;

    count = parseInt(count);
    if (isNaN(count) || count <= 0) {
        alert("Invalid number!");
        return;
    }

    spawnElement(elementName, count);
}

function spawnElement(name, count) {
    let spawnX = mousePos.x;
    let spawnY = mousePos.y;

    for (let i = 0; i < count; i++) {
        let offsetX = Math.floor(Math.random() * 5) - 2;
        let offsetY = Math.floor(Math.random() * 5) - 2;

        let x = spawnX + offsetX;
        let y = spawnY + offsetY;

        if (isEmpty(x, y)) {
            createPixel(name, x, y);
        }
    }
}

/* === Keybind K === */

keybinds["KeyK"] = function() {
    openItemMenu();
};

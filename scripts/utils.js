const createGrid = (row, col) => {
    let grid = '<table>';
    for (let i = 0; i < row; i++) {
        grid = grid + '<tr>';
        for (let j = 0; j < col; j++) {
            grid = grid + '<td class="cell-style" id="' + i + '-' + j + '"> </td>'
        }
        grid = grid + '</tr>';
    }
    grid = grid + '</table>';

    $("#grid-layout").html(grid);

    gridLayout = [];
    for (let i = 0; i < row; i++) {
        let rowElement = [];
        for (let j = 0; j < col; j++) {
            const node = new Node(i + "-" + j, null);
            rowElement.push(node);
            $("#" + rowElement[j].id).on('click', () => {
                if (startNode && rowElement[j] === startNode) {
                    startNode = null;
                }
                if (endNode && rowElement[j] === endNode) {
                    endNode = null;
                }
                if (rowElement[j].weight == Infinity) {
                    $("#" + rowElement[j].id).css("background-color", colors.gray);
                    rowElement[j].weight = 1;
                } else {
                    $("#" + rowElement[j].id).css("background-color", colors.black);
                    rowElement[j].weight = Infinity;
                }
            });
            $("#" + rowElement[j].id).on('dblclick', (event) => {
                // Updating the start node if previously selected.
                if (event.ctrlKey) {
                    if (endNode === null) {
                        endNode = rowElement[j];
                        $("#" + endNode.id).css("background-color", colors.blue);
                    } else {
                        $("#" + endNode.id).css("background-color",  colors.gray);
                        endNode = rowElement[j];
                        $("#" + endNode.id).css("background-color", colors.blue);
                    }
                    endNode.weight = 1;
                } else {
                    if (startNode === null) {
                        startNode = rowElement[j];
                        $("#" + startNode.id).css("background-color", colors.red);
                    } else {
                        $("#" + startNode.id).css("background-color",  colors.gray);
                        startNode = rowElement[j];
                        $("#" + startNode.id).css("background-color", colors.red);
                    }
                    startNode.weight = 1;
                } 
            });
        }
        gridLayout.push(rowElement);
    }

    return [grid, startNode, endNode];
}
const solveDepthFirstSearch = (grid, start, end) => {
    removeWeights();

    const visited = [];
    const stack = [];
    stack.push(start);

    depthFirstSearch(grid, stack, visited, end);
    return visited;
}

function depthFirstSearch(grid, stack, visited, end) {
    while (stack.length != 0) {
        let cell = stack.pop();

        if (!cell) {
            continue;
        }

        if (visited.includes(cell) || cell.weight == Infinity) {
            continue;
        }

        cell.previous = visited[visited.length - 1];
        visited.push(cell);
        if (cell != startNode && cell != end) {
            $("#" + cell.id).css('background-color', colors.purple);
        }

        if (cell.id === end.id) {
            return true;
        }

        let coordinates = cell.id.split('-');
        let x = parseInt(coordinates[0]);
        let y = parseInt(coordinates[1]);

        stack.push((grid[x+1]) ? grid[x+1][y] : undefined);
        stack.push((grid[x-1]) ? grid[x-1][y] : undefined);
        stack.push(grid[x][y+1]);
        stack.push(grid[x][y-1]);
    }

    return false;
}
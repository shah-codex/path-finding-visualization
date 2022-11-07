const euclideanDistance = (cell, end) => {
    let x = cell.id.split('-');
    let x1 = parseInt(x[0]);
    let y1 = parseInt(x[1]);

    let y = end.id.split('-');
    let x2 = parseInt(y[0]);
    let y2 = parseInt(y[1]);

    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

const manhattenDistance = (cell, end) => {
    let x = cell.id.split('-');
    let x1 = parseInt(x[0]);
    let y1 = parseInt(x[1]);

    let y = end.id.split('-');
    let x2 = parseInt(y[0]);
    let y2 = parseInt(y[1]);

    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

function solveAstar(grid, start, end) {
    computeHeuristics(grid, end);
    
    const pq = new PriorityQueue();

    start.distance = 0;
    pq.enqueue(start, start.distance + start.heuristicDistance);
    const visited = [];

    astar(grid, pq, visited, start, end);
    return visited;
}

function computeHeuristics(grid, end) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let cell = grid[i][j];
            if (cell.weight !== Infinity && cell !== end) {
                cell.heuristicDistance = manhattenDistance(cell, end);
            }
        }
    }
}

function astar(grid, pq, visited, start, end) {
    while (!pq.isEmpty()) {
        let cell = pq.dequeue().element;
        if (!cell || cell.weight === Infinity) {
            continue;
        }
        if (visited.includes(cell)) {
            continue;
        }

        visited.push(cell);
        if (cell != startNode && cell != endNode) {
            $("#" + cell.id).css('background-color', colors.purple);
        }

        if (cell === end) {
            break;
        }

        let coordinate = cell.id.split('-');
        let x = parseInt(coordinate[0]);
        let y = parseInt(coordinate[1]);

        previous = cell;

        insertAStar(pq, (grid[x-1]) ? grid[x-1][y] : undefined, previous);
        insertAStar(pq, (grid[x+1]) ? grid[x+1][y] : undefined, previous);
        insertAStar(pq, grid[x][y-1], previous);
        insertAStar(pq, grid[x][y+1], previous);
    }

    if (visited.at(visited.length-1) === end) {
        return true;
    } else {
        return false;
    }
}

function insertAStar(pq, cell, previous) {
    if (cell && cell.distance > (previous.distance + cell.weight)) {
        pq.remove(cell);
        cell.distance = (previous.distance + cell.weight);
        cell.previous = previous;
        pq.enqueue(cell, cell.distance + cell.heuristicDistance);
    }
}
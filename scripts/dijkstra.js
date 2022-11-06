function solveDijkstra(grid, start, end) {
    const pq = new PriorityQueue();
    start.distance = 0;
    pq.enqueue(start, start.distance);
    const visited = [];

    dijkstra(grid, pq, visited, start, end);

    return visited;
}

// // Recursive Dijkstra
// function dijkstra(grid, pq, visited, previous, end) {
//     if (pq.isEmpty()) {
//         return false;
//     }

//     let cell = pq.dequeue().element;
//     while (!cell || cell.weight === Infinity) {
//         cell = pq.dequeue();
//     }

//     if (!cell) {
//         return false;
//     }
    
//     if (visited.includes(cell)) {
//         return false;
//     }

//     visited.push(cell);
//     if (cell != startNode && cell != endNode) {
//         $("#" + cell.id).css('background-color', "#5A528A");
//     }

//     if (cell === end) {
//         return true;
//     }

//     let coordinate = cell.id.split('-');
//     let x = parseInt(coordinate[0]);
//     let y = parseInt(coordinate[1]);

//     insert(pq, (grid[x-1]) ? grid[x-1][y] : undefined, cell);
//     insert(pq, (grid[x+1]) ? grid[x+1][y] : undefined, cell);
//     insert(pq, grid[x][y-1], cell);
//     insert(pq, grid[x][y+1], cell);

//     return dijkstra(grid, pq, visited, cell, end);
// }

// Iterative Dijkstra
function dijkstra(grid, pq, visited, previous, end) {
    while (!pq.isEmpty()) {
        let cell = pq.dequeue().element;
        if (!startNode) {
            startNode = cell;
        }
        if (!cell || cell.weight === Infinity) {
            continue;
        }
        if (visited.includes(cell)) {
            continue;
        }

        visited.push(cell);
        if (cell != startNode && cell != end) {
            $("#" + cell.id).css('background-color', colors.purple);
        }

        if (cell === end) {
            break;
        }

        let coordinate = cell.id.split('-');
        let x = parseInt(coordinate[0]);
        let y = parseInt(coordinate[1]);

        previous = cell;

        insertDijkstra(pq, (grid[x-1]) ? grid[x-1][y] : undefined, previous);
        insertDijkstra(pq, (grid[x+1]) ? grid[x+1][y] : undefined, previous);
        insertDijkstra(pq, grid[x][y-1], previous);
        insertDijkstra(pq, grid[x][y+1], previous);
    }

    if (visited.at(visited.length-1) === end) {
        return true;
    } else {
        return false;
    }
}

function insertDijkstra(pq, cell, previous) {
    if (cell && cell.distance > (previous.distance + cell.weight)) {
        pq.remove(cell);
        cell.distance = (previous.distance + cell.weight);
        cell.previous = previous;
        pq.enqueue(cell, cell.distance);
    }
}
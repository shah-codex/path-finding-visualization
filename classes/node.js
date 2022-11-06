class Node {
    constructor (id, status) {
        this.id = id;
        this.status = status;
        this.distance = Infinity;
        this.heuristicDistance = null;
        this.weight = 1;
    }
}

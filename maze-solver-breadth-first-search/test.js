// a 2d array represeneting a maze
var maze = [
    [0,0,0,0,'start',0,0,0,0,0],
    [0,0,1,1,1,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,1,1,0,0,0,0],
    [0,0,0,0,'end',0,0,0,0,0],
]

let start = {x: 0, y: 4}
let end = {x: 4, y: 4}

// function that returns the co-ordinates of the shortest path between two points in the maze
function bfsSearch(maze, start, end) {
    // create a 2d array to store the shortest path
    var path = new Array(maze.length);
    for (var i = 0; i < maze.length; i++) {
        path[i] = new Array(maze[i].length);
    }
    // create a queue to store the nodes to be visited
    var queue = [];
    // push the start node to the queue
    queue.push(start);
    // push the start node to the path
    path[start.x][start.y] = start;

    // while the queue is not empty
    while (queue.length > 0) {
        // pop the first node from the queue
        var current = queue.shift();
        // if the current node is the end node
        if (current.x == end.x && current.y == end.y) {
            // return the shortest path
            let shortestPath = printPathFromEnd(path, current)
            return [path, shortestPath]            
        }
        // if the current node is not the end node
        else {
            // get the neighbours of the current node
            var neighbours = getNeighbours(current, maze);
            // for each neighbour
            for (var i = 0; i < neighbours.length; i++) {
                // add 'previous node' to neighbour
                neighbours[i].previous = current;
                
                // if the neighbour is not visited
                if (path[neighbours[i].x][neighbours[i].y] == undefined) {
                    // mark the neighbour as visited
                    path[neighbours[i].x][neighbours[i].y] = current;
                    // push the neighbour to the queue
                    queue.push(neighbours[i]);
                }
            }
        }
    }
    // if the end node is not found
    return null;
}

// function that returns the neighbours of a node in the maze
function getNeighbours(node, maze) {
    // create an array to store the neighbours
    var neighbours = [];
    // if the node is not on the left edge of the maze
    if (node.x > 0) {
        // if the node to the left is not a wall
        if (maze[node.x - 1][node.y] != 0) {
            // push the node to the left to the neighbours array
            neighbours.push({x: node.x - 1, y: node.y});
        }
    }
    // if the node is not on the right edge of the maze
    if (node.x < maze.length - 1) {
        // if the node to the right is not a wall
        if (maze[node.x + 1][node.y] != 0) {
            // push the node to the right to the neighbours array
            neighbours.push({x: node.x + 1, y: node.y});
        }
    }
    // if the node is not on the top edge of the maze
    if (node.y > 0) {
        // if the node above is not a wall
        if (maze[node.x][node.y - 1] != 0) {
            // push the node above to the neighbours array
            neighbours.push({x: node.x, y: node.y - 1});
        }
    }
    // if the node is not on the bottom edge of the maze
    if (node.y < maze[0].length - 1) {
        // if the node below is not a wall
        if (maze[node.x][node.y + 1] != 0) {
            // push the node below to the neighbours array
            neighbours.push({x: node.x, y: node.y + 1});
        }
    }
    // return the neighbours array
    // console.table(neighbours)
    return neighbours;
}

console.log('maze (1 can be walked on, but a 0 is a wall)')
console.table(maze)

let results = bfsSearch(maze, start, end);

console.log('path taken to reach the end node')
console.table(results[0])

console.log('shortest path')
console.table(results[1])


// function that returns an array of the previous node of the path, starting from the end node
function printPathFromEnd(path, end) {
    // create an array to store the path
    var pathArray = [];
    // while the end node is not the start node
    while (end.x != start.x || end.y != start.y) {
        // push the end node to the path array
        pathArray.push(end);
        // set the end node to the previous node of the end node
        end = end.previous;
    }
    // push the start node to the path array
    pathArray.push(start);
    // return the path array
    return pathArray.reverse();
}
# Path-Finding-Visualizer
# BFS Pathfinding Visualizer

A simple web-based pathfinding visualizer that demonstrates the **Breadth-First Search (BFS)** algorithm on a 2D grid.

The project allows users to place walls, run BFS, and visually see how the algorithm explores the grid to find the shortest path between a start and an end node.

---

## Features

- Interactive grid
- Click to place/remove walls
- Fixed start (green) and end (red) nodes
- Animated BFS traversal
- Highlights the shortest path if it exists
- Displays a message when **no path is available**

---

## How It Works

- The grid is represented as a 2D array.
- BFS starts from the start node and explores neighbors level by level.
- Each cell keeps track of its parent to reconstruct the shortest path.
- If the end node is reached, the path is drawn.
- If BFS finishes without reaching the end node, the app displays **“No path available”**.

---

## Why BFS?

- BFS guarantees the **shortest path** in an unweighted grid.
- It explores all nodes at the current distance before moving further.
- This makes it ideal for grid-based pathfinding without weights.

---

## Controls

- **Click on cells** to toggle walls
- **Start BFS**: runs the pathfinding visualization
- **Clear Grid**: resets the grid to its initial state

---

## Tech Stack

- HTML
- CSS
- JavaScript (Vanilla)

No external libraries or frameworks are used.

---

## Time & Space Complexity

- **Time Complexity:** O(R × C)  
- **Space Complexity:** O(R × C)  

Where R is the number of rows and C is the number of columns in the grid.

---

## Future Improvements

- Move start/end nodes
- Add other algorithms (DFS, Dijkstra)
- Adjustable grid size
- Performance optimizations

---

## How to Run

1. Clone the repository
2. Open `index.html` in a browser
3. Start experimenting

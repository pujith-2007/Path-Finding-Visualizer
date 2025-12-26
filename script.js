const grid = document.getElementById("grid");
const startBtn = document.getElementById("startBtn");
const clearBtn = document.getElementById("clearBtn");
const status = document.getElementById("status");
const ROWS = 15;
const COLS = 20;

let cells = [];
let start = { r: 7, c: 3 };
let end = { r: 7, c: 16 };
let running = false;

/* Create grid */
function createGrid() {
    grid.innerHTML = "";
    cells = [];

    for (let r = 0; r < ROWS; r++) {
        let row = [];
        for (let c = 0; c < COLS; c++) {
            const div = document.createElement("div");
            div.classList.add("cell");
            div.dataset.row = r;
            div.dataset.col = c;

            if (r === start.r && c === start.c) div.classList.add("start");
            if (r === end.r && c === end.c) div.classList.add("end");

            div.addEventListener("click", () => {
                if (running) return;
                if (div.classList.contains("start") || div.classList.contains("end")) return;
                div.classList.toggle("wall");
            });

            grid.appendChild(div);
            row.push(div);
        }
        cells.push(row);
    }
}

/* BFS */
async function bfs() {
    running = true;
    status.textContent = "";

    const queue = [];
    const visited = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
    const parent = Array.from({ length: ROWS }, () => Array(COLS).fill(null));

    queue.push(start);
    visited[start.r][start.c] = true;

    const dirs = [
        [1, 0], [-1, 0],
        [0, 1], [0, -1]
    ];

    while (queue.length) {
        const { r, c } = queue.shift();

        if (r === end.r && c === end.c) {
            drawPath(parent);
            running = false;
            status.textContent = "Path found ✔️";
            return;
        }

        for (const [dr, dc] of dirs) {
            const nr = r + dr;
            const nc = c + dc;

            if (
                nr >= 0 && nr < ROWS &&
                nc >= 0 && nc < COLS &&
                !visited[nr][nc] &&
                !cells[nr][nc].classList.contains("wall")
            ) {
                visited[nr][nc] = true;
                parent[nr][nc] = { r, c };
                queue.push({ r: nr, c: nc });

                const cell = cells[nr][nc];
                if (!cell.classList.contains("end")) {
                    cell.classList.add("visited");
                }

                await sleep(30);
            }
        }
    }

    status.textContent = "No path available ❌";
    running = false;
}


/* Draw shortest path */
function drawPath(parent) {
    let cur = end;
    while (parent[cur.r][cur.c]) {
        cur = parent[cur.r][cur.c];
        const cell = cells[cur.r][cur.c];
        if (!cell.classList.contains("start")) {
            cell.classList.add("path");
        }
    }
}

/* Utils */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function clearGrid() {
    running = false;
    createGrid();
}

/* Events */
startBtn.addEventListener("click", () => {
    if (!running) bfs();
});

clearBtn.addEventListener("click", clearGrid);

/* Init */
createGrid();

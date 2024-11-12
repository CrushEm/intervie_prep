import React, { useState } from "react";

type GridProps = {
    grid: (number | string)[][];
};


function GridDisplay({ grid }: GridProps): React.ReactElement {

    const rowCount: number = grid.length;
    const columnCount: number = grid[0]?.length || 0;

    // const [rows, setRows] = useState<number>(grid.length);
    // const [columns, setColumns] = useState<number>(grid[0]?.length || 0);
    // const [rowCount, setRowCount] = useState(0);
    // const [columnCount, setColumnCount] = useState(0);

    function toggleCell(row: number, col: number) {
        const cell = document.getElementById(`${row}-${col}`);
        if (cell) {
            cell.classList.toggle("select-cell");
        }
    }

    return (
        <>
            <div style={{ ...rowStyle, gridTemplateRows: `repeat(${rowCount}, 1fr)` }}>
                {Array.from(grid).map((row, rowIdx) => (
                    <div
                        key={`row-${rowIdx}`}
                        style={{ ...columnStyle, gridTemplateColumns: `repeat(${columnCount}, 1fr)` }}
                    >
                        {row.map((colunm, columnIdx) => (
                            <div
                                key={`${rowIdx}-${columnIdx}`}
                                id={`${rowIdx}-${columnIdx}`}
                                style={{ ...cellStyle }}
                                onClick={() => (toggleCell(rowIdx, columnIdx))}
                            >
                                {grid[rowIdx][columnIdx]}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    )
}

const rowStyle: React.CSSProperties = {
    display: "grid",
    gap: 20
}
const columnStyle: React.CSSProperties = {
    display: "grid",
}
const cellStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid black",
    padding: "10px",
    cursor: "pointer",
}

export default GridDisplay;

"use client";

import { useState } from "react";

export function TableInserter() {
  const [rows, setRows] = useState(10);
  const [cols, setCols] = useState(10);
  const [selected, setSelected] = useState({ row: 0, col: 0 });
  const [hoveredCell, setHoveredCell] = useState({ row: 0, col: 0 });

  const handleMouseEnter = (row: number, col: number) => {
    setHoveredCell({ row, col });
  };

  const handleMouseLeave = () => {
    setHoveredCell({ row: 0, col: 0 });
  };

  const handleClick = () => {
    setSelected(hoveredCell);
    // Here you can handle the table insertion with the selected dimensions
    console.log(
      `Insert table with ${hoveredCell.row + 1}x${
        hoveredCell.col + 1
      } dimensions`
    );
  };

  return (
    <div className="w-[264px] " onMouseLeave={handleMouseLeave}>
      <div className="grid grid-cols-10 gap-[2px] p-2">
        {Array.from({ length: rows }).map((_, rowIndex) =>
          Array.from({ length: cols }).map((_, colIndex) => (
            <button
              key={`${rowIndex}-${colIndex}`}
              className={`
                        h-6 w-6 rounded-none border border-border background
                        ${
                          rowIndex <= hoveredCell.row &&
                          colIndex <= hoveredCell.col
                            ? "bg-blue-100 border-blue-400"
                            : "bg-background hover:bg-muted"
                        }
                      `}
              onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
              onClick={handleClick}
            />
          ))
        )}
      </div>
      <div className="mt-2 text-center text-sm text-muted-foreground">
        {hoveredCell.row > 0 || hoveredCell.col > 0
          ? `${hoveredCell.row + 1} × ${hoveredCell.col + 1}`
          : "Hover to select dimensions"}
      </div>
    </div>
  );
}

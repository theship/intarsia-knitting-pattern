import React from 'react';


const defaultMargin = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
};

// export type CellProps = {
export interface ICellProps {
    id: string;
    x: number;
    y: number;
    numCols: number;
    numRows: number;
    columnWidth: number;
    rowHeight: number;
    margin?: typeof defaultMargin;
}

export default function generateCells({ margin = defaultMargin }: ICellProps) {
    const numColumns = 40;
    const numRows = 29;
    const columnWidth = 15;
    const rowHeight = 10;
    const id = 'genCell';
    return (
        <React.Fragment key={id}>
        </React.Fragment>
    )
}

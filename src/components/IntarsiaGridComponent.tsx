import React from 'react';
import { IntarsiaGridContainer } from "./IntarsiaGridContainer";
import { Container } from 'react-bootstrap';

function IntarsiaGridComponent() {
    const gridContainer = IntarsiaGridContainer.useContainer();

    function buildGrid() {
        var gridLayout = [];
        for (let i: number = 0; i < gridContainer.gridDim.x; i++) {
            gridLayout.push([]);
            for (let j: number = 0; j < gridContainer.gridDim.y; j++) {
                gridLayout[i].push([i, j]);
            }
        }
        return gridLayout;
    }
    const grid = buildGrid();
    return (
        <Container>
            {grid.map(row => <gridContainer.GridRow row={row} />)}
        </Container>
    );
}
export default IntarsiaGridComponent;
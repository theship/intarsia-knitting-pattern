import React from 'react';
import { IntarsiaGridContainer } from "./IntarsiaGridContainer";
import { Container } from 'react-bootstrap';

function IntarsiaGridComponent(){
    const GridContainer = IntarsiaGridContainer.useContainer();
    const grid = GridContainer

    return (
        <div>
            <h3>Intarsia Grid</h3>
            <IntarsiaGridContainer.Provider>
                {grid}
            </IntarsiaGridContainer.Provider>

{/*                 {GridRow.Row.map(Row => <div>{Row}</div>)}
 */}            
        </div>
    )
}
export default IntarsiaGridComponent;
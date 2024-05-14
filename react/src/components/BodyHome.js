import React from 'react';
import styled from 'styled-components';

const BodyContainer = styled.body`
    margin: 5%;
`;

const Main = styled.main`
padding: 5px
`;

const Div = styled.div `
display:flex;
`;

function Body() {

    return(
        <BodyContainer>
                <Main>
                    <Div>
                        <div class = "title 1">
                            <h1>Item1</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique metus id augue tincidunt euismod. Nam velit libero, vehicula non feugiat eget, tincidunt vitae tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce eu pharetra tellus. Quisque volutpat finibus urna ut feugiat. Morbi ultricies sapien orci, vel convallis libero pellentesque eu. Cras tristique id nulla vel bibendum. Nulla a cursus justo, vitae vulputate ligula. Maecenas urna augue, pulvinar ut urna ac, semper volutpat leo.</p>
                        </div>
                        <div class = "title 2">
                            <h1>Item2</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique metus id augue tincidunt euismod. Nam velit libero, vehicula non feugiat eget, tincidunt vitae tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce eu pharetra tellus. Quisque volutpat finibus urna ut feugiat. Morbi ultricies sapien orci, vel convallis libero pellentesque eu. Cras tristique id nulla vel bibendum. Nulla a cursus justo, vitae vulputate ligula. Maecenas urna augue, pulvinar ut urna ac, semper volutpat leo.</p>
                        </div>
                    </Div> 
                    <Div>
                        <div class = "title 3">
                            <h1>Item3</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique metus id augue tincidunt euismod. Nam velit libero, vehicula non feugiat eget, tincidunt vitae tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce eu pharetra tellus. Quisque volutpat finibus urna ut feugiat. Morbi ultricies sapien orci, vel convallis libero pellentesque eu. Cras tristique id nulla vel bibendum. Nulla a cursus justo, vitae vulputate ligula. Maecenas urna augue, pulvinar ut urna ac, semper volutpat leo.</p>
                        </div>
                        <div class = "title 4">
                            <h1>Item4</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique metus id augue tincidunt euismod. Nam velit libero, vehicula non feugiat eget, tincidunt vitae tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce eu pharetra tellus. Quisque volutpat finibus urna ut feugiat. Morbi ultricies sapien orci, vel convallis libero pellentesque eu. Cras tristique id nulla vel bibendum. Nulla a cursus justo, vitae vulputate ligula. Maecenas urna augue, pulvinar ut urna ac, semper volutpat leo.</p>
                        </div>
                    </Div>
                </Main>
        </BodyContainer>
    );

}

export default Body;
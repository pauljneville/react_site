
import React from 'react';
import styled from '@emotion/styled'


export default Basket = () => {
    const [fruits, setFruits] = React.useState([
        { id: '1', name: 'Apple', isFavorite: false },
        { id: '2', name: 'Peach', isFavorite: true },
        { id: '3', name: 'Strawberry', isFavorite: false },
    ]);

    function handleClick(item) {
        const newFruits = fruits.map((fruit) => {
            if (fruit.id === item.id) {
                return {
                    id: fruit.id,
                    name: fruit.name,
                    isFavorite: !fruit.isFavorite,
                };
            } else {
                return fruit;
            }
        });

        setFruits(newFruits);
    }

    const Button = styled.button`
        cursor: pointer;
        border: 1px solid #1a202c;
        padding: 8px;
        min-width: 64px;

        background-color: ${p => p.buttonColor};
        /* background: transparent; */

        transition: all 0.1s ease-in;

        &:hover {
            background: #1a202c;
            color: #ffffff;
        }
    `;
    const UnorderedList = styled.ul`
        margin: 0;
        padding: 0;
        list-style-type: none;
    `;
    const ListItem = styled.li`
        display: flex;
        justify-content: space-between;
        padding: 8px 8px;
    `;

    return (
        <UnorderedList>
            {fruits.map((item) => (
                <ListItem key={item.id}>
                    {item.name}
                    <Button type="button" onClick={() => handleClick(item)} buttonColor={"transparent"}>
                        {item.isFavorite ? 'Unlike' : 'Like'}
                    </Button>
                </ListItem>
            ))}
        </UnorderedList>
    );
}
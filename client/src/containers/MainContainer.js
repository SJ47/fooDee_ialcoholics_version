import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import Request from '../helpers/request.js';
import MenuItemList from '../components/MenuItemList';
import MenuCategoryNavBar from '../components/MenuCategoryNavBar';

const MainContainer = () => {

    const [currentItems, setCurrentItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("/menu_items")

    const getCurrentItems = () => {
        console.log("Fetching menu items...")
        let categoryUrl = selectedCategory;
        const request = new Request();
        const allItemsPromise = request.get(categoryUrl)



        Promise.all([allItemsPromise])
            .then((data) => {
                setCurrentItems(data[0]);
            })

    }

    useEffect(() => {
        getCurrentItems()
    }, [selectedCategory])

    if (!currentItems) {
        return <p>nothing</p>
    }
    const handleCategoryNavClick = (category) => {
        setSelectedCategory(category);
        // event.preventDefault()
        console.log("Hey, you clicked me", category)

    }
    return (
        <>
            <header>
                <MenuCategoryNavBar onCategoryNavClick={handleCategoryNavClick} />
            </header>
            <Switch>
                <Route render={() => {
                    return <MenuItemList currentItems={currentItems} />
                }} />

            </Switch>
        </>
    )

}

export default MainContainer;
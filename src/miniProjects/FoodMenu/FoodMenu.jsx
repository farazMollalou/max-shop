import React, { useState, useEffect, useId } from 'react'
import './FoodMenu.scss';
import menu from './Data';
import FoodCard from './FoodCard';

function FoodMenu() {

    const [selected, setSelected] = useState('all')
    const [filtered, setFiltered] = useState(menu)

    const elemId = useId()
    const elemId2 = useId()
    const elemId3 = useId()
    console.log(`${elemId} - ${elemId2} - ${elemId3} `)
    // first method and way  :)

    // let categories_array = []
    // for (let i = 0; i < menu.length; i++) {
    //     categories_array.push(menu[i].category)
    // }

    // second way
    let main_categories = new Set(menu.map(item => item.category))
    //

    useEffect(() => {
        setFiltered(menu.filter(item => item.category===selected))
        if (selected === 'all') {
            setFiltered(menu)
        }
    }, [selected])

    return (
        <section className='menu-section' id={elemId}>
            <h1>Resturant</h1> : <span>{filtered.length}</span>
            <div className="category-container">
                <span className={selected === 'all' ? 'cat-item active' : 'cat-item'} onClick={() => setSelected('all')}>all</span>
                {Array.from(main_categories).map((cat, id) => (
                    <span className={selected === cat ? 'cat-item active' : 'cat-item'} key={id} onClick={() => setSelected(cat)}>{cat}</span>
                ))}
            </div>
            <div className="menu-container">
                {filtered.map(food => (
                    <FoodCard foodDetail={food} />
                ))}
            </div>
        </section>
    )
}

export default FoodMenu
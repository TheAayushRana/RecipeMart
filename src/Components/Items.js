import React from 'react';
import Item from './Item';
// import ItemContext from '../Context/ItemContext';

export default function Items(props) {

    const {itemData} = props;

    return( 
    <div className='container'>
        <div className="row row-cols-4">

            {itemData.map((element,i)=>{ 
            return <div className='col'> 
                <Item key={i} 
                    name={element.recipe.label} 
                    img={element.recipe.image}
                    itemUrl={element.recipe.url}
                    ingredient={element.recipe.ingredientLines}
                    /> </div>
        })}
        </div>
    </div>
)
}

import React, { useState } from 'react';
import Items from './Items';
// import Loader from './Loader'

export default function Search() {
  const [item, setItem] = useState('');
  const [data, setData] = useState([]);

  const submitHandler=(e)=>{
    e.preventDefault();
    fetchitem()
  }
  
  const fetchitem = async()=>{
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${item}&app_id=65e56854&app_key=518ca958c78fa487f664499b3341e04b`;
    const urlData = await fetch(url);
    const parsedData = await urlData.json();
    setData(parsedData.hits)
    console.log(parsedData.hits)
    // console.log(data[0].recipe)
  }

  const handleChange = (e)=>{
    setItem(e.target.value);
  }
  return <div className='text-center'>
    <form onSubmit={submitHandler}>
        <label>Search: 
        <input className="m-3" type="text" name="item-name" value={item} onChange={handleChange}/>
        </label>
        <button className='btn-primary' type="submit" value="Submit">Find Receipe</button>
    </form>
    {/* <Loader/> */}
    <Items itemData={data} />
  </div>;
}

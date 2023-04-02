import React from "react";
import Item from "./Item";
import Loader from "./Loader";

export default function Items({ itemData, showLoader }) {
  console.log(itemData)
  return (
    <div className="container mt-5">
      {showLoader && <Loader />}
      <div className="row row-cols-4">
        {itemData.map((element) => {
          return (
            <div className="col">
              <Item
                key={element.recipe.calories}
                name={element.recipe.label}
                img={element.recipe.image}
                itemUrl={element.recipe.url}
                ingredient={element.recipe.ingredientLines}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

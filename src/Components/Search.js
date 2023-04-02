import React, { useState } from "react";
import Items from "./Items";
import { Button, InputGroup, Form } from "react-bootstrap";

export default function Search() {
  const [item, setItem] = useState(""); // to get food item from input
  const [data, setData] = useState([]); // to show data for that food item
  const [showLoader, setShowLoader] = useState(false); // show loader

  const apiKey = process.env.REACT_APP_API_KEY;
  const apiId = process.env.REACT_APP_ID;

  const submitHandler = (e) => {
    e.preventDefault();
    fetchitem();
    setShowLoader(true);
  };

  const fetchitem = async () => {
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${item}&app_id=${apiId}&app_key=${apiKey}`;
    const urlData = await fetch(url);
    const parsedData = await urlData.json();
    setData(parsedData.hits);
    setShowLoader(false);
    console.log(parsedData.hits);
  };

  // on change input handler
  const handleChange = (e) => {
    setItem(e.target.value);
  };

  return (
    <div className="mt-3 text-center">
      <form onSubmit={submitHandler} className="w-50 m-auto">
        <InputGroup className="mb-3 align-items-center">
          <Form.Control
            className="ms-2"
            placeholder="Enter Food Item Name"
            aria-label="Enter Food Item Name"
            aria-describedby="basic-addon2"
            value={item}
            onChange={handleChange}
          />
          <Button
            variant="primary"
            id="button-addon2"
            type="submit"
            value="Submit"
          >
            Find Receipe
          </Button>
        </InputGroup>
      </form>
      <Items itemData={data} showLoader={showLoader} />
    </div>
  );
}

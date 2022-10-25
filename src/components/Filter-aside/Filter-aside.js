import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchBrands,
  fetchCategories,
  fetchMaxPrice,
  fetchMinPrice,
} from "../../redux/slice/filterSlice";

import { Slider } from "@mui/material";

import AccordionFilter from "../AccordionFilter/AccordionFilter";

import { FILTER_BY_CATEGORIES } from "../../redux/slice/filterSlice";
import { fetchProducts } from "../../redux/slice/listProductSlice";

export const selectedFilterObject = {
  brand: [],
  category: [],
};

const FilterAside = () => {
  const dispatch = useDispatch();

  const [showResetBtn, setShowResetBtn] = useState(false);
  const [price, setPrice] = useState([0, 10]);
  const [selectedFilter, setSelectedFilter] = useState(selectedFilterObject);

  const products = useSelector(fetchProducts);
  const sliderMin = useSelector(fetchMinPrice);
  const sliderMax = useSelector(fetchMaxPrice);

  const brands = useSelector(fetchBrands);
  const categories = useSelector(fetchCategories);

  const handleSelect = (name, value) => {
    setSelectedFilter({
      ...selectedFilter,
      [name]: value,
    });
  };

  const handleChange = (event, newValue) => {
    setPrice(newValue);
  };  

  const handleClear = () => {
    setSelectedFilter({...selectedFilterObject});
    setPrice([sliderMin, sliderMax]);
    setShowResetBtn(false)
  }

  const renderResetBtn = showResetBtn ? (<button type="button" className="button button-primary is-block ml-auto" onClick={handleClear}>
    <i className="fa-solid fa-xmark mr-2"></i>Clear all
  </button>) : null;

  useEffect(() => {
    if (!isNaN(sliderMin) && sliderMin && !isNaN(sliderMax) && sliderMax)
      setPrice([sliderMin, sliderMax]);
  }, [sliderMax, sliderMin]);

  useEffect(() => {
    dispatch(FILTER_BY_CATEGORIES({ products, filters: selectedFilter, price }))
    const hasFilter = Object.values(selectedFilter).some((x) => x.length > 0);

    if(hasFilter) setShowResetBtn(true)
    else if(price[0] !== sliderMin || price[1] !== sliderMax) setShowResetBtn(true)
    else setShowResetBtn(false)

  }, [selectedFilter, price]);

  return (
    <div>
      { renderResetBtn }
      <AccordionFilter
        items={brands}
        handleSelect={handleSelect}
        title="Brands"
        name="brand"
        reset={showResetBtn}
        checkboxes={selectedFilter.brand}
      />
      <AccordionFilter
        items={categories}
        handleSelect={handleSelect}
        title="Categories"
        name="category"
        checkboxes={selectedFilter.category}
      />

      <p className="title is-5 my-5">Price:</p>
      <Slider
        min={isNaN(sliderMin) ? 0 : sliderMin}
        max={isNaN(sliderMax) ? 0 : sliderMax}
        value={price}
        onChange={handleChange}
        valueLabelDisplay="auto"
      />
    </div>
  );
};

export default FilterAside;

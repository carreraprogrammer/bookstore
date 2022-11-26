import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const updateStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <div className="categoriesContainer">
      <h2 className="categoryText">{categories}</h2>
      <button type="button" className="categoryBtn" onClick={() => updateStatus()}>Check Status</button>
    </div>
  );
};

export default Categories;

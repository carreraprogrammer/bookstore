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
    <div className="category-container">
      <h2 className="category-text">{categories}</h2>
      <button type="button" className="category-btn" onClick={() => updateStatus()}>Check Status</button>
    </div>
  );
};

export default Categories;

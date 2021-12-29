import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const { id, title, price, category, image } = props.product;
  return (
    <div className="four wide column">
      <Link to={`products/${id}`}>
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price">${price}</div>
              <div className="meta description">{category}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

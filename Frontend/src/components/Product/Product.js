import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
function Product() {
  const severPublic = "http://localhost:8000/images/";
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8000/product/")
      .then((response) => {
        setProduct(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };
  const ShowProducts = () => {
    return (
      <>
        {product.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={product._id}>
                  <img
                    src={product.image ? severPublic + product.image : ""}
                    className="card-img-top"
                    height="240px"
                  />
                  <div className="card-body">
                    <h8 className="card-title mb-0">{product.name}</h8>
                    <p className="card-text lead fw-bold">{product.price} đ</p>
                    <Link
                      to={`detail/${product._id}`}
                      className="btn btn-outline-dark"
                    >
                      CHI TIẾT
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">ALL Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}

export default Product;

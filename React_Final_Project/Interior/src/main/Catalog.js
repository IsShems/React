import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContent, addToShoppingCart } from "../store/reducer";
import { Link, Outlet } from 'react-router-dom';
import { updateDataArr } from "../store/reducer";
import "./Catalog.css";

export function Catalog() {
  const dispatch = useDispatch();
  const dataArr = useSelector((state) => state.products.dataArr);
  const basketArr = useSelector((state) => state.products.basketArr);
  const [sortByPrice, setSortByPrice] = useState({
    decrease: "First expensive",
    increase: "First cheap",
  });
  const [productsList, setProductsList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Bedroom");
  const [subcategory, setSubcategory] = useState("");
  const [showAll, setShowAll] = useState(true);

  const filteredSubcategories = dataArr.find(
    (category) => category.name === selectedCategory
  )?.subcategories;

  useEffect(() => {
    dispatch(fetchContent());
  }, [dispatch]);

  useEffect(() => {
    console.log(basketArr);
  }, [basketArr]);

  useEffect(() => {
    const selectedCategoryData = dataArr.find(
      (categoryData) => categoryData.name === selectedCategory
    );

    if (selectedCategoryData) {
      const allProducts = selectedCategoryData.subcategories.flatMap(
        (subcategory) => subcategory.products
      );
      setProductsList(allProducts);
    }
  }, [dataArr, selectedCategory]);

  const handleCategoryChange = (e, category) => {
    e.preventDefault();
    setSelectedCategory(category);
    setShowAll(true);
  };

  const setSelectedSubcategory = (e, subcategory) => {
    e.preventDefault();
    setSubcategory(subcategory);
    setShowAll(false);

    const selectedCategoryData = dataArr.find(
      (categoryData) => categoryData.name === selectedCategory
    );
    const products =
      selectedCategoryData?.subcategories.find(
        (sub) => sub.name === subcategory
      )?.products || [];
    setProductsList(products);
  };

    const myHandleSort = (e) => {
      const sortedProductsArr = [...dataArr];
    
      if (e.target.value === "First cheap") {
        sortedProductsArr.sort((a, b) => a.price - b.price);
      } else if (e.target.value === "First expensive") {
        sortedProductsArr.sort((a, b) => b.price - a.price);
      }
    
      setProductsList([...sortedProductsArr]); 
      
      dispatch(updateDataArr(sortedProductsArr));
    };
    


  const handleAddToShoppingCart = (product) => 
  {
    dispatch(addToShoppingCart(product))
  }

  return (
    
        <div className="products-outer-container">
          <div className="products-sort">
            <span>{dataArr.length} products</span>
            <select onChange={(e) => myHandleSort(e)} className="select-box">
              <option value={sortByPrice.increase}>
                {sortByPrice.increase}
              </option>
              <option value={sortByPrice.decrease}>
                {sortByPrice.decrease}
              </option>
            </select>
          </div>
          <div className="catalog-container">
      <div className="categories-container">
      <ul className="good-section">
  {Array.isArray(dataArr) && dataArr.length > 0 ? (
    dataArr.map((category, index) => (
       <Link  to={`/product/${category.id}`} key={index}>
         <article
          className={`category ${
            category.name === selectedCategory ? 'selected' : ''
          }`}
        >
          <img
            src={category.photo}
            className="product-img"
            alt="Product"
          ></img>
          <h4>{category.name}</h4>
          <p>{category.price}$</p>
        </article>
      </Link>
    ))
  ) : (
    <p>Error</p>
  )}
</ul>
      </div>
        <Outlet/>
      </div>
    </div>
  );
}
"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import ListProducts from "@/components/products/ListProducts";

import queryString from "query-string";

const getProducts = async (searchParams) => {
  const urlParams = {
    keyword: searchParams.keyword,
    page: searchParams.page,
    category: searchParams.category,
    "price[gte]": searchParams.min,
    "price[lte]": searchParams.max,
    "ratings[gte]": searchParams.ratings,
  };

  const searchQuery = queryString.stringify(urlParams);

  const { data } = await axios.get(
    `${process.env.API_URL}/api/products?${searchQuery}`
  );
  return data;
};

const HomePage = ({ searchParams }) => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await getProducts(searchParams);
      setProductsData(products);
    };

    fetchData();
  }, [searchParams]);

  return (
    <div>
      <ListProducts data={productsData} />
    </div>
  );
};

export default HomePage;

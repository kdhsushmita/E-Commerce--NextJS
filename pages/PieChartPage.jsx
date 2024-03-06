import React, { useEffect, useState } from "react";
import axios from "axios";
import PieChart from "@/components/PieChart";

const getCategoriesDistribution = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.API_URL}/api/categories-distribution`
    );
    return data;
  } catch (error) {
    console.error("Error fetching categories distribution:", error);
    return [];
  }
};

const PieChartPage = () => {
  const [categoriesDistribution, setCategoriesDistribution] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const distribution = await getCategoriesDistribution();
      setCategoriesDistribution(distribution);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Product Distribution by Category</h1>
      <PieChart data={categoriesDistribution} />
    </div>
  );
};

export default PieChartPage;

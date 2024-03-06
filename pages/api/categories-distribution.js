// pages/api/categories-distribution.js

import dbConnect from "@/backend/config/dbConnect";
import Product from "@/backend/models/product";

export default async function handler(req, res) {
    await dbConnect(); // Ensure database connection

    if (req.method !== "GET") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    try {
        const categoriesDistribution = await Product.aggregate([
            { $group: { _id: "$category", count: { $sum: 1 } } },
            { $project: { _id: 0, label: "$_id", data: "$count" } }
        ]);
        res.status(200).json(categoriesDistribution);
    } catch (error) {
        console.error("Error fetching categories distribution:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

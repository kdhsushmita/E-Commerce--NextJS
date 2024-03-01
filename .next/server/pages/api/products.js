"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/products";
exports.ids = ["pages/api/products"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("next-connect");

/***/ }),

/***/ "(api)/./backend/config/dbConnect.js":
/*!*************************************!*\
  !*** ./backend/config/dbConnect.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst dbConnect = ()=>{\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.readyState) >= 1) {\n        return;\n    }\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().set(\"strictQuery\", false);\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb://localhost:27017/buyitnow\");\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9iYWNrZW5kL2NvbmZpZy9kYkNvbm5lY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLFlBQVksSUFBTTtJQUN0QixJQUFJRCx1RUFBOEIsSUFBSSxHQUFHO1FBQ3ZDO0lBQ0YsQ0FBQztJQUVEQSxtREFBWSxDQUFDLGVBQWUsS0FBSztJQUNqQ0EsdURBQWdCLENBQUNNLG9DQUFrQjtBQUNyQztBQUVBLGlFQUFlTCxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnV0aXRub3cvLi9iYWNrZW5kL2NvbmZpZy9kYkNvbm5lY3QuanM/ZjI3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IGRiQ29ubmVjdCA9ICgpID0+IHtcbiAgaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb24ucmVhZHlTdGF0ZSA+PSAxKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbW9uZ29vc2Uuc2V0KFwic3RyaWN0UXVlcnlcIiwgZmFsc2UpO1xuICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52LkRCX1VSSSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3Q7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJkYkNvbm5lY3QiLCJjb25uZWN0aW9uIiwicmVhZHlTdGF0ZSIsInNldCIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiREJfVVJJIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./backend/config/dbConnect.js\n");

/***/ }),

/***/ "(api)/./backend/controllers/productControllers.js":
/*!***************************************************!*\
  !*** ./backend/controllers/productControllers.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getProducts\": () => (/* binding */ getProducts),\n/* harmony export */   \"newProduct\": () => (/* binding */ newProduct)\n/* harmony export */ });\n/* harmony import */ var _models_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/product */ \"(api)/./backend/models/product.js\");\n\nconst newProduct = async (req, res, next)=>{\n    const product = await _models_product__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create(req.body);\n    res.status(201).json({\n        product\n    });\n};\nconst getProducts = async (req, res, next)=>{\n    const products = await _models_product__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find();\n    res.status(200).json({\n        products\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9iYWNrZW5kL2NvbnRyb2xsZXJzL3Byb2R1Y3RDb250cm9sbGVycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0M7QUFFakMsTUFBTUMsYUFBYSxPQUFPQyxLQUFLQyxLQUFLQyxPQUFTO0lBQ2xELE1BQU1DLFVBQVUsTUFBTUwsOERBQWMsQ0FBQ0UsSUFBSUssSUFBSTtJQUM3Q0osSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUNuQko7SUFDRjtBQUNGLEVBQUU7QUFFSyxNQUFNSyxjQUFjLE9BQU9SLEtBQUtDLEtBQUtDLE9BQVM7SUFDbkQsTUFBTU8sV0FBVyxNQUFNWCw0REFBWTtJQUNuQ0csSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUNuQkU7SUFDRjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idXRpdG5vdy8uL2JhY2tlbmQvY29udHJvbGxlcnMvcHJvZHVjdENvbnRyb2xsZXJzLmpzPzZmYzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2R1Y3QgZnJvbSBcIi4uL21vZGVscy9wcm9kdWN0XCI7XG5cbmV4cG9ydCBjb25zdCBuZXdQcm9kdWN0ID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBQcm9kdWN0LmNyZWF0ZShyZXEuYm9keSk7XG4gIHJlcy5zdGF0dXMoMjAxKS5qc29uKHtcbiAgICBwcm9kdWN0LFxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0cyA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IFByb2R1Y3QuZmluZCgpO1xuICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgcHJvZHVjdHMsXG4gIH0pO1xufTsiXSwibmFtZXMiOlsiUHJvZHVjdCIsIm5ld1Byb2R1Y3QiLCJyZXEiLCJyZXMiLCJuZXh0IiwicHJvZHVjdCIsImNyZWF0ZSIsImJvZHkiLCJzdGF0dXMiLCJqc29uIiwiZ2V0UHJvZHVjdHMiLCJwcm9kdWN0cyIsImZpbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./backend/controllers/productControllers.js\n");

/***/ }),

/***/ "(api)/./backend/models/product.js":
/*!***********************************!*\
  !*** ./backend/models/product.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst productSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: [\n            true,\n            \"Please enter product name\"\n        ]\n    },\n    description: {\n        type: String,\n        required: [\n            true,\n            \"Please enter product description\"\n        ]\n    },\n    price: {\n        type: Number,\n        required: [\n            true,\n            \"Please enter product price\"\n        ]\n    },\n    images: [\n        {\n            public_id: {\n                type: String\n            },\n            url: {\n                type: String\n            }\n        }\n    ],\n    category: {\n        type: String,\n        required: [\n            true,\n            \"Please enter product category\"\n        ],\n        enum: {\n            values: [\n                \"Electronics\",\n                \"Cameras\",\n                \"Laptops\",\n                \"Accessories\",\n                \"Headphones\",\n                \"Sports\"\n            ],\n            message: \"Please select correct category\"\n        }\n    },\n    seller: {\n        type: String,\n        required: [\n            true,\n            \"Please enter product seller\"\n        ]\n    },\n    stock: {\n        type: Number,\n        required: [\n            true,\n            \"Please enter product stock\"\n        ]\n    },\n    ratings: {\n        type: Number,\n        default: 0\n    },\n    reviews: [\n        {\n            rating: {\n                type: Number,\n                required: true\n            },\n            comment: {\n                type: String,\n                required: true\n            },\n            createdAt: {\n                type: Date,\n                default: Date.now\n            }\n        }\n    ],\n    createdAt: {\n        type: Date,\n        default: Date.now\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Product) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Product\", productSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9iYWNrZW5kL21vZGVscy9wcm9kdWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxnQkFBZ0IsSUFBSUQsd0RBQWUsQ0FBQztJQUN4Q0csTUFBTTtRQUNKQyxNQUFNQztRQUNOQyxVQUFVO1lBQUMsSUFBSTtZQUFFO1NBQTRCO0lBQy9DO0lBQ0FDLGFBQWE7UUFDWEgsTUFBTUM7UUFDTkMsVUFBVTtZQUFDLElBQUk7WUFBRTtTQUFtQztJQUN0RDtJQUNBRSxPQUFPO1FBQ0xKLE1BQU1LO1FBQ05ILFVBQVU7WUFBQyxJQUFJO1lBQUU7U0FBNkI7SUFDaEQ7SUFDQUksUUFBUTtRQUNOO1lBQ0VDLFdBQVc7Z0JBQ1RQLE1BQU1DO1lBQ1I7WUFDQU8sS0FBSztnQkFDSFIsTUFBTUM7WUFDUjtRQUNGO0tBQ0Q7SUFFRFEsVUFBVTtRQUNSVCxNQUFNQztRQUNOQyxVQUFVO1lBQUMsSUFBSTtZQUFFO1NBQWdDO1FBQ2pEUSxNQUFNO1lBQ0pDLFFBQVE7Z0JBQ047Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7YUFDRDtZQUNEQyxTQUFTO1FBQ1g7SUFDRjtJQUNBQyxRQUFRO1FBQ05iLE1BQU1DO1FBQ05DLFVBQVU7WUFBQyxJQUFJO1lBQUU7U0FBOEI7SUFDakQ7SUFDQVksT0FBTztRQUNMZCxNQUFNSztRQUNOSCxVQUFVO1lBQUMsSUFBSTtZQUFFO1NBQTZCO0lBQ2hEO0lBQ0FhLFNBQVM7UUFDUGYsTUFBTUs7UUFDTlcsU0FBUztJQUNYO0lBQ0FDLFNBQVM7UUFDUDtZQUNFQyxRQUFRO2dCQUNObEIsTUFBTUs7Z0JBQ05ILFVBQVUsSUFBSTtZQUNoQjtZQUNBaUIsU0FBUztnQkFDUG5CLE1BQU1DO2dCQUNOQyxVQUFVLElBQUk7WUFDaEI7WUFDQWtCLFdBQVc7Z0JBQ1RwQixNQUFNcUI7Z0JBQ05MLFNBQVNLLEtBQUtDLEdBQUc7WUFDbkI7UUFDRjtLQUNEO0lBQ0RGLFdBQVc7UUFDVHBCLE1BQU1xQjtRQUNOTCxTQUFTSyxLQUFLQyxHQUFHO0lBQ25CO0FBQ0Y7QUFFQSxpRUFBZTFCLGdFQUF1QixJQUNwQ0EscURBQWMsQ0FBQyxXQUFXQyxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnV0aXRub3cvLi9iYWNrZW5kL21vZGVscy9wcm9kdWN0LmpzPzQzN2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBwcm9kdWN0U2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIG5hbWU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBlbnRlciBwcm9kdWN0IG5hbWVcIl0sXG4gIH0sXG4gIGRlc2NyaXB0aW9uOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJQbGVhc2UgZW50ZXIgcHJvZHVjdCBkZXNjcmlwdGlvblwiXSxcbiAgfSxcbiAgcHJpY2U6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBlbnRlciBwcm9kdWN0IHByaWNlXCJdLFxuICB9LFxuICBpbWFnZXM6IFtcbiAgICB7XG4gICAgICBwdWJsaWNfaWQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgfSxcbiAgICAgIHVybDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG5cbiAgY2F0ZWdvcnk6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBlbnRlciBwcm9kdWN0IGNhdGVnb3J5XCJdLFxuICAgIGVudW06IHtcbiAgICAgIHZhbHVlczogW1xuICAgICAgICBcIkVsZWN0cm9uaWNzXCIsXG4gICAgICAgIFwiQ2FtZXJhc1wiLFxuICAgICAgICBcIkxhcHRvcHNcIixcbiAgICAgICAgXCJBY2Nlc3Nvcmllc1wiLFxuICAgICAgICBcIkhlYWRwaG9uZXNcIixcbiAgICAgICAgXCJTcG9ydHNcIixcbiAgICAgIF0sXG4gICAgICBtZXNzYWdlOiBcIlBsZWFzZSBzZWxlY3QgY29ycmVjdCBjYXRlZ29yeVwiLFxuICAgIH0sXG4gIH0sXG4gIHNlbGxlcjoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogW3RydWUsIFwiUGxlYXNlIGVudGVyIHByb2R1Y3Qgc2VsbGVyXCJdLFxuICB9LFxuICBzdG9jazoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICByZXF1aXJlZDogW3RydWUsIFwiUGxlYXNlIGVudGVyIHByb2R1Y3Qgc3RvY2tcIl0sXG4gIH0sXG4gIHJhdGluZ3M6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogMCxcbiAgfSxcbiAgcmV2aWV3czogW1xuICAgIHtcbiAgICAgIHJhdGluZzoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGNvbW1lbnQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBjcmVhdGVkQXQ6IHtcbiAgICAgICAgdHlwZTogRGF0ZSxcbiAgICAgICAgZGVmYXVsdDogRGF0ZS5ub3csXG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG4gIGNyZWF0ZWRBdDoge1xuICAgIHR5cGU6IERhdGUsXG4gICAgZGVmYXVsdDogRGF0ZS5ub3csXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLlByb2R1Y3QgfHxcbiAgbW9uZ29vc2UubW9kZWwoXCJQcm9kdWN0XCIsIHByb2R1Y3RTY2hlbWEpO1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicHJvZHVjdFNjaGVtYSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiTnVtYmVyIiwiaW1hZ2VzIiwicHVibGljX2lkIiwidXJsIiwiY2F0ZWdvcnkiLCJlbnVtIiwidmFsdWVzIiwibWVzc2FnZSIsInNlbGxlciIsInN0b2NrIiwicmF0aW5ncyIsImRlZmF1bHQiLCJyZXZpZXdzIiwicmF0aW5nIiwiY29tbWVudCIsImNyZWF0ZWRBdCIsIkRhdGUiLCJub3ciLCJtb2RlbHMiLCJQcm9kdWN0IiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./backend/models/product.js\n");

/***/ }),

/***/ "(api)/./pages/api/products/index.js":
/*!*************************************!*\
  !*** ./pages/api/products/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backend_config_dbConnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/backend/config/dbConnect */ \"(api)/./backend/config/dbConnect.js\");\n/* harmony import */ var _backend_controllers_productControllers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/backend/controllers/productControllers */ \"(api)/./backend/controllers/productControllers.js\");\n\n\n\nconst handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()();\n(0,_backend_config_dbConnect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nhandler.post(_backend_controllers_productControllers__WEBPACK_IMPORTED_MODULE_2__.newProduct);\nhandler.get(_backend_controllers_productControllers__WEBPACK_IMPORTED_MODULE_2__.getProducts);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBOEI7QUFDcUI7QUFDZ0M7QUFFbkYsTUFBTUksVUFBVUosbURBQUVBO0FBRWxCQyxxRUFBU0E7QUFFVEcsUUFBUUMsSUFBSSxDQUFDRiwrRUFBVUE7QUFDdkJDLFFBQVFFLEdBQUcsQ0FBQ0osZ0ZBQVdBO0FBRXZCLGlFQUFlRSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnV0aXRub3cvLi9wYWdlcy9hcGkvcHJvZHVjdHMvaW5kZXguanM/NTk3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbmMgZnJvbSBcIm5leHQtY29ubmVjdFwiO1xuaW1wb3J0IGRiQ29ubmVjdCBmcm9tIFwiQC9iYWNrZW5kL2NvbmZpZy9kYkNvbm5lY3RcIjtcbmltcG9ydCB7IGdldFByb2R1Y3RzLCBuZXdQcm9kdWN0IH0gZnJvbSBcIkAvYmFja2VuZC9jb250cm9sbGVycy9wcm9kdWN0Q29udHJvbGxlcnNcIjtcblxuY29uc3QgaGFuZGxlciA9IG5jKCk7XG5cbmRiQ29ubmVjdCgpO1xuXG5oYW5kbGVyLnBvc3QobmV3UHJvZHVjdCk7XG5oYW5kbGVyLmdldChnZXRQcm9kdWN0cyk7XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iXSwibmFtZXMiOlsibmMiLCJkYkNvbm5lY3QiLCJnZXRQcm9kdWN0cyIsIm5ld1Byb2R1Y3QiLCJoYW5kbGVyIiwicG9zdCIsImdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/products/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/products/index.js"));
module.exports = __webpack_exports__;

})();
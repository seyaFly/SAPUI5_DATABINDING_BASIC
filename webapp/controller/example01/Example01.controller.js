sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function(
    Controller,
    JSONModel
) {
    "use strict";

    return Controller.extend("onem.seya.databinding.controller.example01.Example01", {
        /**
         * @override
         */
        onInit: function() {
            var oProduct = this._productInstance();
            var oModel = new JSONModel(oProduct);
            this.getView().setModel(oModel, "product");
        },

        _productInstance: function() {
            var oProduct = {
                "d": [{
                        "__metadata": {
                            "uri": "https://services.odata.org/V2/Northwind/Northwind.svc/Products(1)",
                            "type": "NorthwindModel.Product"
                        },
                        "ProductID": 1,
                        "ProductName": "Chai",
                        "SupplierID": 1,
                        "CategoryID": 1,
                        "QuantityPerUnit": "10 boxes x 20 bags",
                        "UnitPrice": "18.0000",
                        "UnitsInStock": 39,
                        "UnitsOnOrder": 0,
                        "ReorderLevel": 10,
                        "Discontinued": false,
                        "Category": {
                            "__deferred": {
                                "uri": "https://services.odata.org/V2/Northwind/Northwind.svc/Products(1)/Category"
                            }
                        },
                        "Order_Details": {
                            "__deferred": {
                                "uri": "https://services.odata.org/V2/Northwind/Northwind.svc/Products(1)/Order_Details"
                            }
                        },
                        "Supplier": {
                            "__deferred": {
                                "uri": "https://services.odata.org/V2/Northwind/Northwind.svc/Products(1)/Supplier"
                            }
                        }
                    },
                    {
                        "__metadata": {
                            "uri": "https://services.odata.org/V2/Northwind/Northwind.svc/Products(2)",
                            "type": "NorthwindModel.Product"
                        },
                        "ProductID": 2,
                        "ProductName": "Chang",
                        "SupplierID": 1,
                        "CategoryID": 1,
                        "QuantityPerUnit": "24 - 12 oz bottles",
                        "UnitPrice": "19.0000",
                        "UnitsInStock": 17,
                        "UnitsOnOrder": 40,
                        "ReorderLevel": 25,
                        "Discontinued": false,
                        "Category": {
                            "__deferred": {
                                "uri": "https://services.odata.org/V2/Northwind/Northwind.svc/Products(2)/Category"
                            }
                        },
                        "Order_Details": {
                            "__deferred": {
                                "uri": "https://services.odata.org/V2/Northwind/Northwind.svc/Products(2)/Order_Details"
                            }
                        },
                        "Supplier": {
                            "__deferred": {
                                "uri": "https://services.odata.org/V2/Northwind/Northwind.svc/Products(2)/Supplier"
                            }
                        }
                    },
                    {
                        "__metadata": {
                            "uri": "https://services.odata.org/V2/Northwind/Northwind.svc/Products(3)",
                            "type": "NorthwindModel.Product"
                        },
                        "ProductID": 3,
                        "ProductName": "Aniseed Syrup",
                        "SupplierID": 1,
                        "CategoryID": 2,
                        "QuantityPerUnit": "12 - 550 ml bottles",
                        "UnitPrice": "10.0000",
                        "UnitsInStock": 13,
                        "UnitsOnOrder": 70,
                        "ReorderLevel": 25,
                        "Discontinued": false,
                        "Category": {
                            "__deferred": {
                                "uri": "https://services.odata.org/V2/Northwind/Northwind.svc/Products(3)/Category"
                            }
                        },
                        "Order_Details": {
                            "__deferred": {
                                "uri": "https://services.odata.org/V2/Northwind/Northwind.svc/Products(3)/Order_Details"
                            }
                        },
                        "Supplier": {
                            "__deferred": {
                                "uri": "https://services.odata.org/V2/Northwind/Northwind.svc/Products(3)/Supplier"
                            }
                        }
                    },
                    {
                        "__metadata": {
                            "uri": "https://services.odata.org/V2/Northwind/Northwind.svc/Products(4)",
                            "type": "NorthwindModel.Product"
                        },
                        "ProductID": 4,
                        "ProductName": "Chef Anton's Cajun Seasoning",
                        "SupplierID": 2,
                        "CategoryID": 2,
                        "QuantityPerUnit": "48 - 6 oz jars",
                        "UnitPrice": "22.0000",
                        "UnitsInStock": 53,
                        "UnitsOnOrder": 0,
                        "ReorderLevel": 0,
                        "Discontinued": false,
                        "Category": {
                            "__deferred": {
                                "uri": "https://services.odata.org/V2/Northwind/Northwind.svc/Products(4)/Category"
                            }
                        },
                        "Order_Details": {
                            "__deferred": {
                                "uri": "https://services.odata.org/V2/Northwind/Northwind.svc/Products(4)/Order_Details"
                            }
                        },
                        "Supplier": {
                            "__deferred": {
                                "uri": "https://services.odata.org/V2/Northwind/Northwind.svc/Products(4)/Supplier"
                            }
                        }
                    },
                    {
                        "__metadata": {
                            "uri": "https://services.odata.org/V2/Northwind/Northwind.svc/Products(5)",
                            "type": "NorthwindModel.Product"
                        },
                        "ProductID": 5,
                        "ProductName": "Chef Anton's Gumbo Mix",
                        "SupplierID": 2,
                        "CategoryID": 2,
                        "QuantityPerUnit": "36 boxes",
                        "UnitPrice": "21.3500",
                        "UnitsInStock": 0,
                        "UnitsOnOrder": 0,
                        "ReorderLevel": 0,
                        "Discontinued": true,
                        "Category": {
                            "__deferred": {
                                "uri": "https://services.odata.org/V2/Northwind/Northwind.svc/Products(5)/Category"
                            }
                        },
                        "Order_Details": {
                            "__deferred": {
                                "uri": "https://services.odata.org/V2/Northwind/Northwind.svc/Products(5)/Order_Details"
                            }
                        },
                        "Supplier": {
                            "__deferred": {
                                "uri": "https://services.odata.org/V2/Northwind/Northwind.svc/Products(5)/Supplier"
                            }
                        }
                    },
                    {
                        "__metadata": {
                            "uri": "https://services.odata.org/V2/Northwind/Northwind.svc/Products(6)",
                            "type": "NorthwindModel.Product"
                        },
                        "ProductID": 6,
                        "ProductName": "Grandma's Boysenberry Spread",
                        "SupplierID": 3,
                        "CategoryID": 2,
                        "QuantityPerUnit": "12 - 8 oz jars",
                        "UnitPrice": "25.0000",
                        "UnitsInStock": 120,
                        "UnitsOnOrder": 0,
                        "ReorderLevel": 25,
                        "Discontinued": false,
                        "Category": {
                            "__deferred": {
                                "uri": "https://services.odata.org/V2/Northwind/Northwind.svc/Products(6)/Category"
                            }
                        },
                        "Order_Details": {
                            "__deferred": {
                                "uri": "https://services.odata.org/V2/Northwind/Northwind.svc/Products(6)/Order_Details"
                            }
                        },
                        "Supplier": {
                            "__deferred": {
                                "uri": "https://services.odata.org/V2/Northwind/Northwind.svc/Products(6)/Supplier"
                            }
                        }
                    },
                    {
                        "__metadata": {
                            "uri": "https://services.odata.org/V2/Northwind/Northwind.svc/Products(7)",
                            "type": "NorthwindModel.Product"
                        },
                        "ProductID": 7,
                        "ProductName": "Uncle Bob's Organic Dried Pears",
                        "SupplierID": 3,
                        "CategoryID": 7,
                        "QuantityPerUnit": "12 - 1 lb pkgs.",
                        "UnitPrice": "30.0000",
                        "UnitsInStock": 15,
                        "UnitsOnOrder": 0,
                        "ReorderLevel": 10,
                        "Discontinued": false,
                        "Category": {
                            "__deferred": {
                                "uri": "https://services.odata.org/V2/Northwind/Northwind.svc/Products(7)/Category"
                            }
                        },
                        "Order_Details": {
                            "__deferred": {
                                "uri": "https://services.odata.org/V2/Northwind/Northwind.svc/Products(7)/Order_Details"
                            }
                        },
                        "Supplier": {
                            "__deferred": {
                                "uri": "https://services.odata.org/V2/Northwind/Northwind.svc/Products(7)/Supplier"
                            }
                        }
                    },
                    {
                        "__metadata": {
                            "uri": "https://services.odata.org/V2/Northwind/Northwind.svc/Products(8)",
                            "type": "NorthwindModel.Product"
                        },
                        "ProductID": 8,
                        "ProductName": "Northwoods Cranberry Sauce",
                        "SupplierID": 3,
                        "CategoryID": 2,
                        "QuantityPerUnit": "12 - 12 oz jars",
                        "UnitPrice": "40.0000",
                        "UnitsInStock": 6,
                        "UnitsOnOrder": 0,
                        "ReorderLevel": 0,
                        "Discontinued": false,
                        "Category": {
                            "__deferred": {
                                "uri": "https://services.odata.org/V2/Northwind/Northwind.svc/Products(8)/Category"
                            }
                        },
                        "Order_Details": {
                            "__deferred": {
                                "uri": "https://services.odata.org/V2/Northwind/Northwind.svc/Products(8)/Order_Details"
                            }
                        },
                        "Supplier": {
                            "__deferred": {
                                "uri": "https://services.odata.org/V2/Northwind/Northwind.svc/Products(8)/Supplier"
                            }
                        }
                    },
                    {
                        "__metadata": {
                            "uri": "https://services.odata.org/V2/Northwind/Northwind.svc/Products(9)",
                            "type": "NorthwindModel.Product"
                        },
                        "ProductID": 9,
                        "ProductName": "Mishi Kobe Niku",
                        "SupplierID": 4,
                        "CategoryID": 6,
                        "QuantityPerUnit": "18 - 500 g pkgs.",
                        "UnitPrice": "97.0000",
                        "UnitsInStock": 29,
                        "UnitsOnOrder": 0,
                        "ReorderLevel": 0,
                        "Discontinued": true,
                        "Category": {
                            "__deferred": {
                                "uri": "https://services.odata.org/V2/Northwind/Northwind.svc/Products(9)/Category"
                            }
                        },
                        "Order_Details": {
                            "__deferred": {
                                "uri": "https://services.odata.org/V2/Northwind/Northwind.svc/Products(9)/Order_Details"
                            }
                        },
                        "Supplier": {
                            "__deferred": {
                                "uri": "https://services.odata.org/V2/Northwind/Northwind.svc/Products(9)/Supplier"
                            }
                        }
                    },
                    {
                        "__metadata": {
                            "uri": "https://services.odata.org/V2/Northwind/Northwind.svc/Products(10)",
                            "type": "NorthwindModel.Product"
                        },
                        "ProductID": 10,
                        "ProductName": "Ikura",
                        "SupplierID": 4,
                        "CategoryID": 8,
                        "QuantityPerUnit": "12 - 200 ml jars",
                        "UnitPrice": "31.0000",
                        "UnitsInStock": 31,
                        "UnitsOnOrder": 0,
                        "ReorderLevel": 0,
                        "Discontinued": false,
                        "Category": {
                            "__deferred": {
                                "uri": "https://services.odata.org/V2/Northwind/Northwind.svc/Products(10)/Category"
                            }
                        },
                        "Order_Details": {
                            "__deferred": {
                                "uri": "https://services.odata.org/V2/Northwind/Northwind.svc/Products(10)/Order_Details"
                            }
                        },
                        "Supplier": {
                            "__deferred": {
                                "uri": "https://services.odata.org/V2/Northwind/Northwind.svc/Products(10)/Supplier"
                            }
                        }
                    }
                ]
            }

            return oProduct;
        }
    });
});
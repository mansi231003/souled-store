
export const sneakers = [
    {
        "product_id": "12",
        "title": "Sneakers:Works Out",
        "price_range": { "min": "700", "max": "900" },
        "stock": "80",
        "tags": ["sneaker"],
        "category": "Men Sliders",
        "image_url": "/sneaker1.png",
        "number_of_variants": "3",
        "variant_options": ["size", "color"],
        "variant_values":
            [
                {
                    "size": {
                        "label": "Select Size",
                        "values": [
                            {
                                "1": { "label": "S", "key": "small" },
                                "2": { "label": "M", "key": "medium" },
                                "3": { "label": "L", "key": "large" }
                            }
                        ]
                    },
                    "color": {
                        "label": "Select Color",
                        "values": [
                            {
                                "1": { "label": "Red", "key": "red", "color_code": "#ff0000" },
                                "2": { "label": "Blue", "key": "blue", "color_code": "#0000ff" }
                            }
                        ]
                    }
                }
            ],
        "variants": [
            { "id": "1a", "size": "medium", "color": "red", "price": "850", "image_url": "/sneaker2.png", "stock": "20" },
            { "id": "1b", "size": "small", "color": "blue", "price": "800", "image_url": "/sneaker3.png", "stock": "40" },
            { "id": "1c", "size": "large", "color": "blue", "price": "900", "image_url": "/sneaker4.png", "stock": "20" }
        ]
    },

    {
        "product_id": "13",
        "title": "Casual T-Shirt",
        "tags": ["sneaker"],
        "category": "Drop Cut T-Shirts",
        "price_range": { "min": null, "max": "500" },
        "stock": "120",
        "image_url": "/sneaker2.png",
        "number_of_variants": "2",
        "variant_options": ["size"],
        "variant_values": [
            {
                "size": {
                    "label": "Select Size",
                    "values": [
                        {
                            "1": { "label": "M", "key": "medium" },
                            "2": { "label": "L", "key": "large" }
                        }
                    ]
                }
            }
        ],
        "variants": [
            { "id": "2a", "size": "medium", "price": "500", " stock": "50", "image_url": "/sneaker2.png" },
            { "id": "2b", "size": "large", "price": "500", "stock": "70", "image_url": "/sneaker2.png" }
        ]
    },

    {
        "product_id": "14",
        "title": "Sports Hoodie",
        "tags": ["sneaker"],
        "category": "Drop Cut T-Shirts",
        "price_range": { "min": "1200", "max": "1500" },
        "stock": "50", // 20 + 30
        "image_url": "/sneaker3.png",
        "number_of_variants": "2",
        "variant_options": ["size", "color"],
        "variant_values": [
            {
                "size": {
                    "label": "Select Size",
                    "values": [
                        {
                            "1": { "label": "S", "key": "small" },
                            "2": { "label": "M", "key": "medium" }
                        }
                    ]
                },
                "color": {
                    "label": "Select Color",
                    "values": [
                        {
                            "1": { "label": "Black", "key": "black", "color_code": "#000000" },
                            "2": { "label": "Grey", "key": "grey", "color_code": "#808080" }
                        }
                    ]
                }
            }
        ],
        "variants": [
            { "id": "3a", "size": "small", "color": "black", "price": "1200", "image_url": "/sneaker1.png", "stock": "20" },
            { "id": "3b", "size": "medium", "color": "grey", "price": "1500", "image_url": "/sneaker2.png", "stock": "30" }
        ]
    },

    {
        "product_id": "15",
        "title": "Denim Jeans",
        "tags": ["sneaker"],
        "category": "Hooded T-Shirts",
        "price_range": { "min": null, "max": "1300" },
        "stock": "40", // 15 + 25
        "image_url": "/sneaker4.png",
        "number_of_variants": "2",
        "variant_options": ["size"],
        "variant_values": [
            {
                "size": {
                    "label": "Select Size",
                    "values": [
                        {
                            "1": { "label": "30", "key": "30" },
                            "2": { "label": "32", "key": "32" }
                        }
                    ]
                }
            }
        ],
        "variants": [
            { "id": "4a", "size": "30", "price": "1000", "stock": "15", "image_url": "/sneaker4.png" },
            { "id": "4b", "size": "32", "price": "1300", "stock": "25", "image_url": "/sneaker4.png" }
        ]
    },

    {
        "product_id": "16",
        "title": "Summer Shirt",
        "tags": ["sneaker"],
        "category": "Drop Cut T-Shirts",
        "price_range": { "min": "750", "max": "950" },
        "stock": "70", // 20 + 30
        "image_url": "/sneaker5.png",
        "number_of_variants": "3",
        "variant_options": ["size", "color"],
        "variant_values": [
            {
                "size": {
                    "label": "Select Size",
                    "values": [
                        {
                            "1": { "label": "S", "key": "small" },
                            "2": { "label": "M", "key": "medium" },
                            "3": { "label": "XL", "key": "xl" }
                        }
                    ]
                },
                "color": {
                    "label": "Select Color",
                    "values": [
                        {
                            "1": { "label": "Green", "key": "green", "color_code": "#00ff00" },
                            "2": { "label": "Yellow", "key": "yellow", "color_code": "#ffff00" }
                        }
                    ]
                }
            }
        ],
        "variants": [
            { "id": "5a", "size": "small", "color": "green", "price": "750", "image_url": "/sneaker1.png", "stock": "20" },
            { "id": "5b", "size": "medium", "color": "yellow", "price": "800", "image_url": "/sneaker4.png", "stock": "30" },
            { "id": "5c", "size": "xl", "color": "yellow", "price": "950", "image_url": "/sneaker3.png", "stock": "20" },
        ]
    },
    {
        "product_id": "17",
        "title": "Peanuts:Works Out",
        "tags": ["sneaker"],
        "category": "Easy Fit Vests",
        "price_range": { "min": "700", "max": "900" },
        "stock": "80",
        "image_url": "/sneaker1.png",
        "number_of_variants": "3",
        "variant_options": ["size", "color"],
        "variant_values":
            [
                {
                    "size": {
                        "label": "Select Size",
                        "values": [
                            {
                                "1": { "label": "S", "key": "small" },
                                "2": { "label": "M", "key": "medium" },
                                "3": { "label": "L", "key": "large" }
                            }
                        ]
                    },
                    "color": {
                        "label": "Select Color",
                        "values": [
                            {
                                "1": { "label": "Red", "key": "red", "color_code": "#ff0000" },
                                "2": { "label": "Blue", "key": "blue", "color_code": "#0000ff" }
                            }
                        ]
                    }
                }
            ],
        "variants": [
            { "id": "1a", "size": "medium", "color": "red", "price": "850", "image_url": "/sneaker2.png", "stock": "20" },
            { "id": "1b", "size": "small", "color": "blue", "price": "800", "image_url": "/sneaker3.png", "stock": "40" },
            { "id": "1c", "size": "large", "color": "blue", "price": "900", "image_url": "/sneaker4.png", "stock": "20" }
        ]
    }
];
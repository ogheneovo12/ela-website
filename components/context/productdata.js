import React from 'react'
import pd1 from 'assets/images/shop-img3.png'

import { FaStar, FaStarHalfAlt } from 'react-icons/fa'


export const storeProducts = [
    {
        id: 1,
        name: "Astor Sofa Chair",
        price: 100.00,
        availability: "In Stock",
        sku: "8757898",
        buttontext: "Add To Cart",
        bestproduct: true,
        relatedpds: true,
        stars: [],
        images: pd1,
        description: "Astor Sofa Chair lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.",

        fulldesc: "Astor Sofa Chair Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam non iaculis finibus, ipsum arcu sollicitudin dolor, ut cursus sapien sem sed purus. Donec vitae fringilla tortor, sed fermentum nunc. Suspendisse sodales turpis dolor, at rutrum dolor tristique id. Quisque pellentesque ullamcorper felis, eget gravida mi elementum a. Maecenas consectetur volutpat ante, sit amet molestie urna luctus in. Nulla eget dolor semper urna malesuada dictum. Duis eleifend pellentesque dui et finibus. Pellentesque dapibus dignissim augue. Etiam odio est, sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus. Pellentesque dapibus dignissim augue. Etiam odio est, sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus.",
        categories: [
            "Furniture",
            "Gifts"
        ],
        tags: [
            "Chair",
            "wooden"
        ],
        materials: [
            "Aluminium",
            "Wooden"
        ],
        colors: [
            "black",
            "brown"
        ],
        type: "Chair",
        length: "58 mm",
        width: "100 mm",
        height: "200 mm",
        inCart: false,
        count: 0,
        total: 0
    },
    {
        id: 2,
        name: "Malachite Carna Mug",
        price: 88.00,
        sku: "013kD898",
        availability: "In Stock",
        buttontext: "Add To Cart",
        bestproduct: true,
        relatedpds: true,
        stars: [],
        images: pd1,
        description: "Malachite Carna Mug lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.",

        fulldesc: "Malachite Carna Mug Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam non iaculis finibus, ipsum arcu sollicitudin dolor, ut cursus sapien sem sed purus. Donec vitae fringilla tortor, sed fermentum nunc. Suspendisse sodales turpis dolor, at rutrum dolor tristique id. Quisque pellentesque ullamcorper felis, eget gravida mi elementum a. Maecenas consectetur volutpat ante, sit amet molestie urna luctus in. Nulla eget dolor semper urna malesuada dictum. Duis eleifend pellentesque dui et finibus. Pellentesque dapibus dignissim augue. Etiam odio est, sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus. Pellentesque dapibus dignissim augue. Etiam odio est, sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus.",
        categories: [
            "Plastic",
            "Gifts"
        ],
        tags: [
            "Mug"
        ],
        materials: [
            "Aluminium",
            "Still"
        ],
        colors: [
            "Green",
            "Gray",
            "Brown"
        ],
        type: "Mug",
        length: "30 mm",
        width: "50 mm",
        height: "110 mm",
        inCart: false,
        count: 0,
        total: 0
    },
    {
        id: 3,
        name: "Leader Backpack",
        delprice: 75.00,
        price: 35.00,
        availability: "In Stock",
        sku: "9758757",
        buttontext: "Add To Cart",
        bestproduct: true,
        relatedpds: true,
        stars: [],
        sales: "-30%",
        images: pd1,
        description: "Leader Backpack lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.",

        fulldesc: "Leader Backpack Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam non iaculis finibus, ipsum arcu sollicitudin dolor, ut cursus sapien sem sed purus. Donec vitae fringilla tortor, sed fermentum nunc. Suspendisse sodales turpis dolor, at rutrum dolor tristique id. Quisque pellentesque ullamcorper felis, eget gravida mi elementum a. Maecenas consectetur volutpat ante, sit amet molestie urna luctus in. Nulla eget dolor semper urna malesuada dictum. Duis eleifend pellentesque dui et finibus. Pellentesque dapibus dignissim augue. Etiam odio est, sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus. Pellentesque dapibus dignissim augue. Etiam odio est, sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus.",
        categories: [
            "Bag",
            "Cloths"
        ],
        tags: [
            "Bag"
        ],
        materials: [
            "Cloth",
            "Bag"
        ],
        colors: [
            "black"
        ],
        type: "Bag",
        length: "133 mm",
        width: "150 mm",
        height: "350 mm",
        inCart: false,
        count: 0,
        total: 0
    },
    {
        id: 4,
        name: "Wooden Pen Holder",
        price: 40.00,
        availability: "Out Stock",
        sku: "2060809",
        buttontext: "Add To Cart",
        bestproduct: true,
        relatedpds: true,
        stars: [],
        images: pd1,
        description: "Wooden Pen Holder lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.",

        fulldesc: "Wooden Pen Holder Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam non iaculis finibus, ipsum arcu sollicitudin dolor, ut cursus sapien sem sed purus. Donec vitae fringilla tortor, sed fermentum nunc. Suspendisse sodales turpis dolor, at rutrum dolor tristique id. Quisque pellentesque ullamcorper felis, eget gravida mi elementum a. Maecenas consectetur volutpat ante, sit amet molestie urna luctus in. Nulla eget dolor semper urna malesuada dictum. Duis eleifend pellentesque dui et finibus. Pellentesque dapibus dignissim augue. Etiam odio est, sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus. Pellentesque dapibus dignissim augue. Etiam odio est, sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus.",
        categories: [
            "Wooden",
            "Box"
        ],
        tags: [
            "Holder",
            "Pen Holder"
        ],
        materials: [
            "Wooden",
            "Pen Holder"
        ],
        colors: [
            "Gray",
            "Brown"
        ],
        type: "Pen Holder",
        length: "30 mm",
        width: "140 mm",
        height: "88 mm",
        inCart: false,
        count: 0,
        total: 0
    },
    {
        id: 5,
        name: "Bag Power Bank",
        price: 22.00,
        availability: "In Stock",
        sku: "013kD898",
        buttontext: "Add To Cart",
        bestproduct: true,
        stars: [],
        images: pd1,
        description: "Bag Power Bank lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.",

        fulldesc: "Bag Power Bank Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam non iaculis finibus, ipsum arcu sollicitudin dolor, ut cursus sapien sem sed purus. Donec vitae fringilla tortor, sed fermentum nunc. Suspendisse sodales turpis dolor, at rutrum dolor tristique id. Quisque pellentesque ullamcorper felis, eget gravida mi elementum a. Maecenas consectetur volutpat ante, sit amet molestie urna luctus in. Nulla eget dolor semper urna malesuada dictum. Duis eleifend pellentesque dui et finibus. Pellentesque dapibus dignissim augue. Etiam odio est, sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus. Pellentesque dapibus dignissim augue. Etiam odio est, sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus.",
        categories: [
            "Electrics",
            "Gifts"
        ],
        tags: [
            "Power Bank"
        ],
        materials: [
            "Electrics",
            "Power Bank"
        ],
        colors: [
            "Blue"
        ],
        type: "Power Bank",
        length: "500 mm",
        width: "40 mm",
        height: "200 mm",
        inCart: false,
        count: 0,
        total: 0
    },
    {
        id: 6,
        name: "Bag Power Bank",
        delprice: 60.00,
        price: 30.00,
        availability: "In Stock",
        sku: "6746hV",
        buttontext: "Add To Cart",
        bestproduct: true,
        stars: [],
        sales: "-20%",
        images: pd1,
        description: "Bag Power Bank lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.",

        fulldesc: "Bag Power Bank Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam non iaculis finibus, ipsum arcu sollicitudin dolor, ut cursus sapien sem sed purus. Donec vitae fringilla tortor, sed fermentum nunc. Suspendisse sodales turpis dolor, at rutrum dolor tristique id. Quisque pellentesque ullamcorper felis, eget gravida mi elementum a. Maecenas consectetur volutpat ante, sit amet molestie urna luctus in. Nulla eget dolor semper urna malesuada dictum. Duis eleifend pellentesque dui et finibus. Pellentesque dapibus dignissim augue. Etiam odio est, sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus. Pellentesque dapibus dignissim augue. Etiam odio est, sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus.",
        categories: [
            "Cloth",
            "Gifts"
        ],
        tags: [
            "Bag"
        ],
        materials: [
            "Electrics",
            "Power Bank"
        ],
        colors: [
            "Sky Blue"
        ],
        type: "Bag",
        length: "58 mm",
        width: "100 mm",
        height: "200 mm",
        inCart: false,
        count: 0,
        total: 0
    },
    {
        id: 7,
        name: "Marble Pen Holder",
        price: 35.00,
        availability: "Out Stock",
        sku: "887644",
        buttontext: "Add To Cart",
        bestproduct: true,
        stars: [],
        images: pd1,
        description: "Marble Pen Holder lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.",

        fulldesc: "Marble Pen Holder Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam non iaculis finibus, ipsum arcu sollicitudin dolor, ut cursus sapien sem sed purus. Donec vitae fringilla tortor, sed fermentum nunc. Suspendisse sodales turpis dolor, at rutrum dolor tristique id. Quisque pellentesque ullamcorper felis, eget gravida mi elementum a. Maecenas consectetur volutpat ante, sit amet molestie urna luctus in. Nulla eget dolor semper urna malesuada dictum. Duis eleifend pellentesque dui et finibus. Pellentesque dapibus dignissim augue. Etiam odio est, sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus. Pellentesque dapibus dignissim augue. Etiam odio est, sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus.",
        categories: [
            "Still",
            "Box"
        ],
        tags: [
            "Pen Holder"
        ],
        materials: [
            "Still",
            "Pen Holder"
        ],
        colors: [
            "Gray",
            "Brown"
        ],
        type: "Pen Holder",
        length: "58 mm",
        width: "100 mm",
        height: "42 mm",
        inCart: false,
        count: 0,
        total: 0
    },
    {
        id: 8,
        name: "Leader Camera Bag",
        delprice: 65.00,
        price: 45.00,
        availability: "In Stock",
        sku: "0009876",
        buttontext: "Add To Cart",
        bestproduct: true,
        stars: [],
        sales: "-15%",
        images: pd1,
        description: "Leader Camera Bag lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.",

        fulldesc: "Leader Camera Bag Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam non iaculis finibus, ipsum arcu sollicitudin dolor, ut cursus sapien sem sed purus. Donec vitae fringilla tortor, sed fermentum nunc. Suspendisse sodales turpis dolor, at rutrum dolor tristique id. Quisque pellentesque ullamcorper felis, eget gravida mi elementum a. Maecenas consectetur volutpat ante, sit amet molestie urna luctus in. Nulla eget dolor semper urna malesuada dictum. Duis eleifend pellentesque dui et finibus. Pellentesque dapibus dignissim augue. Etiam odio est, sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus. Pellentesque dapibus dignissim augue. Etiam odio est, sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus.",
        categories: [
            "Cloch",
            "Box"
        ],
        tags: [
            "Bag",
            "Camera Bag"
        ],
        materials: [
            "Leader",
            "Bag"
        ],
        colors: [
            "Pink"
        ],
        type: "Camera Bag",
        length: "56 mm",
        width: "200 mm",
        height: "200 mm",
        inCart: false,
        count: 0,
        total: 0
    },
    {
        id: 9,
        name: "Antibes Dining Chair",
        price: 45.00,
        availability: "In Stock",
        sku: "786575",
        buttontext: "Add To Cart",
        bestseller: true,
        stars: [
            <FaStar />,
            <FaStar />,
            <FaStar />,
            <FaStar />,
            <FaStarHalfAlt />
        ],
        images: pd1,
        description: "Antibes Dining Chair lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.",

        fulldesc: "Antibes Dining Chair Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam non iaculis finibus, ipsum arcu sollicitudin dolor, ut cursus sapien sem sed purus. Donec vitae fringilla tortor, sed fermentum nunc. Suspendisse sodales turpis dolor, at rutrum dolor tristique id. Quisque pellentesque ullamcorper felis, eget gravida mi elementum a. Maecenas consectetur volutpat ante, sit amet molestie urna luctus in. Nulla eget dolor semper urna malesuada dictum. Duis eleifend pellentesque dui et finibus. Pellentesque dapibus dignissim augue. Etiam odio est, sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus. Pellentesque dapibus dignissim augue. Etiam odio est, sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus.",
        categories: [
            "Furniture"
        ],
        tags: [
            "Chair",
            "wooden"
        ],
        materials: [
            "Wooden",
            "Chair"
        ],
        colors: [
            "Black",
            "Brown"
        ],
        type: "Chair",
        length: "178 mm",
        width: "287 mm",
        height: "599 mm",
        inCart: false,
        count: 0,
        total: 0
    },
    {
        id: 10,
        name: "House Cuckoo Clock",
        price: 45.00,
        availability: "In Stock",
        sku: "VFS3565",
        buttontext: "Add To Cart",
        bestseller: true,
        stars: [
            <FaStar />,
            <FaStar />,
            <FaStar />,
            <FaStar />,
            <FaStarHalfAlt />
        ],
        images: pd1,
        description: "House Cuckoo Clock lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.",

        fulldesc: "House Cuckoo Clock Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam non iaculis finibus, ipsum arcu sollicitudin dolor, ut cursus sapien sem sed purus. Donec vitae fringilla tortor, sed fermentum nunc. Suspendisse sodales turpis dolor, at rutrum dolor tristique id. Quisque pellentesque ullamcorper felis, eget gravida mi elementum a. Maecenas consectetur volutpat ante, sit amet molestie urna luctus in. Nulla eget dolor semper urna malesuada dictum. Duis eleifend pellentesque dui et finibus. Pellentesque dapibus dignissim augue. Etiam odio est, sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus. Pellentesque dapibus dignissim augue. Etiam odio est, sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus.",
        categories: [
            "Electrics",
            "Gifts"
        ],
        tags: [
            "Cuckoo",
            "Bulb",
        ],
        materials: [
            "Cuckoo",
            "Bulb"
        ],
        colors: [
            "Black"
        ],
        type: "Cuckoo Clock",
        length: "58 mm",
        width: "100 mm",
        height: "200 mm",
        inCart: false,
        count: 0,
        total: 0
    },
    {
        id: 11,
        name: "Mustache Tea Mug",
        delprice: 65.00,
        price: 45.00,
        availability: "In Stock",
        sku: "665543",
        buttontext: "Add To Cart",
        bestseller: true,
        sales: "-15%",
        stars: [
            <FaStar />,
            <FaStar />,
            <FaStar />,
            <FaStar />,
            <FaStar />
        ],
        images: pd1,
        description: "Mustache Tea Mug lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.",

        fulldesc: "Mustache Tea Mug Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam non iaculis finibus, ipsum arcu sollicitudin dolor, ut cursus sapien sem sed purus. Donec vitae fringilla tortor, sed fermentum nunc. Suspendisse sodales turpis dolor, at rutrum dolor tristique id. Quisque pellentesque ullamcorper felis, eget gravida mi elementum a. Maecenas consectetur volutpat ante, sit amet molestie urna luctus in. Nulla eget dolor semper urna malesuada dictum. Duis eleifend pellentesque dui et finibus. Pellentesque dapibus dignissim augue. Etiam odio est, sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus. Pellentesque dapibus dignissim augue. Etiam odio est, sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus.",
        categories: [
            "glass"
        ],
        tags: [
            "Mug",
            "Tea Mug"
        ],
        materials: [
            "Mug"
        ],
        colors: [
            "Gray",
            "Brown",
            "Green"
        ],
        type: "Cup",
        length: "20 mm",
        width: "37 mm",
        height: "148 mm",
        inCart: false,
        count: 0,
        total: 0
    },
    {
        id: 12,
        name: "Marble Carnaby Mug",
        price: 45.00,
        availability: "In Stock",
        sku: "988989",
        buttontext: "Add To Cart",
        bestseller: true,
        stars: [
            <FaStar />,
            <FaStar />,
            <FaStar />,
            <FaStar />,
            <FaStarHalfAlt />
        ],
        images: pd1,
        description: "Marble Carnaby Mug lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.",

        fulldesc: "Marble Carnaby Mug Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam non iaculis finibus, ipsum arcu sollicitudin dolor, ut cursus sapien sem sed purus. Donec vitae fringilla tortor, sed fermentum nunc. Suspendisse sodales turpis dolor, at rutrum dolor tristique id. Quisque pellentesque ullamcorper felis, eget gravida mi elementum a. Maecenas consectetur volutpat ante, sit amet molestie urna luctus in. Nulla eget dolor semper urna malesuada dictum. Duis eleifend pellentesque dui et finibus. Pellentesque dapibus dignissim augue. Etiam odio est, sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus. Pellentesque dapibus dignissim augue. Etiam odio est, sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus.",
        categories: [
            "Glass",
            "Gifts"
        ],
        tags: [
            "Mug",
            "Coffey Mug"
        ],
        materials: [
            "Coffey Mug",
            "Mug"
        ],
        colors: [
            "Gray",
            "Brown",
            "Green"
        ],
        type: "Mug",
        length: "58 mm",
        width: "100 mm",
        height: "200 mm",
        inCart: false,
        count: 0,
        total: 0
    },
    {
        id: 13,
        name: "Leader Camera Bag",
        price: 45.00,
        availability: "Out Stock",
        sku: "112233",
        buttontext: "Add To Cart",
        stars: [],
        images: pd1,
        description: "Leader Camera Bag lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.",

        fulldesc: "Leader Camera Bag Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam non iaculis finibus, ipsum arcu sollicitudin dolor, ut cursus sapien sem sed purus. Donec vitae fringilla tortor, sed fermentum nunc. Suspendisse sodales turpis dolor, at rutrum dolor tristique id. Quisque pellentesque ullamcorper felis, eget gravida mi elementum a. Maecenas consectetur volutpat ante, sit amet molestie urna luctus in. Nulla eget dolor semper urna malesuada dictum. Duis eleifend pellentesque dui et finibus. Pellentesque dapibus dignissim augue. Etiam odio est, sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus. Pellentesque dapibus dignissim augue. Etiam odio est, sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus.",
        categories: [
            "Electrics",
            "Gifts"
        ],
        tags: [
            "Power Bank"
        ],
        materials: [
            "Bag",
            "Camera Bag"
        ],
        colors: [
            "Blue"
        ],
        type: "Power Bank",
        length: "58 mm",
        width: "100 mm",
        height: "200 mm",
        inCart: false,
        count: 0,
        total: 0
    },
    {
        id: 14,
        name: "Leader Camera Bag",
        price: 45.00,
        availability: "In Stock",
        sku: "445532",
        buttontext: "Add To Cart",
        stars: [],
        images: pd1,
        description: "Leader Camera Bag lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.",

        fulldesc: "Leader Camera Bag Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam non iaculis finibus, ipsum arcu sollicitudin dolor, ut cursus sapien sem sed purus. Donec vitae fringilla tortor, sed fermentum nunc. Suspendisse sodales turpis dolor, at rutrum dolor tristique id. Quisque pellentesque ullamcorper felis, eget gravida mi elementum a. Maecenas consectetur volutpat ante, sit amet molestie urna luctus in. Nulla eget dolor semper urna malesuada dictum. Duis eleifend pellentesque dui et finibus. Pellentesque dapibus dignissim augue. Etiam odio est, sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus. Pellentesque dapibus dignissim augue. Etiam odio est, sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus.",
        categories: [
            "Cloths"
        ],
        tags: [
            "Bag"
        ],
        materials: [
            "Bag"
        ],
        colors: [
            "SkyBlue"
        ],
        type: "Bag",
        length: "58 mm",
        width: "100 mm",
        height: "200 mm",
        inCart: false,
        count: 0,
        total: 0
    },
    {
        id: 15,
        name: "Leader Camera Bag",
        price: 45.00,
        availability: "In Stock",
        sku: "554436",
        buttontext: "Add To Cart",
        stars: [],
        images: pd1,
        description: "Leader Camera Bag lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.",

        fulldesc: "Leader Camera Bag Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam non iaculis finibus, ipsum arcu sollicitudin dolor, ut cursus sapien sem sed purus. Donec vitae fringilla tortor, sed fermentum nunc. Suspendisse sodales turpis dolor, at rutrum dolor tristique id. Quisque pellentesque ullamcorper felis, eget gravida mi elementum a. Maecenas consectetur volutpat ante, sit amet molestie urna luctus in. Nulla eget dolor semper urna malesuada dictum. Duis eleifend pellentesque dui et finibus. Pellentesque dapibus dignissim augue. Etiam odio est, sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus. Pellentesque dapibus dignissim augue. Etiam odio est, sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus.",
        categories: [
            "Still",
            "Holder"
        ],
        tags: [
            "Pen Holder"
        ],
        materials: [
            "Bag"
        ],
        colors: [
            "Gray",
            "Brown"
        ],
        type: "Pen Holder",
        length: "58 mm",
        width: "150 mm",
        height: "200 mm",
        inCart: false,
        count: 0,
        total: 0
    }
]


export const detailProduct = {
    id: 1,
    name: "Astor Sofa Chair",
    price: 100.00,
    availability: "In Stock",
    sku: "8757898",
    buttontext: "Add To Cart",
    bestproduct: true,
    relatedpds: true,
    stars: [],
    images: pd1,
    description: "Astor Sofa Chair lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit.",

    fulldesc: "Astor Sofa Chair Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fermentum, diam non iaculis finibus, ipsum arcu sollicitudin dolor, ut cursus sapien sem sed purus. Donec vitae fringilla tortor, sed fermentum nunc. Suspendisse sodales turpis dolor, at rutrum dolor tristique id. Quisque pellentesque ullamcorper felis, eget gravida mi elementum a. Maecenas consectetur volutpat ante, sit amet molestie urna luctus in. Nulla eget dolor semper urna malesuada dictum. Duis eleifend pellentesque dui et finibus. Pellentesque dapibus dignissim augue. Etiam odio est, sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus. Pellentesque dapibus dignissim augue. Etiam odio est, sodales ac aliquam id, iaculis eget lacus. Aenean porta, ante vitae suscipit pulvinar, purus dui interdum tellus, sed dapibus mi mauris vitae tellus.",
    categories: [
        "Furniture",
        "Gifts"
    ],
    tags: [
        "Chair",
        "wooden"
    ],
    materials: [
        "Aluminium",
        "Wooden"
    ],
    colors: [
        "black",
        "brown"
    ],
    type: "Chair",
    length: "58 mm",
    width: "100 mm",
    height: "200 mm",
    inCart: false,
    count: 0,
    total: 0
};
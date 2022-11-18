const products = [
  {
    id: "12345vrfdswq234r",
    name: "Bike",
    description: "MotarBike Yamaha",
    price: 278.99,
    quantity: 756,
    image: "img-5",
    onSale: true,
    categoryId: "12345vrfdswq234r",
  },
  {
    id: "12345vrfdswq234r",
    name: "Bus",
    description: "MotarBike Yamaha",
    price: 2998.99,
    quantity: 756,
    image: "img-5",
    onSale: true,
    categoryId: "12345vrfdswq234r",
  },
  {
    id: "12345vrfdswq234r",
    name: "Bicycle",
    description: "MotarBike Yamaha",
    price: 98.99,
    quantity: 756,
    image: "img-5",
    onSale: false,
    categoryId: "12345vrfdswq234r",
  },
  {
    id: "kjdhrwye3728iwjsdnb",
    name: "Car",
    description: "this is a Car",
    price: 33456,
    quantity: 32,
    image: "img-6",
    onSale: false,
    categoryId: "kjdhrwye3728iwjsdnb",
  },
];
const categories = [
  {
    id: "kjdhrwye3728iwjsdnb",
    name: "kitchen",
  },
  {
    id: "12345vrfdswq234r",
    name: "garden",
  },
];
const reviews = [
  {
    id: "11111111",
    date: "22-12-2022",
    title: "this is a good product",
    comment: "When i bought it was broken",
    rating: 1,
    productId: "kjdhrwye3728iwjsdnb",
  },
  {
    id: "22222222",
    date: "2-1-2022",
    title: "this is a good product",
    comment: "When i bought it was broken",
    rating: 2,
    productId: "12345vrfdswq234r",
  },
];
exports.db = {
  products,
  categories,
  reviews,
};

const Images = [
    { image: require("../assets/banners/food-1.jpg") },
    { image: require("../assets/banners/food-2.jpg") },
    { image: require("../assets/banners/food-3.jpg") },
    { image: require("../assets/banners/food-4.jpg") },
];

export const markers = [
    {
      coordinate: {
        latitude: 37.78825,
        longitude: -122.4324,
      },
      title: "Amazing Food Place",
      description: "This is the best food place",
      image: Images[0].image,
      rating: 4,
      reviews: 99,
    },
    {
      coordinate: {
        latitude: 37.755565,
        longitude: -120.4324,
      },
      title: "Second Amazing Food Place",
      description: "This is the second best food place",
      image: Images[1].image,
      rating: 5,
      reviews: 102,
    },
    {
      coordinate: {
        latitude: 22.6281662,
        longitude: 88.4410113,
      },
      title: "Third Amazing Food Place",
      description: "This is the third best food place",
      image: Images[2].image,
      rating: 3,
      reviews: 220,
    },
    {
      coordinate: {
        latitude: 22.6341137,
        longitude: 88.4497463,
      },
      title: "Fourth Amazing Food Place",
      description: "This is the fourth best food place",
      image: Images[3].image,
      rating: 4,
      reviews: 48,
    },
    {
      coordinate: {
        latitude: 22.6292757,
        longitude: 88.444781,
      },
      title: "Fifth Amazing Food Place",
      description: "This is the fifth best food place",
      image: Images[3].image,
      rating: 4,
      reviews: 178,
    },
];
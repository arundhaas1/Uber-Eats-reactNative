import { View, Text, Image } from "react-native";
import React from "react";

export default function About() {
  const yelpRestaurant={
    name:"Farmhouse Thai Kitchen",
    image:"https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80",
     price:"$$",
     reviews:4.5,
     categories:[{title:"thai"},{title:"comfort Food"}]
  }
  const { name, image, price, reviews, rating, categories } =
   yelpRestaurant;

  const formattedCategories = categories.map((cat) => cat.title).join(" • ");

  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDesc description={description} />
    </View>
  );
}

const RestaurantImage = (props) => {
  return (
    <Image
      source={{ uri: props.image }}
      style={{ width: "100%", height: 180 }}
    />
  );
};

const RestaurantName = (props) => {
  return (
    <Text
      style={{
        fontSize: 29,
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: "600",
      }}
    >
      {props.name}
    </Text>
  );
};

const RestaurantDesc = (props) => {
  return (
    <Text
      style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontSize: 15.5,
        fontWeight: "400",
      }}
    >
      {props.description}
    </Text>
  );
};

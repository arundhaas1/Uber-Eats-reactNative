import { View, Text, Image } from "react-native";
import React from "react";

export default function About() {
  const { name, image, price, reviews, rating, categories } =
    props.route.params;

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
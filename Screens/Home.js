import React, { useEffect, useState } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import BottomTab from "./Components/BottomTab";
import Categories from "./Components/Categories";
import Header from "./Components/Header";
import RestaurantItems, {
  localRestaurants,
} from "./Components/RestaurantItems";
import SearchBar from "./Components/SearchBar";

const YELP_API_KEY =
  "1onWUu7Plm72HBxVprC0Htw3FQmW92KdX0SbxEPFqrR48eZtR70szETgFGKqTpXCere4yFGK5VvKMup9rYC5g9zIWmPoxpI44kW6t9orB5EsnCaUns_K7Agv3Ve_X3Yx";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("newYork");
  const [tab, setTab] = useState(false);

  const setCities = (input) => {
    console.log(city);
    setCity(input);
  };

  const settab = () => {
    setTab(!tab);
  };

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => setRestaurantData(json.businesses));
  };

  useEffect(() => {
    console.log(city);
    getRestaurantsFromYelp();
  }, [city]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee" }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <Header settab={settab} />
        <SearchBar setCities={setCities} />

        {/* need to be updated after completion */}
        {!!tab ? <BottomTab /> : null}
        {/* need to be updated after completion */}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

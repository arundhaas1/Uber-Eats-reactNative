import { View} from "react-native";
import Home from "./Screens/Home";
import RestaurantDetail from "./Screens/RestaurantDetail";

export default function App() {
  return (
    <View style={{backgroundColor:"#eee",flex:1}}>
      <RestaurantDetail />
    </View>
  );
}

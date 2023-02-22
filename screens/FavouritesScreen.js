// import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
// import { FavouriteContext } from "../store/context/favourites-context";
import {useSelector} from "react-redux"
const FavouritesScreen = () => {
    // const context = useContext(FavouriteContext);
    const favouriteList=useSelector((state)=>state.favouriteMeals.ids)
  const favouriteMeals = MEALS.filter((meal) => favouriteList.includes(meal.id));
  if (favouriteMeals.length === 0)
    return (
      <View style={styles.root}>
        <Text style={styles.text}>You have no favourite meals yet</Text>
      </View>
    );
  else return <MealsList items={favouriteMeals} />;
};
export default FavouritesScreen;

const styles = StyleSheet.create({
    root:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
        fontSize:18,
        color:"white",
        fontWeight:"bold"
    }
});

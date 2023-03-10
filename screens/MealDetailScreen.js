import { useContext, useLayoutEffect } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import IconButton from "../components/IconButton";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import {useDispatch,useSelector} from "react-redux"
import { addFavourite,removeFavourite } from "../store/redux/favourites";
// import { FavouriteContext } from "../store/context/favourites-context";

const MealDetailScreen=({navigation,route})=>{
    // const context=useContext(FavouriteContext);
    const favouriteMealIds=useSelector((state)=>state.favouriteMeals.ids)
    const dispatch=useDispatch()
    const id=route.params.mealId
    const selectedMeal=MEALS.find((meal)=>meal.id===id)
    const mealIsFavourite=favouriteMealIds.includes(id)
    const changeFavouriteStatusHandler=()=>{
        if(mealIsFavourite)
            dispatch(removeFavourite({id:id}))
        else
            dispatch(addFavourite({id:id}))
    }
    useLayoutEffect(()=>{
        navigation.setOptions({
            title:selectedMeal.title,
            headerRight:()=>{
                return <IconButton icon={mealIsFavourite?"star":"star-outline"} color="white" onPress={changeFavouriteStatusHandler}/>
            }
        })
    },[navigation,mealIsFavourite])
    return (
      <ScrollView style={styles.rootConainer}>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails
          affordability={selectedMeal.affordability}
          complexity={selectedMeal.complexity}
          duration={selectedMeal.duration}
          testStyle={styles.testStyle}
        />
        <View style={styles.outerContainer}>
          <View style={styles.details}>
            <Subtitle>Ingredients</Subtitle>
            <List list={selectedMeal.ingredients} />
            <Subtitle>Steps</Subtitle>
            <List list={selectedMeal.steps} />
          </View>
        </View>
      </ScrollView>
    );
}
export default MealDetailScreen;

const styles=StyleSheet.create({
    rootConainer:{
        marginBottom:32
    },
    image:{
        width:"100%",
        height:350
    },
    title:{
        fontWeight:"bold",
        fontSize:24,
        margin:8,
        textAlign:"center",
        color:"white"
    },
    testStyle:{
        color:"white"
    },
    details:{
        width:"80%"
    },
    outerContainer:{
        alignItems:"center"
    }
})
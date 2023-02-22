import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native"
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data"
const MealsOverview=({navigation,route})=>{
    const catId=route.params.categoryId;
    const displayMeals = MEALS.filter((meal) =>
      meal.categoryIds.indexOf(catId)>=0
    );
    useLayoutEffect(()=>{
        const catTitle=CATEGORIES.find((item)=>item.id===catId).title
        navigation.setOptions({
            title:catTitle
        })
    },[route])
    const renderMealItem=({item})=>{
        const MealItemProps={
            title:item.title,
            imageUrl:item.imageUrl,
            affordability:item.affordability,
            complexity:item.complexity,
            duration:item.duration,
            id:item.id
        }
        return (<MealItem {...MealItemProps}/>)
    }
    return (
      <View>
          <FlatList data={displayMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem}/>
      </View>
    );
}
export default MealsOverview

const styles=StyleSheet.create({

})
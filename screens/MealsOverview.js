import { useLayoutEffect } from "react";
import { StyleSheet, } from "react-native"
import MealsList from "../components/MealsList/MealsList";
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
    return <MealsList items={displayMeals}/>
}
export default MealsOverview

const styles=StyleSheet.create({

})
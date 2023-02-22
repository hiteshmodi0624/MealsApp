import { FlatList, View } from "react-native";
import MealItem from "./MealItem";

const MealsList=({items})=>{
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
          <FlatList data={items} keyExtractor={(item) => item.id} renderItem={renderMealItem}/>
      </View>
    );
}
export default MealsList
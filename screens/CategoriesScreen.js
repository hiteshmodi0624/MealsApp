import { FlatList, StyleSheet, Text, View } from "react-native"
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data"
const CategoriesScreen = ({ navigation }) => {
  const RenderCategoryItem=({ item }) => {
    const pressHandler = () => {
        navigation.navigate('MealsOverview',{
            categoryId:item.id,
            title:item.title
        })
    };
    return (
        <CategoryGridTile
          color={item.color}
          title={item.title}
          onPress={pressHandler}
        />
      )
  }
  return (
    <View style={styles.categories}>
      <FlatList
        data={CATEGORIES}
        renderItem={RenderCategoryItem}
        keyExtractor={({ id }) => id}
        numColumns={2}
      />
    </View>
  );
};
export default CategoriesScreen

const styles=StyleSheet.create({
    categories:{
        flexDirection:"row",
        flex:1
    }
})
import { Pressable, StyleSheet, Text, View, Dimensions, Platform } from "react-native"

const CategoryGridTile=({title,color,onPress})=>{
    return (
      <View style={[styles.gridItem]}>
        <Pressable
          android_ripple={{ color: "#cccccc" }}
          style={({ pressed }) => [
            styles.button,
            pressed ? styles.buttonPressed : null,
          ]}
          onPress={onPress}
        >
          <View style={[styles.innerContainer, { backgroundColor: color }]}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </Pressable>
      </View>
    );
}
export default CategoryGridTile
const width=Dimensions.get("window").width;
const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 8,
    height: width / 2 - 24,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowRadius: 8,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    backgroundColor:"white",
    overflow:Platform.OS==="android"?"hidden":"visible"
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    borderRadius: 8,
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignContent: "center",
  },
  title:{
    fontWeight:"bold",
    fontSize:18,
    textAlign:"center"
  },
  buttonPressed:{
    opacity:0.5
  }
});
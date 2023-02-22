import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View,Platform } from "react-native"
import MealDetails from "./MealDetails";

const MealItem=({imageUrl,title,duration,complexity,affordability,id})=>{
    const navigation=useNavigation();
    const onPressHandler=()=>{
        navigation.navigate("MealDetailScreen",{
            mealId:id
        })
    }
    return (
      <View style={styles.mealItem}>
        <Pressable
          android_ripple={{ color: "#ccc" }}
          style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
          onPress={onPressHandler}
        >
          <View style={styles.innerContainer}>
            <View>
              <Image source={{ uri: imageUrl }} style={styles.image} />
              <Text style={styles.title}>{title}</Text>
              <MealDetails duration={duration} complexity={complexity} affordability={affordability}/>
            </View>
          </View>
        </Pressable>
      </View>
    );
}
export default MealItem

const styles=StyleSheet.create({
    innerContainer:{
        overflow:"hidden",
        borderRadius:8
    },
    mealItem:{
        margin:16,
        borderRadius:8,
        backgroundColor:"white",
        elevation: 4,
        shadowColor: "black",
        shadowRadius: 8,
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        backgroundColor:"white",
        overflow:Platform.OS==="android"?"hidden":"visible"

    },
    image:{
        width:"100%",
        height:200
    },
    title:{
        fontWeight:"bold",
        textAlign:"center",
        fontSize:20,
        padding:8
    },
    buttonPressed:{
        opacity:0.5
    }
})
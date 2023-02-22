import { StyleSheet, Text, View } from "react-native";

const MealDetails=({duration,complexity,affordability,style,testStyle})=>{
    return (
        <View style={[styles.details,style]}>
          <Text style={[styles.detailItem,testStyle]}>{duration}m</Text>
          <Text style={[styles.detailItem,testStyle]}>{complexity.toUpperCase()}</Text>
          <Text style={[styles.detailItem,testStyle]}>{affordability.toUpperCase()}</Text>
        </View>
    );
}
export default MealDetails

const styles=StyleSheet.create({
    details:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        padding:8
    },
    detailItem:{
        marginHorizontal:4,
        fontSize:12,
        fontWeight:"bold"
    },
})
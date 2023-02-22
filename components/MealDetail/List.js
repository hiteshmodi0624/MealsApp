import { StyleSheet, Text, View } from "react-native"

const List=({list})=>{
    return (
        <View style={styles.list}>
            {list.map((listItem)=><Text key={listItem} style={styles.listItem}>{listItem}</Text>)}
        </View>
    )
}
export default List

const styles= StyleSheet.create({
    list:{

    },
    listItem:{
        borderRadius:6,
        paddingHorizontal:8,
        paddingVertical:4,
        marginHorizontal:12,
        marginVertical:4,
        backgroundColor:"#e2b497",
        color:"#351401",
        textAlign:"center"

    }
})
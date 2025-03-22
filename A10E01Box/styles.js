import {Platform, StyleSheet, StatusBar} from "react-native";

export default StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "ghostwhite",
        ...Platform.select({
            ios: {paddingTop: 20},
            android: {paddingTop:StatusBar.currentHeight},
        }),


    },
    box: {
        width: 100,
        height: 100,
        justifyContent: "center",
        backgroundColor: "lightgray",
        alignItems: "center"
    }, 
    boxText: {
        color: "darkslategray",
        fontWeight: "bold"
    }
})
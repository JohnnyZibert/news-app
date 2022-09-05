import {View, Text, StyleSheet} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParam} from "../components/navigation/StackNavigator";
import React from "react";


type PostScreenProps = NativeStackScreenProps<RootStackParam, 'Main' | 'Create'>

export const CreateScreen: React.FC<PostScreenProps> = () => {
    return (
        <View style={styles.createContainer}><Text style={styles.helloText}>Эй друг, добавь новый пост!</Text></View>
    )
}

const styles = StyleSheet.create({
    createContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    helloText: {
        fontFamily: 'open-regular',
        fontSize:20,
    }
})
import {View, Text, StyleSheet} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParam} from "../components/navigation/StackNavigator";
import React from "react";


export type Props = NativeStackScreenProps<RootStackParam, 'Main' | 'About'>;

export const AboutScreen:React.FC<Props> = () => {
    return (
        <View style={styles.mainContainer}>
            <Text>Здравствуй, тут ты можешь прочитать о нас </Text>
            <Text>Версия приложения </Text><Text style={styles.versionApp}>1.0.0</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    versionApp: {
        fontFamily: 'open-bold'
    }
})
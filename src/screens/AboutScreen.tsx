import {View, Text, StyleSheet} from "react-native";


export const AboutScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <Text>About Screen </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
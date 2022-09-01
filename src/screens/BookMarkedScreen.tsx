import {View, Text, StyleSheet} from "react-native";


export const BookMarkedScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <Text>Book Marked Screen </Text>
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
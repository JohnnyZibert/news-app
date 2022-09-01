import {View, Text, StyleSheet, Image, ImageBackground, Button, Alert} from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import {RootStackParam} from "../../App";
import React from "react";
import {DATA} from "../data/data";
import {IPost} from "./MainScreen";


type Props = NativeStackScreenProps<RootStackParam, 'Post'>

export const PostScreen: React.FC<Props> = ({ route ,navigation}) => {

    const post = DATA.find(p => p.id ===route.params.id)

    const onRemoveHandler = (post: IPost ) => {
        // const deletePost = () => {
        //     DATA.filter((item => item.id !== post.id))
        //     navigation.navigate('Main')
        // }
        Alert.alert(
            "Удление записи",
            "Вы уверены, что хотите удалить запись?",
            [
                {
                    text: "Отмена",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "Удалить", onPress:()=> console.log(1,2,3), style:"destructive" }
            ]
        );
    }



    return (
        <View style={styles.postContainer}>
            <Text style={styles.date}>{post && new Date(post.createdAt).toLocaleDateString()}</Text>
            <Image source={{uri: post?.imageUrl}} style={styles.img}/>
            <Text>{post?.text}</Text>
            <Button title={'Удалить'} onPress={()=>onRemoveHandler}/>
        </View>
    )
}


const styles = StyleSheet.create({
    postContainer:{
        paddingHorizontal:10,
    },
    date:{
        padding:5,
        textAlign:"center",
    },
    img:{
        height:200,
        marginBottom: 15,

    }


})


// PostScreen.navigationOptions = ({route }:Props) => {
//
//     return {
//         headerTitle: 'Пост' + route.params.createdAt
//     }
// }


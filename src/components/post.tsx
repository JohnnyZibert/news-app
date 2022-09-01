import {View, Text, ImageBackground, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import React from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParam} from "../../App";
import {IPost} from "../screens/MainScreen";

type Props = NativeStackScreenProps<RootStackParam, 'Main' | 'Post'>;


export interface IPostProps {
    post: IPost
    onOpen: (post: IPost)=> void
    navigation?:Props
}

export const Post: React.FC<IPostProps> = ({onOpen,post }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={()=> onOpen(post)}>
            <View style={styles.post}>
                <ImageBackground style={styles.img} source={{uri: post.imageUrl}}>
                    <View style={styles.textWrap}>
                        <Text style={styles.text}>{new Date(post.createdAt).toLocaleString()}</Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    post: {
        marginBottom: 15,
        overflow: 'hidden'
    },
    img: {
        width: '100%',
        height: 200
    },
    textWrap: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        alignItems: "center",
        paddingVertical: 5,
        width: '100%'
    },
    text: {
        color: '#fff',
        fontFamily: 'open-regular'
    }

})
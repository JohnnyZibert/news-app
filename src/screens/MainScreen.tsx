import {View, StyleSheet, FlatList} from "react-native";
import React from "react";
import { NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParam} from "../../App";
import {DATA} from "../data/data";
import { Post} from "../components/post";

export type Props = NativeStackScreenProps<RootStackParam, 'Main' | 'Post'>;

export interface IPost {
    id: number;
    title: string;
    imageUrl: string;
    text: string;
    createdAt: number
    booked:boolean
}

export const MainScreen: React.FC<Props> = ({navigation }) => {

    const onOpenHandler = (post:IPost) => {
        navigation.navigate('Post', {id: post.id, imageUrl:post.imageUrl,title: post.title, booked: post.booked})
    }

    return (
        <View style={styles.mainContainer}>
            <FlatList data={DATA}
                      keyExtractor={(post) => post.id.toString()}
                      renderItem={({item}) => <Post post={item} key={item.id} onOpen={onOpenHandler}/>}/>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 10,
    }
})
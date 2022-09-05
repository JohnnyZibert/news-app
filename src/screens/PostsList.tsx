import {FlatList, StyleSheet, View} from "react-native";
import {Post} from "../components/post";
import React from "react";
import {IPost} from "./BookMarkedScreen";


export interface IPostsList {
    onOpen: (post: IPost) => void
    data:   readonly IPost[] | null | undefined
}

export const PostsList: React.FC<IPostsList>= ({onOpen,data}) => {


    return (
        <View style={styles.mainContainer}>
            <FlatList data={data}
                      keyExtractor={(post) => post.id.toString()}
                      renderItem={({item}) => <Post post={item} key={item.id} onOpen={onOpen}/>}/>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 10,
    }
})
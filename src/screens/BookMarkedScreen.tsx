import React from "react";
import { NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParam} from "../components/navigation/StackNavigator";
import {DATA} from "../data/data";
import { Post} from "../components/post";
import {PostsList} from "./PostsList";

export type Props = NativeStackScreenProps<RootStackParam, 'Booked' | 'Post'>;

export interface IPost {
    id: number;
    title: string;
    imageUrl: string;
    text: string;
    createdAt: number
    booked:boolean
}

export const BookMarkedScreen: React.FC<Props> = ({navigation }) => {

    const onOpenHandler = (post:IPost) => {
        navigation.navigate('Post', {id: post.id, imageUrl:post.imageUrl,title: post.title, booked: post.booked})
    }

const data = DATA.filter((p)=> p.booked)

    return <PostsList onOpen={onOpenHandler} data={data}/>
}

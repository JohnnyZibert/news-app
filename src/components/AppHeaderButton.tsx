import {HeaderButton, HeaderButtonProps} from 'react-navigation-header-buttons'
import {Platform} from "react-native";
import {THEME} from "../constants/Theme";
import {Ionicons} from "@expo/vector-icons";
import React from "react";

interface IAppHeaderButtonProps {
    props?:  React.ReactNode | undefined
    HeaderButtonComponent?: React.ComponentType
    children: React.ReactNode
    title: string;

}

export const AppHeaderButton: React.FC<IAppHeaderButtonProps> = (props) => <HeaderButton
    {...props}
    iconSize={24}
    color={Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR}
    title={'headerButton'}
    IconComponent={Ionicons}
/>


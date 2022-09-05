import {MainScreen} from "../../screens/MainScreen";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderButton} from "../AppHeaderButton";
import {PostScreen} from "../../screens/PostScreen";
import React from "react";
import {Platform} from "react-native";
import {THEME} from "../../constants/Theme";
import {createNativeStackNavigator, NativeStackScreenProps} from "@react-navigation/native-stack";
import {BookMarkedScreen} from "../../screens/BookMarkedScreen";
import {DrawerActions} from "@react-navigation/native";
import {AboutScreen} from "../../screens/AboutScreen";
import {CreateScreen} from "../../screens/CreateScreen";


export type RootStackParam = {
    Main: any;
    Post: {
        id: number
        imageUrl: string;
        title: string
        booked: boolean
    }
    Booked: any
    About: any
    PostTabs: any
    Create: any
};

type Props = NativeStackScreenProps<RootStackParam>;


export const RootStack = createNativeStackNavigator<RootStackParam>();

export const MainStackNavigator = (props: Props) => {
    return (
        <RootStack.Navigator {...props}>
            <RootStack.Screen name="Main" component={MainScreen} options={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : 'white'
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : THEME.MAIN_COLOR,
                headerTitle: 'Мой блог',
                headerRight: (() => <HeaderButtons HeaderButtonComponent={AppHeaderButton}>
                    <Item title={'cameraIcon'} iconName={'camera'} onPress={() => props.navigation.navigate('Create')}/>
                </HeaderButtons>),
                headerLeft: (() => <HeaderButtons HeaderButtonComponent={AppHeaderButton}>
                    <Item title={'burger-menu'} iconName={'ios-menu'}
                          onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}/>
                </HeaderButtons>)
            }}/>

            <RootStack.Screen name="Post"
                              component={PostScreen}
                              options={({route}) => ({
                                  title: `Пост ${route.params.id}`,
                                  headerStyle: {
                                      backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : 'white'
                                  },
                                  headerTintColor: Platform.OS === 'android' ? 'white' : THEME.MAIN_COLOR,
                                  headerRight: (() => <HeaderButtons HeaderButtonComponent={AppHeaderButton}>
                                      <Item title={'star'}
                                            iconName={route.params.booked ? 'star' : 'star-outline'}
                                            onPress={() => console.log('Press camera')}/>
                                  </HeaderButtons>),
                              })}
            />

        </RootStack.Navigator>
    );
}


export const BookedNavigator = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen name="Booked"
                              component={BookMarkedScreen}
                              options={() => ({
                                  title: 'Избранные',
                                  headerStyle: {
                                      backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : 'white'
                                  },
                                  headerTintColor: Platform.OS === 'android' ? 'white' : THEME.MAIN_COLOR,
                              })}
            />
            <RootStack.Screen name="Post"
                              component={PostScreen}
                              options={({route}) => ({
                                  title: `Пост ${route.params.id}`,
                                  headerStyle: {
                                      backgroundColor: 'green'
                                  },
                                  headerRight: (() => <HeaderButtons HeaderButtonComponent={AppHeaderButton}>
                                      <Item title={'star'}
                                            iconName={route.params.booked ? 'star' : 'star-outline'}
                                            onPress={() => console.log('Press camera')}/>
                                  </HeaderButtons>),
                              })}
            />
        </RootStack.Navigator>
    )
}


export const AboutNavigator = (props: Props) => {
    return (
        <RootStack.Navigator {...props} >
            <RootStack.Screen name='About'
                              component={AboutScreen}
                              options={{
                                  headerStyle: {
                                      backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : 'white'
                                  },
                                  headerTitle:'O нас',
                                  headerTintColor: Platform.OS === 'android' ? 'white' : THEME.MAIN_COLOR,
                                  headerLeft: (() => <HeaderButtons HeaderButtonComponent={AppHeaderButton}>
                                      <Item title={'burger-menu'} iconName={'ios-menu'}
                                            color={THEME.MAIN_COLOR}
                                            onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}/>
                                  </HeaderButtons>)
                              }}/>
        </RootStack.Navigator>)
}

export const CreateNavigator = (props: Props) => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen name='Create'
                              component={CreateScreen}
                              options={{
                                  headerStyle: {
                                      backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : 'white'
                                  },
                                  headerTitle:'Создать новую запись',
                                  headerTintColor: Platform.OS === 'android' ? 'white' : THEME.MAIN_COLOR,
                                  headerLeft: (() => <HeaderButtons HeaderButtonComponent={AppHeaderButton}>
                                      <Item title={'burger-menu'} iconName={'ios-menu'}
                                            color={THEME.MAIN_COLOR}
                                            onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}/>
                                  </HeaderButtons>)
                              }}/>
        </RootStack.Navigator>
    )

}


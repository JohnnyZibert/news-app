import React, {useCallback, useEffect, useState} from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {MainScreen} from "./src/screens/MainScreen";
import {PostScreen} from "./src/screens/PostScreen";
import AppLoading from 'expo-app-loading';
import {bootstrap} from "./src/bootstrap";
import {THEME} from "./src/constants/Theme";
import createStackNavigator from "react-native-screens/createNativeStackNavigator";
import {AppHeaderButton} from "./src/components/AppHeaderButton";
import {HeaderButtonProps, HeaderButtons, Item} from 'react-navigation-header-buttons'

// SplashScreen.preventAutoHideAsync();

export type RootStackParam = {
    Main: any;
    Post: {
        id: number
        imageUrl: string;
        title: string
        booked: boolean
    }

};

const RootStack = createNativeStackNavigator<RootStackParam>();

const App: React.FC = () => {
    const [appIsReady, setAppIsReady] = useState(false);

    if (!appIsReady) {
        return <AppLoading
            startAsync={bootstrap}
            onFinish={() => setAppIsReady(true)}
            onError={error => console.log(error)}/>
    }

    // useEffect(() => {
    //     async function prepare() {
    //         try {
    //             await Font.loadAsync({
    //                 'open-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    //                 'open-regular': require('./assets/fonts/OpenSans-Regular.ttf')
    //             });
    //             await new Promise(resolve => setTimeout(resolve, 2000));
    //         } catch (e) {
    //             console.warn(e);
    //         } finally {
    //             setAppIsReady(true);
    //         }
    //     }
    //
    //     prepare();
    // }, []);

    // const onLayoutRootView = useCallback(async () => {
    //     if (appIsReady) {
    //         await SplashScreen.hideAsync();
    //     }
    // }, [appIsReady]);
    //
    // if (!appIsReady) {
    //     return null;
    // }


    return (
        <NavigationContainer>
            <RootStack.Navigator
                initialRouteName={'Main'}
                screenOptions={{
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : 'white'
                    },
                    headerTintColor: Platform.OS === 'android' ? 'white' : THEME.MAIN_COLOR
                }}>
                <RootStack.Screen name="Main" component={MainScreen} options={{
                    headerTitle: 'My blog',
                    headerRight: (() => <HeaderButtons HeaderButtonComponent={AppHeaderButton}>
                        <Item title={'cameraIcon'} iconName={'camera'} onPress={() => console.log('Press camera')}/>
                    </HeaderButtons>),
                    headerLeft: (() => <HeaderButtons HeaderButtonComponent={AppHeaderButton}>
                        <Item title={'burger-menu'} iconName={'ios-menu'} onPress={() => console.log('Press menu')}/>
                    </HeaderButtons>)
                }}/>
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
        </NavigationContainer>
    );
}

export default App

import React, {useCallback, useEffect, useState} from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import {bootstrap} from "./src/bootstrap";
import { MainNavigator} from "./src/components/navigation/DrawerNavigator";

// SplashScreen.preventAutoHideAsync();


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
        <NavigationContainer >
            <MainNavigator/>
        </NavigationContainer>
    );
}

export default App

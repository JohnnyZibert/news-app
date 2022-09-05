import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigator from "./TabNavigator";
import {AboutNavigator, CreateNavigator, RootStackParam} from "./StackNavigator";
import {THEME} from "../../constants/Theme";


const DrawerNavigator = createDrawerNavigator<RootStackParam>()

export const MainNavigator = () => {
    return (
        <DrawerNavigator.Navigator screenOptions={{
            headerShown: false,
            drawerLabelStyle: {
                fontFamily: 'open-bold'
            },
            drawerActiveTintColor: THEME.MAIN_COLOR
        }}>
            <DrawerNavigator.Screen name={'PostTabs'}
                                    component={BottomTabNavigator}
                                    options={{drawerLabel: 'Главная'}}/>
            <DrawerNavigator.Screen name={'About'}
                                    component={AboutNavigator}
                                    options={{drawerLabel: 'О нас'}}/>
            <DrawerNavigator.Screen name={'Create'}
                                    component={CreateNavigator}
                                    options={{drawerLabel: 'Создать пост'}}/>
        </DrawerNavigator.Navigator>
    )
}
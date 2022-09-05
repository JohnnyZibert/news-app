import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {
    BookedNavigator,
    MainStackNavigator,
    RootStackParam
} from "./StackNavigator";
import {THEME} from "../../constants/Theme";
import {Ionicons} from "@expo/vector-icons";


const Tab = createBottomTabNavigator<RootStackParam>();

interface IProps {
    focused:boolean
    color:string
}


const BottomTabNavigator: () => JSX.Element= () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle:{
                backgroundColor: THEME.MAIN_COLOR
            },
        }}>
            <Tab.Screen name={'Main'} component={MainStackNavigator}
                        options={{
                            tabBarLabel: 'Всё',
                            tabBarIcon: (({focused, color}:IProps) =>
                                <Ionicons name={'albums'}
                                          size={25}
                                          color={focused ? '#fff' : color}
                                />)
                        }}/>
            <Tab.Screen name={'Booked'} component={BookedNavigator}
                        options={{
                            tabBarLabel: 'Избранное',
                            tabBarIcon: (({focused, color}:IProps) =>
                                <Ionicons name={'star'}
                                          size={25}
                                          color={focused ? '#fff'  : color}
                                />)
                        }}/>
        </Tab.Navigator>
    );

};
export default BottomTabNavigator;

// const Tab = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator();

// const getNavigationOptions = () => {
//     if (Platform.OS === 'android') {
//         //Props for the ios navigator
//         return {
//
//
//              tabBarStyle:{
//                 backgroundColor: "#fff"
//             },
//             shifting: true,
//             tabBarIcon: (({focused, color}:any) =>
//                 <Ionicons name={'albums'}
//                           size={25}
//                           color={focused ? '#fff' : color}
//                 />)
//         };
//     }
//     //Props for any other OS navigator
//     return {
//         tabBarStyle:{
//             backgroundColor: '#fff',
//         },
//         tabBarIcon: (({focused, color}: IProps) =>
//             <Ionicons name={'albums'}
//                       size={25}
//                       color={focused ? THEME.MAIN_COLOR : color}
//             />),
//
//     };
// };





// const forAndroid = (Platform.OS === 'ios' ?
//      : (<Tab.Navigator screenOptions={{
//             headerShown: false,
//             tabBarStyle: {
//                 backgroundColor:THEME.MAIN_COLOR,
//             }
//         }}>
//             <Tab.Screen name={'Main'} component={MainStackNavigator}
//                         options={{
//                             tabBarLabel: 'Всё',
//                             tabBarIcon: (({focused, color}) =>
//                                 <Ionicons name={'albums'}
//                                           size={25}
//                                           color={focused ? "#fff" : color}
//                                 />)
//                         }}/>
//             <Tab.Screen name={'Booked'} component={BookedNavigator}
//                         options={{
//                             tabBarLabel: 'Избранное',
//                             tabBarIcon: (({focused, color}) =>
//                                 <Ionicons name={'star'}
//                                           size={25}
//                                           color={focused ? '#fff' : color}
//                                 />)
//                         }}/>
//         </Tab.Navigator>)
// )

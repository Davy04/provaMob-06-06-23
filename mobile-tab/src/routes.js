import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Info from './pages/Info';

import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: true,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: '#171626',
                    borderTopWidth: 0,

                    bottom: 3,
                    left: 14,
                    right: 14,
                    elevation: 0,
                    borderRadius: 8,
                    height: 60,
                }
            }}
        >

            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size,focused}) => {
                        if (focused) {
                            return <Ionicons name="home" size={size} color={color}/>
                        }
                        return <Ionicons name='home-outline' size={size} color={color}/>
                    }
                }}
            />

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size,focused}) => {
                        if (focused) {
                            return <Ionicons name="person" size={size} color={color}/>
                        }
                        return <Ionicons name='person-outline' size={size} color={color}/>
                    }
                }}
            />

            <Tab.Screen
                name="Info"
                component={Info}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size,focused}) => {
                        if (focused) {
                            return <Ionicons name="settings" size={size} color={color}/>
                        }
                        return <Ionicons name='settings-outline' size={size} color={color}/>
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default Routes;
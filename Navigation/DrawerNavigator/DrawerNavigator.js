// External imports
import { 
    createDrawerNavigator, 
    DrawerContentScrollView, 
    DrawerItem 
} from "@react-navigation/drawer";
import { Text } from "react-native";
import { auth } from "../../Firebase/Config";
import { signOut } from "firebase/auth";

// Screen imports

import MessageEditorPage from "../../screens/MessageEditorPage";
import ContactsEditor from "../../screens/ContactsEditorPage";
import ChooseActivityPage from "../../screens/ChooseActivityPage";
import ContactListPage from "../../screens/ListEditing/ContactListPage";
import SendMessage from "../../screens/SendMessage/SendMessage";
import styles from "./DrawerNavigator.styles";
import HomeScreen from "../../screens/HomeScreen";


// Initialize drawer navigator
const Drawer = createDrawerNavigator();

// Screen configuration
const DRAWER_SCREENS = [
    
    {
        key: "HomeScreen",
        component: HomeScreen,

    },
    {
        key: "MessageEditor",
        component: MessageEditorPage,
    },
    {
        key: "ContactsEditor",      
        component: ContactsEditor,
    },
    {
        key: "ChooseActivity",
        component: ChooseActivityPage,
    },
    {
        key: "ContactList",
        component: ContactListPage,
    },
    {
        key: "SendMessage",
        component: SendMessage,
    },

    
];

/**
 * DrawerNavigator Component
 */
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator backBehavior="history"
            initialRouteName="HomeScreen"
            screenOptions={{
                drawerPosition: "right",
                headerShown: false,
                drawerStyle: {
                    backgroundColor: 'white',
                    width: "65%",
                },
            }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            {DRAWER_SCREENS.map((screen) => (
                <Drawer.Screen 
                    key={screen.key} 
                    name={screen.key} 
                    component={screen.component} 
                />
            ))}
        </Drawer.Navigator>
    );
};

/**
 * CustomDrawerContent Component
 * @param {Object} props - Navigation props from drawer
 */
const CustomDrawerContent = (props) => {
    const { routes, index } = props.state;
    const focused = routes[index];

    const handleLogout = async () => {
        try {
            await signOut(auth);
            props.navigation.navigate('HomeScreen');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <DrawerContentScrollView {...props}>
            <Text style={styles.appName}>QuickPing</Text>
            {DRAWER_SCREENS.map((screen) => (
                <DrawerItem
                    key={screen.key}
                    label={screen.key}
                    onPress={() => props.navigation.navigate(screen.key)}
                    focused={focused.name === screen.key}
                    activeBackgroundColor="#66a2fe"
                    activeTintColor="#FFFFF"
                />
            ))}
            
            {/* Add Logout Button */}
            <DrawerItem
                label="Logout"
                onPress={handleLogout}
                activeBackgroundColor="#d26570"
                focused
                activeTintColor="#FFFFF"
                style={{ marginTop: 20 }}
            />
        </DrawerContentScrollView>
    );
};

export default DrawerNavigator;
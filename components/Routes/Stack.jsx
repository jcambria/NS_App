import { createStackNavigator } from "@react-navigation/stack";
import {createAppContainter} from 'react-navigation';
import Welcome from "../home/welcome/Welcome";

const screens = {
    Welcome: {
        screen: <Welcome />
    },
    PillCounter: {
        screen: <PillCounter />
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainter(HomeStack);

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import MyPocket from '../components/MyPocket';
import History from '../components/History';
import string from '../localizationStrings'

const TabNavigator = createBottomTabNavigator({
    [string.navigation.MyPocket]: { screen: MyPocket },
    [string.navigation.History]: { screen: History },
});

export default createAppContainer(TabNavigator);
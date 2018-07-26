import { StackNavigator, TabNavigator } from 'react-navigation'
import HomePage from '../pages/HomePage'
import Page1 from '../pages/Page1'
import Page2 from '../pages/Page2'
import Page3 from '../pages/Page3'
import { React } from 'react'
import { Button, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

// class TabBarComponent extends React.Component{
//   constructor(props){
//     super(props);
//     this.time ={
//       tintColor: props.activeTintColor,
//       updateTime: new Date().getTime(),
//     };
//   }
//   render(){
//     const {routes,index} = this.props.navigationState;
//     const {theme} =routes[index].params;
//     if(theme && theme.updateTime>this.theme.updateTime){
//       this.theme=theme;
//     }
//     return<TabBarBottom
//       {...this.props}
//       activeTintColor={this.theme.tintColor||this.props.activeTintColor}
//     />
//   }
// }

export const AppTabNavigator = TabNavigator({
  Page1: {
    screen: Page1,
    navigationOptions: {
      tabBarLabel: 'Page1',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    }
  },
  Page2: {
    screen: Page2,
    navigationOptions: {
      tabBarLabel: 'Page1',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-people' : 'ios-people-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    }
  },
  Page3: {
    screen: Page3,
    navigationOptions: {
      tabBarLabel: 'Page1',
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-chatboxes' : 'ios-chatboxes-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    }
  },
},
{
  tabBarPosition: 'bottom', // 设置tabbar的位置，iOS默认在底部，安卓默认在顶部。
});

export const AppStackNavigator = StackNavigator({
  HomePage: {
    screen: HomePage
  },
  Page1: {
    screen: Page1,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}页面名`
    })
  },
  Page2: {
    screen: Page2,
    navigationOptions: {
      title: "pages3"
    }
  },
  Page3: {
    screen: Page3,
    navigationOptions: (props) => {
      const { navigation } = props;
      const { state, setParams } = navigation;
      const params = state;
      console.warn('----->',params);
      return {
        title: params.title ? params.title : 'This is Page3',
        // headerRight不行吗 神奇
        // headerRight: ( 
        //   <Text>ddd</Text>
        // ),
    
      }
    }
  },
  TabNav:{
    screen: AppTabNavigator,
    navigationOptions:{
      title:'This is TabNavigator'
    }
  },
}
)

import { StackNavigator } from 'react-navigation'
import HomePage from '../pages/HomePage'
import Page1 from '../pages/Page1'
import Page2 from '../pages/Page2'
import Page3 from '../pages/Page3'
import {React} from 'react'
import { Button,Text } from 'react-native'

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
      return {
        title: params.title ? params.title : 'This is Page3',
        // headerRight: (  headerRight不行吗 神奇
        //   // <Button
        //   //   title={params.mode === 'edit' ? '保存' : '编辑'}
        //   //   onPress={() => {
        //   //     setParams({ mode: params.mode === 'edit' ? "" : "edit" })
        //   //   }}
        //   // />
        //   <Text>aaa</Text>
        // )
      }
    }
  },
},
)

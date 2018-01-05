import { StatusBar } from "react-native";
import { StackNavigator } from "react-navigation";

import Pin from "../screens/Pin";
import UploadPage from "../screens/UploadPage";

const PinStack = StackNavigator({
  Pin: {
    screen: Pin,
    navigationOptions: {
      header: () => null,
      headerTitle: "Home"
    }
  },
  UploadPage: {
    screen: UploadPage,
    navigationOptions: {}
  }
});

export default StackNavigator(
  {
    Pin: {
      screen: PinStack
    }
  },

  {
    mode: "modal",
    headerMode: "none"
    //cardStyle: { paddingTop: StatusBar.currentHeight }
  }
);

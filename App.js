import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import store from "./src/redux";
import AppContainer from "./src/routes";
import { TouchableWithoutFeedback, Keyboard, SafeAreaView } from "react-native";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <AppContainer />
    </Provider>
  );
}

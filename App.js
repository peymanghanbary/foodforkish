import "react-native-gesture-handler";
import { I18nManager, LogBox } from "react-native";
import { Provider } from "react-redux";

import { Store } from "./src/redux/store";
import Load from "./src/screens/load";

export default function App() {
  I18nManager.forceRTL(false);
  I18nManager.allowRTL(false);
  LogBox.ignoreAllLogs();
  return (
    <Provider store={Store}>
      <Load />
    </Provider>
  );
}

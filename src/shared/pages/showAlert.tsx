import { Alert } from 'react-native';

export function ShowAlert(message) {
  return (
        Alert.alert(
          "",
          message,
          [
            {
              text: "Ok",
              onPress: () => console.log("cancel"),
              style: "cancel",
            },
          ],
          {
            cancelable: false,
          }
        )
  );
}

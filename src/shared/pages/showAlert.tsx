import { Alert } from 'react-native';

export function ShowAlert() {
  return (
        Alert.alert(
          "",
          "O produto não foi encontrado",
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

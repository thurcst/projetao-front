import { StyleSheet, View } from 'react-native';
import React from 'react';
import { AppRoutes } from './src/shared/routes';
import { StatusBar } from 'expo-status-bar';
import { Modal } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='dark'/>
      <AppRoutes/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

// import * as React from "react";
// import { StyleSheet, Text, View } from "react-native";
// import { Button } from "./src/shared/components/Button/Button";
// import { Modal } from "./src/shared/components/Modal/Modal";

// export default function TabOneScreen() {

//   const [isModalVisible, setIsModalVisible] = React.useState(false);

//   const handleModal = () => setIsModalVisible(() => !isModalVisible);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Tab One</Text>
//       <View style={styles.separator} />
//       <Button title="button" onPress={handleModal} />
//       <Modal isVisible={isModalVisible}>
//         <Modal.Container>
//           <Modal.Header title="LogRocket"/>
//           <Modal.Body>
//             <Text style={styles.text}>Agree</Text>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button title="I agree" onPress={handleModal}/>
//           </Modal.Footer>
//         </Modal.Container>
//       </Modal>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   text: {
//     fontSize: 16,
//     fontWeight: "400",
//     textAlign: "center",
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: "80%",
//   },
// });

// import React, { useEffect } from "react";
// import { StyleSheet, Text, TextInput, View } from "react-native";
// import { Button } from "./Button";
// import { Modal } from "./Modal";

// export default function TabTwoScreen() {
//   const [isModalVisible, setIsModalVisible] = React.useState(false);

//   useEffect(() => {
//     const checkForSubscription = setTimeout(() => {
//       setIsModalVisible(() => !isModalVisible);
//     }, 1500);
//     return () => clearTimeout(checkForSubscription);
//   }, []);

//   const handleSignUp = () => {
//     // sign up the user and close the modal
//     setIsModalVisible(() => !isModalVisible);
//   };

//   const handleDecline = () => setIsModalVisible(() => !isModalVisible);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Premium stuff here</Text>
//       <View style={styles.separator} />
//       <Modal isVisible={isModalVisible}>
//         <Modal.Container>
//           <View style={styles.modal}>
//             <Modal.Header title="You're just one step away!" />
//             <Modal.Body>
//               <Text style={styles.text}>
//                 Want access? We just need your email address
//               </Text>
//               <TextInput
//                 style={styles.input}
//                 placeholder="email"
//                 keyboardType="email-address"
//               />
//             </Modal.Body>
//             <Modal.Footer>
//               <View style={styles.button}>
//                 <Button title="No thanks" onPress={handleDecline} />
//                 <Button title="Sign me up!" onPress={handleSignUp} />
//               </View>
//             </Modal.Footer>
//           </View>
//         </Modal.Container>
//       </Modal>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   text: {
//     fontSize: 16,
//     fontWeight: "400",
//     textAlign: "center",
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: "80%",
//   },
//   input: {
//     paddingTop: 10,
//     borderColor: "grey",
//     borderBottomWidth: 2,
//   },
//   button: {
//     flexDirection: "row",
//     flex: 1,
//     justifyContent: "center",
//   },
//   modal: {
//     width: "100%",
//     height: "90%",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
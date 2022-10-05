import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import RNModal from "react-native-modal";
import { scale, verticalScale } from "../../styles/scaling_units";
type ModalProps = {
  isVisible: boolean;
  children: React.ReactNode;
  [x: string]: any;
};
export const Modal = ({
  isVisible = false,
  children,
  ...props
}: ModalProps) => {
  return (
    <RNModal
      isVisible={isVisible}
      animationInTiming={1000}
      animationOutTiming={1000}
      backdropTransitionInTiming={800}
      backdropTransitionOutTiming={800}
      {...props}>
      {children}
    </RNModal>
  );
};

const ModalContainer = ({ children }: { children: React.ReactNode }) => (
  <View style={styles.container}>{children}</View>
);

const ModalHeader = ({ title }: { title: string }) => (
  <View style={styles.header}>
    <Text style={styles.text}>{title}</Text>
  </View>
);

const ModalBody = ({ children }: { children?: React.ReactNode }) => (
  <View style={styles.body}>{children}</View>
);

const ModalFooter = ({ children }: { children?: React.ReactNode }) => (
  <View style={styles.footer}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DADADA",
    borderRadius: 15,
  },
  header: {
    alignItems: "flex-start",
    justifyContent: "center",
    paddingStart: scale(15),
    paddingTop: scale(5)
  },
  text: {
    paddingTop: verticalScale(10),
    textAlign: "center",
    fontSize: scale(24),
    fontWeight: 'bold'
  },
  body: {
    justifyContent: "center",
    paddingHorizontal: scale(15),
    minHeight: verticalScale(100),
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    padding: scale(10),
    flexDirection: "row",
  },
});

Modal.Header = ModalHeader;
Modal.Container = ModalContainer;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
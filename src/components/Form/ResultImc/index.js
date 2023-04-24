import React from "react";
import { Text, View } from "react-native";
import styles from "./style"
 
export default function ResultImc(props) {
  return (
    <View style={styles.contextImc}>
   <Text style={styles.titleResultImc}>
     {props.messageResultIMc}
   </Text>
   <Text style={styles.resultImc}>
     {props.resultImc}
   </Text>
 </View>
  );
}
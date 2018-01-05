import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Alert,
  KeyboardAvoidingView
} from "react-native";
import PropTypes from "prop-types";
import { NormalButton } from "../components/Button";
import CodeInput from "../../_import/ConfirmationCodeInput";

class Pin extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  state = { code: "" };
  _alert = message =>
    Alert.alert("Confirmation Code", message, [{ text: "OK" }], {
      cancelable: false
    });

  onFulfill3 = code => {
    const isValid = code === "12345";
    if (isValid) {
      this.setState({ code });
      console.log("the code entered was correct2!");
      this.props.navigation.navigate("UploadPage");
    }
    this._alert(isValid ? "Successful!" : "Code mismatch!");
  };
  navigateToVideo = () => {
    console.log("buttonPress");
    this.props.navigation.navigate("UploadPage");
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.container}>
          <View style={styles.container2} />
          <View style={[styles.inputWrapper, { backgroundColor: "#2F0B3A" }]}>
            <Text
              style={[
                styles.inputLabel,
                { color: "#fff", textAlign: "center" }
              ]}
            >
              Enter Pin Code given on employeers page. If no pin code was given,
              please visit "DeepHire.io/employeers if you do not have a code"
            </Text>
            <CodeInput
              ref="codeInputRef3"
              codeLength={5}
              borderType="circle"
              autoFocus={false}
              codeInputStyle={{ fontWeight: "800" }}
              onFulfill={this.onFulfill3}
            />
            <NormalButton onPress={this.navigateToVideo} text="Runescape" />
          </View>
        </View>
      </KeyboardAvoidingView>
    );

    // <View style={styles.container}>
    //   <View style={styles.container2} />
    //   <View style={styles.container3} />
    // </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6CE"
  },
  container2: {
    flex: 1,
    backgroundColor: "#F536CE"
  },
  container3: {
    flex: 1,
    backgroundColor: "#51CE"
  },
  topView: {
    flex: 1
  },
  titleWrapper: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row"
  },
  title: {
    color: "red",
    fontSize: 16,
    fontWeight: "800",
    paddingVertical: 30
  },
  wrapper: {
    marginTop: 30
  },
  inputWrapper: {
    flex: 2,
    paddingVertical: 50,
    paddingHorizontal: 20
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "800"
  }
});

export default Pin;

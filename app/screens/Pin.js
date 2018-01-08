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

import {
  loadCompany,
  getCompanyData,
  saveCompanyIndex
} from "../actions/companies";
import { connect } from "react-redux";

class Pin extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    companyData: PropTypes.object
  };
  componentWillMount() {
    this.props.dispatch(getCompanyData());
  }
  state = { code: "" };
  _alert = message =>
    Alert.alert("Confirmation Code", message, [{ text: "OK" }], {
      cancelable: false
    });

  onFulfill3 = code => {
    let data = this.props.companyData;
    console.log(data, "ONE");

    console.log(data.data.length);
    for (i = 0; i < data.data.length; i++) {
      if (code == data.data[i].pin) {
        console.log("CODE EXISTS FOR", data.data[i].website);
        this.props.dispatch(saveCompanyIndex(i));
        this.props.navigation.navigate("UploadPage");
        break;
      } else {
        console.log("code does not exist");
      }
    }

    // const isValid = code === "12345";
    // if (isValid) {
    //   this.setState({ code });
    //   console.log("the code entered was correct2!");
    //   this.props.navigation.navigate("UploadPage");
    // }
    // this._alert(isValid ? "Successful!" : "Code mismatch!");
  };
  navigateToVideo = () => {
    console.log("buttonPress");
    this.props.navigation.navigate("UploadPage");
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Enter your Company Pin</Text>

          <CodeInput
            ref="codeInputRef3"
            codeLength={5}
            borderType="circle"
            autoFocus={true}
            codeInputStyle={{ fontWeight: "800" }}
            onFulfill={this.onFulfill3}
          />
          <Text style={styles.info}>
            Yo! WECLOME TO THE DEEP HIRE. Register here :gmail.com.
          </Text>
          <NormalButton onPress={this.navigateToVideo} text="Runescape" />
        </View>
        <View style={styles.bottomView} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6CE"
  },
  inputWrapper: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: "#217bf6"
  },
  inputLabel: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff"
  },
  info: {
    fontSize: 9,
    paddingTop: 20,

    fontWeight: "200",

    color: "#fff"
  },
  bottomView: {
    flex: 0,

    backgroundColor: "#c17bf6"
  }
});

const mapStateToProps = state => {
  let companyData = state.companies.myCompanies.data;
  return { companyData };
};
export default connect(mapStateToProps)(Pin);

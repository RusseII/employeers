import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar, ScrollView } from "react-native";
import PropTypes from "prop-types";
import EStyleSheet from "react-native-extended-stylesheet";

import { NormalButton } from "../components/Button";
import { createStore } from "redux";
import todoApp from "../reducers";
import { connect } from "react-redux";
import { loadCompany, getCompanyData } from "../actions/companies";

// let store = createStore(todoApp);
// console.log(store.getState());
// //store.dispatch({ type: "LOAD_COMPANY", text: "hi" });
// console.log(store.getState());
// import { Navigate } from "../components/config/routes";

class UploadPage extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    mytext: PropTypes.string,
    companyData: PropTypes.object,
    companyIndex: PropTypes.number
  };
  componentWillMount() {
    this.props.dispatch(getCompanyData());
  }

  navigateToVideo = () => {
    console.log("clicked");
    // if (this.props.mytext == "test") {
    //   this.props.dispatch(loadCompany("USD"));
    // }

    // if (this.props.mytext == "USD") {
    //   this.props.dispatch(loadCompany("test"));
    // }
    this.props.dispatch(getCompanyData());
    this.props.dispatch(loadCompany("setText"));
    // this.props.dispatch(loadCompany("USD"));

    console.log(this.props.companyData, "COMPData");
  };

  render() {
    return (
      <View style={styles.background}>
        <StatusBar hidden={false} barStyle="light-content" />
        <NormalButton
          onPress={this.navigateToVideo}
          text={this.props.companyData.data[this.props.companyIndex].website}
        />
        <Text style={styles.text}>
          Welcome to{" "}
          {this.props.companyData.data[this.props.companyIndex].website} profile
          page!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#217bf6"
  }
});

const mapStateToProps = state => {
  const mytext = state.companies.myCompanies.text;
  let companyData = state.companies.myCompanies.data;
  const companyIndex = state.companies.myCompanies.companyIndex;

  console.log(companyIndex, "THIS IS THE ONLY IMPORTANT ONE.");

  return {
    mytext,
    companyData,
    companyIndex
  };
};

export default connect(mapStateToProps)(UploadPage);

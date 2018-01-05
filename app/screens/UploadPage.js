import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar, ScrollView } from "react-native";
import PropTypes from "prop-types";
import EStyleSheet from "react-native-extended-stylesheet";

import { NormalButton } from "../components/Button";
import { createStore } from "redux";
import todoApp from "../reducers";
import { connect } from "react-redux";
import { loadCompany } from "../actions/companies";

// let store = createStore(todoApp);
// console.log(store.getState());
// //store.dispatch({ type: "LOAD_COMPANY", text: "hi" });
// console.log(store.getState());
// import { Navigate } from "../components/config/routes";

class UploadPage extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    mytext: PropTypes.string
  };

  navigateToVideo = () => {
    console.log("clicked");
    if (this.props.mytext == "test") {
      this.props.dispatch(loadCompany("hi"));
    }

    if (this.props.mytext == "hi") {
      this.props.dispatch(loadCompany("test"));
    }
  };

  render() {
    return (
      <View styles={styles.text}>
        <NormalButton onPress={this.navigateToVideo} text={this.props.mytext} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  test: {
    flex: 1,
    alignItems: "center",
    height: 200,
    justifyContent: "center",
    backgroundColor: "#b34325"
  }
});

const mapStateToProps = state => {
  const mytext = state.companies.companies.text;
  //console.log(mytext, "here");

  return {
    mytext
  };
};

export default connect(mapStateToProps)(UploadPage);

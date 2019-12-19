import React from "react";
import { getActiveEl } from "../Constants";
import { connect } from "react-redux";

const Settings = ({ layout }) => {
  return <div className="settings">{getActiveEl(layout).ElSettings}</div>;
};

const mapStateToProps = state => {
  return {
    layout: state.layout
  };
};

export default connect(mapStateToProps)(Settings);

import React, { Component } from 'react';
import { WebView, View, StyleSheet, Platform } from 'react-native';
import renderChart from './renderChart';
import { html } from './tpl'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.setNewOption = this.setNewOption.bind(this);
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.option !== this.props.option) {
      this.refs.chart.reload();
    }
  }

  setNewOption(option) {
    this.refs.chart.postMessage(JSON.stringify(option));
  }

  render() {
    let source;
    if (Platform.OS == 'ios') {
      source = require('./tpl.html');
    } else {
      source = {
        html: html(this.props.echartUrl)
      };
    }
    return (
      <View style={{ flex: 1, height: this.props.height || 400, }}>
        <WebView
          ref="chart"
          scrollEnabled={false}
          javaScriptEnabled
          injectedJavaScript={renderChart(this.props)}
          style={{
            height: this.props.height || 400,
            backgroundColor: this.props.backgroundColor || 'transparent'
          }}
          scalesPageToFit={Platform.OS !== 'ios'}
          source={source}
          onMessage={event => this.props.onPress ? this.props.onPress(JSON.parse(event.nativeEvent.data)) : null}
        />
      </View>
    );
  }
}

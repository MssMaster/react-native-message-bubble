/**
 * react-native-message-bubble
 * https://github.com/pop-xiaodong/react-native-message-bubble
 */

'use strict';

var React = require('react');
var {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Dimensions,
} = require('react-native');
import { Avatar } from "react-native-elements";
var window = Dimensions.get('window');
var createReactClass = require("create-react-class");
var BubbleText = createReactClass({

  getInitialState() {
    return {
      viewHight: null,
      viewWidth: window.width/3*2,
      opacity: 0,
    }
  },

  render() {
    var {viewHight, viewWidth, opacity} = this.state;
    var {messageType, messages} = this.props;
    if (messageType) {
      return (
        <View style={styles.rowRight}>
          <ImageBackground
            capInsets={{top: 30, left: 13, bottom: 18, right: 13}}
            resizeMode='stretch'
            source={require('./img/message_bubble_right.png')}
            onLayout={(e) => {
              this.rightText.measure((a, b, width, height, px, py) =>{
                if (width != viewWidth || height != viewHight) {
                  this.setState({
                    viewHight: height,
                    viewWidth: width,
                    opacity: 1,
                  });
                }
              });
            }}
            style={{justifyContent: 'center', width: viewWidth, height: viewHight, opacity: opacity}}
            >
              <Text
                ref={v => this.rightText = v}
                numberOfLines={0}
                style={styles.messagesRight}>{messages}</Text>
            </ImageBackground>
            <Avatar
                  medium
                  rounded
                  style={[styles.userImage, {marginRight: 10, marginLeft: 5}]}
                  source={this.props.userImage == '' || this.props.userImage == 'https://web7.staging02.com/spotter/'  ?  require('../../../assets/user_image.png') :{uri: this.props.userImage}}
                  onPress={() => console.log("Works!")}
                  activeOpacity={0.7}
                />
        </View>
      )
    } else {
      return (
        <View style={styles.rowLeft}>
          <Avatar
                  medium
                  rounded
                  style={[styles.userImage, {marginRight: 10, marginLeft: 5}]}
                  source={this.props.userImage == '' || this.props.userImage == 'https://web7.staging02.com/spotter/' ?  require('../../../assets/user_image.png') :{uri: this.props.userImage}}
                  onPress={() => console.log("Works!")}
                  activeOpacity={0.7}
                />
          <ImageBackground
            capInsets={{top: 30, left: 13, bottom: 18, right: 13}}
            resizeMode='stretch'
            source={require('./img/message_bubble_left.png')}
            onLayout={(e) => {
              this.LeftText.measure((a, b, width, height, px, py) =>{
                this.setState({
                  viewHight: height,
                  viewWidth: width,
                  opacity: 1,
                });
              });
            }}
            style={{justifyContent: 'center', width: viewWidth, height: viewHight, opacity: opacity}}
            >
              <Text
                ref={v => this.LeftText = v}
                numberOfLines={0}
                style={styles.messagesLeft}>{messages}</Text>
            </ImageBackground>
        </View>
      )
    }
  }
});

var styles = StyleSheet.create({
  rowRight: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'flex-end',
  },
  rowLeft: {
    flexDirection: 'row',
    marginTop: 10
  },
  messagesRight: {
    alignSelf: 'flex-end',
    fontSize: 16,
    paddingLeft: 35,
    paddingRight: 35,
    color:'white',
    paddingBottom: 20,
    paddingTop: 12,
    backgroundColor: 'transparent',
  },
  messagesLeft: {
    alignSelf: 'flex-start',
    fontSize: 16,
    paddingLeft: 35,
    paddingRight: 35,
    paddingBottom: 20,
    paddingTop: 12,
    backgroundColor: 'transparent',
  },
  userImage: {
    marginTop: 2,
    height: 45,
    width: 45,
  },
});

module.exports = BubbleText;

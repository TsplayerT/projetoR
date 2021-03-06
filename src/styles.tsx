import { StyleSheet } from 'react-native';

export const ColorLightGray = 'rgb(120, 120, 120)';
export const ColorMediumGray = 'rgb(80, 80, 80)';
export const ColorDarkGray = 'rgb(40, 40, 40)';
export const Styles = StyleSheet.create({
  text: {
    color: 'black',
    fontWeight: '400',
    fontSize: 20,
    letterSpacing: 2
  },
  header: {
    backgroundColor: ColorDarkGray
  },
  screen: {
    flex: 1,
    backgroundColor: ColorLightGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: 'gray',
    borderWidth: 0,
    outline: 0,
    // outline: 0,
    // width: 250,
    // borderRadius: 5,
    // borderColor: "#FFF",
    backgroundColor: '#FFF',
    // paddingLeft: 10,
    // paddingTop: 5,
    // paddingBottom: 5,
    // marginTop: 10,
    // marginBottom: 10,
  }
});

import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    container: {
          flex: 1,
          marginTop: 30,
          margin: 10,
  },
  header: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: '700',
    color: '#423F41',
    margin: 15
  },
  text: {
    fontSize: 20,
    fontWeight: '400',
    margin: 5,
    marginTop: 10
  },
  input: {
    backgroundColor: '#E5E2E4',
    borderRadius: 5,
    margin: 5,
    height: 50
  },
  uploadView: {
    flexDirection: 'row',
    backgroundColor: '#E5E2E4',
    alignItems: 'flex-start',
    borderRadius: 5,
    margin: 5,
    padding: 5,
    height: 100,
  },
  layoutView: {
    backgroundColor: '#E5E2E4',
    height: 150,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 5
  },
  View: {
    backgroundColor: '#A7ABA7',
    borderRadius: 8,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 200,
    margin: 5,
    width: 180,
    paddingBottom: 12
  },
  skillView: {
    justifyContent: 'space-between',
    width: 170,
    height: 220,
    backgroundColor: '#E5E2E4',
    margin: 5,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10
  },
  options: {
    backgroundColor: '#E5E2E4',
    margin: 5,
    padding: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#A7ABA7'
  },
  radio: {
    flexDirection: 'row',
    backgroundColor: '#E5E2E4',
    borderRadius: 10,
    padding: 10,
    margin: 5,
  }
})
import React from 'react'
import { useSelector } from 'react-redux'
import { StyleSheet, Text, SafeAreaView, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

export default function Home() {
  const selector = useSelector(state => state);
  const user = selector.login.user
  console.log(user)

  async function handleSubmit() {
    try {
      dispatch(LoginActions.addUserAction(USER));
      dispatch(LoginActions.addAuthenticated({ authenticated: false }));
    } catch (error) {
      setIsStatus('error')
    }
  }
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.userhome}>#{user.login}</Text>
        <TouchableOpacity
          onPress={handleSubmit}
          style={{
            borderRadius: 12,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Feather name="log-out" size={20} color="#D03434" />
          <Text
            style={{
              color: '#fff',
              fontSize: 17,
              fontWeight: "400",
              marginLeft: '8px'
            }}>Sair</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <SafeAreaView style={styles.main}>
        <Image source={{ uri: user.avatar_url, }} style={styles.img} />
        <Text style={styles.name}>anilton veiga</Text>
        <Text style={styles.email}>aniltonveiga@gmail.com</Text>
        <Text style={styles.city}>Itú/SP</Text>
      </SafeAreaView>
    </>
  )
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1F1F1F',
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: '16px',
    paddingTop: '16px',
    paddingLeft: '16px'
  },
  userhome: {
    color: '#fff',
    fontWeight: '700',
  },
  main: {
    backgroundColor: '#292929',
    height: '80%',
    zIndex: 10,
  },
  img: {
    borderRadius: "60px",
    width: "114px",
    height: "114px",
    marginTop: '-57px',
    marginLeft: '50%',
    left: '-57px'
  },
  name: {
    color: '#fff',
    fontSize: '26px',
    textTransform: 'uppercase'
  },
  email: {
    color: '#fff',
    fontSize: '12px',
    fontWeight: '300'
  },
  city: {
    color: '#fff',
    fontSize: '12px',
    fontWeight: '300'
  }
})

import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, Image, View, StatusBar, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import { Icons } from './assets/Icons';
import { Profiles } from './assets/Profiles';

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */
  return (
          <View style={styles.container}>
               <View style={styles.header}>
                    <View style={styles.headerChild}>
                        <Image source={require('./assets/Icons/menu_light.png')} style={styles.headerImage}/>
                    </View>
                    <View style={styles.headerChild}>
                        <Text style={{fontFamily: "Sydney-Bold", fontSize: 35}}> ensom </Text>
                    </View>
                  <View style={styles.headerChild}>
                      <Image source={require('./assets/Icons/sun.png')} style={styles.headerImage}/>
                  </View>
                </View>
          
                <View style={styles.center}>
                    <ImageBackground style={[styles.mtlCenter,styles.boxWithShadow]} imageStyle={{borderRadius: 15}} source={require('./assets/Profiles/mtl.jpg')}>
                                <Text style={{fontFamily: "Sydney", fontSize: 35, color: 'white'}}> MTL </Text>
                                <Text style={{fontFamily: "Sydney", fontSize: 15, color: 'white'}}> 2 miles away </Text>
                        </ImageBackground>
          <View style={[styles.whiteCenter, styles.boxWithShadow]}>
            <Text style={{fontFamily: "Sydney", fontSize: 28}}> My hottest take </Text>
          <View style={{display: 'flex',flexDirection: "row", justifyContent: 'center', alignItems: 'center', alignContent: 'space-around'}}>
                          <View style={{flex: 1}}>
                          <Image source={require('./assets/Icons/player_light.png')} style={{flexGrow: 1,width: "75%", height: 50,marginLeft: 10, resizeMode: 'contain'}}/>
                          </View>
                          <View style={{flex: 4, marginRight: 20}}>
                          <Image source={require('./assets/Icons/audio_waveform_light.png')} style={{flexGrow: 2, width: "100%", height: "75%", resizeMode: 'contain'}} />
                          </View>
          </View>
          </View>
          <View style={{ flex: 1, backgroundColor: '#F3F3F3'}}>
          </View>
          </View>
                <View style={styles.footer}>
                  <View style={styles.footerChild}>
                      <Image source={require('./assets/Icons/discover_light.png')} style={styles.footerImage}/>
                      <Text style={{fontFamily: "Sydney", fontSize: 20, color: 'white'}}> Discover </Text>
                  </View>
                  <View style={styles.footerChild}>
                      <Image source={require('./assets/Icons/heart_light.png')} style={styles.footerImage}/>
                      <Text style={{fontFamily: "Sydney", fontSize: 20, color: 'white'}}> Matches </Text>
                  </View>
                  <View style={styles.footerChild}>
                      <Image source={require('./assets/Icons/messages_light.png')} style={styles.footerImage}/>
                      <Text style={{fontFamily: "Sydney", fontSize: 20, color: 'white'}}> DMs </Text>
                  </View>
          </View>
        </View>
     );
   }

const styles = StyleSheet.create({
container: {
  flex: 1,
flexDirection: 'column',
},
header: {
  flex: 1,
  backgroundColor: '#F3F3F3',
    flexDirection: 'row',
    justifyContent: 'space-around',
alignItems: 'flex-end',
    display: 'flex',
},
center: {
    display: 'flex',
  flex: 7,
  backgroundColor: '#F3F3F3',
    flexDirection: 'column',
justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
},
footer: {
  flex: 1,
  backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    display: 'flex',
},
headerChild: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
headerImage: {
    width: 50,
    height: 50,
},
footerChild : {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "space-between",
},
footerImage: {
width: 40,
height: 40,
},
whiteCenter: {
          backgroundColor: 'white',
                  flex: 1,
                  borderRadius: 25,
                  justifyContent: 'flex-start',
                  marginTop: 20,
                    display: 'flex',
      width: "100%", height: "100%", padding: 5
          },
boxWithShadow: {
              shadowColor: Themes.light.shadows.shadowColor,
              shadowOffset: Themes.light.shadows.shadowOffset,
              shadowOpacity: Themes.light.shadows.shadowOpacity,
              shadowRadius: Themes.light.shadows.shadowRadius,
              elevation: 4
    
},
mtlCenter: {
marginTop: 20, flex: 4,width:"100%", height:"100%",justifyContent: 'space-between', alignItems: 'flex-start', alignContent: 'space-around'
}
});

import React, { Component, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View, FlatList, BackHandler, Image, TextInput, Platform, ScrollView, Animated, Dimensions } from "react-native";
import { COLORS } from "./constants/color";
import MapView, { Callout, Marker } from 'react-native-maps';
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from "react-native-responsive-screen";
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { markers } from "./maps/mapdata";
import StarRating from "./Components/StarRating";

interface Data {
  digitsarray: any[]
  categories: any[]
}

const MapStyle = [
  [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#242f3e"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#746855"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#242f3e"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#263c3f"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#6b9a76"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#38414e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#212a37"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9ca5b3"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#746855"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#1f2835"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#f3d19c"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#2f3948"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#17263c"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#515c6d"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#17263c"
        }
      ]
    }
  ]
]

const { width, height } = Dimensions.get('window')
const CARD_WIDTH = width * 0.8
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;



class Subscription extends Component<{ navigation: any }, Data>{
  constructor(props: any) {

    super(props);
    this.state = {
      digitsarray: [
        {
          digits: 1
        },
        {
          digits: 2
        },
        {
          digits: 3
        },
        {
          digits: 4
        },
        {
          digits: 5
        },
        {
          digits: 6
        },
        {
          digits: 7
        },
        {
          digits: 8
        },
        {
          digits: 9
        },
        {
          digits: 10
        },
        {
          digits: 11
        },
        {
          digits: 12
        },
        {
          digits: 13
        },
      ],
      categories: [
        {
          name: 'Fastfood Center',
          icon: <MaterialCommunityIcons style={styles.chipsIcon} name="food-fork-drink" size={18} />,
        },
        {
          name: 'Restaurant',
          icon: <MaterialIcons name="local-restaurant" style={styles.chipsIcon} size={18} />,
        },
        {
          name: 'College',
          icon: <Ionicons name="school" style={styles.chipsIcon} size={18} />,
        },
        {
          name: 'Snacks Corner',
          icon: <MaterialCommunityIcons name="food" style={styles.chipsIcon} size={18} />,
        },
        {
          name: 'Hotel',
          icon: <Fontisto name="hotel" style={styles.chipsIcon} size={15} />,
        },
      ],
    }
    // this.backaction = this.backaction().bind(this)
  }

  // componentDidMount(): void {
  //   let regionTimeout: NodeJS.Timeout; // Declare regionTimeout here

  //   this.mapAnimation.addListener(({ value }) => {
  //     let index = Math.floor(value / CARD_WIDTH + 0.3);
  //     if (index >= markers.length) {
  //       index = markers.length - 1;
  //     }
  //     if (index <= 0) {
  //       index = 0;
  //     }

  //     clearTimeout(regionTimeout);

  //     regionTimeout = setTimeout(() => {
  //       if (this.mapIndex !== index) {
  //         this.mapIndex = index;
  //         const { coordinate } = markers[index];
  //         this._map.current?.animateToRegion(
  //           {
  //             ...coordinate,
  //             latitudeDelta: this.Initial_Region.latitudeDelta,
  //             longitudeDelta: this.Initial_Region.longitudeDelta
  //           },
  //           350
  //         );
  //       }
  //     }, 10);
  //   });

  //   BackHandler.addEventListener('hardwareBackPress', this.backaction);
  // }


  // _map = React.useRef(null)

  componentWillUnmount(): void {
    BackHandler.removeEventListener('hardwareBackPress', this.backaction)
  }

  backaction = () => {
    this.props.navigation.goBack()
    return true
  }

  renderdata = ({ item }: any) => {
    console.log("Item--------------------------", item);

    return (
      <View style={{ backgroundColor: COLORS.black }}>
        <Text style={{ fontSize: 20, color: COLORS.white, fontWeight: 'bold' }}>
          {item.digits < 10 ? `0${item.digits}` : `${item.digits}`}
        </Text>
      </View>
    )
  }

  Initial_Region = {
    latitude: 22.62938671242907,
    longitude: 88.4354486029795,
    latitudeDelta: 0.04864195044303443,
    longitudeDelta: 0.040142817690068,
  }

  mapAnimation = new Animated.Value(0);
  mapIndex = 0;


  render() {


    return (
      <View style={{ flex: 1 }}>
        <MapView
          // ref={this._map}
          mapType="standard"
          provider="google"
          style={styles.map}
          initialRegion={this.Initial_Region}
          showsUserLocation
          showsMyLocationButton
        >
          {markers.map((marker, index) => {
            console.log(marker.coordinate);

            return (
              <Marker
                key={index}
                coordinate={{
                  latitude: marker.coordinate.latitude,
                  longitude: marker.coordinate.longitude
                }}
                image={{ uri: 'https://imgs.search.brave.com/kWZIWWM535qKvH3KsFyP93tlHOX2mFZdnDz_fyZjZTo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8yNzc2LzI3NzYw/NjcucG5n' }}
                style={{ maxHeight: 25, maxWidth: 25, height: 20, width: 20 }}
                title="Test Title"
                description="This is the test description"
              >
                {/* <Callout tooltip>
                  <View>
                    <View style={styles.bubble}>
                      <Text style={styles.name}>Favourite Restaurant</Text>
                      <Text style={styles.name}>A short Description</Text>
                      <Image style={styles.image}
                        source={{ uri: 'https://imgs.search.brave.com/sa61BDef-Z3HEyJUVJ_vNXvNyK3_O6yMSL9FOb1oDRc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8yMS8wOS9p/dGFsaWFuLWZvb2Qt/cmVzdGF1cmFudC1i/YW5uZXItd2l0aC1t/ZWFscy12ZWN0b3It/MzM0MTIxMDkuanBn' }}
                      />
                    </View>
                    <View style={styles.arrowborder}></View>
                    <View style={styles.arrow}></View>

                  </View>
                </Callout> */}
              </Marker>
            )
          })}
          {/* <Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324
            }}
            image={{ uri: 'https://imgs.search.brave.com/kWZIWWM535qKvH3KsFyP93tlHOX2mFZdnDz_fyZjZTo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8yNzc2LzI3NzYw/NjcucG5n' }}
            title="Test Title"
            description="This is the test description"
          >
            <Callout tooltip>
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>Favourite Restaurant</Text>
                  <Text style={styles.name}>A short Description</Text>
                  <Image style={styles.image}
                    source={{ uri: 'https://imgs.search.brave.com/sa61BDef-Z3HEyJUVJ_vNXvNyK3_O6yMSL9FOb1oDRc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8yMS8wOS9p/dGFsaWFuLWZvb2Qt/cmVzdGF1cmFudC1i/YW5uZXItd2l0aC1t/ZWFscy12ZWN0b3It/MzM0MTIxMDkuanBn' }}
                  />
                </View>
                <View style={styles.arrowborder}></View>
                <View style={styles.arrow}></View>

              </View>
            </Callout>
          </Marker> */}
        </MapView>
        <View style={styles.searchBox}>
          <TextInput
            placeholder="Search here"
            placeholderTextColor={'#000'}
            autoCapitalize="none"
            style={{ flex: 1, padding: wp(1), fontSize: 18, color: '#000' }}
          />
          <Fontisto name="search" size={20} color={'#000'} style={{ alignSelf: 'center', marginRight: wp(3) }} />
        </View>
        <ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          style={styles.chipsScrollView}
          contentContainerStyle={{
            paddingRight: Platform.OS === 'android' ? 20 : 0
          }}
        >
          {this.state.categories.map((category, index) => (
            <TouchableOpacity key={index} style={styles.chipsItem}>
              {category.icon}
              <Text style={[styles.name, { color: '#fff' }]}>{category.name}</Text>
            </TouchableOpacity>
          ))

          }
        </ScrollView>
        <Animated.ScrollView
          horizontal
          pagingEnabled
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          style={styles.scrollview}
          snapToAlignment='center'
          snapToInterval={CARD_WIDTH + 20}
        // contentContainerStyle={{
        //   paddingHorizontal: Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0,
        // }}
        >
          {markers.map((marker, index) => (
            <View style={styles.card} key={index}>
              <Image source={marker.image}
                style={styles.cardImage}
              />
              <View style={styles.textContent}>
                <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>
                <StarRating ratings={marker.rating} reviews={marker.reviews} />
                <Text numberOfLines={1} style={styles.cardDescription}>{marker.description}</Text>
              </View>
              <View style={styles.button}>
                <TouchableOpacity
                  onPress={() => { }}
                  style={[styles.signIn, { borderColor: '#FF6347', borderWidth: 1 }]}
                >
                  <Text style={[styles.textSign, { color: '#FF6347' }]}>
                    Order Now
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
          }
        </Animated.ScrollView>
      </View >
    )
  }
}

const styles = StyleSheet.create({

  searchBox: {
    position: 'absolute',
    marginTop: Platform.OS === 'ios' ? hp(4.92) : hp(2.46),
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    width: '90%',
    alignSelf: 'center',
    borderRadius: wp(3.33),
    elevation: 2,
    padding: wp(0.7)
  },
  cardtitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: '#000'
  },
  button: {
    alignItems: 'center',
    marginTop: hp(0.61)
  },
  cardDescription: {
    fontSize: 17,
    color: "#444",
  },
  signIn: {
    width: '100%',
    padding: wp(1.33),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(0.8)
  },
  textSign: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  map: {
    height: '100%',
    width: '100%'
  },
  textContent: {
    flex: 2,
    padding: 10,
  },
  bubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 150
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#ccc',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32
  },
  name: {
    color: '#000'
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  chipsScrollView: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? hp(10.08) : hp(8.85),
    paddingHorizontal: wp(2.66)
  },
  chipsIcon: {
    marginRight: wp(1.33),
    color: '#fff',
  },
  chipsItem: {
    flexDirection: 'row',
    backgroundColor: '#5b5b5b',
    borderRadius: wp(20),
    padding: wp(2.13),
    paddingHorizontal: wp(5.33),
    marginHorizontal: wp(1.23),
    height: hp(4.31),
    shadowColor: '#ccc'
  },
  scrollview: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  card: {
    elevation: 2,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    height: hp(24.63),
    width: wp(80),
    overflow: "hidden",
  },
})

export default Subscription;
import React from "react";
import { View,SafeAreaView ,TouchableOpacity} from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";

class Navbar extends React.PureComponent {
    state = {  }
    render() {
        const {navigation} = this.props;
        return (
            <SafeAreaView>
                <View style={{
                                  padding: 20,
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                }}>
                    <TouchableOpacity style={{
                                    width: 40,
                                    height: 40,
                                    backgroundColor: '#262532',
                                    borderRadius: 100,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                  }}
                                activeOpacity={0.6} onPress={() => navigation.goBack()}>
                    <Ionic name="chevron-back" style={{Size: 40, color: '#ffffff'}} />

                    </TouchableOpacity>
                </View>
            </SafeAreaView>

            
        );
           
            
            
       
    }
}

export default Navbar;
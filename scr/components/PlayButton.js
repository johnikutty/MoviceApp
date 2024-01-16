
import React from "react";
import { Pressable,Text } from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";

class PlayButton extends React.PureComponent {
  
    render() {
        const {handlePress} =this.props;
        return (
            <Pressable onPress={() => handlePress()}
            style={{
             alignContent:'center',
             borderRadius:50,
             width:50,
             backgroundColor: 'blue',
             padding:10,
           }}>
                
                <Ionic name="caret-forward-outline" size={30}  color={'#ffffff'}/>
            </Pressable>
            
        );
    }
}

export default PlayButton;
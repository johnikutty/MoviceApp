import { TouchableOpacity,StyleSheet,Image} from "react-native";
import React from "react";
import PropTypes from 'prop-types';


const propTypes ={
    item:PropTypes.object,
};

class Card extends React.PureComponent {
    
    
    render() {
        const  {navigation, item} =this.props;
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Details',{movieId : item.id})} style={styles.container}>
                <Image resizeMode="cover"
                style={styles.image} 
                 source={ 
                    {uri:'http://image.tmdb.org/t/p/w500'+item.poster_path} } />
               

            </TouchableOpacity>
            
        );
    }
}

export default Card;

const styles = StyleSheet.create({
    container :{
        padding:5,
        position:'relative',
        alignItems:'center',
        justifyContent:'center',
        height:200,
    },
    image:{
        height:200,
        width:120,
        borderRadius:20,
        justifyContent:'center'
       
    }
   



})
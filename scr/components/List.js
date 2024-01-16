import { StyleSheet, Text, View , FlatList } from 'react-native'
import React from "react"; 
import Card from './Card';
import PropTypes from 'prop-types';


const propTypes ={
    title :PropTypes.string,
    content : PropTypes.array,
};

class List extends React.PureComponent {
   
    render() {
        const {navigation, title, content} =this.props; 
        return (
            <View  style={styles.list}>

                   <View>
                          <Text style={{fontSize:20,fontWeight:'bold',paddingBottom:20,color:'#fff'}}
                          >{title}</Text>
                   </View>

                        <View>
                        
                                <FlatList data={content} 
                                                    horizontal={true}
                                                renderItem={({item}) => <Card navigation = {navigation} item={item} />}>
                                                
                                                
                                </FlatList>
                        </View>

                        

            </View>
            
        );
    }
}

List.PropTypes = propTypes;

export default List;
const styles = StyleSheet.create({
    list:{
        marginTop:25,
    }



})
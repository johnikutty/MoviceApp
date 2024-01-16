import { View,Text,Image,ScrollView,Dimensions, ActivityIndicator, Pressable,CategoryHeader } from "react-native";
import React, { useEffect, useState } from "react";
import {getMovie,getVideo}  from "../services/services";
import { LinearGradient } from "expo-linear-gradient";
import Ionic from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import PlayButton from "../PlayButton";
import { Modal } from "react-native";
import VideoPlayer from 'expo-video-player';
import { ResizeMode, Video } from 'expo-av'







const Details = ( {route,navigation}) => {
    const  movieId = route.params.movieId;
    const height =Dimensions.get('screen').height;
   
   
    
    const [ismodalVisible, setModalVisible] = useState(false);
    const [movieDetails,setMovieDetails] = useState(false);
    const [loaded , setLoaded] =useState (false);
    const [isVideo ,setvideo] =useState(false);

    useEffect(() => {
        getMovie(movieId).then(movieData => {
            setMovieDetails(movieData);
            setLoaded(true);
        })

    }, [movieId]);

    useEffect(() => {
       
        getVideo().then(videos =>{
            const movieArray =[];
            videos.forEach(isVideo => {
                videos.push('http://image.tmdb.org/t/p/w500'+isVideo.site);
            })
           
            setvideo(movieArray);
             })
             

        
        
         }, []);
      
      

    
   const videoShown =() =>{
     setModalVisible(!ismodalVisible);
     
   }

   

    return (
        <React.Fragment>
            {loaded && (
                <View >
            <ScrollView >
 
                   
          {/* <Text>{movieDetails.title}</Text> */}
             <Image  resizeMode="cover"
                style={{
                    height: height *0.55
                   
                }} source={ 
                    {uri:'http://image.tmdb.org/t/p/w500'+movieDetails.poster_path} } />


                <View  style={{
                                flex:1,
                                justifyContent:"center",
                                alignItems:'center'
                  }}> 

                  <View  style={{position:'absolute',top:-25, right:20}}>
                    <PlayButton  handlePress={videoShown}/>
                  </View>
                

              <Text style={{fontSize:24,fontWeight:'bold',marginTop:10,marginBottom:10}}>{movieDetails.title}</Text>
                {movieDetails.genres && (
                <View style={{
                   flexDirection:'row',
                   alignItems:'center',
                   marginTop:20
                  }}>
                    {movieDetails.genres.map(genres => {
                        return(
                            <Text style={{marginRight:10,fontWeight:'bold'}} key={genres.id}>{genres.name}</Text>
                        )

                    })}

                    
                </View>)}
                <Text> {movieDetails.vote_average}</Text>
                <Text style={{padding:15,}}>{movieDetails.overview}</Text>
                <Text style={{fontWeight:'bold'}}>{'Release date:' +movieDetails.release_date}</Text>
                 <Text>{isVideo.name}</Text>
                
                 </View>
               
                 

          </ScrollView>
                  <Modal supportedOrientations={['portrait','landscape']} animationType='slide' visible={ismodalVisible}>
                  
                   
                           <View style={{flex:1,justifyContent:'center',alignItems:'stretch'}}>
                           
                           <VideoPlayer 
                             onBack={() =>{
                                videoShown();
                             }}
                            
                           navigator={navigation} 
                           style={{flex:1,justifyContent:'center',alignItems:'center'}}
                                            videoProps={{
                                                shouldPlay: true,
                                                resizeMode: ResizeMode.CONTAIN,
                                                
                                                
                                                
                                                source: {
                                                uri: 'http://image.tmdb.org/t/p/w500'+isVideo.site,
                                                
                                                },
                                                
                                            }}
                                            />
                                            {/* <Video onClose={videoShown} /> */}
                                            <Text>{isVideo.name}</Text>
                           
                           </View>


                 
                  </Modal>
                  </View>
            )}
            {!loaded && <ActivityIndicator size="large" />}
            
           
        </React.Fragment>
       
        
    );
}

export default Details;
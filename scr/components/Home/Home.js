
import { StyleSheet, Text, View ,Dimensions ,FlatList, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {getPoplarMovies, getPoplarTv, getUpcomingMovies,getFamilyMovies} from '.././services/services';
import react from 'react';
import List from '../../components/List';


import { SliderBox } from 'react-native-image-slider-box';



const dimensions = Dimensions.get('screen');

const Home = ({navigation, route}) => {

  const [movie, setMoviesData] = useState('');
  const [popularMovie, setPopularMovies] = useState('');
  const [popularTv, setPopularTv] = useState([1,2,3]);
  const [familyMovies, setFamilyMovies] = useState('');

  

  useEffect(() => {
    getUpcomingMovies().then(movies => {
      const movieArray =[];
      movies.forEach(movie =>{

        movieArray.push('http://image.tmdb.org/t/p/w500'+movie.poster_path);

      })
     
      setMoviesData(movieArray);
       });
   

    getPoplarMovies().then(movies => {
      setPopularMovies(movies);
     }) ;

     getPoplarTv().then(movies => {
      setPopularTv(movies);
     }) ;

     getFamilyMovies().then(movies => {
      setFamilyMovies(movies);
     }) ;
  } ,[])
      return (
        <react.Fragment >
          <ScrollView  style={{ backgroundColor: '#1A1A23',}}>
              <View    style={{ backgroundColor: '#1A1A23',}}>

                  
                  <SliderBox images={movie} 
                  dotStyle={{height:0}}
                sliderBoxHeight={dimensions.height /1.5}
                autoplay ={true}
                circleLoop ={true}
                />

              
              </View>

   
                        {/* <View style={{color:'#fff'}}>
                          <List navigation={navigation} title="popularMovie" content={popularMovie}  />
                        </View> */}
                        <View style={{padding:16,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <View>
                          <Text  style={{color:'#ffff'}}>popularMovie</Text>
                        </View>
                        <View>
                          <Text style={{color:'#ffff'}} >SeeAll</Text>
                          
                          
                        </View>
                      
                        </View>
                        <List navigation={navigation}  content={popularMovie}  />
                        

                        <View>
                          <List navigation={navigation} title="popularTv show" content={popularTv} />
                        </View>

                        <View>
                          <List navigation={navigation} title="FamilyMoviesTv " content={familyMovies} />
                        </View>

                       


        </ScrollView>   

    </react.Fragment>
  );
};

export default Home

const styles = StyleSheet.create({})

// https://ui8.net/stockline/products/movie-streaming-app-ui-kit?rel=timer
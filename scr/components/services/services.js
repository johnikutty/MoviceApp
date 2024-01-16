import axios from "axios";

const apiUrl ='https://api.themoviedb.org/3';
const apiKey ='api_key=98caf4fcf4d40820a9a9f0a831268d64';

// get Popler Movices
export const getPoplarMovies = async () =>{
    const resp =await axios
    .get('https://api.themoviedb.org/3/movie/popular?api_key=98caf4fcf4d40820a9a9f0a831268d64')
     return  resp.data.results;
      };
    
      //get  
     export const getUpcomingMovies = async () =>{
        const resp =await axios
        .get('https://api.themoviedb.org/3/movie/upcoming?api_key=98caf4fcf4d40820a9a9f0a831268d64')
         return  resp.data.results;
          };


          export const getPoplarTv = async () =>{
            const resp =await axios
            .get('https://api.themoviedb.org/3/tv/popular?api_key=98caf4fcf4d40820a9a9f0a831268d64')
             return  resp.data.results;
              };

              export const getFamilyMovies = async () =>{
                const resp =await axios
                .get('https://api.themoviedb.org/3/discover/movie?api_key=98caf4fcf4d40820a9a9f0a831268d64&with_genres=10751')
                 return  resp.data.results;
                  };


                  export const getMovie = async id =>{
                    const resp = await axios
                    .get(`${apiUrl}/movie/${id}?${apiKey}`)
                     return  resp.data;
                      };

                      
                    
                     

                      export const getVideo = async id =>{
                        const resp = await axios
                        .get(` ${apiUrl}/movie/${id}/videos?${apiKey}`)
                         return  resp.data.results;
                          };

                          // https://api.themoviedb.org/3/movie/157336/videos?api_key=98caf4fcf4d40820a9a9f0a831268d64&append_to_response=videos

                          
                          // https://api.themoviedb.org/3/movie/now_playing?api_key=98caf4fcf4d40820a9a9f0a831268d64&append_to_response=videos
                          // https://api.themoviedb.org/3/movie/157336/videos?api_key=98caf4fcf4d40820a9a9f0a831268d64
import React, {useState, useMemo} from 'react';
import Header from './shared/Header'

import tvshows from './tvShows.json';
import SortShows from './SortShows';
import FilterShows from './FilterShows';

const DisplayTvShows = () => {

  const showsData = useMemo(() => tvshows, []);
  const [shows, setShows] = useState(showsData);
  

  return (
    <>
      <Header title="Tv Shows"/>
      <div className="container mt-4">
        <SortShows shows={shows} setShows={setShows}
        />
        <br/>
        <br/>
        <FilterShows shows={shows} setShows={setShows}
        />
      </div>
      
      <div className="s mt-5">
        <div>
         {shows.map((show, i) => (
         <div key={i}>
          <h3 style={{paddingRight:'10px'}}>{show.name}</h3>
          <p style={{paddingRight:'10px'}}>{show.overview}</p>
         </div>
         ))}
        </div>
      </div>
      
    </>
  );
}

export default DisplayTvShows;

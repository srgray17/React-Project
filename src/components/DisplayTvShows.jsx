import React, {useState} from 'react';
import Header from './shared/Header'

import tvshows from './tvShows.json';
import SortShows from './SortShows';
import FilterShows from './FilterShows';

const DisplayTvShows = () => {

  //const shows = useMemo(() => tvshows, []);
  const [shows, setShows] = useState(tvshows);
  

  return (
    <>
      <Header title="Tv Shows"/>
      <SortShows shows={shows} setShows={setShows}
      />
      <br/>
      <br/>
      <FilterShows shows={shows} setShows={setShows}
      />
      <div>
        {shows.map((show, i) => (
        <div key={i}>
          <h3 style={{paddingRight:'10px'}}>{show.name}</h3>
          <p style={{paddingRight:'10px'}}>{show.overview}</p>
        </div>
        ))}
      </div>
    </>
  );
}

export default DisplayTvShows;

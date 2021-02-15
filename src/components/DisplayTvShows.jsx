import React, {useState, useMemo} from 'react';

import tvshows from './tvShows.json';
import SortShows from './SortShows';

function TvShows() {

  const shows = useMemo(() => tvshows, []);
  

  return (
    <>
      <SortShows shows={shows.name}
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

export default TvShows;

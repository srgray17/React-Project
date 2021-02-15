import React, {useMemo} from 'react';
import tvshows from './tvShows.json';

const SortShows = () => {

  const shows = useMemo(() => tvshows, []);

  const sortTvShows = () => {
      return shows.sort(function(a, b){
        var nameA = a.name;
        var nameB = b.name;
        return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
      });
  }

  return ( 
    <button
    className="btn btn-primary" 
    type="button"
    onClick={sortTvShows}
    >
      Sort Tv Shows
    </button>
   );
}
 
export default SortShows;
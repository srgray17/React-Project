import React, {useState} from 'react';
// import tvshows from './tvShows.json';

const SortShows = ({shows, setShows}) => {

  //const shows = useMemo(() => tvshows, []);
  const [direction, setDirection] = useState('asc'); 

  const sortTvShows = () => {
    // console.log(shows);
    const sorted = shows.sort((a, b) => {
      if(direction === 'asc'){
        setDirection('dec');
        return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
      }
      else{
        setDirection('asc');
        return a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1;
      }
    });
      setShows([...sorted]);
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
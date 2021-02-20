import React from 'react';

const FilterShows = ({shows, setShows}) => {

  const filerTvShows = () => {
    const filtered = shows.filter((show) => { 
     return show.onAir === true
    });
    setShows([...filtered]);
  }

  return(
    <button
    className="btn btn-primary" 
    type="button"
    onClick={filerTvShows}
    >
      Filter On Air Tv Shows
    </button>
  );
}

export default FilterShows;
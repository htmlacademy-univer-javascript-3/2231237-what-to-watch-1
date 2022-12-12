import React from 'react';
import GenreItem from './genre';

type Props = {
  genres: string[];
  activeGenre: string;
};


function GenresList(props: Props) {
  const {genres, activeGenre} = props;

  return (
    <ul className='catalog__genres-list'>
      {genres.map((genre) => <GenreItem key={genre} genre={genre} isActive={genre === activeGenre}/>)}
    </ul>
  );
}

export default GenresList;

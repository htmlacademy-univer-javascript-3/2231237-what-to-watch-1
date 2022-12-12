import {useAppDispatch} from "../../hooks";
import React from "react";
import {changeGenre} from "../../store/action";

type Props = {
  genre: string;
  isActive: boolean;
};

function GenreItem(props: Props) {
  const {genre, isActive} = props;
  const dispatch = useAppDispatch();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(changeGenre({genre: genre}));
  };

  return (
    <li className={`catalog__genres-item ${isActive ? ' catalog__genres-item--active' : ''}`}>
      <a href='#' className='catalog__genres-link' onClick={handleLinkClick}>{genre}</a>
    </li>
  );
}

export default GenreItem;

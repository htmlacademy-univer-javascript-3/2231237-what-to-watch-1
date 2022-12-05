import {store} from '../../store';
import {changeGenre} from "../../store/action";

type Props = {
  genre: string,
  isCurrentGenre: boolean
}

function Genre(props: Props) {
  const {genre, isCurrentGenre} = props;
  const onClickHandler = () => {
    store.dispatch(changeGenre({genre: genre}))
  }
}

export default Genre;

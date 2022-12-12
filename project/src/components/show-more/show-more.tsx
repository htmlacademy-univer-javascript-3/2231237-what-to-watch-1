type Props = {
  onClick: () => void;
}

function ShowMore(props: Props) {
  const {onClick} = props;
  return (
    <div className="catalog__more">
      <button className="catalog__button"
              type="button"
              onClick={onClick}
      >
        Show more
      </button>
    </div>
  );
}

export default ShowMore;

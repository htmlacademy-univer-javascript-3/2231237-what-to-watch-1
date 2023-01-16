type Props = {
  message: string;
}

function Message(props: Props): JSX.Element {
  const {message} = props;
  return (
    <div className="sign-in__message">
      <p>{message}</p>
    </div>
  );
}

export default Message;

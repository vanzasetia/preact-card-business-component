export default function Button(props) {
  return (
    <a
      href={props.url}
      class={`card__button card__button--${props.backgroundColor}`}
    >
      {props.children}
    </a>
  );
}

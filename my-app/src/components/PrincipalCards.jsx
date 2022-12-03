export default function PrincipalCards({ values, children }) {
  const { id, src, place, title } = values;
  //onContextMenu
  return (
    <figure id={id}>
      <img src={src} alt={title} />
      <figcaption>
        <div>
          <p>{place}</p>
          <h3>{title}</h3>
          <p>{children}</p>
        </div>
        <div>
          <a role="button" href={`#${title}`}>
            Reservar
          </a>
        </div>
      </figcaption>
    </figure>
  );
}

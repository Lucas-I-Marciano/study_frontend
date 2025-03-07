import "./Card.css";

export const Card = (props) => {
  const {
    children,
    titleColor,
    titleText,
    colorScheme = "blue",
    icon = "🗒️",
  } = props;
  console.log(children);
  return (
    <div className={`card card__${colorScheme}`}>
      <div className={`card-shadow card-shadow__${colorScheme}`}></div>
      <div className="card-content">
        <div className="card-content-title">
          <span className="card-content-title-icon">{icon}</span>
          <span
            className={`card-content-title-text card-content-title-text__${titleColor}`}
          >
            {titleText}
          </span>
        </div>
        <div className="card-content-task">
          {children.map((i) => {
            return i;
          })}
        </div>
      </div>
    </div>
  );
};

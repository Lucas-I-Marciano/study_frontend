import "./Task.css";
import logoMan from "../../assets/images/avatar/Male.png";
import logoFem from "../../assets/images/avatar/Female.png";

export const Task = (props) => {
  const { avatarUrl, title, label, colorScheme } = props;
  const logo = avatarUrl === "male" ? logoMan : logoFem;
  return (
    <div className={`task`}>
      <span className="task-title">{title}</span>
      <div className="task-flags">
        <img className="task-flags-image" src={logo} alt="avatar"></img>
        <span className={`task-flags-label task-flags-label__${colorScheme}`}>
          {label}
        </span>
      </div>
    </div>
  );
};

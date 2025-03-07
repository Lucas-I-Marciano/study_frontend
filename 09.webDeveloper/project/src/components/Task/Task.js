import "./Task.css";

export const Task = (props) => {
  const { avatarUrl, title, label, colorScheme } = props;
  return (
    <div className="task">
      <span className="task-title">Christmas Banners</span>
      <div className="task-flags">
        <img className="task-flags-image" alt="avatar"></img>
        <span className="task-flags-label">Label</span>
      </div>
    </div>
  );
};

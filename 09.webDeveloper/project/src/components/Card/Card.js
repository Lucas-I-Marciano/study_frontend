import { Task } from "../Task/Task";
import "./Card.css";

export const Card = () => {
  return (
    <div className="card">
      <div className="card-shadow"></div>
      <div className="card-content">
        <div className="card-content-title">
          <span className="card-content-title-icon">🗒️</span>
          <span className="card-content-title-text">To Do</span>
        </div>
        <div className="card-content-task">
          <Task
            title="Christmas Banners"
            label="label"
            colorScheme="todo"
            avatarUrl="male"
          ></Task>
        </div>
      </div>
    </div>
  );
};

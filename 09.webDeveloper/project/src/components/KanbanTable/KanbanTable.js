import { Card } from "../Card/Card";
import { dbTask } from "../Task/dbTask";
import { Task } from "../Task/Task";
import "./KanbanTable.css";

const $ = (filter) => {
  return dbTask.filter((element) => {
    return element.action === filter;
  });
};

export const KanbanTable = () => {
  const todoList = $("todo");
  const inProgressList = $("inProgress");
  const reviewList = $("review");
  const doneList = $("done");
  return (
    <div className="KanbanTable">
      <Card titleText="To do" titleColor="white" colorScheme="blue" icon="🗒️">
        {todoList.map((element) => {
          return (
            <Task
              title={element.title}
              label={element.label}
              colorScheme={element.colorScheme}
              avatarUrl={element.avatarUrl}
            ></Task>
          );
        })}
      </Card>
      <Card
        titleText="In Progress"
        titleColor="white"
        colorScheme="orange"
        icon="💻"
      >
        {inProgressList.map((element) => {
          return (
            <Task
              title={element.title}
              label={element.label}
              colorScheme={element.colorScheme}
              avatarUrl={element.avatarUrl}
            ></Task>
          );
        })}
      </Card>
      <Card titleText="Review" titleColor="white" colorScheme="purple" icon="🖍">
        {reviewList.map((element) => {
          return (
            <Task
              title={element.title}
              label={element.label}
              colorScheme={element.colorScheme}
              avatarUrl={element.avatarUrl}
            ></Task>
          );
        })}
      </Card>
      <Card titleText="Done" titleColor="black" colorScheme="green" icon="🚀">
        {doneList.map((element) => {
          return (
            <Task
              title={element.title}
              label={element.label}
              colorScheme={element.colorScheme}
              avatarUrl={element.avatarUrl}
            ></Task>
          );
        })}
      </Card>
    </div>
  );
};

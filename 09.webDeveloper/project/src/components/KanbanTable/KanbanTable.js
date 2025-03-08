import { Card } from "../Card/Card";
import { dbTask } from "../Task/dbTask";
import { Task } from "../Task/Task";
import "./KanbanTable.css";

export const KanbanTable = () => {
  return (
    <div className="KanbanTable">
      <Card titleText="To do" titleColor="black" colorScheme="blue" icon="✔️">
        {dbTask.map((element) => {
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
        icon="✔️"
      >
        {dbTask.map((element) => {
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

import "./styles.css";
import { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Grid from "@mui/material/Grid";
import Column from "../../Components/Column";
import CreateEditTask from "../../Components/CreateEditTask";
import localStorage from '../../localstorage'

export default function BoardScreen(props) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [tasks, setTasks] = useState(localStorage.getTasks());
  const [modalTitle, setModalTitle] = useState("Create New Task");
  const [buttonTitle, setButtonTitle] = useState("Create Task");
  const [editTaskId, setEditTaskId] = useState(null)

  const onClose = () => {
    setModalOpen(false);
    setModalTitle("Create New Task");
    setButtonTitle('Create Task');
    setTaskTitle('')
    setTaskDescription('')
  };

  const onTaskTitleChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const onTaskDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const onCreateTaskClick = () => {
    const newTask = {
      id: tasks.length + 1,
      title: taskTitle,
      description: taskDescription,
      status: "TODO",
    };

    const toDoTasksCopy = [newTask, ...tasks];
    setTasks(toDoTasksCopy);
    localStorage.setTasks(toDoTasksCopy);
    setModalOpen(false);
    setTaskTitle("");
    setTaskDescription("");
  };

  const taskUpdateClicked = (taskId) => {
      const tasksCopy = [...tasks]
      const taskUpdated = tasksCopy.find(task => task.id === taskId)
      taskUpdated.title = taskTitle;
      taskUpdated.description = taskDescription;
      setTasks(tasksCopy)
      localStorage.setTasks(tasksCopy);
      onClose()
  }

  const onTaskStatusChange = (taskId, status) => {
    const tasksCopy = [...tasks];
    const taskUpdated = tasksCopy.find((task) => task.id === taskId);
    taskUpdated.status = status;
    setTasks(tasksCopy);
    localStorage.setTasks(tasksCopy);
  };

  const onEditTaskClicked = (taskId) => {
    setEditTaskId(taskId)
    setModalTitle("Edit Task");
    setButtonTitle('Edit Task');
    const editingTask = tasks.find(task => task.id === taskId);
    setTaskTitle(editingTask.title)
    setTaskDescription(editingTask.description)
    setModalOpen(true);
  };

  const onDeleteTaskClicked = (taskId) => {
      const tasksCopy = tasks.filter(task => task.id !== taskId);
      setTasks(tasksCopy);
      localStorage.setTasks(tasksCopy);
  }

  return (
    <div className="board-container">
      <CreateEditTask
        modalTitle={modalTitle}
        open={isModalOpen}
        handleClose={onClose}
        taskTitle={taskTitle}
        taskDescription={taskDescription}
        onTaskTitleChange={onTaskTitleChange}
        onTaskDescriptionChange={onTaskDescriptionChange}
        onCreateTaskClick={onCreateTaskClick}
        buttonTitle={buttonTitle}
        taskUpdateClicked={taskUpdateClicked}
        taskId={editTaskId}
      />
      <div className="board-header">
        <Typography variant="h4" component="div">
          {props.boardName}
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddCircleIcon />}
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Task
        </Button>
      </div>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 12, md: 12 }}
      >
        <Grid item xs={4} sm={6} md={4}>
          <Column
            title="Todo"
            tasks={tasks}
            type="TODO"
            onTaskStatusChange={onTaskStatusChange}
            onEditTaskClicked={onEditTaskClicked}
            onDeleteTaskClicked={onDeleteTaskClicked}
          />
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Column
            title="Doing"
            tasks={tasks}
            type="DOING"
            onTaskStatusChange={onTaskStatusChange}
            onEditTaskClicked={onEditTaskClicked}
            onDeleteTaskClicked={onDeleteTaskClicked}
          />
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Column
            title="Done"
            tasks={tasks}
            type="DONE"
            onTaskStatusChange={onTaskStatusChange}
            onEditTaskClicked={onEditTaskClicked}
            onDeleteTaskClicked={onDeleteTaskClicked}
          />
        </Grid>
      </Grid>
    </div>
  );
}

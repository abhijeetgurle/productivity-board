import './styles.css';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Grid from '@mui/material/Grid';
import Column from '../../Components/Column';
import CreateEditTask from '../../Components/CreateEditTask';

export default function BoardScreen(props) {
    const [isModalOpen, setModalOpen] = useState(false);
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('')
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "Complete React Course",
            description: "Some description text here...",
            status: "TODO"
        },
        {
            id: 2,
            title: "Complete JS Course",
            description: "Some description text here...",
            status: "DOING"
        },
        {
            id: 3,
            title: "Complete Java Course",
            description: "Some description text here...",
            status: "TODO"
        },
    ])
    const [modalTitle, setModalTitle] = useState("Create New Task");

    const onClose = () => { 
        setModalOpen(false); 
        setModalTitle("Create New Task")
    }

    const onTaskTitleChange = (e) => {
        setTaskTitle(e.target.value)
    }

    const onTaskDescriptionChange = (e) => {
        setTaskDescription(e.target.value)
    }

    const onCreateTaskClick = () => {
        const newTask = {
            id: tasks.length + 1,
            title: taskTitle,
            description: taskDescription,
            status: "TODO"
        }

        const toDoTasksCopy = [newTask, ...tasks]
        setTasks(toDoTasksCopy)
        setModalOpen(false)
        setTaskTitle('')
        setTaskDescription('')
    }

    const onTaskStatusChange = (taskId, status) => {
        const tasksCopy = [...tasks];
        const taskUpdated = tasksCopy.find(task => task.id === taskId);
        taskUpdated.status = status;
        setTasks(tasksCopy);
    }

    const onEditTaskClicked = (taskId) => {
        setModalTitle("Edit Task")
        setModalOpen(true)
    }


    return (
        <div className="board-container">
            <CreateEditTask modalTitle={modalTitle} open={isModalOpen} handleClose={onClose} taskTitle={taskTitle} taskDescription={taskDescription} onTaskTitleChange={onTaskTitleChange} onTaskDescriptionChange={onTaskDescriptionChange} onCreateTaskClick={onCreateTaskClick} />
            <div className="board-header">
                <Typography variant="h4" component="div">
                    {props.boardName}
                </Typography>
                <Button
                    variant="contained"
                    startIcon={<AddCircleIcon />}
                    onClick={()=>{setModalOpen(true)}}
                >
                    Task
                </Button>
            </div>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }}>
                <Grid item xs={4} sm={6} md={4}>
                    <Column title="Todo" tasks={tasks} type="TODO" onTaskStatusChange={onTaskStatusChange} onEditTaskClicked={onEditTaskClicked} />
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <Column title="Doing" tasks={tasks} type="DOING" onTaskStatusChange={onTaskStatusChange} onEditTaskClicked={onEditTaskClicked} />
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <Column title="Done" tasks={tasks} type="DONE" onTaskStatusChange={onTaskStatusChange} onEditTaskClicked={onEditTaskClicked} />
                </Grid>
            </Grid>
        </div>
    )
}
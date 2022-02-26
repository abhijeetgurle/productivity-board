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
    const [toDoTasks, setToDoTasks] = useState([
        {
            title: "Complete React Course",
            description: "Some description text here..."
        },
        {
            title: "Complete JS Course",
            description: "Some description text here..."
        },
        {
            title: "Complete Java Course",
            description: "Some description text here..."
        },
    ])

    const onClose = () => { setModalOpen(false) }

    const onTaskTitleChange = (e) => {
        setTaskTitle(e.target.value)
    }

    const onTaskDescriptionChange = (e) => {
        setTaskDescription(e.target.value)
    }

    const onCreateTaskClick = () => {
        const newTask = {
            title: taskTitle,
            description: taskDescription
        }

        const toDoTasksCopy = [newTask, ...toDoTasks]
        setToDoTasks(toDoTasksCopy)
        setModalOpen(false)
        setTaskTitle('')
        setTaskDescription('')
    }

    return (
        <div className="board-container">
            <CreateEditTask open={isModalOpen} handleClose={onClose} taskTitle={taskTitle} taskDescription={taskDescription} onTaskTitleChange={onTaskTitleChange} onTaskDescriptionChange={onTaskDescriptionChange} onCreateTaskClick={onCreateTaskClick} />
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
                    <Column title="Todo" tasks={toDoTasks} />
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <Column title="Doing" tasks={[]} />
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <Column title="Done" tasks={[]} />
                </Grid>
            </Grid>
        </div>
    )
}
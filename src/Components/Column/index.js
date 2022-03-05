import './styles.css';
import TaskCard from '../../Components/TaskCard'
import Typography from '@mui/material/Typography';

export default function Column(props) {
    const tasks = props.tasks.filter((task) => task.status === props.type);

    return (
        <div className="column">
            <Typography
                variant="h5"
                component="div"
                color="white"
                align="center"
                gutterBottom
            >
                {props.title}
            </Typography>
            {
                tasks.map((task, index) => (
                    <TaskCard
                        key={index}
                        taskId={task.id}
                        title={task.title}
                        description={task.description}
                        type={props.type}
                        onTaskStatusChange={props.onTaskStatusChange}
                        onEditTaskClicked={props.onEditTaskClicked}
                        onDeleteTaskClicked={props.onDeleteTaskClicked}
                    />
                ))
            }
        </div>
    )
}
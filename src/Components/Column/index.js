import './styles.css';
import TaskCard from '../../Components/TaskCard'
import Typography from '@mui/material/Typography';

export default function Column(props) {
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
                props.tasks.map((task, index) => (
                    <TaskCard
                        key={index}
                        title={task.title}
                        description={task.description}
                    />
                ))
            }
        </div>
    )
}
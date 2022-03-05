import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CreateIcon from "@mui/icons-material/Create";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import "./styles.css"

export default function TaskCard(props) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            {props.title}
          </Typography>
          <Typography color="text.secondary">{props.description}</Typography>
        </CardContent>
        <CardActions className='task-actions'>
          <Button size="large" startIcon={<CreateIcon />} onClick={() => props.onEditTaskClicked(props.taskId)}>
            Edit
          </Button>
          <FormControl style={{width: '10rem'}}>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Status"
                value={props.type}
                onChange={(e) => props.onTaskStatusChange(props.taskId, e.target.value)}
              >
              <MenuItem value={"TODO"}>TODO</MenuItem>
              <MenuItem value={"DOING"}>DOING</MenuItem>
              <MenuItem value={"DONE"}>DONE</MenuItem>
            </Select>
          </FormControl>
        </CardActions>
      </Card>
    </div>
  );
}

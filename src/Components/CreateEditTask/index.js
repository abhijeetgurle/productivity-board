import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function CreateEditTask(props) {
    return (
        <Modal
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography
                    variant="h5"
                    component="div"
                    align="center"
                    gutterBottom
                >
                    Create New Task
                </Typography>
                <TextField
                    id="outlined-basic"
                    label="Task Title"
                    variant="outlined"
                    fullWidth
                    style={{ marginBottom: "20px" }}
                />
                <TextField
                    id="outlined-basic"
                    label="Task Description"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                />

            </Box>
        </Modal>
    )
}
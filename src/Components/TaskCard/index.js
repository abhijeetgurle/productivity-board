import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CreateIcon from '@mui/icons-material/Create';

export default function TaskCard(props) {
    return <div style={{ marginBottom: '20px' }}>
        <Card variant="outlined" >
            <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                    {props.title}
                </Typography>
                <Typography color="text.secondary" >
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" startIcon={<CreateIcon />}>Details</Button>
            </CardActions>
        </Card>
    </div>
}
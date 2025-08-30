import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';



export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
    
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
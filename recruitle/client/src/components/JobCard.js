import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function JobCard(props) {
    return(
        <Card>
            <CardContent>
                <Typography variant="h5">{props.title}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Quick Apply</Button>
            </CardActions>
        </Card>
    );
}
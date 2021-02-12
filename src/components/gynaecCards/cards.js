import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import gynae_img from './gynae_img.png'

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    details: {
        display: "flex",
        flexDirection: "column",
        fontSize: 10
    },
    content: {
        flex: "1 0 auto"
    },
    cover: {
        width: 151
    },
    controls: {
        display: "flex",
        alignItems: "center",
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1)
    },
    playIcon: {
        height: 38,
        width: 38
    }
}));

export default function GynaecCard() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        Dr. Lorem Ipsum
          </Typography>
                    <Typography variant="p" color="#a3a3c2">
                        MBBS, DGO, DNB - Obstetrics & Gynecology
          </Typography>
                    <hr />
                    <Typography variant="p" color="textSecondary">
                        Gurgaon Sector 5, XYZ Medicare - Maternity, Medical & Infertility
                        Centre
          </Typography>
                </CardContent>
                <Button style={{ color: "red" }}>Book on Practo</Button>
            </div>
            <CardMedia
                className={classes.cover}
                image={gynae_img}
                title="Dr. Lorem Ipsum"
            />
        </Card>
    );
}

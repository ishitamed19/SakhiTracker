import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        minWidth: 275
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)"
    },
    title: {
        fontSize: 8
    },
    pos: {
        marginBottom: 12
    }
});

export default function OutlinedCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                    >
                        Technology
          </Typography>
                    <Typography variant="h5" component="h2">
                        <a
                            href="https://news.google.com/articles/CBMiP2h0dHBzOi8vd3d3LmhlYWx0aGxpbmUuY29tL251dHJpdGlvbi9maXRuZXNzLXRyYWNrZXJzLWZvci13b21lbtIBAA?hl=en-IN&gl=IN&ceid=IN%3Aen"
                            style={{ color: "black" }}
                        >
                            The 10 Best Fitness Trackers for Women in 2021
            </a>
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Healthline | 25 Jan
          </Typography>
                </CardContent>
            </Card>

            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                    >
                        Fitness
          </Typography>
                    <Typography variant="h5" component="h2">
                        <a
                            href="https://timesofindia.indiatimes.com/life-style/health-fitness/fitness/5-common-myths-related-to-women-and-weightlifting/photostory/80728263.cms"
                            style={{ color: "black" }}
                        >
                            5 common myths related to women and weightlifting
            </a>
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        TOI | 07 Feb
          </Typography>
                </CardContent>
            </Card>

            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                    >
                        Health
          </Typography>
                    <Typography variant="h5" component="h2">
                        <a
                            href="https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/world-cancer-day-cancer-symptoms-women-should-not-ignore/photostory/80672080.cms"
                            style={{ color: "black" }}
                        >
                            World Cancer Day: Cancer symptoms women should not ignore
            </a>
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        TOI | 04 Feb
          </Typography>
                </CardContent>
            </Card>

            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                    >
                        Nutrition
          </Typography>
                    <Typography variant="h5" component="h2">
                        <a
                            href="https://food.ndtv.com/health/pcos-5-low-glycaemic-foods-you-should-add-to-your-pcos-diet-2307730"
                            style={{ color: "black" }}
                        >
                            PCOS: 5 Low Glycaemic Foods You Should Add To Your PCOS Diet
            </a>
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        NDTV | 09 Oct
          </Typography>
                </CardContent>
            </Card>
        </>
    );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Typography,
  Tooltip,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import CardReviewBadges from "../../../widgets/CardReviewBadges";

import {
  AGILE_CARD_STATUS_CHOICES,
  BLOCKED,
  READY,
  IN_PROGRESS,
  REVIEW_FEEDBACK,
  IN_REVIEW,
  COMPLETE,
} from "../../../../constants";

import yellow from "@material-ui/core/colors/yellow";
import orange from "@material-ui/core/colors/orange";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
import grey from "@material-ui/core/colors/grey";
import blue from "@material-ui/core/colors/blue";

// codeReviewCompetentSinceLastReviewRequest: 1
// codeReviewExcellentSinceLastReviewRequest: 0
// codeReviewNyCompetentSinceLastReviewRequest: 0
// codeReviewRedFlagSinceLastReviewRequest: 0
// : null
// contentItem: 288
// contentItemUrl: "https://raw.githubusercontent.com/Umuzi-org/tech-department/master/content/projects/git-exercises/_index.md"
// : null
// id: 13492
// order: 44
// recruitProject: 2500
// : "2020-08-17T09:33:33.286342Z"
// : null
// status: "C"
// title: "Git Basic Exercises"

const useStyles = makeStyles((theme) => {
  const card = {
    borderWidth: 3,
  };
  return {
    root: {
      margin: theme.spacing(1),
      width: theme.spacing(32),
      //   height: theme.spacing(16),
    },

    [BLOCKED]: { ...card, borderColor: grey[400] },
    [READY]: { ...card, borderColor: blue[400] },
    [IN_PROGRESS]: { ...card, borderColor: green[400] },
    [REVIEW_FEEDBACK]: { ...card, borderColor: red[400] },
    [IN_REVIEW]: { ...card, borderColor: orange[400] },
    [COMPLETE]: { ...card, borderColor: yellow[400] },

    row: {
      padding: 5,
    },
  };
});

const TimesTable = ({ card }) => {
  const classes = useStyles();
  const nice = (dateTime) => {
    if (dateTime) {
      const date = new Date(Date.parse(dateTime));
      return new Intl.DateTimeFormat().format(date);
    }
  };

  return (
    <Table>
      <TableBody>
        <TableRow className={classes.row}>
          <TableCell>Due</TableCell>
          <TableCell>{nice(card.dueTime)}</TableCell>
        </TableRow>
        <TableRow className={classes.row}>
          <TableCell>Start</TableCell>
          <TableCell>{nice(card.startTime)}</TableCell>
        </TableRow>
        <TableRow className={classes.row}>
          <TableCell>Review Requested</TableCell>
          <TableCell>{nice(card.reviewRequestTime)}</TableCell>
        </TableRow>
        <TableRow className={classes.row}>
          <TableCell>Complete</TableCell>
          <TableCell>{nice(card.completeTime)}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default ({ card }) => {
  const classes = useStyles();
  const title = `${card.title} - ${card.assigneeNames.join(", ")}`;
  return (
    <Tooltip title={title}>
      <Paper variant="outlined" className={classes.root}>
        <Paper className={classes[card.status]} variant="outlined">
          <Typography>{AGILE_CARD_STATUS_CHOICES[card.status]}</Typography>
        </Paper>
        <TimesTable card={card} />
        <CardReviewBadges card={card} />
      </Paper>
    </Tooltip>
  );
};

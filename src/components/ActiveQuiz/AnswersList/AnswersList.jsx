import React from "react";
import classes from "./AnswersList.css";

import AnswerItem from './AnswerItem/AnswerItem';

const AnswersList = props => (
    <ul className={classes.AnswersList}>
      {props.answers.map((answer, idx) => {
          return (
            <AnswerItem 
              state={ props.state ? props.state[answer.id] : null}
              onAnswerClick={ props.onAnswerClick }
              key={ idx } 
              answer={ answer }
            />
          );
      })}
    </ul>
);

export default AnswersList;

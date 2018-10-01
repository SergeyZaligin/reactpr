import React, { Component } from "react";
import classes from "./Quiz.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
  state = {
    isFinish: false,
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        id: 1,
        question: 'Какого цвета зеленое яблоко?',
        rightAnswerId: 3,
        answers: [
          {
            id: 1,
            text: 'Белое'
          },
          {
            id: 2,
            text: 'Красное'
          },
          {
            id: 3,
            text: 'Зеленое'
          },
          {
            id: 4,
            text: 'Синее'
          }
        ] 
      },
      {
        id: 2,
        question: 'Какого цвета красное яблоко?',
        rightAnswerId: 2,
        answers: [
          {
            id: 1,
            text: 'Белое'
          },
          {
            id: 2,
            text: 'Красное'
          },
          {
            id: 3,
            text: 'Серое'
          },
          {
            id: 4,
            text: 'Синее'
          }
        ] 
      }
    ]
  };
  onAnswerClickHandler = answerId => {

    if(this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key] === 'success') {
        return
      }
    }

    console.log('Click ', answerId);

    const question = this.state.quiz[this.state.activeQuestion];

    if (question.rightAnswerId === answerId) {

      this.setState({
        answerState: {[answerId]: 'success'} 
      });

      const timeout = window.setTimeout(() => {

        if (this.isQuizFinish()) {

          this.setState({
            isFinish: true 
          });

        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          });
        }
        window.clearTimeout(timeout);
      }, 1000);
      
    } else {
      this.setState({
        answerState: {[answerId]: 'error'} 
      });
    }
  }

  isQuizFinish () {
    if (this.state.activeQuestion + 1 === this.state.quiz.length) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Вопросы</h1>
          {
            this.state.isFinish ? <h1>Finish</h1> : 
            <ActiveQuiz 
              answers={ this.state.quiz[this.state.activeQuestion].answers } 
              question={ this.state.quiz[this.state.activeQuestion].question }
              onAnswerClick={ this.onAnswerClickHandler }
              quizLength={ this.state.quiz.length }
              answerNumber={ this.state.activeQuestion + 1 }
              state={ this.state.answerState }
            />
          }
          
        </div>
      </div>
    );
  }
}

export default Quiz;

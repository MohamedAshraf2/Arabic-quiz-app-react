import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "./styles.css";
import { FcSurvey } from "react-icons/fc";

const QuestionCard = (props) => {
  const id = props.id;
  const question = props.question;

  return (
    <div className="cardContainer">
      <div className="iconout">
        <p className="outTxt">JUM</p>
        <div className="num">
          <p className="numtxt">21</p>
        </div>
      </div>

      <div className="QuestionContainer">
        <div className="QuestionIcon">
          <FcSurvey />
        </div>
        <div className="QuestionTxt1">
          <div className="QuestionTxt">
            <p> {id} - {question} </p>
          </div>
          <div className="Questiondesc">
            <p>
              اجب على السؤال عن طريق الضغط على (مشاهدة السؤال)
            </p>
          </div>
          <div>
            <Button variant="outlined" className="btn">
              مشاهدة السؤال
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QuestionCard;

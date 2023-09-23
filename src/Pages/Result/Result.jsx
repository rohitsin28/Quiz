import React, { useEffect } from 'react'
import "./Result.css"
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router';
const Result = ({name,score}) => {

  const navigate= useNavigate();
  useEffect(()=>{
    if(!name){
      navigate("/");
    }
  },[name,navigate])

  
  return (
    <div className="result">
      <span className="title">Final Score : {score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </Button>
    </div>
  );
};


export default Result
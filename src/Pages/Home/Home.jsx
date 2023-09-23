import React, { useState } from "react";
import "./Home.css";
import { Button, MenuItem, TextField } from "@material-ui/core";
import { useNavigate } from "react-router";
import ErrorMessage from "../../componants/ErrorMessage/ErrorMessage";

const Categories = [
    {category: "General Knowledge",value: 9},
    { category: "Books", value: 10 },
    { category: "Films", value: 11 },
    { category: "Music", value: 12 },
    { category: "Animals", value: 27 },
    { category: "Vehicles", value: 28 },
    { category: "Comics", value: 29 },
  ];

  const Difficulty = [
    {value:"easy",label:"Beginner"},
    {value:"medium",label:"Intermediate"},
    {value:"hard",label:"Advance"}
  ]

const Home = ({name,setName,fetchQuestions}) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error,setError] = useState(false);
  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category,difficulty);
      navigate("/quiz");
    }
  };
    
  return (
    <div className="content">
      <div className="greet">
        <span className="greet_title">Welcome Sir/Madam</span>
        <div className="Fill-Form">
          {error && <ErrorMessage>Please Fill at all the feilds</ErrorMessage>}
          <TextField
            style={{ marginBottom: 20 }}
            variant="outlined"
            label="Enter your name"
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          <TextField
            style={{ marginBottom: 20 }}
            select
            variant="outlined"
            label="Select Subject/Topic"
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
          >
            {Categories.map((item) => (
              <MenuItem key={item.category} value={item.value}>
                {item.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            style={{ marginBottom: 20 }}
            select
            onChange={(e)=>setDifficulty(e.target.value)}
            variant="outlined"
            label="Select Level"
            value={difficulty}
          >
            {Difficulty.map((item)=>(
              <MenuItem key={item.label} value={item.value}>{item.label}</MenuItem>
            ))}
          </TextField>
          <Button variant="contained" color="primary" onClick={handleSubmit} size="large">Start Quiz</Button>
        </div>
      </div>

      <img
        src="https://images.unsplash.com/photo-1606326608690-4e0281b1e588?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cXVpenxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
        alt="quiz_image"
        className="banner"
      />
    </div>
  );
};

export default Home;

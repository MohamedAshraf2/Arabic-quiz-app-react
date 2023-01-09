import React, { useState, useEffect } from "react";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { FcCalendar } from "react-icons/fc";
import { FcSearch } from "react-icons/fc";
import QuestionCard from "../../componentes/QuestionCard";
import "./styles.css";

const data = require("./data.json");
const Home = () => {
  console.log(data);

  return (
    <div className="body">
      <div className="header">
        <h1 className="headertxt">المعاصر </h1>
        <div className="headersearch">
          <CustomizedInputBase />
        </div>
        <div className="headerIcons">
          <FcCalendar className="claenderIcon" />
          <FcSearch className="searchIcon" />
        </div>
      </div>
      <div className="content">
        <ul>
          {data.map((item) => (
            <QuestionCard
              key={item.id}
              id={item.id.toString()}
              question={item.question}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Home;

const CustomizedInputBase = () => {
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 600 }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Google "
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
        <DirectionsIcon />
      </IconButton>
    </Paper>
  );
};

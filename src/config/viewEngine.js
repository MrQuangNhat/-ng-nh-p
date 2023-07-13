import express from "express";
/*
Config view engine
*/

let configViewEngeine = (app) =>{
    app.use(express.static("./src/public"));
    app.set("view engine","ejs");
    app.set("views","./src/views");
};

module.exports = configViewEngeine;

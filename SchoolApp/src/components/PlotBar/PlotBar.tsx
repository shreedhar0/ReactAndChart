import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function randomNum() {
  let num = Math.floor(Math.random() * 20) + 1;
  return num;
}

function generateNewData() {
  return [
    { Name: "A", Num1: randomNum(), Num2: randomNum() },
    { Name: "B", Num1: randomNum(), Num2: randomNum() },
    { Name: "C", Num1: randomNum(), Num2: randomNum() },
    { Name: "D", Num1: randomNum(), Num2: randomNum() },
    { Name: "E", Num1: randomNum(), Num2: randomNum() },
    { Name: "F", Num1: randomNum(), Num2: randomNum() },
  ];
}

function PlotBar() {
  const [data, setData] = useState([
    { Name: "A", Num1: 0, Num2: 0 },
    { Name: "B", Num1: 0, Num2: 0 },
    { Name: "C", Num1: 0, Num2: 0 },
    { Name: "D", Num1: 0, Num2: 0 },
    { Name: "E", Num1: 0, Num2: 0 },
    { Name: "F", Num1: 0, Num2: 0 },
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newData = generateNewData();
      setData(newData);

      console.log(setData);

      axios.post("http://localhost:5000/barchart/savedata", newData);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div className="container-fluid">
        <h3 className="text-center mt-5">Barchart using random values.</h3>
        <div className="row mb-5">
          <div className="col-12 col-sm-10 offset-sm-2 mt-5">
            <BarChart
              width={1000}
              height={400}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Num1" fill="#8884d8" />
              <Bar dataKey="Num2" fill="#82ca9d" />
            </BarChart>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlotBar;

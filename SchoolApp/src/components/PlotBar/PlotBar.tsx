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

interface DumpModel {
  Name: string;
  Num1: number;
  Num2: number;
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
  const [dumpdata, setDumpdata] = useState<DumpModel[]>([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const data = generateNewData();
      setData(data);

      console.log(setData);

      axios.post("http://localhost:5000/barchart/savedata", data);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const dumpdata = generateNewData();
      setDumpdata(dumpdata);

      console.log(setData);

      axios.post("http://localhost:5000/barchart/savedump", dumpdata);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row mb-5">
          <div className="col-12 col-sm-6 mt-5">
            <h2 className="text-center" style={{ marginTop: "50px" }}>
              Barchart using recharts.
            </h2>
            <div
              className="table text-center"
              style={{ marginTop: "50px", width: "80%" }}
            >
              <BarChart
                width={700}
                height={350}
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

          <div className="col-12 col-sm-6 mt-5">
            <h2 className="text-center" style={{ marginTop: "50px" }}>
              Barchart data.
            </h2>
            <table
              className="table text-center border offset-sm-1"
              style={{ marginTop: "50px ", width: "80%" }}
            >
              <thead className="table-dark">
                <tr>
                  <th>Name</th>
                  <th>First Number</th>
                  <th>Second Number</th>
                </tr>
              </thead>
              <tbody className="table-light">
                {data.map((bardata) => {
                  return (
                    <tr>
                      <td>{bardata.Name}</td>
                      <td>{bardata.Num1}</td>
                      <td>{bardata.Num2}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlotBar;

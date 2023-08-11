import { PieChart } from "recharts";

function randomNum(){
    let num = Math.floor(Math.random() * 20) + 1
    return num;
}


function PlotPieChart(){
    const barData = [
        {
            "Name" : "A",
            "Num1" : randomNum(),
            "Num2" : randomNum()
    
        },
        {
            "Name" : "B",
            "Num1" : randomNum(),
            "Num2" : randomNum()    
        },
        {
            "Name" : "C",
            "Num1" : randomNum(),
            "Num2" : randomNum()    
        }
        
    ];
    
    return (
        <>
            <PieChart>
                
            </PieChart>
        </>
    );

}

export default PlotPieChart;
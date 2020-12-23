import React, {useState} from 'react'
import NumberButton from './NumberButton';

const style = {
   calcContainer: { 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'red'
},
    numsContainer: {
        width: '100px',
        gridColumnGap: 0,
        display: "grid",
        gridTemplateColumns: "repeat(4) 1fr",
        // gridTemplateRows: "repeat(5) 1fr",
},
    result: {
        display: 'grid',
        gridRow: 1,
        gridColumn: '1/4',
        height: '35px',
        backgroundColor: 'black',
        color: 'white'
},
    clearBtn: {
        backgroundColor: 'white',
        display: 'grid',
        gridRow: 2,
        gridColumn: '1/2' 
    },

}



const Calculator = () => {

const [result, setResult] = useState(0)
const nums = [7,8,9,'-',4,5,6,'x',1,2,3,'%']

    return (
        <div style={style.calcContainer}>
            <p>Calculator</p>  
            <div style={style.numsContainer}>
                <div style={style.result}>{result}</div>
                <div id="clear" style={style.clearBtn}>clear</div>
                <div id="equal">=</div>
                <div id="plus">+</div>
                    {nums.map(num => 
                        <NumberButton num={num} setResult={setResult} />
                    )}
    
            </div>
            

        </div>
    )
}


export default Calculator;
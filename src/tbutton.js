import React from 'react'
import "./styles.css"

export default function Box1(){
    document.body.backgroundColor = "black";
    var x = 1
    var tl
    var tm 
    var tr 
    var ml 
    var mm
    var mr 
    var bl
    var bm 
    var br 

    const handleClick = () => {
    if(x == 1 ){
        event.target.style.backgroundColor="red";
        event.target.textContent = "X";
        tl = 1
        x++
        console.log(tl)
        winner()
    }
    else {
        event.target.style.backgroundColor="green"
        event.target.textContent = "O";
        x--
        tl = 10
        console.log(tl)
    }

    }
    const handleClick2 = () => {
        if(x == 1 ){
            event.target.style.backgroundColor="red"
            event.target.textContent = "X";
            tm = 1
            x++
            winner()

        }
        else {
            event.target.style.backgroundColor="green"
            event.target.textContent = "O";
            x--
            tm = 10
            winner()
        }
    
        }
        const handleClick3 = () => {
            if(x == 1 ){
                event.target.style.backgroundColor="red"
                event.target.textContent = "X";
                tr = 1
                x++
                winner()
            }
            else {
                event.target.style.backgroundColor="green"
                event.target.textContent = "O";
                x--
                tr = 10
                winner()
            }
        
            }
                const handleClick4 = () => {
                if(x == 1 ){
                    event.target.style.backgroundColor="red"
                    event.target.textContent = "X";
                    x++
                    ml = 1
                    winner()
                }
                else {
                    event.target.style.backgroundColor="green"
                    event.target.textContent = "O";
                    x--
                    ml = 10
                    winner()
                }
            
                }
                    const handleClick5 = () => {
                    if(x == 1 ){
                        event.target.style.backgroundColor="red"
                        event.target.textContent = "X";
                        x++
                        mm = 1
                        winner()
                    }
                    else {
                        event.target.style.backgroundColor="green"
                        event.target.textContent = "O";
                        x--
                        mm = 10
                        winner()
                    }
                
                    }
                        const handleClick6 = () => {
                        if(x == 1 ){
                            event.target.style.backgroundColor="red"
                            event.target.textContent = "X";
                            x++
                            mr = 1
                            winner()
                        }
                        else {
                            event.target.style.backgroundColor="green"
                            event.target.textContent = "O";
                            x--
                            mr = 10
                            winner()
                        }
                    
                        }
                            const handleClick7 = () => {
                            if(x == 1 ){
                                event.target.style.backgroundColor="red"
                                event.target.textContent = "X";
                                x++
                                bl = 1
                                winner()
                            }
                            else {
                                event.target.style.backgroundColor="green"
                                event.target.textContent = "O";
                                x--
                                bl = 10
                                winner()
                            }
                        
                            }
                                const handleClick8 = () => {
                                if(x == 1 ){
                                    event.target.style.backgroundColor="red"
                                    event.target.textContent = "X";
                                    x++
                                    bm = 1
                                    winner()
                                }
                                else {
                                    event.target.style.backgroundColor="green"
                                    event.target.textContent = "O";
                                    x--
                                    bm = 10
                                    winner()
                                }
                            
                                }
                                    const handleClick9 = () => {
                                    if(x == 1 ){
                                        event.target.style.backgroundColor="red"
                                        event.target.textContent = "X";
                                        x++
                                        br = 1
                                        winner()
                                    }
                                    else {
                                        event.target.style.backgroundColor="green"
                                        event.target.textContent = "O";
                                        x--
                                        br = 10
                                        winner()
                                    }
                                
                                    }
        function winner(){
            if(tl + tm + tr == 3) {
                document.body.style.backgroundColor = "red";
            } else if (tl + tm + tr == 30){
                document.body.style.backgroundColor = "green";
            }else if(ml + mm + mr == 3){
                document.body.style.backgroundColor = "red";
            }else if (ml + mm + mr == 30){
                document.body.style.backgroundColor = "green";
            }else if (bl + bm + br == 3) {
                document.body.style.backgroundColor = "red";
            }else if (bl + bm + br == 30){
                document.body.style.backgroundColor = "green";
            }else if (tl + ml + bl == 3){
                document.body.style.backgroundColor = "red";
            }else if (tl + ml + bl == 30){
                document.body.style.backgroundColor = "green";
            }else if (tm + mm + bm == 3){
                document.body.style.backgroundColor = "red";
            }else if (tm + mm + bm == 30){
                document.body.style.backgroundColor = "green";
            }else if (tr + mr + br == 3){
                document.body.style.backgroundColor = "red";
            }else if (tr + mr + br == 30){
                document.body.style.backgroundColor = "green";
            }else if (tl + mm + br == 3){
                document.body.style.backgroundColor = "red";
            }else if (tl + mm + br == 30){
                document.body.style.backgroundColor = "green";
            }else if (tr + mm + bl == 3){
                document.body.style.backgroundColor = "red";
            }else if (tr + mm + bl == 30){
                document.body.style.backgroundColor = "green";
        } else {
            document.body.style.backgroundColor = "black"
        }
    }

    function CLEAR(){
        const element1 = document.getElementById("button1");
        const element2 = document.getElementById("button2");
        const element3 = document.getElementById("button3");
        const element4 = document.getElementById("button4");
        const element5 = document.getElementById("button5");
        const element6 = document.getElementById("button6");
        const element7 = document.getElementById("button7");
        const element8 = document.getElementById("button8");
        const element9 = document.getElementById("button9");
        x = 1;
        document.body.style.backgroundColor = "black";
        tl = 0; tm = 0; tr = 0; ml = 0; mm = 0; mr = 0; bl = 0; bm = 0; br = 0;
        element1.style.backgroundColor = "white";
        element2.style.backgroundColor = "white";
        element3.style.backgroundColor = "white";
        element4.style.backgroundColor = "white";
        element5.style.backgroundColor = "white";
        element6.style.backgroundColor = "white";
        element7.style.backgroundColor = "white";
        element8.style.backgroundColor = "white";
        element9.style.backgroundColor = "white";
        element1.textContent = " "
        element2.textContent = " "
        element3.textContent = " "
        element4.textContent = " "
        element5.textContent = " "
        element6.textContent = " "
        element7.textContent = " "
        element8.textContent = " "
        element9.textContent = " "
    }
        console.log(tl, tm, tr, ml, mm, mr, bl, bm, br)
    return(
        <div className='myown-grid'>
            <button id="button1" className="ttbutton"onClick={handleClick} > </button>
            <button id="button2" className="ttbutton"onClick={handleClick2}> </button>
            <button id="button3" className="ttbutton"onClick={handleClick3}> </button>
            <button id="button4" className="ttbutton"onClick={handleClick4}> </button>
            <button id="button5" className="ttbutton"onClick={handleClick5}> </button>
            <button id="button6" className="ttbutton"onClick={handleClick6}> </button>
            <button id="button7" className="ttbutton"onClick={handleClick7}> </button>
            <button id="button8" className="ttbutton"onClick={handleClick8}> </button>
            <button id="button9" className="ttbutton"onClick={handleClick9}> </button>
            <button className="ttbuttonbottom"onClick={CLEAR}>CLEAR</button>
        </div>
        
    )

}

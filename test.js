function game(){

}
var binary;
var binary2;
function numbers(){
    let binary = "";
    let digit1 = 0;
    let digit2 = Math.floor(Math.random()*2);
    let digit3 = Math.floor(Math.random()*2);
    let digit4 = Math.floor(Math.random()*2);
    let digit5 = Math.floor(Math.random()*2);
    let digit6 = Math.floor(Math.random()*2);
    let digit7 = Math.floor(Math.random()*2);
    let digit8 = Math.floor(Math.random()*2);

    
    binary += digit1.toString();
    binary += digit2.toString();
    binary += digit3.toString();
    binary += digit4.toString();
    binary += digit5.toString();
    binary += digit6.toString();
    binary += digit7.toString();
    binary += digit8.toString();

    
    window.binary = binary;

    let binary2 = "";
    let digit11 = 0;
    let digit22 = Math.floor(Math.random()*2);
    let digit33 = Math.floor(Math.random()*2);
    let digit44 = Math.floor(Math.random()*2);
    let digit55 = Math.floor(Math.random()*2);
    let digit66 = Math.floor(Math.random()*2);
    let digit77 = Math.floor(Math.random()*2);
    let digit88 = Math.floor(Math.random()*2);


    binary2 += digit11.toString();
    binary2 += digit22.toString();
    binary2 += digit33.toString();
    binary2 += digit44.toString();
    binary2 += digit55.toString();
    binary2 += digit66.toString();
    binary2 += digit77.toString();
    binary2 += digit88.toString();

    window.binary2 = binary2;

    //alert('Binary1 :'+binary +'  Binary2 :'+ binary2);
    
    document.getElementById('binary1_number1').innerText = digit11
    document.getElementById('binary1_number2').innerText = digit22
    document.getElementById('binary1_number3').innerText = digit33
    document.getElementById('binary1_number4').innerText = digit44
    document.getElementById('binary1_number5').innerText = digit55
    document.getElementById('binary1_number6').innerText = digit66
    document.getElementById('binary1_number7').innerText = digit77
    document.getElementById('binary1_number8').innerText = digit88
    
    document.getElementById('binary2_number1').innerText = digit1
    document.getElementById('binary2_number2').innerText = digit2
    document.getElementById('binary2_number3').innerText = digit3
    document.getElementById('binary2_number4').innerText = digit4
    document.getElementById('binary2_number5').innerText = digit5
    document.getElementById('binary2_number6').innerText = digit6
    document.getElementById('binary2_number7').innerText = digit7
    document.getElementById('binary2_number8').innerText = digit8
    //document.getElementById('binarynumber1').innerText = "Binary 1: "+ binary;
    //document.getElementById('binarynumber2').innerText = "Binary 2: "+ binary2;
}
var final = "";
var answerdenary1 = 0;
var answerdenary2 = 0;
var totaldenary = 0;

function subtraction(){
    

    let number = 0;
    let answer = "";

    //let binary = document.getElementById('binarynumber1').innerText.split(': ')[1];
    //let binary2 = document.getElementById('binarynumber2').innerText.split(': ')[1];

    let digit11 = binary[0];
    let digit22 = binary[1];
    let digit33 = binary[2];
    let digit44 = binary[3];
    let digit55 = binary[4];
    let digit66 = binary[5];
    let digit77 = binary[6];
    let digit88 = binary[7];

    
    

    let digit1 = binary2[0];
    let digit2 = binary2[1];
    let digit3 = binary2[2];
    let digit4 = binary2[3];
    let digit5 = binary2[4];
    let digit6 = binary2[5];
    let digit7 = binary2[6];
    let digit8 = binary2[7];

    
    
    let denary1 = 0;
    let denary2 = 0;
    let denary3 = 0;

    // number 1 ------------------------------------------
    if (digit11 == 1){
        denary2 = denary2 + 128;
    }
    if (digit22 == 1){
        denary2 = denary2 + 64;
    }
    if (digit33 == 1){
        denary2 = denary2 + 32;
    }
    if (digit44 == 1){
        denary2 = denary2 + 16;
    }
    if (digit55 == 1){
        denary2 = denary2 + 8;
    }
    if (digit66 == 1){
        denary2 = denary2 + 4;
    }
    if (digit77 == 1){
        denary2 = denary2 + 2;
    }
    if (digit88 == 1){
        denary2 = denary2 + 1;
    }
    let answerdenary1 = denary2;

    // number 2 ------------------------------------------------
    if (digit1 == 1){
        denary1 = denary1 + 128;
    }
    if (digit2 == 1){
        denary1 = denary1 + 64;
    }
    if (digit3 == 1){
        denary1 = denary1 + 32;
    }
    if (digit4 == 1){
        denary1 = denary1 + 16;
    }
    if (digit5 == 1){
        denary1 = denary1 + 8;
    }
    if (digit6 == 1){
        denary1 = denary1 + 4;
    }
    if (digit7 == 1){
        denary1 = denary1 + 2;
    }
    if (digit8 == 1){
        denary1 = denary1 + 1;
    }
    let answerdenary2 = denary1;

    denary3 = denary2 - denary1;

    let totaldenary = denary3;
    window.totaldenary = totaldenary;
    window.answerdenary1 = answerdenary1;
    window.answerdenary2 = answerdenary2;
    alert('Denary1: '+answerdenary1+ " Denary2: "+answerdenary2+" Denary3: "+totaldenary);
    
    if (denary3 < 0){
        let number = denary3 *-1;
        let plus1 = "00000001";
        let answer = "";
        let binary = "";

        if (number > 127){
            number = number -128
            answer = answer += "1".toString();
        } else{
            answer = answer += "0".toString()
        };
        if (number > 63){
            number = number -64
            answer = answer += "1".toString();
        } else{
            answer = answer += "0".toString()
        };
        if (number > 31){
            number = number -32
            answer = answer += "1".toString();
        } else{
            answer = answer += "0".toString()
        };
        if (number > 17){
            number = number -16
            answer = answer += "1".toString();
        } else{
            answer = answer += "0".toString()
        };
        if (number > 7){
            number = number -8
            answer = answer += "1".toString();
        } else{
            answer = answer += "0".toString()
        };
        if (number > 3){
            number = number -4
            answer = answer += "1".toString();
        } else{
            answer = answer += "0".toString()
        };
        if (number > 1){
            number = number -2
            answer = answer += "1".toString();
        } else{
            answer = answer += "0".toString()
        };
        if (number > 0){
            number = number -1
            answer = answer += "1".toString();
        } else{
            answer = answer += "0".toString()
        };

        // alert(answer);
        
        for (let i = 0; i < answer.length; i++){
            if (answer[i] == 0){
                binary = binary += "1".toString();

            }else if (answer[i] == 1){
                binary = binary += "0".toString();
            };
        };
        //alert(binary);
        let sum = (parseInt(binary, 2) + parseInt(plus1, 2)).toString(2);
        let final = sum;
        alert(final);


    } else if (denary3 >= 0 ){
        let final = "";
        if ((denary3 - 128) >= 0){
            denary3  = denary3 -128
            final = final += "1".toString();
        }else {
            final = final += "0".toString();
        };
        if ((denary3 - 64) >= 0){
            denary3  = denary3 -64
            final = final += "1".toString();
        }else {
            final = final += "0".toString();
        };
        if ((denary3 - 32) >= 0){
            denary3  = denary3 -32
            final = final += "1".toString();
        }else {
            final = final += "0".toString();
        };
        if ((denary3 - 16) >= 0){
            denary3  = denary3 -16
            final = final += "1".toString();
        }else {
            final = final += "0".toString();
        };
        if ((denary3 -8) >= 0){
            denary3  = denary3 -8
            final = final += "1".toString();
        }else {
            final = final += "0".toString();
        };
        if ((denary3 -4) >= 0){
            denary3  = denary3 -4
            final = final += "1".toString();
        }else {
            final = final += "0".toString();
        };
        if ((denary3 -2) >= 0){
            denary3  = denary3 -2
            final = final += "1".toString();
        }else {
            final = final += "0".toString();
        };
        if ((denary3 - 1) >= 0){
            denary3  = denary3 -1
            final = final += "1".toString();
        }else {
            final = final += "0".toString();
        };
        if (denary3 >=1){
            alert("Error! Binary leftover "+ denary3);
        };
        alert(final);
        window.final = final;
        check();

    } else{
        alert("Error!")
    };

}  
User_answer1 = document.getElementById('User_answer1').innerText
User_answer2 = document.getElementById('User_answer2').innerText
User_answer3 = document.getElementById('User_answer3').innerText
User_answer4 = document.getElementById('User_answer4').innerText
User_answer5 = document.getElementById('User_answer5').innerText
User_answer6 = document.getElementById('User_answer6').innerText
User_answer7 = document.getElementById('User_answer7').innerText
User_answer8 = document.getElementById('User_answer8').innerText
function check(){
    //alert("Value of final " + final);
    //alert("Value of answerdenary1 " + answerdenary1);
    //alert("Value of answerdenary2 " + answerdenary2);
    //alert("Value of totaldenary " + totaldenary);
    if (final == User_answer1){
        
    };





};
window.onload = numbers;
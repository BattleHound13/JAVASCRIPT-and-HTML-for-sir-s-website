function game(){
    checkAndChangeColor()
    numbers()
    document.getElementById('User_invert1').value = "";
    document.getElementById('User_invert2').value = "";
    document.getElementById('User_invert3').value = "";
    document.getElementById('User_invert4').value = "";
    document.getElementById('User_invert5').value = "";
    document.getElementById('User_invert6').value = "";
    document.getElementById('User_invert7').value = "";
    document.getElementById('User_invert8').value = "";
    document.getElementById('User_answer1').value = "";
    document.getElementById('User_answer2').value = "";
    document.getElementById('User_answer3').value = "";
    document.getElementById('User_answer4').value = "";
    document.getElementById('User_answer5').value = "";
    document.getElementById('User_answer6').value = "";
    document.getElementById('User_answer7').value = "";
    document.getElementById('User_answer8').value = "";

    subtraction()
}
var binary = "";
var binary2 = "";
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
    
    document.getElementById('binary1_number1').innerText = digit1
    document.getElementById('binary1_number2').innerText = digit2
    document.getElementById('binary1_number3').innerText = digit3
    document.getElementById('binary1_number4').innerText = digit4
    document.getElementById('binary1_number5').innerText = digit5
    document.getElementById('binary1_number6').innerText = digit6
    document.getElementById('binary1_number7').innerText = digit7
    document.getElementById('binary1_number8').innerText = digit8
    
    document.getElementById('binary2_number1').innerText = digit11
    document.getElementById('binary2_number2').innerText = digit22
    document.getElementById('binary2_number3').innerText = digit33
    document.getElementById('binary2_number4').innerText = digit44
    document.getElementById('binary2_number5').innerText = digit55
    document.getElementById('binary2_number6').innerText = digit66
    document.getElementById('binary2_number7').innerText = digit77
    document.getElementById('binary2_number8').innerText = digit88
    //document.getElementById('binarynumber1').innerText = "Binary 1: "+ binary;
    //document.getElementById('binarynumber2').innerText = "Binary 2: "+ binary2;
    
}



var answer = "";
var total;
var answer0;
var answer1;
var answer2;
var answer3;
var answer4;
var answer5;
var answer6;
var answer7;
var answer8;
function subtraction(){
    let digit11 = "";
    let digit22 = "";
    let digit33 = "";
    let digit44 = "";
    let digit55 = "";
    let digit66 = "";
    let digit77 = "";
    let digit88 = "";

    let digit1 = "";
    let digit2 = "";
    let digit3 = "";
    let digit4 = "";
    let digit5 = "";
    let digit6 = "";
    let digit7 = "";
    let digit8 = "";

    let number = 0;
    let answer = "";

    //let binary = document.getElementById('binarynumber1').innerText.split(': ')[1];
    //let binary2 = document.getElementById('binarynumber2').innerText.split(': ')[1];

    console.log("Binary1: "+ binary);
    console.log("Binary2: "+ binary2);

    digit11 = binary[0];
    digit22 = binary[1];
    digit33 = binary[2];
    digit44 = binary[3];
    digit55 = binary[4];
    digit66 = binary[5];
    digit77 = binary[6];
    digit88 = binary[7];

    
    

    digit1 = binary2[0];
    digit2 = binary2[1];
    digit3 = binary2[2];
    digit4 = binary2[3];
    digit5 = binary2[4];
    digit6 = binary2[5];
    digit7 = binary2[6];
    digit8 = binary2[7];



    // inverts binary2 ---------------------------------------------
    if (digit8 == 1){
        if (digit1 ==1){
            answer = answer += "0".toString();
            console.log("1 to 0 :", answer);
        }
        else {
            answer = answer += "1".toString();
            console.log("0 to 1 :", answer);
        };
        if  (digit2 ==1){
            answer = answer += "0".toString();
            console.log("1 to 0 :", answer);
        }
        else {
            answer = answer += "1".toString();
            console.log("0 to 1 :", answer);
        };
        if (digit3 ==1){
            answer = answer += "0".toString();
            console.log("1 to 0 :", answer);
        }
        else {
            answer = answer += "1".toString();
            console.log("0 to 1 :", answer);
        };
        if (digit4 ==1){
            answer = answer += "0".toString();
            console.log("1 to 0 :", answer);
        }
        else {
            answer = answer += "1".toString();
            console.log("0 to 1 :", answer);
        };
        if (digit5 ==1){
            answer = answer += "0".toString();
            console.log("1 to 0 :", answer);
        }
        else {
            answer = answer += "1".toString();
            console.log("0 to 1 :", answer);
        };
        if (digit6 ==1){
            answer = answer += "0".toString();
            console.log("1 to 0 :", answer);
        }
        else {
            answer = answer += "1".toString();
            console.log("0 to 1 :", answer);
        };
        if (digit7 ==1){
            answer = answer += "0".toString();
            console.log("1 to 0 :", answer);
        }
        else {
            answer = answer += "1".toString();
            console.log("0 to 1 :", answer);
        };
        
        
        answer = answer += digit8.toString();
        console.log("Binary2 :", binary2);
        console.log("Binary 2 invert:", answer);
    }


    else if (digit8 == 0  && digit7 == 1){
        if (digit1 ==1){
            answer = answer += "0".toString();
            console.log("1 to 0 :", answer);
        }
        else {
            answer = answer += "1".toString();
            console.log("0 to 1 :", answer);
        };
        if  (digit2 ==1){
            answer = answer += "0".toString();
            console.log("1 to 0 :", answer);
        }
        else {
            answer = answer += "1".toString();
            console.log("0 to 1 :", answer);
        };
        if (digit3 ==1){
            answer = answer += "0".toString();
            console.log("1 to 0 :", answer);
        }
        else {
            answer = answer += "1".toString();
            console.log("0 to 1 :", answer);
        };
        if (digit4 ==1){
            answer = answer += "0".toString();
            console.log("1 to 0 :", answer);
        }
        else {
            answer = answer += "1".toString();
            console.log("0 to 1 :", answer);
        };
        if (digit5 ==1){
            answer = answer += "0".toString();
            console.log("1 to 0 :", answer);
        }
        else {
            answer = answer += "1".toString();
            console.log("0 to 1 :", answer);
        };
        if (digit6 ==1){
            answer = answer += "0".toString();
            console.log("1 to 0 :", answer);
        }
        else {
            answer = answer += "1".toString();
            console.log("0 to 1 :", answer);
        };
        
        
        answer = answer += digit7.toString()
        answer = answer += digit8.toString()
        console.log("Binary2 :", binary2);
        console.log("Binary 2 invert:", answer);
    }
    else if (digit8 == 0  && digit7 == 0 && digit6 ==1){
        if (digit1 ==1){
            answer = answer += "0".toString();
            console.log("1 to 0 :", answer);
        }
        else {
            answer = answer += "1".toString();
            console.log("0 to 1 :", answer);
        };
        if  (digit2 ==1){
            answer = answer += "0".toString();
            console.log("1 to 0 :", answer);
        }
        else {
            answer = answer += "1".toString();
            console.log("0 to 1 :", answer);
        };
        if (digit3 ==1){
            answer = answer += "0".toString();
            console.log("1 to 0 :", answer);
        }
        else {
            answer = answer += "1".toString();
            console.log("0 to 1 :", answer);
        };
        if (digit4 ==1){
            answer = answer += "0".toString();
            console.log("1 to 0 :", answer);
        }
        else {
            answer = answer += "1".toString();
            console.log("0 to 1 :", answer);
        };
        if (digit5 ==1){
            answer = answer += "0".toString();
            console.log("1 to 0 :", answer);
        }
        else {
            answer = answer += "1".toString();
            console.log("0 to 1 :", answer);
        };
        
        
        
        
        
        answer = answer += digit6.toString()
        answer = answer += digit7.toString()
        answer = answer += digit8.toString()
        console.log("Binary2 :", binary2);
        console.log("Binary 2 invert:", answer);
    }
    else if (digit8 == 0  && digit7 == 0 && digit6 ==0 && digit5 ==1){
        if (digit1 ==1){
            answer = answer += "0".toString();
            console.log("1 to 0 :", answer);
        }
        else {
            answer = answer += "1".toString();
            console.log("0 to 1 :", answer);
        };
        if  (digit2 ==1){
            answer = answer += "0".toString();
            console.log("1 to 0 :", answer);
        }
        else {
            answer = answer += "1".toString();
            console.log("0 to 1 :", answer);
        };
        if (digit3 ==1){
            answer = answer += "0".toString();
            console.log("1 to 0 :", answer);
        }
        else {
            answer = answer += "1".toString();
            console.log("0 to 1 :", answer);
        };
        if (digit4 ==1){
            answer = answer += "0".toString();
            console.log("1 to 0 :", answer);
        }
        else {
            answer = answer += "1".toString();
            console.log("0 to 1 :", answer);
        };
        
        
        answer = answer += digit5.toString()
        answer = answer += digit6.toString()
        answer = answer += digit7.toString()
        answer = answer += digit8.toString()
        console.log("Binary2 :", binary2);
        console.log("Binary 2 invert:", answer);
    }
    else if (digit8 == 0  && digit7 == 0 && digit6 ==0 && digit5 ==0 && digit4 ==1 ){
        if (digit1 ==1){
            answer = answer += "0".toString();
            console.log("1 to 0 :", answer);
        }
        else {
            answer = answer += "1".toString();
            console.log("0 to 1 :", answer);
        };
        if  (digit2 ==1){
            answer = answer += "0".toString();
            console.log("1 to 0 :", answer);
        }
        else {
            answer = answer += "1".toString();
            console.log("0 to 1 :", answer);
        };
        if (digit3 ==1){
            answer = answer += "0".toString();
            console.log("1 to 0 :", answer);
        }
        else {
            answer = answer += "1".toString();
            console.log("0 to 1 :", answer);
        };
        
        
        answer = answer += digit4.toString()
        answer = answer += digit5.toString()
        answer = answer += digit6.toString()
        answer = answer += digit7.toString()
        answer = answer += digit8.toString()
        console.log("Binary2 :", binary2);
        console.log("Binary 2 invert:", answer);
    }
    else if (digit8 == 0  && digit7 == 0 && digit6 ==0 && digit5 ==0 && digit5 ==0 && digit3 ==1){
        if (digit1 ==1){
            answer = answer += "0".toString();
            console.log("1 to 0 :", answer);
        }
        else {
            answer = answer += "1".toString();
            console.log("0 to 1 :", answer);
        };
        if  (digit2 ==1){
            answer = answer += "0".toString();
            console.log("1 to 0 :", answer);
        }
        else {
            answer = answer += "1".toString();
            console.log("0 to 1 :", answer);
        };
        
        
        answer = answer += digit3.toString()
        answer = answer += digit4.toString()
        answer = answer += digit5.toString()
        answer = answer += digit6.toString()
        answer = answer += digit7.toString()
        answer = answer += digit8.toString()
        console.log("Binary2 :", binary2);
        console.log("Binary 2 invert:", answer);
    }
    else if (digit8 == 0  && digit7 == 0 && digit6 ==0 && digit5 ==0 && digit5 ==0 && digit5 ==0 && digit2 ==1){
        if (digit1 ==1){
            answer = answer += "0".toString();
            console.log("1 to 0 :", answer);
        }
        else {
            answer = answer += "1".toString();
            console.log("0 to 1 :", answer);
        };
        
        
        answer = answer += digit2.toString()
        answer = answer += digit3.toString()
        answer = answer += digit4.toString()
        answer = answer += digit5.toString()
        answer = answer += digit6.toString()
        answer = answer += digit7.toString()
        answer = answer += digit8.toString()
        console.log("Binary2 :", binary2);
        console.log("Binary 2 invert:", answer);
    };
    //alert('answer '+answer);
    window.answer = answer;
    // Parse the digits from the binary strings
// Parse the digits from the binary strings
digit1 = parseInt(binary[0]);
digit2 = parseInt(binary[1]);
digit3 = parseInt(binary[2]);
digit4 = parseInt(binary[3]);
digit5 = parseInt(binary[4]);
digit6 = parseInt(binary[5]);
digit7 = parseInt(binary[6]);
digit8 = parseInt(binary[7]);

digit11 = parseInt(answer[0]);
digit22 = parseInt(answer[1]);
digit33 = parseInt(answer[2]);
digit44 = parseInt(answer[3]);
digit55 = parseInt(answer[4]);
digit66 = parseInt(answer[5]);
digit77 = parseInt(answer[6]);
digit88 = parseInt(answer[7]);


window.digit11 = digit11
window.digit22 = digit22
window.digit33 = digit33
window.digit44 = digit44
window.digit55 = digit55
window.digit66 = digit66
window.digit77 = digit77
window.digit88 = digit88
// Initialize answer variables
let answer0 = "0";
let answer1 = "";
let answer2 = "";
let answer3 = "";
let answer4 = "";
let answer5 = "";
let answer6 = "";
let answer7 = "";
let answer8 = "";
let carry = 0;

// Column 1 (least significant bit) ---------------------------------------
if (digit8 + digit88 + carry == 0){
    answer8 += "0";
    carry = 0;
} else if(digit8 + digit88 + carry == 1){
    answer8 += "1";
    carry = 0;
} else if(digit8 + digit88 + carry == 2){
    answer8 += "0";
    carry = 1;
} else if(digit8 + digit88 + carry == 3){
    answer8 += "1";
    carry = 1;
}

// Column 2 ---------------------------------------------------------------
if (digit7 + digit77 + carry == 0){
    answer7 += "0";
    carry = 0;
} else if(digit7 + digit77 + carry == 1){
    answer7 += "1";
    carry = 0;
} else if(digit7 + digit77 + carry == 2){
    answer7 += "0";
    carry = 1;
} else if(digit7 + digit77 + carry == 3){
    answer7 += "1";
    carry = 1;
}

// Column 3 ---------------------------------------------------------------
if (digit6 + digit66 + carry == 0){
    answer6 += "0";
    carry = 0;
} else if(digit6 + digit66 + carry == 1){
    answer6 += "1";
    carry = 0;
} else if(digit6 + digit66 + carry == 2){
    answer6 += "0";
    carry = 1;
} else if(digit6 + digit66 + carry == 3){
    answer6 += "1";
    carry = 1;
}

// Column 4 ---------------------------------------------------------------
if (digit5 + digit55 + carry == 0){
    answer5 += "0";
    carry = 0;
} else if(digit5 + digit55 + carry == 1){
    answer5 += "1";
    carry = 0;
} else if(digit5 + digit55 + carry == 2){
    answer5 += "0";
    carry = 1;
} else if(digit5 + digit55 + carry == 3){
    answer5 += "1";
    carry = 1;
}

// Column 5 ---------------------------------------------------------------
if (digit4 + digit44 + carry == 0){
    answer4 += "0";
    carry = 0;
} else if(digit4 + digit44 + carry == 1){
    answer4 += "1";
    carry = 0;
} else if(digit4 + digit44 + carry == 2){
    answer4 += "0";
    carry = 1;
} else if(digit4 + digit44 + carry == 3){
    answer4 += "1";
    carry = 1;
}

// Column 6 ---------------------------------------------------------------
if (digit3 + digit33 + carry == 0){
    answer3 += "0";
    carry = 0;
} else if(digit3 + digit33 + carry == 1){
    answer3 += "1";
    carry = 0;
} else if(digit3 + digit33 + carry == 2){
    answer3 += "0";
    carry = 1;
} else if(digit3 + digit33 + carry == 3){
    answer3 += "1";
    carry = 1;
}

// Column 7 ---------------------------------------------------------------
if (digit2 + digit22 + carry == 0){
    answer2 += "0";
    carry = 0;
} else if(digit2 + digit22 + carry == 1){
    answer2 += "1";
    carry = 0;
} else if(digit2 + digit22 + carry == 2){
    answer2 += "0";
    carry = 1;
} else if(digit2 + digit22 + carry == 3){
    answer2 += "1";
    carry = 1;
}

// Column 8 (most significant bit) ---------------------------------------
if (digit1 + digit11 + carry == 0){
    answer1 += "0";
    answer0 += "0";
} else if(digit1 + digit11 + carry == 1){
    answer1 += "1";
    answer0 += "0";
} else if(digit1 + digit11 + carry == 2){
    answer1 += "0";
    answer0 += "1";
} else if(digit1 + digit11 + carry == 3){
    answer1 += "1";
    answer0 += "1";
}



    


    
    console.log("ANSWER1: "+answer1);
    console.log("ANSWER2: "+answer2);
    console.log("ANSWER3: "+answer3);
    console.log("ANSWER4: "+answer4);
    console.log("ANSWER5: "+answer5);
    console.log("ANSWER6: "+answer6);
    console.log("ANSWER7: "+answer7);
    console.log("ANSWER8: "+answer8);
    let total = "";
    total = total + answer1.toString();
    total = total + answer2.toString();
    total = total + answer3.toString();
    total = total + answer4.toString();
    total = total + answer5.toString();
    total = total + answer6.toString();
    total = total + answer7.toString();
    total = total + answer8.toString();
    
    alert("TOTAL: "+total);
    console.log("Total: "+total);
    window.total = total;



};  

function totaluseranswer(){
    let totaluseranswer = "";
    totaluseranswer += document.getElementById('User_answer1').value;
    totaluseranswer += document.getElementById('User_answer2').value;
    totaluseranswer += document.getElementById('User_answer3').value;
    totaluseranswer += document.getElementById('User_answer4').value;
    totaluseranswer += document.getElementById('User_answer5').value;
    totaluseranswer += document.getElementById('User_answer6').value;
    totaluseranswer += document.getElementById('User_answer7').value;
    totaluseranswer += document.getElementById('User_answer8').value;
    return totaluseranswer; // Return the concatenated result
};


function totaluserinvert() {
    let totaluserinvert = "";
    totaluserinvert += document.getElementById('User_invert1').value;
    totaluserinvert += document.getElementById('User_invert2').value;
    totaluserinvert += document.getElementById('User_invert3').value;
    totaluserinvert += document.getElementById('User_invert4').value;
    totaluserinvert += document.getElementById('User_invert5').value;
    totaluserinvert += document.getElementById('User_invert6').value;
    totaluserinvert += document.getElementById('User_invert7').value;
    totaluserinvert += document.getElementById('User_invert8').value;
    return totaluserinvert; // Return the concatenated result
}



function check(){
  let userinvert = totaluserinvert();
  let useranswer = totaluseranswer();

  //alert("USER ANSWER " + totaluseranswer2)
  if (userinvert == answer){
    alert("Correct inversion")
  }else {
    alert("Incorrect inversion! Correct value: "+answer);
  };


  if (useranswer == total){
    alert("Correct total")
  }else{
    alert("Incorrect total! Correct value: "+total);
  };



};

function checkAndChangeColor() {
    // Get the input elements
    let input1 = document.getElementById('User_invert1');
    let input2 = document.getElementById('User_invert2');
    let input3 = document.getElementById('User_invert3');
    let input4 = document.getElementById('User_invert4');
    let input5 = document.getElementById('User_invert5');
    let input6 = document.getElementById('User_invert6');
    let input7 = document.getElementById('User_invert7');
    let input8 = document.getElementById('User_invert8');
    

    let output1 = document.getElementById('binary2_number1');
    let output2 = document.getElementById('binary2_number2');
    let output3 = document.getElementById('binary2_number3');
    let output4 = document.getElementById('binary2_number4');
    let output5 = document.getElementById('binary2_number5');
    let output6 = document.getElementById('binary2_number6');
    let output7 = document.getElementById('binary2_number7');
    let output8 = document.getElementById('binary2_number8');
    let output9 = document.getElementById('symbol1');
    let output10 = document.getElementById('symbol2');

    // Check if all inputs are '1'
    if (input1.value.length == 1 && input2.value.length == 1 && input3.value.length == 1 &&
        input4.value.length == 1 && input5.value.length == 1 && input6.value.length == 1 &&
        input7.value.length == 1 && input8.value.length == 1) {
        
        output1.style.color = '#A9A9A9';
        output2.style.color = '#A9A9A9';
        output3.style.color = '#A9A9A9';
        output4.style.color = '#A9A9A9';
        output5.style.color = '#A9A9A9';
        output6.style.color = '#A9A9A9';
        output7.style.color = '#A9A9A9';
        output8.style.color = '#A9A9A9';
        output9.style.color = '#A9A9A9';
        output10.style.color = '';
    } else {
        // Reset color if not all inputs are '1'
        output1.style.color = '';
        output2.style.color = '';
        output3.style.color = '';
        output4.style.color = '';
        output5.style.color = '';
        output6.style.color = '';
        output7.style.color = '';
        output8.style.color = '';
        output9.style.color = '';
        output10.style.color = '#A9A9A9';
    }
}
window.onload = game;


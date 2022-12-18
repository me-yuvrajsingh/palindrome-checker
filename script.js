function checking(){
    var inpNum = document.querySelector(".inp").value;

    var num = inpNum.toString().split().join(",");
    len = num.length;
    var val;
    for(var i = 0; i<len; i++){
        if(num[i] == num[(len-1)-i]){
            val = 0;
        }
        else{
            val = 1;
            break;
        }
    }
    if(val == 0){

        document.querySelector(".output").innerHTML = `${inpNum} is a palindrome!`;
    }
    else{

        document.querySelector(".output").innerHTML = `${inpNum} is not a palindrome!`;
    }
}
let nArr = [45,125];
nArr.forEach((n)=>{
    console.log(solution(n));
})

function solution(n) {
    var answer = 0;

    let threeNumber = "";
    while(n>=3){
        threeNumber += n%3;
        n = Math.floor(n/3);
    }
    
    threeNumber += n;
    threeNumber = threeNumber.split("").reverse().join("");

    for(let i=0; i<threeNumber.length; i++){
        answer += threeNumber[i]*(3**i);
    }

    return answer;
}

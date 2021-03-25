
let test = [[2,1,3,4,1],[5,0,2,7]];

for(let i=0; i<test.length; i++){
    console.log(solution(test[i]));
}

function solution(numbers) {
    var answer = [];
    
    for(let i=0; i<numbers.length; i++){
        let mainNumber = numbers[i];

        for(let j=i+1; j<numbers.length; j++){
            let subNumber = numbers[j];
            let sum = mainNumber + subNumber;

            if(answer.indexOf(sum)!==-1){
                continue;
            }

            answer.push(sum);
        }
    }
    
    answer.sort((a,b)=> a-b);
    return answer;
}
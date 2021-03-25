let test = [[1,2,3,4,5],[1,3,2,4,2],[8]];
for(let i=0; i<test.length;i++){
    console.log(solution(test[i]));
}

function solution(answers) {
    var answer = [];

    let students ={1:{point:0, way:[1,2,3,4,5]},
    2:{point:0, way:[2,1,2,3,2,4,2,5]},
    3:{point:0, way:[3,3,1,1,2,2,4,4,5,5]}};

    for(let key in students){
        let way = students[key].way;

        for(let i=0; i<answers.length; i++){
            let number = answers[i];

            if(number===way[i%way.length]){
                students[key].point++;
            }
        }
    }

    let max = -1;
    for(let key in students){
        let point = students[key].point;
        let keyParsedInteger = parseInt(key);

        if(max>point){
            continue;
        }

        if(max<point){
            max = point;
            answer = [keyParsedInteger];
            continue;
        }

        if(max===point){
            answer.push(keyParsedInteger);
            continue;
        }
    }

    return answer;
}

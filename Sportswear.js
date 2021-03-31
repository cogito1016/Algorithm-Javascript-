//n 전체학생 수
//lost 도난당한 학생들의 번호 배열
//reserve 여벌의 체육복을 가져온 학생들의 번호 배열

let nArr = [5,5,3];
let lostArr = [[2,4],[2,4],[3]];
let reserveArr = [[1,3,5],[3],[1]];

for(let i=0; i<nArr.length;i++){
    console.log(solution(nArr[i],lostArr[i],reserveArr[i]));
}

function solution(n, lost, reserve) {
    var answer = 0;
    
    let wearCountArr = new Array(n+1).fill(1);

    reserve.forEach(element => {
        wearCountArr[element]++;
    });

    lost.forEach(element => {
        wearCountArr[element]--;
    })

    for(let i=1; i<=n; i++){
        let wearCount = wearCountArr[i];

        if(wearCount === 1 || wearCount === 2){
            answer++;
            continue;
        }

        if(wearCount === 0){
            let preWearCount = wearCountArr[i-1];
            let nextWearCount = wearCountArr[i+1];

            if(i !== 1 && preWearCount === 2){
                wearCountArr[i-1] = 1;
                wearCountArr[i] = 1;
                answer ++;
                continue;
            }

            if(i !== n && nextWearCount === 2){
                wearCountArr[i+1] = 1;
                wearCountArr[i] = 1;
                answer ++;
                continue; 
            }
        }
    }

    return answer;
}
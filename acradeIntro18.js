function solution(inputString) {
    let n = inputString.length;
    let x = inputString.split("");
    let count = 0
    x.sort();
    console.log(x);
    if (n % 2 == 0) {
        for (let i = 0; i < n; i += 2) {
            if (x[i] != x[i + 1]) {
                count++;
            }
        }
        if (count == 0) {
            // console.log(true);
            return true;
        } else {
            // console.log(false);
            return false;
        }
    } else {
        let y = inputString.split("").sort();
        let i = 0, count1 = 0;
        while (y.length > 0) {
            // console.log(y);
            let check = y[i]
            let count = 0;
            for (let j = i; j < y.length; j++) {
                if (check == y[j]) {
                    count++;
                }
            }
            if (count == 1) {
                count1++;
            }
            // console.log(y[i], count, "\n");
            y.splice(0, count);
        }
        if (count1 == 1) {
            return true;
        } else {
            return false;
        }
    }
}
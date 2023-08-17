function solution(a, b) {
    if (a.length != b.length) {
        return false;
    } else if (a.join("") == b.join("")) {
        return true;
    }
    else {
        let count = 0;
        for (let i = 0; i < a.length; i++) {
            for (let j = i + 1; j < a.length; j++) {
                let temp = a[i];
                a[i] = a[j];
                a[j] = temp;
                if (a.join("") == b.join("")) {
                    count++;
                }
                temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
        if (count == 1) {
            return true;
        } else {
            return false;
        }
    }
}
solution([832, 998, 148, 570, 533, 561, 894, 147, 455, 279],
    [832, 570, 148, 998, 533, 561, 455, 147, 894, 279])
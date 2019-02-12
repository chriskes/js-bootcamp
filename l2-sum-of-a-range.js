 function sumRange(x, y) {
            let total = 0,
                count = x;
            while (count <= y) {
                total += count;
                count += 1;
            }
        return(total);
        }

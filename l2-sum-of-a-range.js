//----------- FUNCTION THAT RETURNS AN ARRAY -----------//

 function range(start, end) {

            const range = [];

            for (let i = start; i <= end; i++) {
                range.push(i);
            }
            return range;

        }

//----------- FUNCTION THAT SUMS AN ARRAY -----------//

function sum(start, end) {
            const range = [];
            var total = 0;

            for (let i = start; i <= end; i++) {
                range.push(i);
            }
            for (let i = 0; i < range.length; i++){
                
                total = total + range[i];
                
                
            }
            return total;

        }



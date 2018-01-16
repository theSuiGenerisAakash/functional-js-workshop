    function doubleAll(numbers) {
        let answer = numbers.map(function(num){
           return num * 2;
        });
        return answer;
    }
    
    module.exports = doubleAll;

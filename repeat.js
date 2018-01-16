function repeat(operation, num){
    let i = 0;
    for( ; i < num; i ++){
        operation();
    }
    return i;
}

module.exports = repeat;

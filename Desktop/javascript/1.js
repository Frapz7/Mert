function fak(n){
    if(n == 0){
        return 1;
    } else{
        return fak(n-1)*n;
    }
}
console.log(fak(5));
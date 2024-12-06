var n,m;
var flag=true;
var primeNumbers=[];
for(i=n+1;i<m;i++){
    for(j=2;j<Math.sqrt(i);j++){
        if(i%j==0 && i !=2){
            flag=false
break      
}else{
            flag=true
        }

    }
          console.log(i,j,flag)

      if (flag!=false) {
       primeNumbers.push(i) 
    }
    
}

primeNumbers.forEach((ele,index)=>{
    if (ele % 3 ==0 || ele % 5 ==0 || ele % 7 ==0 || ele % 9 ==0) {
        primeNumbers.splice(index,1)
    }
    });
    
console.log(primeNumbers)

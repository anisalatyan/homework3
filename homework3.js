<script>
	const numOperations=function(num1, num2, num3){   //1
		return((num1*num2)-num3);
	}
	console.log(numOperations(1,3,5));


const func2= function(){            //2
	return("HEY!!!");
};
console.log(func2());

const func3= function(number1, number2){   //3
(number2-number1);
};
console.log(func3 (4,7));

const fullName= function(firstName,lastName){  //4
	return(firstName +  lastName);
};
console.log(fullName("Kurt" , " Cobain"));


const strLength=function (str1,str2,str3) {    //5
  if(str1.length > str2.length && str1.length > str3.length){
        return str1;
    }else if(str2.length > str1.length && str2.length > str3.length){
        return str2;
    }else if(str3.length > str2.length && str3.length > str1.length){
        return str3;
    }else if(str1.lenght === str2.lenght === str3.lenght){
        return "equal";
    }else if(str1.lenght === str2.length || str1.lenght === str3.lenght || str2.length === str3.lenght){
        return "They're equal";
    }

}
console.log(strLength("heey" , "HIIIIIII" ,"hello"))


 const numbers=function(x,y){    //6
 	if(x==y){
 		return 0
 	};
  if (x>y){
 	return 1;
 };
  if (x<y){
 	return (-1);
 };
 };
console.log(numbers(20,9))


const check=function truethy(a, b, c ){    //7
    if(a){
        return a;
    } if(b){
        return b;
    } if(c){
        return c;
    }
}

console.log(check(0,2,1))


</script>

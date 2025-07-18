/*
Roman Numeral Converter
Convert the given number into a roman numeral.
*/

function convertToRoman(num) {
  var myArray=[];
    while(num>0){
        if(num>=1000){
            num-=1000;
            myArray+='M';
        }
        else if(num>=900){
            num-=900;
            myArray+='CM';
        }
        else if(num>=500){
            num-=500;
            myArray+='D';
        }
        else if(num>=400){
            num-=400;
            myArray+='CD';
        }
        else if(num>=100){
            num-=100;
            myArray+='C';
        }
        else if(num>=90){
            num-=90;
            myArray+='XC';
        }
        else if(num>=50){
            num-=50;
            myArray+='L';
        }
        else if(num>=40){
            num-=40;
            myArray+='XL';
        }
        else if(num>=10){
            num-=10;
            myArray+='X';
        }
        else if(num>=9){
            num-=9;
            myArray+='IX';
        }
        else if(num>=5){
            num-=5;
            myArray+='V';
        }
        else if(num>=4){
            num-=4;
            myArray+='IV';
        }
        else if(num>=1){
            num-=1;
            myArray+='I';
        }
    }
 return myArray;
}

convertToRoman(36);
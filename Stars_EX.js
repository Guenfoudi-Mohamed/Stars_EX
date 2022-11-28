
/*exercice star_1 
                        *
                        **
                        ***
                        ****
                        *****
*/

var x = "*";
function star_1(num){
    if(num > 0){
        document.write(x+"<br>");
        x +="*";
        star_1(num-1);
    }
}
star_1(10);


/*exercice star_2
                         *  
                        ***
                       *****
                      *******
                     *********

*/

var v1 = " "  , v2 = "*";
function star_2(num){
    if(num > 1){    
        for(var i = 1;i<num-1;i++){
            v1+=" ";
        }
        console.log(v1+v2);
        v1= v1-" ";
        if(v1 == 0){
            v1=" ";
        }
        v2+="**";
        star_2(num-1);
    } 
}
star_2(11);


/*
exercice star_3
                     *********
                      *******
                       *****
                        ***
                         *  
*/


var v3 = " ", v2 = "";
function star_3(num){
    var v1 = num + num - 1;
    if(num > 0){
        for(var i = 0;i<v1;i++){
            v2+="0"
        }
        console.log(v3+v2);
        v3+=" ";
        
        if(v2[v2.length-1] == "0"){v2 = "";}
        star_3(num-1);
    }
}
star_3(10);



/*
exercice star_4 
                        *****
                         ****
                          ***
                           **
                            *

*/

var v1 =" ",v2= "";
function star_4(num){
    if(num > 0){
        for(var i=0 ;i< num;i++){
            v2+="0";
        } 
        console.log(v1,v2);
        v1+=" ";
        v2-="0";
        if(v2 == "0"){v2="";}
        star_4(num-1);
    }
}
star_4(10);


//====== exercice 
/*
                0 
                00 
                000 
                0000 
                000 
                00 
                0
*/
 
var v1 = "0";
function show_stars(num_str){
    if(v1.length <= num_str){
        console.log(v1);
        v1+="0";
        show_stars(num_str);
    }
   
}
show_stars(5);
function f1(num_str){
   var v2 = "";
    if(v2.length <= num_str){
       for(var i = 0;i<num_str-1;i++){
           v2+="0";
       } 
       if(v2 != ""){
           console.log(v2);
           v2-="0";
           f1(num_str-1);
       }
       
    }
}
f1(5);
document.write("<h1><mark>Other exercices >> Look in Console </mark></h1>");



/*
  12354 
  12345 
  12453 
  12435 
  12543
  ...
*/
function numberPrint(num){
    let arr1 = [];
    for(let i = 0;i<Number(String(num).length);i++){
        arr1[i] = String(num)[i];
    }
    let counter = 0;
    for(let t = 1;t<=String(num).length;t++){
        for(let y = 2;y<=String(num).length;y++){
            for(let x = 2;x>=0;x--){
                for(let i = 0;i<1;i++){
                    [arr1[arr1.length-1],arr1[arr1.length-2]]=[arr1[arr1.length-2],arr1[arr1.length-1]];
                    console.log(arr1.join(''));
                    [arr1[arr1.length-2],arr1[arr1.length-1]]=[arr1[arr1.length-1],arr1[arr1.length-2]];
                    console.log(arr1.join(''));
                    // counter+=2; 
                }
                if(x == 0){continue;}
                [arr1[arr1.length-3],arr1[arr1.length-x]]=[arr1[arr1.length-x],arr1[arr1.length-3]];
            }
            arr1 = [arr1[0],...arr1.slice(1,arr1.length).sort(function(a,b){return a-b;})]
            if(y == String(num).length){continue;}
            [arr1[1],arr1[y]]=[arr1[y],arr1[1]];
        }
        arr1 = [arr1[0],arr1[1],...arr1.slice(2,arr1.length).sort(function(a,b){return a-b;})]
        if(t == String(num).length){continue;}
        [arr1[0],arr1[t]]=[arr1[t],arr1[0]];
    }
    // console.log(counter);
}
numberPrint(12345);

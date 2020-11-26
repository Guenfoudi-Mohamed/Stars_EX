
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
document.write("Other exercices >> Look in Console ");

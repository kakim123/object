let family={
    name:"jhon"+"<br>",
    jhon:{
       firstSon:"Chris"+" ",
       secondSon:"Alex"+"<br/>",
       chris:{
           firstSon:"Ali"+" ",
           secondSon:"Karim"+"<br/>",
           alex:{
               firstSon:"Jhon"+" ",
               secondSon:"Alex"+" ",
               thirdSon:"Garret"+" ",
               fourthSon:"Wood"+" ",
               fifthSon:"Hales"+"<br/>",
               john:{
                   firstSon:"Ali"+" ",
                   secondSon:"Jack"+"<br/>",
               ali:{
                   firstSon:"Suleimen"+" ",
                   secondSon:"Usman"+" ",
                   thirdSon:"Salman"+" ",
                   fourthSon:"Javed"+"<br/>", 
                   suleimen:{
                       firstSon:"Kareem"+" ",
                       secondSon:"Raheem"+"<br/>",
                       raheem:{
                           firstSon:"Nadeem"+" ",
                           secondSon:"Kaleem"+"<br/>",
                           kaleem:{
                               firstSon:"Amir"+" ",
                               secondSon:"Liaqat"+"<br/>",
                               wood:{
                                   firstSon:"Chris"+" ",
                                   secondSon:"Roy"+" ",
                                   thirdSon:"Max"+" ",
                                   fourthSon:"Nova"+" ", 
                                   fifthSon:"Root"+" ",
                                   sixthSon:"Mark"+"<br/>",
                                   max:{
                                       firstSon:"Usman"+" ",
                                       secondSon:"Salman"+" ",
                                       thirdSon:"Javed"+" ",
                                       fourthSon:"Mark"+" ", 
                                       fifthSon:"Alex"+"<br/>",
                                       mark:{
                                           firstSon:"Morgan"+" ",
                                           secondSon:"Watson"+"<br/>",
                                           jack:{
                                               firstSon:"Kevin"+" ",
                                               secondSon:"Darekwood"+"<br/>",
                                               david:{
                                                   firstSon:"kegan"+"<br/>",
                                                   kegan:{
                                                       firstSon:"Alex"+"<br/>",
                                                       alex:{
                                                           firstSon:"Jackma"+" ",
                                                           secondSon:"Bill"+"<br/>",
                                                           jackma:{
                                                               firstSon:"Kevin"+" ",
                                                               secondSon:"Derek"+" ",
                                                               thirdSon:"Trump"+" ",
                                                               fourthSon:"Obama"+" ", 
                                                               fifthSon:"Bush"+"<br/>",
                                                               bill:{
                                                                   firstSon:"Robert"+" ",
                                                                   secondSon:"John"+"<br/>",
                                                               }
                                                           }
                                                       }
                                                   }
                                               }
                                           }
                                       }
                                   }
                               }
                           }
                       }
                   }
               }
           }
           
       }
    }
}
};

function printValues(obj) {
   for (var key in obj) {
       if (typeof obj[key] === "object") {
           printValues(obj[key]);   
       } else {
           document.write(obj[key]);    
       }
   }
}

printValues(family);
document.write(family.jhon.chris.firstSon);

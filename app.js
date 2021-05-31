var userName=prompt('what is your name?  ');

 alert('Welcome ' + userName+' to our website'); 
 
 var important=prompt('did you create website befor? if yes press 1 if no press 2 ');

if ( important == 1 ){ alert('Amazing')
}
 else {" Thats amazing Here you will learn how to draw your first website "
 }
var Wireframing = prompt("Are you intrested to learn about wireframing?");
  
   
if ( Wireframing == "yes" ) {
  document.write("<img src='https://balsamiq.com/assets/learn/articles/mobile-web.png'>") }
  else{
    document.write("<h4>welcome "+userName+"</h4>");
    }

var answer = prompt('Enter your password  ');
while (answer != '1234') {
 answer = prompt('Enter your password  (1234)');
}
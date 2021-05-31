var userName=prompt('ما هو اسمك ؟  ');

 alert('اهلاً بك ' + userName+' في موقعنا'); 

 var m2 = prompt('كم هو عمرك ؟ ');
 
 var important=prompt('هل زرت فلسطين من قبل ؟ اذا نعم اضغط 1 اذا لا اصغط  2 ');

if ( important == 1 ){ alert('جميل جداً')
}
 else {" سنخبرك هنا بمعلومات جديدة في موقعنا "
 }
var Quds = prompt("هل تحب فلسطين؟");
  
   
if ( Quds == "نعم" ) {
  document.write("<img src='https://dozdani.com/uploads/thumbs/bc/bc6c1cac2888ffa72f433c17486282d5.jpg'>") }
  else{
    document.write("<h3>welcome "+userName+"</h3>");
    }

var answer = prompt('Enter your password  ');
while (answer != '1234') {
 answer = prompt('Enter your password  (1234)');
}

function userAge(m2) {
   console.log('Your Age is', m2);
   document.write(`Your Age is  ${m2} `);
 }
 userAge( m2 );


$(document).ready(function(){

$('.div_blocks').append('<div id="first-block"></div>' + '<div id="second-block"></div>' +'<div id="third-block"></div>' + '<div id="fourth-block"></div>');
console.log('color blocks are now created');
$('div').css({ 'width':'200px', 'height':'200px','display':'inline-block', 'border':'1px solid black' });




 var $colorsArray =['red', 'blue', 'yellow','orange', 'purple', 'indigo', 'green','Pink','Brown','Cyan','Violet', 'Magenta', 'White', 'Gray', 'Black'];

function colorBlocks($colorsArray){

  var index1 = randomNumber(0,$colorsArray.length-1);
  var $firstColor = $colorsArray.splice(index1,1);
  console.log($firstColor);
  var index2 = randomNumber(0,$colorsArray.length-1);
  var $secondColor = $colorsArray.splice(index2,1);
  console.log($secondColor);
  var index3 = randomNumber(0,$colorsArray.length-1);
  var $thirdColor=$colorsArray.splice(index3,1);
  console.log($thirdColor);
  var index4 = randomNumber(0,$colorsArray.length-1);
  var $fourthColor=$colorsArray.splice(index4,1);
  console.log($thirdColor);

$('#first-block').css('background-color', $firstColor).addClass($firstColor.toString());
$('#second-block').css('background-color',$secondColor).addClass($secondColor.toString());
$('#third-block').css('background-color',$thirdColor).addClass($thirdColor.toString());
$('#fourth-block').css('background-color',$fourthColor).addClass($fourthColor.toString());
var $pickedColorsArray = [$firstColor,$secondColor, $thirdColor, $fourthColor];
var $colorToPicked = $pickedColorsArray[randomNumber(0,$pickedColorsArray.length-1)];
$('#pick-color').append('<span>' + $colorToPicked+ '</span>');

$('div').on ('click',this, function(){

    var $theClass = this.className;
    console.log($theClass);
    console.log($colorToPicked);
    if($theClass==$colorToPicked){
      $(this).css('background-color',$colorsArray[randomNumber(0,$colorsArray.length-1)]);
      setTimeout(function(){

        $('.' + $theClass).css('background-color',$colorToPicked);
        console.log($colorToPicked);
        console.log('Is this actually working?');},2000);
      $('#message').find('span').remove();
      $('#message').append('<span>Good job you picked the right color!</span>');
    }else{
        $('#message').find('span').remove();
      $('#message').append('<span>You picked the wrong color! Try again!</span>');
    } // "this" is the element clicked

});
}
 colorBlocks($colorsArray);

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

});

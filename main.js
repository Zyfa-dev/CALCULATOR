

var input=document.getElementById('text')
function numbers(gettingvalue){
    input.value+=gettingvalue
}
function result(){
    input.value=eval(input.value)
}
function onebehind(){
    input.value=input.value.slice(0,-1)
}
function clearinput(){
    input.value=''
}
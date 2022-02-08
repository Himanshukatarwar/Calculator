function display(val){
    document.getElementById('result').value += val;
}
function del(){
    document.getElementById("result").value  = document.getElementById("result").value.slice(0,-1); 
}
function clearall(){
    document.getElementById("result").value = "";
}
function calculate(){
    var eq = document.getElementById("result").value;
    var temp = eval(eq);
    document.getElementById("result").value = temp;
}
function themechange(myradio){
    let css_sheet= document.getElementById('alternate');
    if(myradio.value == 1){
        css_sheet.href='calc.css';
    }
    else if(myradio.value == 2){
        css_sheet.href= 'theme2.css';
    }
    else{
        css_sheet.href = 'theme3.css';
    }
     

}
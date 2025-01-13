const input = document.querySelectorAll(".required");
function nameValidate(){
    if(input[0].value.length<3){
        console.log('Nome deve ter 3 caracteres');}
    else{
        console.log('Validado com sucesso');}    
}

const inputs = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
function nameValidate(){
    if(inputs[0].value.length<3){
        setError(0);}
    else{
            console.log('Validado com sucesso');}
        function setError(index){
            spans[index].style.display = 'block';
            spans[index].style.color='red';
        }
            removeError(0);}
            function removeError(index){
                spans[index].style.display = 'none'
            }
                
        
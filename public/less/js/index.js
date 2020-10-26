const input = document.querySelector('input');
const btb = document.querySelector('.addTask > button');

function addList(e){
    const notList = document.querySelector('notList');
    const completed = document.querySelector('.listCompleted');

    const newLi = document.createElement('li');
    const checkBtn = document.createElement('button');
    const delBtn = document.createElement('button');

    checkBtn.innerHTML = '<i class="fa fa-check"></i>';
    delBtn.innerHTML = '<i class="fa fa-trash"></i>';

    if(input.value !==''){
        newLi.textContent = input.value;
        input.value = '';
        notList.appendChild(newLi);
        newLi.appendChild(checkBtn);
        newLi.appendChild(delBtn);
    }

    checkBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.removeChild();
        completed.appendChild(parent);
        checkBtn.style.display = 'none';
    });

    checkBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.removeChild();
    });
}
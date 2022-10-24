import { uniqueDate } from '../services/date.js';
import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';
import { readTaks } from './readTask.js';

export const addTask = (evento) => {
  evento.preventDefault();

  const list = document.querySelector('[data-list]');

  const input = document.querySelector('[data-form-input]');
  const calendario = document.querySelector('[data-form-date]');

  const value = input.value;
  const date = calendario.value;
  const dateFormat = moment(date).format('DD/MM/YYYY');

  if (value == '' || date == '') {
    alert('Por favor ingrese datos validos')
    return


  }

  calendario.value = "";
  input.value = '';

  const complete = false;

  const taskObject = {
    value,
    dateFormat,
    complete,
    id: uuid.v4()
  }

  list.innerHTML = '';
  
  const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
  taskList.push(taskObject)
  localStorage.setItem('tasks', JSON.stringify(taskList));
  readTaks();

}


export const createTask = ({ value, dateFormat, complete, id }) => {
  const task = document.createElement('li');
  task.classList.add('card');
  const taskContent = document.createElement('div');
  const check = checkComplete(id);

console.log(complete);
  if(complete===true){
    check.classList.toggle('fas');
    check.classList.toggle('completeIcon');
    check.classList.toggle('far');
    console.log('completada')
  }
  const titleTask = document.createElement('span');
  titleTask.classList.add('task');
  titleTask.innerText = value;
  taskContent.appendChild(check);
  taskContent.appendChild(titleTask);
  // task.innerHTML = content;

 

 

  const dateF = document.createElement('span');
  dateF.innerHTML = dateFormat;

  task.appendChild(taskContent);
  task.appendChild(dateF);
  task.appendChild(deleteIcon(id));

  return task;

};
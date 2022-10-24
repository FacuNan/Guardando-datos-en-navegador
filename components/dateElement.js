export default (date)=>{
    const dateElements = document.createElement('li');
    dateElements.classList.add('date');
    dateElements.innerHTML= date;
    return dateElements;
}
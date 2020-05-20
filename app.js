const text = document.getElementById('text');
const allInfo = document.getElementById('allInfo');

function getDataFromAPI(){
    fetch(`api.php`)
    .then(res => res.json())
    .then(data => {
        //console.log(data);
        
            data.map(person =>{
            
            const nameDiv = document.createElement('option');
            
            //nameDiv.classList.add('style1');
            nameDiv.setAttribute('value', `${person.id}`);
            nameDiv.addEventListener('change', fullData);
            nameDiv.innerHTML = `${person.name}`;
            
            
            //nameDiv.innerHTML = `<div onclick="hey()">${person.name}</div>`;
            
            text.appendChild(nameDiv);
            
        });
        
        
        
    })
}//End of getDataFromAPI function

function fullData(){
    const id = text.value;
    
    fetch(`api_id.php?id=${id}`)
    .then(res => res.json())
    .then(data => {
        data.map(person => {
            allInfo.innerHTML = `
             <h1>Name: ${person.name}</h1>
             <h4>Gender: ${person.gender}</h4>
             <img class="photo" src="${person.photo}" />
             <p>This person is the ${person.designation} of company 11055</p>

            `;
            
            setTimeout(function(){
                const photo = document.querySelector('.photo');
                
                photo.classList.add('fadeIn');
            }, 10);
            
        });
    })
    

}



getDataFromAPI();
text.addEventListener('change', fullData);

//button.addEventListener('click', getAPI);
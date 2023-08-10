import {View} from './View';
import {Model} from './Model';

export const Controller = (() => {
    
    const handleSubmit = () =>{
        
        document.getElementById('initial-form').addEventListener('submit', (evt) => {
            evt.preventDefault();
            const input = document.getElementById('initial-input').value;
            async function getData (){
              const data = await Model.fetchData(input);
              View.displayResults(data);
            }
            getData();
            document.getElementById('initial-input').value = '';
        })
    }
    
    return {
        handleSubmit,
    }
})();
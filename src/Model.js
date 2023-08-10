export const Model = (() => {
    
    const fetchData = async (city) =>{
        try{
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=26fce71067d84e15bf3132813230908&q=${city}`, {mode: 'cors'});
            const data = await response.json();
            return data;
        }catch{
            console.error('Error:', error);
            throw error;
        }   
    }

    return {
        fetchData,
        
    }
})();
import axios from 'axios';
function reducer(state={data:[]},action)
{
    switch(action.type)
    {
        case "show":
          return { data:action.payload}; 
        default:
            return state;
    }
}
export const test=  async () => {
    const l = await axios.get("https://jsonplaceholder.typicode.com/posts/")
     return await l.data;
    
    
   
};


export default reducer;
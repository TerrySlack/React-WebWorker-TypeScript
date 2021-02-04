const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
export const dateFormatter = (dateTime:string)=>{
    const date  = new Date(dateTime);
    return date.toLocaleDateString("en-US", options);
};
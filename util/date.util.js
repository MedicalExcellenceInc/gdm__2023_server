export const getToday = () => {
    const date = new Date(); 
    const year = date.getFullYear(); 
    let month = (date.getMonth()+1).toString();
    let day = (date.getDate()).toString(); 

    // 한자리수일 경우 0을 채워준다. 
    if(month.length === 1) month = "0" + month; 
    if(day.length === 1)  day = "0" + day; 

    return year + "-" + month + "-" + day;
};

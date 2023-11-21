
const getMostPopularId = (list,num) =>{
    if (Array.isArray(list) && typeof list[0] === 'object') {
        const newList = list.reduce((newList,value)=>{
            if (value.courseId in newList) {
                newList[value.courseId] += 1
            }else{
                newList[value.courseId] = 1
            }
        
            return newList 
        },{})
        const arrayMess = Object.entries(newList)
        const orderArray = arrayMess.sort((a,b)=> b[1] - a[1])
        
        let res = {}
        for (let i = 0; i < num; i++) {
            let value = orderArray[i]
            res[value[0]] =Number.parseInt(value[0])
        }
        return res
    }
    return {}
}
const limit = (list,num)=>{
    const newArray = []
    if (list.length >= num) {
        for (let i = 0; i < num; i++) {
             newArray.push(list[i])
        }
    }else{
        for (let i = 0; i < list.length; i++) {
            newArray.push(list[i])
       }
    }
    return newArray
}

const filledStars = (course) => {
    if (!course) return 0
    try {
        if(course.comments.length >= 1){
          let sum = 0
          for (let i = 0; i < course.comments.length; i++) {
            if (typeof course.comments[i].starts === 'string') {
              sum += Number.parseFloat(course.comments[i].starts)
            }else{
              sum += course.comments[i].starts
            }
          }
          return  sum/course.comments.length
        }
        return 0
        
    } catch (error) {
        console.log("error " +error)
        return 0     
    }
}
const formatTime = (date)=>{
    const updatedAtString = date;
const updatedAtDate = new Date(updatedAtString);

let day = updatedAtDate.getUTCDate();
let month = updatedAtDate.getUTCMonth() + 1; // Months are zero-based
let year = updatedAtDate.getUTCFullYear();

// Ensure leading zeros for day and month
let formattedDay = day < 10 ? `0${day}` : day;
let formattedMonth = month < 10 ? `0${month}` : month;

let formattedDate = `${formattedDay}/${formattedMonth}/${year}`;
return formattedDate
}

export {
    getMostPopularId,
    limit,
    filledStars,
    formatTime,
}
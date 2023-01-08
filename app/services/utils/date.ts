const getCurrentDate = () : string => {
    const date  = new Date();
    const day_week = date.getDay();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
  
    const month_array = [ 
                            "January","February","March",
                            "April","May","June","July",
                            "August","September","October",
                            "November",
                            "December",
                        ];
    
    const week_array =  [ 
                            "Sunday","Monday","Tuesday",
                            "Wednesday","Thursday",
                            "Friday","Saturday",
                        ];
  
  
    return `${week_array[day_week]}, ${month_array[month]} ${day}th ${year}`;;
}

export { getCurrentDate }
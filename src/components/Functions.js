 export function campaignFormat(eventname){
  try {
    return eventname.replace(/:| |-|_|:/gi, '');
    }
  catch(err){
    alert(err.message);
  }
  }

export function dateFormat(fdt, ldt){
            let fdtyear = fdt.substring(0,4);
            let fdtmonth = fdt.substring(4,6);
            let fdtday = fdt.substring(6,8);
            let ldtyear = ldt.substring(0,4);
            let ldtmonth = ldt.substring(4,6);
            let ldtday = ldt.substring(6,8);
            let months =  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            let days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
            let fdate = Date.parse('"'+ fdtyear + '-' + fdtmonth + '-' +fdtday +'"');
            let newdate = new Date();
            newdate.setFullYear(Number(fdtyear));
            newdate.setMonth(Number(fdtmonth) - 1);
            newdate.setDate(fdtday);
            let weekday = newdate.getDay();
    if(fdt === ldt){
       let timeFormat = fdtday+' '+months[fdtmonth-1]+', '+days[weekday];
            return timeFormat;
        
    }
    else if(fdtmonth === ldtmonth){
      let timeFormat1 = months[fdtmonth-1]+' '+fdtday+' - '+ldtday;
      return timeFormat1;
    }
    else{
        let timeFormat2 = months[fdtmonth-1]+' '+fdtday+' - '+months[ldtmonth-1]+' '+ldtday;
      return timeFormat2;
    }
 
  }

export function genreFormat(genre){
    try {
    return genre.replace(',', '  |  ');
     }
  catch(err){
    alert(err.message);
  }
  }

export function eventVenueFormat(eventVenue){
    try {
      let spliteventVenue = eventVenue.split(':');
    return spliteventVenue[0];
     }
  catch(err){
    alert(err.message);
  }
  }
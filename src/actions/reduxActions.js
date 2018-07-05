import axios from 'axios';

export function fetchData (et) {
	return function(dispatch){
		dispatch({type:'FETCH_DATA_START'})
		axios.get('https://data-in.bookmyshow.com/?cc=&ch=mobile&cmd=GETALLDETAILSBYEVT&ec='+et+'&f=json&lg=&lt=&sr=MWEST&t=67x1xa33b4x422b361ba')
		.then(res => {
			dispatch({type:'FETCH_DATA_SUCCESS', 
				payload: res.data.BookMyShow, 
				payload_eventinfo_etcode: res.data.BookMyShow.arrEventInfo.EventCode, 
				payload_venues: res.data.BookMyShow.arrVenues,
				payload_etcode: res.data.BookMyShow.arrEventInfo[0].EventCode,
				payload_etname: res.data.BookMyShow.arrEventInfo[0].EventName,
				payload_eturl: res.data.BookMyShow.arrEventInfo[0].EventWebRedirectURL,
				payload_etgenre: res.data.BookMyShow.arrEventInfo[0].Genre,
				payload_etvenues: res.data.BookMyShow.arrVenues[0].VenueName,
				payload_etfirstdate: res.data.BookMyShow.arrVenues[0].arrShowDates[0].ShowDateCode,
				payload_etlastdate: res.data.BookMyShow.arrVenues[0].arrShowDates[res.data.BookMyShow.arrVenues[0].arrShowDates.length-1].ShowDateCode,
				 })
		})
		.catch(err => {
			dispatch({type:'FETCH_DATA_SUCCESS', payload: err})
		})
	}
}

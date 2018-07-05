export default function fetch(state={
	fetching: false,
	fetched: false,
	data: [],
	EventInfo:[],
	Venues:[],
	etcode: '',
	etname: '',
	etgenre: '',
	etvenues: '',
	etfirstdate: '',
	etlastdate: '',
	error: null,
}, action){
	switch(action.type){
		case 'FETCH_DATA_START' : {
			return {...state, fetching: true}
		}
		case 'FETCH_DATA_SUCCESS' : {
			return {...state, 
				fetching: false, 
				fetched: true, 
				data: action.payload, 
				EventInfo: action.payload_eventinfo, 
				Venues: action.payload_venues,
				etcode: action.payload_etcode,
				etname: action.payload_etname,
				eturl: action.payload_eturl,
				etgenre: action.payload_etgenre,
				etvenues: action.payload_etvenues,
				etfirstdate: action.payload_etfirstdate,
				etlastdate: action.payload_etlastdate,}
		}
		case 'FETCH_DATA_ERROR' : {
			return {...state, fetching: false, fetched: false, error: action.error}
		}
		default:{
			return {...state}
		}
	}
}
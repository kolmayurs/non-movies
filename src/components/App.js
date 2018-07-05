import React, { Component } from 'react';
import '../css/App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchData} from '../actions/reduxActions';
import EventCard from './EventCard';

const mapStateToProps = (state) => {
  return{
    loading: state.fetch.fetching,
    data: state.fetch.data.arrEventInfo,
    etcode: state.fetch.etcode,
    etname:state.fetch.etname,
    eturl: state.fetch.eturl,
    etgenre: state.fetch.etgenre,
    etvenues: state.fetch.etvenues,
    etfirstdate: state.fetch.etfirstdate,
    etlastdate: state.fetch.etlastdate,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    ...bindActionCreators({fetchData},dispatch)
  }
}

 function campaignFormat(eventname){
  try {
    return eventname.replace(/:| |-|_|:/gi, '');
    }
  catch(err){
    alert(err.message);
  }
  }

function dateFormat(fdt, ldt){
            let fdtyear = fdt.substring(0,4);
            let fdtmonth = fdt.substring(4,6);
            let fdtday = fdt.substring(6,8);
            let ldtyear = ldt.substring(0,4);
            let ldtmonth = ldt.substring(4,6);
            let ldtday = ldt.substring(6,8);
            let months =  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            let days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
            console.log(fdtyear + ' ' + fdtmonth + ' ' +fdtday);
            let fdate = '"'+ fdtyear + '-' + fdtmonth + '-' +fdtday +'"';
            let newdate = new Date(fdate);
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

function genreFormat(genre){
    try {
    return genre.replace(',', '  |  ');
     }
  catch(err){
    alert(err.message);
  }
  }

class App extends Component {
  constructor(props){
    super(props);
    this.state = {etCode:'ET00019735'}
    this.onEventChange = this.onEventChange.bind(this);
  }
  componentWillMount(){
    this.props.fetchData(this.state.etCode);
}
  onEventChange(){
    this.props.fetchData(this.state.etCode);
  }

  render() {
    if(this.props.loading){
      return <h1>Loading</h1>
    }
    let value = '<table class="deviceWidth" cellspacing="0" cellpadding="0" align="left" style="width:40%; min-width:250px; max-width:292px; margin:10px 25px; background-color:#ffffff; vertical-align:top;display:inline-block;float:none;"><tr><td style="width:100%;"><table cellpadding="0" cellspacing="0" border="0" align="center" style="background-color:#ffffff; margin:0 auto;"><tr><td valign="top" style="width:100%; background-color:#ffffff;"><a href="'+this.props.eturl+'?&utm_source=NMMumbaiEvent23October2017&utm_medium=email&utm_campaign='+campaignFormat(this.props.etname)+'" target="_blank" style="text-decoration:none; color:#fff;"><img src="https://in.bmscdn.com/events/eventlisting/'+this.props.etcode+'.jpg" alt="'+this.props.etname+'" title="'+this.props.etname+'" border="0" style="width:100%; display:block; background-color:#ffffff; color:#010101; overflow:hidden; border-radius:10px;"/></a></td></tr><tr><td style="width:100%;padding:10px 5px 0px 5px; font-size:16px; vertical-align:top; font-family:Verdana, Arial,sans-serif; text-align:left; color:#333333; line-height:22px;"><a href="'+this.props.eturl+'?&utm_source=NMMumbaiEvent23October2017&utm_medium=email&utm_campaign='+campaignFormat(this.props.etname)+'" target="_blank" style="text-decoration:none; color:#333333; font-family:Verdana, Arial,sans-serif;">'+this.props.etname+'</a></td></tr><tr><td style="width:100%;padding:5px 5px; font-size:12px; vertical-align:top; font-family:Verdana, Arial,sans-serif; text-align:left; color:#666666; line-height:18px;">'+this.props.etvenues+'</td></tr><tr><td style="width:100%;padding:5px 5px 5px 5px; font-size:12px; vertical-align:top; font-family:Verdana, Arial,sans-serif; text-align:left; line-height:19px; font-weight:normal; color:#a3a3a3;">'+genreFormat(this.props.etgenre)+'</td></tr><tr><td align="center" style="width:100%; padding:5px 0px 0px 0px; background-color:#ffffff;"><table cellspacing="0" cellpadding="0" align="left" style="float:left;"><tr><td style="padding:15px 5px 0px 5px; font-size:13px; font-weight:bold; font-family:Verdana, Arial,sans-serif; text-align:left; color:#666666; text-transform:capitalize; line-height:16px;">'+dateFormat(this.props.etfirstdate, this.props.etlastdate)+'</td></tr></table><table cellspacing="0" cellpadding="0" align="right" style="float:right;"><tr><td style="padding:5px; text-align:right;"><a href="'+this.props.eturl+'?&utm_source=NMMumbaiEvent23October2017&utm_medium=email&utm_campaign='+campaignFormat(this.props.etname)+'" target="_blank" style="text-decoration:none; color:#ffffff;"><span style="padding:10px 25px 9px 25px; line-height:40px; font-family:Verdana, Arial,sans-serif; font-size:12px; white-space:nowrap; color:#ffffff; background-color:#0072ff; font-weight:bold; border-radius:5px;">BOOK</span></a></td></tr></table></td></tr></table></td></tr></table>'
    return (
      <div className="App">
        <br /><br />
        <input type="text" onChange={e => {this.setState({etCode: e.target.value})}}/>
        <button onClick={this.onEventChange.bind(this)}>Submit</button>
        <h1>{this.state.etCode}</h1>
        <EventCard  
        etcode= {this.props.etcode} 
        etname={this.props.etname} 
        eturl= {this.props.eturl} 
        etgenre= {genreFormat(this.props.etgenre)} 
        etvenues= {this.props.etvenues} 
        etfirstdate= {dateFormat(this.props.etfirstdate,this.props.etlastdate)} 
        etlastdate= {this.props.etlastdate} 
        etutmcampaign={campaignFormat(this.props.etname)} />
        <br />
        <br />
        <textarea defaultValue={value}></textarea>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

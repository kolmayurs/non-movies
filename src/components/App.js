import React, { Component } from 'react';
import '../css/App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchData} from '../actions/reduxActions';
import EventCard from './EventCard';

const mapStateToProps = (state) => {
  return{
    loading: state.fetch.fetching,
    data: state.fetch.data,
    etcode: state.fetch.etcode,
    etname:state.fetch.etname,
    eturl: state.fetch.eturl,
    etgenre: state.fetch.etgenre,
    etvenues: state.fetch.etvenues,
    etfirstdate: state.fetch.etfirstdate,
    etlastdate: state.fetch.etlastdate,
    error: state.fetch.error,
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

function genreFormat(genre){
    try {
    return genre.replace(',', '  |  ');
     }
  catch(err){
    alert(err.message);
  }
  }

(function() {
      
       'use strict';
      
      // click events
      document.body.addEventListener('click', copy, true);
      
       // event handler
       function copy(e) {
      
       // find target element
       var 
         t = e.target,
         c = t.dataset.copytarget,
         inp = (c ? document.querySelector(c) : null);
         
       // is element selectable?
       if (inp && inp.select) {
         
         // select text
         inp.select();
      
         try {
           // copy text
           document.execCommand('copy');
           inp.blur();
           
           // copied animation
           t.classList.add('copied');
           setTimeout(function() { t.classList.remove('copied'); }, 1500);
         }
         catch (err) {
           alert('please press Ctrl/Cmd+C to copy');
         }
         
       }
       
       }
      
      })();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {etCode:'ET00019735',checked: true, 
    target_value: '',
    value: '<table class="deviceWidth" cellspacing="0" cellpadding="0" align="left" style="width:40%; min-width:250px; max-width:292px; margin:10px 25px; background-color:#ffffff; vertical-align:top;display:inline-block;float:none;"><tr><td style="width:100%;"><table cellpadding="0" cellspacing="0" border="0" align="center" style="background-color:#ffffff; margin:0 auto;"><tr><td valign="top" style="width:100%; background-color:#ffffff;"><a href="'+this.props.eturl+'?&utm_source=NMMumbaiEvent23October2017&utm_medium=email&utm_campaign='+campaignFormat(this.props.etname)+'" target="_blank" style="text-decoration:none; color:#fff;"><img src="https://in.bmscdn.com/events/mobile/'+this.props.etcode+'.jpg" alt="'+this.props.etname+'" title="'+this.props.etname+'" border="0" style="width:100%; display:block; background-color:#ffffff; color:#010101; overflow:hidden; border-radius:10px;"/></a></td></tr><tr><td style="width:100%;padding:10px 5px 0px 5px; font-size:16px; vertical-align:top; font-family:Verdana, Arial,sans-serif; text-align:left; color:#333333; line-height:22px;"><a href="'+this.props.eturl+'?&utm_source=NMMumbaiEvent23October2017&utm_medium=email&utm_campaign='+campaignFormat(this.props.etname)+'" target="_blank" style="text-decoration:none; color:#333333; font-family:Verdana, Arial,sans-serif;">'+this.props.etname+'</a></td></tr><tr><td style="width:100%;padding:5px 5px; font-size:12px; vertical-align:top; font-family:Verdana, Arial,sans-serif; text-align:left; color:#666666; line-height:18px;">'+this.props.etvenues+'</td></tr><tr><td style="width:100%;padding:5px 5px 5px 5px; font-size:12px; vertical-align:top; font-family:Verdana, Arial,sans-serif; text-align:left; line-height:19px; font-weight:normal; color:#a3a3a3;">'+genreFormat(this.props.etgenre)+'</td></tr><tr><td align="center" style="width:100%; padding:5px 0px 0px 0px; background-color:#ffffff;"><table cellspacing="0" cellpadding="0" align="left" style="float:left;"><tr><td style="padding:15px 5px 0px 5px; font-size:13px; font-weight:bold; font-family:Verdana, Arial,sans-serif; text-align:left; color:#666666; text-transform:capitalize; line-height:16px;">'+dateFormat(this.props.etfirstdate, this.props.etlastdate)+'</td></tr></table><table cellspacing="0" cellpadding="0" align="right" style="float:right;"><tr><td style="padding:5px; text-align:right;"><a href="'+this.props.eturl+'?&utm_source=NMMumbaiEvent23October2017&utm_medium=email&utm_campaign='+campaignFormat(this.props.etname)+'" target="_blank" style="text-decoration:none; color:#ffffff;"><span style="padding:10px 25px 9px 25px; line-height:40px; font-family:Verdana, Arial,sans-serif; font-size:12px; white-space:nowrap; color:#ffffff; background-color:#0072ff; font-weight:bold; border-radius:5px;">BOOK</span></a></td></tr></table></td></tr></table></td></tr></table>',
  }
    this.onEventChange = this.onEventChange.bind(this);
    this.checkChanged=this.checkChanged.bind(this);
  }
  componentWillMount(){
    this.props.fetchData(this.state.etCode);
    this.checkChanged();
}

  onEventChange(){
    this.props.fetchData(this.state.etCode);
  }

  checkChanged(){
    if(this.state.checked){
      this.setState({checked: false, value: '<table class="deviceWidth" cellspacing="0" cellpadding="0" align="left" style="width:40%; min-width:250px; max-width:292px; margin:10px 25px; background-color:#ffffff; vertical-align:top;display:inline-block;float:none;"><tr><td style="width:100%;"><table cellpadding="0" cellspacing="0" border="0" align="center" style="background-color:#ffffff; margin:0 auto;"><tr><td valign="top" style="width:100%; background-color:#ffffff;"><a href="'+this.props.eturl+'?&utm_source=NMMumbaiEvent23October2017&utm_medium=email&utm_campaign='+campaignFormat(this.props.etname)+'" target="_blank" style="text-decoration:none; color:#fff;"><img src="https://in.bmscdn.com/events/mobile/'+this.props.etcode+'.jpg" alt="'+this.props.etname+'" title="'+this.props.etname+'" border="0" style="width:100%; display:block; background-color:#ffffff; color:#010101; overflow:hidden; border-radius:10px;"/></a></td></tr><tr><td style="width:100%;padding:10px 5px 0px 5px; font-size:16px; vertical-align:top; font-family:Verdana, Arial,sans-serif; text-align:left; color:#333333; line-height:22px;"><a href="'+this.props.eturl+'?&utm_source=NMMumbaiEvent23October2017&utm_medium=email&utm_campaign='+campaignFormat(this.props.etname)+'" target="_blank" style="text-decoration:none; color:#333333; font-family:Verdana, Arial,sans-serif;">'+this.props.etname+'</a></td></tr><tr><td style="width:100%;padding:5px 5px; font-size:12px; vertical-align:top; font-family:Verdana, Arial,sans-serif; text-align:left; color:#666666; line-height:18px;">'+this.props.etvenues+'</td></tr><tr><td style="width:100%;padding:5px 5px 5px 5px; font-size:12px; vertical-align:top; font-family:Verdana, Arial,sans-serif; text-align:left; line-height:19px; font-weight:normal; color:#a3a3a3;">'+genreFormat(this.props.etgenre)+'</td></tr><tr><td align="center" style="width:100%; padding:5px 0px 0px 0px; background-color:#ffffff;"><table cellspacing="0" cellpadding="0" align="left" style="float:left;"><tr><td style="padding:15px 5px 0px 5px; font-size:13px; font-weight:bold; font-family:Verdana, Arial,sans-serif; text-align:left; color:#666666; text-transform:capitalize; line-height:16px;">'+dateFormat(this.props.etfirstdate, this.props.etlastdate)+'</td></tr></table><table cellspacing="0" cellpadding="0" align="right" style="float:right;"><tr><td style="padding:5px; text-align:right;"><a href="'+this.props.eturl+'?&utm_source=NMMumbaiEvent23October2017&utm_medium=email&utm_campaign='+campaignFormat(this.props.etname)+'" target="_blank" style="text-decoration:none; color:#ffffff;"><span style="padding:10px 25px 9px 25px; line-height:40px; font-family:Verdana, Arial,sans-serif; font-size:12px; white-space:nowrap; color:#ffffff; background-color:#0072ff; font-weight:bold; border-radius:5px;">BOOK</span></a></td></tr></table></td></tr></table></td></tr></table>',});
    }
    else{
      this.setState({checked: true, value: '<table cellpadding="0" cellspacing="0" class="deviceWidth" border="0" align="center" style="width:570px; padding:10px 10px 10px 10px;background-color:#ffffff; margin:0 auto;"><tr><td valign="top" style="width:100%; background-color:#ffffff;"><a href="'+this.props.eturl+'?&utm_source=NMMumbaiPlays06July2018&utm_medium=email&utm_campaign='+campaignFormat(this.props.etname)+'" target="_blank" style="text-decoration:none; color:#fff;"><img src="https://in.bmscdn.com/events/mobile/'+this.props.etcode+'.jpg" alt="'+this.props.etname+'" title="'+this.props.etname+'" border="0" style="width:100%; display:block; background-color:#ffffff; color:#000000; overflow:hidden; border-radius:10px;"/><img src="https://in.bmscdn.com/mailers/images/180207nm/banner_shadow.jpg" alt="" title="" border="0" style="width:100%; display:block; background-color:#ffffff; color:#000000;"/></a></td></tr><tr><td class="deviceWidth" align="center" style=" background-color:#ffffff;"><table class="deviceWidth" cellspacing="0" cellpadding="0" align="center" style="width:570px; margin:0px auto;border-spacing:0;"><tr><td colspan="2" style="padding:0px 0px 0px 0px; font-size:20px; font-weight:bold; vertical-align:top; font-family:Verdana, Arial,sans-serif; text-align:left; color:#333333; line-height:26px;"><a href="'+this.props.eturl+'?&utm_source=NMMumbaiPlays06July2018&utm_medium=email&utm_campaign='+campaignFormat(this.props.etname)+'" target="_blank" style="text-decoration:none; color:#333333; font-family:Verdana, Arial,sans-serif;">'+this.props.etname+'</a><span style="display:block;line-height:18px; font-size:15px; padding:5px 0 5px 0;font-weight:normal; color:#666666;">'+this.props.etvenues+'</span><span style="display:block; padding:5px 0 0px 0; line-height:16px; font-size:12px;font-weight:normal; color:#a3a3a3;">'+genreFormat(this.props.etgenre)+'</span></td></tr><tr><td valign="middle" style="width:100%; padding:10px 0px 0px 0px; font-size:20px; font-weight:bold; vertical-align:top; font-family:Verdana, Arial,sans-serif; text-align:left; color:#333333; line-height:26px;"><span style="display:block; padding:5px 0px 15px 0px; font-size:15px; font-weight:bold; font-family:Verdana, Arial,sans-serif; text-align:left; color:#666666; line-height:16px;">'+dateFormat(this.props.etfirstdate, this.props.etlastdate)+'</span></td><td valign="top" style="min-width:108px;padding:0px 0px 10px 0px; text-align:left"><a href="'+this.props.eturl+'?&utm_source=NMMumbaiPlays06July2018&utm_medium=email&utm_campaign='+campaignFormat(this.props.etname)+'" style="text-decoration:none; color:#ffffff;"><span style="padding:12px 30px 12px 30px; line-height:40px; font-family:Verdana, Arial,sans-serif; font-size:15px; white-space:nowrap; color:#ffffff; background-color:#0072ff; font-weight:bold; border-radius:4px;">BOOK</span></a></td></tr></table></td></tr></table>'});
    }
  }
  render() {
    if(this.props.loading){
      return <h1>Loading</h1>
    }
    if(this.props.error){
    alert("Please install cors plugin in you browser.")
  }
    return (

      <div className="App">
        <br />
        Enter ET Code Here: <input type="text" onChange={e => {this.setState({etCode: e.target.value})}}/>
        <button onClick={this.onEventChange.bind(this)}>Submit</button>
        <br />
        <br />
        Change Banner: <input type="checkbox" onClick={this.checkChanged.bind(this)} />
        <h1>{this.state.etCode}</h1>
        <EventCard  
        etcode= {this.props.etcode} 
        etname={this.props.etname} 
        eturl= {this.props.eturl} 
        etgenre= {genreFormat(this.props.etgenre)} 
        etvenues= {this.props.etvenues} 
        etfirstdate= {dateFormat(this.props.etfirstdate,this.props.etlastdate)} 
        etlastdate= {this.props.etlastdate} 
        etutmcampaign={campaignFormat(this.props.etname)}
        etsmallcard={this.state.checked} />
        <hr />
        <button id="btn" data-copytarget="#holdtext">Copy to Clipboard</button> 
        <br />
        <textarea id="holdtext" value={this.state.value} onChange={ev =>{this.setState({target_value: ev.target.value})}}></textarea>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
App.defaultProps  = {
  etcode: 'ET00019735', 
  etname: 'KidZania', 
  eturl: 'https://in.bookmyshow.com/family/kidzania-tickets/',
  etgenre: 'Activity,KIDS',
  etvenues: 'KidZania: Mumbai',
  etfirstdate: '20180706',
  etlastdate: '20180713',
  etutmcampaign: 'KidZania',
};
import React, { Component } from 'react';
import '../css/App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchData} from '../actions/reduxActions';
import EventCard from './EventCard';
import TextArea from './TextArea';
import Loader from './Loader';
import {campaignFormat, dateFormat, genreMeteFormat, eventVenueFormat} from './Functions';

const mapStateToProps = (state) => {
  return{
    loading: state.fetch.fetching,
    data: state.fetch.data,
    etcode: state.fetch.etcode,
    etname:state.fetch.etname,
    eturl: state.fetch.eturl,
    etgenre: state.fetch.etgenre,
    etgenre0: state.fetch.etgenre0,
    etgenre1: state.fetch.etgenre1,
    etgenre2: state.fetch.etgenre2,
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

class App extends Component {
  constructor(props){
    super(props);
    this.state = {etCode:'',checked: false, 
    target_value: '',
    value: '',
    Date: ''
  }
    this.onEventChange = this.onEventChange.bind(this);
     this.checkChanged=this.checkChanged.bind(this);
  }

  componentDidMount(){
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const d = new Date();
let newDate = d.getDate()+monthNames[d.getMonth()]+d.getFullYear();
this.setState({Date: newDate});
  }

checkChanged(){
    if(this.state.checked){
      this.setState({checked: false});
    }
    else{
      this.setState({checked: true});
    }
  }
  onEventChange(){
    if(this.state.etCode !== '' && this.state.etCode.substring(0,2)==='ET'){
      this.props.fetchData(this.state.etCode);
       this.setState({etCode:''});
    }
    else{
      alert('Please Enter Valid ET Code in Text Field');
    }
  }



  render() {
    if(this.props.loading){
      return <Loader />
    }
    if(this.props.error){
    alert("Please install cors plugin in you browser & try again with Valid Event ET Code.");
  }
   if(this.props.etcode !== ''){
    return (

      <div className="App">
        <br />
        <br />
        <input className="submittext" type="text" placeholder="Enter ET Code Here" onChange={e => {this.setState({etCode: e.target.value})}}/>
        <button className="submitbutton" onClick={this.onEventChange.bind(this)}>Submit</button>
        <br />
        <br />
        <span className="text_color">Change Card:</span> <input type="checkbox" onClick={this.checkChanged.bind(this)} />
        <br />
        <br />
        <EventCard  
        etcode= {this.props.etcode} 
        etname={this.props.etname} 
        eturl= {this.props.eturl} 
        etgenre= {genreMeteFormat(this.props.etgenre, this.props.etgenre0, this.props.etgenre1, this.props.etgenre2)} 
        etvenues= {eventVenueFormat(this.props.etvenues)} 
        etfirstdate= {dateFormat(this.props.etfirstdate,this.props.etlastdate)} 
        etlastdate= {this.props.etlastdate} 
        etutmcampaign={campaignFormat(this.props.etname)}
        etsmallcard={this.state.checked}
        etDate = {this.state.Date} />
        <hr />
        <TextArea
        etcode= {this.props.etcode} 
        etname={this.props.etname} 
        eturl= {this.props.eturl} 
        etgenre= {genreMeteFormat(this.props.etgenre, this.props.etgenre0, this.props.etgenre1, this.props.etgenre2)} 
        etvenues= {eventVenueFormat(this.props.etvenues)} 
        etfirstdate= {dateFormat(this.props.etfirstdate,this.props.etlastdate)} 
        etlastdate= {this.props.etlastdate} 
        etutmcampaign={campaignFormat(this.props.etname)}
        etsmallcard={this.state.checked} 
        etDate = {this.state.Date} />
      </div>
    );
 
   }
    return(
      <div className="App">
        <br />
        <input className="submittext" type="text" placeholder="Enter ET Code Here" onChange={e => {this.setState({etCode: e.target.value})}}/>
        <button className="submitbutton" onClick={this.onEventChange.bind(this)}>Submit</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
App.defaultProps  = {
  etcode: '', 
 /* etname: 'KidZania', 
  eturl: 'https://in.bookmyshow.com/family/kidzania-tickets/',
  etgenre: 'Activity,KIDS',
  etvenues: 'KidZania: Mumbai',
  etfirstdate: '20180706',
  etlastdate: '20180713',
  etutmcampaign: 'KidZania',*/
};
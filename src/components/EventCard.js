import React, { Component } from "react";
import "../css/App.css";

class EventCard extends Component {

  render() {
    if(this.props.etsmallcard){
      return(
        
        <table cellPadding="0" cellSpacing="0" className="deviceWidth" border="0" align="center" style={{width:"570px", padding:"10px 10px 10px 10px",backgroundColor:"#ffffff", margin:"0 auto",}}>
  <tbody>
  <tr>
    <td valign="top" style={{width:"100%", backgroundColor:"#ffffff",}}><a href={this.props.eturl+'?&utm_source=NMEvent'+this.props.etDate+'&utm_medium=email&utm_campaign='+this.props.etutmcampaign+''}  target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:"#fff",}}><img src={'https://in.bmscdn.com/Events/Mobile/'+this.props.etcode+'.jpg?&utm_source=NMEvent'+this.props.etDate+''} alt={this.props.etname}  title={this.props.etname}  border="0" style={{width:"100%", display:"block", backgroundColor:"#ffffff", color:"#000000", overflow:"hidden", borderRadius:"10px"}}/><img src="https://in.bmscdn.com/mailers/images/180207nm/banner_shadow.jpg" alt="" title="" border="0" style={{width:"100%", display:"block", backgroundColor:"#ffffff", color:"#000000"}}/></a></td>
  </tr>
  <tr>
    <td className="deviceWidth" align="center" style={{ backgroundColor:"#ffffff,"}}>
      <table className="deviceWidth" cellSpacing="0" cellPadding="0" align="center" style={{width:"570px", margin:"0px auto",borderSpacing:"0",}}>
        <tbody>
        <tr>
          <td colSpan="2" style={{padding:"0px 0px 0px 0px", fontSize:"20px", fontWeight:"bold", verticalAlign:"top", fontFamily: "Roboto, Arial, sans-serif", textAlign:"left", color:"#333333", lineHeight:"26px",}}><a href={this.props.eturl+'?&utm_source=NMEvent'+this.props.etDate+'&utm_medium=email&utm_campaign='+this.props.etutmcampaign+''} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:"#333333", fontFamily: "Roboto, Arial, sans-serif",}}>{this.props.etname}</a><span style={{display:"block",lineHeight:"18px", fontSize:"15px", padding:"5px 0 5px 0",fontWeight:"normal", color:"#666666",}}>{this.props.etvenues}</span><span style={{display:"block", padding:"5px 0 0px 0", lineHeight:"16px", fontSize:"12px",fontWeight:"normal", color:"#a3a3a3",}}>{this.props.etgenre}</span></td>
        </tr>
        <tr>
          <td valign="middle" style={{width:"100%", padding:"10px 0px 0px 0px", fontSize:"20px", fontWeight:"bold", verticalAlign:"top", fontFamily: "Roboto, Arial, sans-serif", textAlign:"left", color:"#333333", lineHeight:"26px",}}><span style={{display:"block", padding:"5px 0px 15px 0px", fontSize:"15px", fontWeight:"bold", fontFamily: "Roboto, Arial, sans-serif", textAlign:"left", color:"#666666", lineHeight:"16px",}}>{this.props.etfirstdate}</span></td>
          <td valign="top" style={{minWidth:'108px',padding:'0px 0px 10px 0px', textAlign:"left"}}><a href={this.props.eturl+'?&utm_source=NMEvent'+this.props.etDate+'&utm_medium=email&utm_campaign='+this.props.etutmcampaign+''} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:"#ffffff",}}><span style={{padding:"8px 24px 8px 24px", lineHeight:"40px", fontFamily: "Roboto, Arial, sans-serif", fontSize:"14px", whiteSpace:"nowrap", color:"#ffffff", backgroundColor:"#e7374d", fontWeight:"500", fontStyle:"normal", borderRadius:"5px",}}>Book&nbsp;Now</span></a></td>
        </tr>
        </tbody>
      </table>
    </td>
  </tr>
  </tbody>
</table>)
    }
    return (
     <table className="deviceWidth" cellSpacing="0" cellPadding="0" align="left" style={{width:"40%", minWidth:"250px", maxWidth:"292px", margin:"10px 25px", backgroundColor:"#ffffff", verticalAlign:"top",display:"inline-block",float:"none",}}>
                                   <tbody>
                                    <tr>
                                      <td style={{width:"100%"}}>
                                        <table cellPadding="0" cellSpacing="0" border="0" align="center" style={{backgroundColor:"#ffffff", margin:"0 auto"}}>
                                          <tbody>
                                          <tr>
                                            <td valign="top" style={{width:"100%", backgroundColor:"#ffffff"}}><a href={this.props.eturl+'?&utm_source=NMEvent'+this.props.etDate+'&utm_medium=email&utm_campaign='+this.props.etutmcampaign+''} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:"#fff"}}><img src={'https://in.bmscdn.com/Events/Mobile/'+this.props.etcode+'.jpg?&utm_source=NMEvent'+this.props.etDate+''} alt={this.props.etname} title={this.props.etname} border="0" style={{width:"100%", display:"block", backgroundColor:"#ffffff", color:"#010101", overflow:"hidden", borderRadius:"10px"}}/></a></td>
                                          </tr>
                                          <tr>
                                            <td style={{width:"100%",padding:"10px 5px 0px 5px", fontSize:"16px", verticalAlign:"top", fontFamily: "Roboto, Arial, sans-serif", textAlign:"left", color:"#333333", lineHeight:"22px"}}><a href={this.props.eturl+'?&utm_source=NMEvent'+this.props.etDate+'&utm_medium=email&utm_campaign='+this.props.etutmcampaign+''} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:"#333333", fontFamily: "Roboto, Arial, sans-serif"}}>{this.props.etname}</a></td>
                                          </tr>
                                          <tr>
                                            <td style={{width:"100%",padding:"5px 5px", fontSize:"12px", verticalAlign:"top", fontFamily: "Roboto, Arial, sans-serif", textAlign:"left", color:"#666666", lineHeight:"18px"}}>{this.props.etvenues}</td>
                                          </tr>
                                          <tr>
                                            <td style={{width:"100%",padding:"5px 5px 5px 5px", fontSize:"12px", verticalAlign:"top", fontFamily: "Roboto, Arial, sans-serif", textAlign:"left", lineHeight:"19px", fontWeight:"normal", color:"#a3a3a3"}}>{this.props.etgenre}</td>
                                          </tr>
                                          <tr>
                                            <td align="center" style={{width:"100%", padding:"5px 0px 0px 0px", backgroundColor:"#ffffff"}}>
                                              <table cellSpacing="0" cellPadding="0" align="left" style={{float:"left"}}>
                                              <tbody>
                                                <tr>
                                                  <td style={{padding:"15px 5px 0px 5px", fontSize:"13px", fontWeight:"bold", fontFamily: "Roboto, Arial, sans-serif", textAlign:"left", color:"#666666", textTransform:"capitalize", lineHeight:"16px"}}>{this.props.etfirstdate}</td>
                                                </tr>
                                                </tbody>
                                              </table>
                                              <table cellSpacing="0" cellPadding="0" align="right" style={{float:"right"}}>
                                              <tbody>
                                                <tr>
                                                  <td style={{padding:"5px", textAlign:"right"}}><a href={this.props.eturl+'?&utm_source=NMEvent'+this.props.etDate+'&utm_medium=email&utm_campaign='+this.props.etutmcampaign+''} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:"#ffffff"}}><span style={{padding:"8px 24px 8px 24px", lineHeight:"40px", fontFamily: "Roboto, Arial, sans-serif", fontSize:"14px", whiteSpace:"nowrap", color:"#ffffff", backgroundColor:"#e7374d", fontWeight:"500", fontStyle:"normal", borderRadius:"5px",}}>Book&nbsp;Now</span></a></td>
                                                </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                    </tbody>
                                  </table>
    );
  }
}

export default EventCard;

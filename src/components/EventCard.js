import React, { Component } from "react";
import "../css/App.css";

class EventCard extends Component {

  render() {
    return (
     <table className="deviceWidth" cellSpacing="0" cellPadding="0" align="left" style={{width:"40%", minWidth:"250px", maxWidth:"292px", margin:"10px 25px", backgroundColor:"#ffffff", verticalAlign:"top",display:"inline-block",float:"none",}}>
                                   <tbody>
                                    <tr>
                                      <td style={{width:"100%"}}>
                                        <table cellPadding="0" cellSpacing="0" border="0" align="center" style={{backgroundColor:"#ffffff", margin:"0 auto"}}>
                                          <tbody>
                                          <tr>
                                            <td valign="top" style={{width:"100%", backgroundColor:"#ffffff"}}><a href={this.props.eturl+'?&utm_source=NMMumbaiEvent23October2017&utm_medium=email&utm_campaign='+this.props.etutmcampaign+''} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:"#fff"}}><img src={'https://in.bmscdn.com/events/eventlisting/'+this.props.etcode+'.jpg'} alt={this.props.etname} title={this.props.etname} border="0" style={{width:"100%", display:"block", backgroundColor:"#ffffff", color:"#010101", overflow:"hidden", borderRadius:"10px"}}/></a></td>
                                          </tr>
                                          <tr>
                                            <td style={{width:"100%",padding:"10px 5px 0px 5px", fontSize:"16px", verticalAlign:"top", fontFamily:"Verdana, Arial,sans-serif", textAlign:"left", color:"#333333", lineHeight:"22px"}}><a href={this.props.eturl+'?&utm_source=NMMumbaiEvent23October2017&utm_medium=email&utm_campaign='+this.props.etutmcampaign+''} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:"#333333", fontFamily:"Verdana, Arial,sans-serif"}}>{this.props.etname}</a></td>
                                          </tr>
                                          <tr>
                                            <td style={{width:"100%",padding:"5px 5px", fontSize:"12px", verticalAlign:"top", fontFamily:"Verdana, Arial,sans-serif", textAlign:"left", color:"#666666", lineHeight:"18px"}}>{this.props.etvenues}</td>
                                          </tr>
                                          <tr>
                                            <td style={{width:"100%",padding:"5px 5px 5px 5px", fontSize:"12px", verticalAlign:"top", fontFamily:"Verdana, Arial,sans-serif", textAlign:"left", lineHeight:"19px", fontWeight:"normal", color:"#a3a3a3"}}>{this.props.etgenre}</td>
                                          </tr>
                                          <tr>
                                            <td align="center" style={{width:"100%", padding:"5px 0px 0px 0px", backgroundColor:"#ffffff"}}>
                                              <table cellSpacing="0" cellPadding="0" align="left" style={{float:"left"}}>
                                              <tbody>
                                                <tr>
                                                  <td style={{padding:"15px 5px 0px 5px", fontSize:"13px", fontWeight:"bold", fontFamily:"Verdana, Arial,sans-serif", textAlign:"left", color:"#666666", textTransform:"capitalize", lineHeight:"16px"}}>{this.props.etfirstdate}</td>
                                                </tr>
                                                </tbody>
                                              </table>
                                              <table cellSpacing="0" cellPadding="0" align="right" style={{float:"right"}}>
                                              <tbody>
                                                <tr>
                                                  <td style={{padding:"5px", textAlign:"right"}}><a href={this.props.eturl+'?&utm_source=NMMumbaiEvent23October2017&utm_medium=email&utm_campaign='+this.props.etutmcampaign+''} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:"#ffffff"}}><span style={{padding:"10px 25px 9px 25px", lineHeight:"40px", fontFamily:"Verdana, Arial,sans-serif", fontSize:"12px", whiteSpace:"nowrap", color:"#ffffff", backgroundColor:"#0072ff", fontWeight:"bold", borderRadius:"5px"}}>BOOK</span></a></td>
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

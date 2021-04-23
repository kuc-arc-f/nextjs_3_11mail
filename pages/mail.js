import React from 'react'

import LibCommon from '../libs/LibCommon'
import LibPagenate from '../libs/LibPagenate'
import LibTest from '../libs/LibTest'
import Layout from '../components/layout'
import LibConst from '../libs/LibConst'
//
export default class extends React.Component {
  static async getInitialProps(ctx) {
//console.log("BASE_URL=", BASE_URL)
    var url = process.env.BASE_URL + '/api/token_get'
    const res = await fetch(url)
    const json = await res.json()
    return {
      data: "",
      items: [],
      csrf: json.csrf,
    }
  }
  constructor(props){
    super(props)
//console.log(props )
  }
  clickHandler(){
console.log("#clickHandler" )
    this.proc_test()
  }
  async proc_test(){
    try {
      var elemTo = document.getElementById('to_mail_address');
      var elemTitle = document.getElementById('mail_title');
      var elemContent = document.getElementById('mail_content');
      var item = {
        to_mail : elemTo.value,
        title: elemTitle.value,
        content: elemContent.value,
      }
//console.log(item)
      const res = await fetch(process.env.BASE_URL + '/api/send_mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(item),
      });
      if (res.status === 200) {
        var json = await res.json()
        alert("Success, send mail")
console.log(json)
//        Router.push('/tasks');
      } else {
        throw new Error(await res.text());
      }
    } catch (error) {
      alert("Error, proc_test")
      console.error(error);
    }    
  }   
  render(){
    return (
    <Layout>
      <div className="body_main_wrap">
        <div className="container">
        <h1>Test - mail send</h1>
        <hr />
        <div className="row">
          <div className="col-sm-9 form-group">
            <label>To mail:</label>
            <input type="text" className="form-control" 
            name="to_mail_address" id="to_mail_address"
            defaultValue="hoge@test.com" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 form-group">
            <label>Title:</label>
            <input type="text" className="form-control"
            name="mail_title" id="mail_title" 
            defaultValue="title-1234"/>
          </div>          
        </div>
        <div className="form-group">
          <label>Mail Body:</label>
          <textarea type="text" name="mail_content" id="mail_content"
            className="form-control" rows="8" 
            defaultValue="mail-body-1234" ></textarea>
        </div>

        <hr />
        <button onClick={this.clickHandler.bind(this)}>Test-Mail
        </button>
        </div>
      </div>
    </Layout>
    )
  }
}


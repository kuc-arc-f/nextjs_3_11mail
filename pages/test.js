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
      var item = {
        to_mail : elemTo.value
      }
//console.log(item)
      const res = await fetch(process.env.BASE_URL + '/api/send_mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(item),
      });
      if (res.status === 200) {
        var json = await res.json()
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
          <div className="col-md-6">
            <div className="form-group">
              <label>To mail:</label>
              <input type="text" className="form-control" 
              name="to_mail_address" id="to_mail_address"
              defaultValue="hoge@test.com" />
            </div>
          </div>
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


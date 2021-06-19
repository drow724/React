import React, {Component} from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      Mode:'read',
      Subject:{title:'WEB', sub:'World Wide Web!'},
      Welcome:{title:'welcome', desc: 'Hello, React!!'},
      Content:[
        {id:1, title:'HTML', desc:'HTML is HyperText...'},
        {id:2, title:'CSS', desc:'CSS is for design...'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive...'},
      ]
    }
  }
  render() {
    
    var _title, _desc = null;
    if(this.state.Mode === 'welcome'){
      _title = this.state.Welcome.title;
      _desc = this.state.Welcome.desc;
    } else if(this.state.Mode === 'read') {
      _title = this.state.Content[0].title;
      _desc = this.state.Content[0].desc;
    }
    console.log('render', this);
    return (
      <div className="App">
        {/* <Subject 
        title={this.state.Subject.title}
        sub={this.state.Subject.sub}>
        </Subject> */}
         <header>
          <h1><a href="/" onClick={function(e){
            console.log(e);
            e.preventDefault();
            //this.state.Mode = 'welcome';
           this.setState({
          Mode:'welcome'
          });
      }.bind(this)}>{this.state.Subject.title}</a></h1>
          {this.state.Subject.sub}
        </header>
        <TOC data={this.state.Content}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }

}

export default App;
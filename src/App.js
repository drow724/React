import React, {Component} from 'react';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import Subject from './components/Subject';
import Control from './components/Control';
import CreateContent from './components/CreateContent';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      Mode:'create',
      selected_content_id:2,
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
    var _title, _desc, _article = null;
    if(this.state.Mode === 'welcome'){
      _title = this.state.Welcome.title;
      _desc = this.state.Welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.Mode === 'read') {
      var i = 0;
      while(i < this.state.Content.length){
        var data = this.state.Content[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.Mode === 'create'){
      _article = <CreateContent onSubmit={function(_title,_desc){
        console.log(_title,_desc)
      }.bind(this)}></CreateContent>
    }
    return (
      <div className="App">
        <Subject 
        title={this.state.Subject.title}
        sub={this.state.Subject.sub}
          onChangePage={function(){
            this.setState({Mode:'welcome'});
          }.bind(this)}
          > 
        </Subject>
        <TOC
        onChangePage={function(id){
          this.setState({
            Mode:'read',
            selected_content_id:Number(id)
          });
        }.bind(this)}
        data={this.state.Content}></TOC>
        <Control onChangeMode={function(_Mode){
          this.setState({
            Mode:_Mode
          })
        }.bind(this)}></Control>
        {_article}
      </div>
    );
  }

}

export default App;
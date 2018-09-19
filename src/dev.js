import './dev.scss';
import ReactFadeImg from './main';

/*===example start===*/

// install: npm install afeiship/react-fade-img --save
// import : import ReactFadeImg from 'react-fade-img'

class App extends React.Component{
  state = {

  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render(){
    return (
      <div className="hello-react-fade-img">
        <ReactFadeImg value={false} src="http://imglf4.nosdn.127.net/img/KzNuMlRKSFVENitYYjJBYnU5Q2cwQjRjd0ljSURUWmxZeGxvWVlOYnhHZWRReFBoUVJWUXFRPT0.jpg?imageView&thumbnail=1680x0&quality=96&stripmeta=0&type=jpg" ref='rc' />
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

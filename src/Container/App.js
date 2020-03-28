import React from 'react';
import './App.css';
import SignIn from '../Components/signIn/signIn';
import Register from '../Components/Register/Register';
import Navigation from 
    '../Components/Navigation/Navigation';
import Logo from '../Components/Logo/Logo';
import ImageLinkForm from 
    '../Components/ImageLinkForm/ImageLinkForm';
import Rank from '../Components/Rank/Rank';
import FaceRecoginition from 
    '../Components/FaceRecoginition/FaceRecoginition';
import Particles from 'react-particles-js';


const Options = {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 600
          }
        }
      }
  }

const initialState = {
      input: '',
      imageURL: '',
      box: [],
      route : 'SignIn',
      page : 'SignIn',
      user: {
        id: '',
        email: '',
        name: '',
        entries: 0,
        joiningDate: ''
      }
    }

class App extends React.Component{
  constructor(){
    super();
    this.state = initialState
  }

  storeUser = (user) => {
    this.setState({
      user: {
        id: user.id,
        email: user.email, 
        name: user.name,
        entries: user.entries,
        joiningDate: user.joiningDate   
      }
    })
  }

  faceLocation = (data) => {
    let face;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    const noFaces = (data.outputs[0].data.regions).length;
    for(let i=0;i<noFaces;i++){
        face = data.outputs[0].data.regions[i].region_info.bounding_box;
        this.displayFace({
        RC : width - (face.right_col * width),
        LC : face.left_col * width,
        TR : face.top_row * height,
        BR : height - (face.bottom_row * height)
        });
    }
  }

  displayFace = (boxData) => {
     this.setState({
      box: this.state.box.concat(boxData)
     });
  } 

  onInputChange = (event) =>{
    
    this.setState({input : event.target.value});
  }

  validateEmail = (mail) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    return (false)
  }

  clearBox = () => {
    this.setState({ box : [] })
  }

  onButtonClick = () => {
    this.clearBox();
    this.setState({imageURL : this.state.input});
    fetch('https://vast-beyond-01389.herokuapp.com/imageurl', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          input: this.state.input
        })
        })
    .then(data => data.json())
    .then(response => {
      if(response){
        fetch('https://vast-beyond-01389.herokuapp.com/image', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          id: this.state.user.id
        })
        })
        .then(response => response.json())
        .then(data => {
          if(data!=='Unable to update entries')
          {  this.setState(Object.assign(this.state.user, {
                     entries: data
                   }))}
        })
        .catch(console.log);

        this.faceLocation(response);
      }


      })
    .catch( error => console.log(error));

  }

  onRouteChange = (route,page) => {
    if(route==="SignIn" && page==="SignIn"){
      this.setState(initialState);
    }
    else{
      this.setState({page : page});
      this.setState({route : route});
    }
  }


  render()  {
    const {page, route, imageURL, box} = this.state
     return (
      <div>
        <Particles  
        params={Options}
        className="particlesOptions"/>
        <Navigation onRouteChange={this.onRouteChange} 
        page={page}/>

        {
          route==='SignIn'
          ?
          <SignIn onRouteChange={this.onRouteChange}
          storeUser={this.storeUser}
          validateEmail={this.validateEmail}/>

          : 
          route==='Register'
          ?
          <Register onRouteChange={this.onRouteChange}
          storeUser={this.storeUser}
          validateEmail={this.validateEmail}/>

          :  
          <div>
          <Logo/>
          <Rank entries={this.state.user.entries}
          name={this.state.user.name}/>
          <ImageLinkForm 
          onInputChange={this.onInputChange}
          Click={this.onButtonClick}
          />
          <FaceRecoginition box={box}
          imageURL={imageURL}/>
          </div>
      }
      </div>
    );}
}

export default App;

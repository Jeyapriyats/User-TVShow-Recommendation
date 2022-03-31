import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import Dashboard from './Dashboard';
class App extends Component {
  constructor(){
      super()
      this.state = {
        name : "",
        password:"",
        submitted : false
      }
  }
  show()
  {
    console.log("Inside Show");
    axios.post("http://localhost:5000/user",{name:this.state.name,password:this.state.password})
    .then((res) =>{ 
  });   
   this.setState({
     submitted : true
    
   })
  }
  changenameHandler=(e)=>{
    this.setState({
      name : e.target.value,
    })
  }
  changepwdHandler=(e)=>{
    this.setState({
      password : e.target.value
    })
  }
  render(){
  return (
    this.state.submitted ? <Dashboard name = {this.state.name} />:
    <form>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
    <TextField
    variant="outlined"
    margin="normal"
    required
    align ="center"
    id="name"
    label="User Name"
    name="name"
    autoComplete="name"
    value={this.state.name}
    onChange ={this.changenameHandler}
    autoFocus
  />
  </Box>
  <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
  <TextField
  variant="outlined"
  margin="normal"
  required
  name="password"
  label="Password"
  type="password"
  id="password"
  value={this.state.password} 
  onChange = {this.changepwdHandler}
  autoComplete="current-password"
/>
</Box>
<Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
 <Button
 type="submit"
 variant="contained"
 color="primary"
 onClick={()=>this.show()}
>
 Sign In
</Button>
</Box>
</form>

  );

}
}
export default App;

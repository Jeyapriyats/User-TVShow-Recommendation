import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Typography  from '@material-ui/core/Typography';
import axios from 'axios';
var result;
class Dashboard extends Component{
    constructor(){
        super()
            this.state = { 
             id : 0,
             url : "",
             name: "",
         }
    }
    componentDidMount(){
          this.getAPI();
 };
getAPI() {
    axios.get(" https://api.tvmaze.com/shows")
    .then((res) =>{ console.log(res.data)
        var data = res.data[Math.floor(Math.random() * res.data.length)];
    this.setState({
        id:data.id,
        url:data.image.medium,
        name:data.name
    })
});
    axios.post("http://localhost:5000/user/updateShow",{name:this.props.name, id:this.state.id})
          .then((res) => {console.log("success",res.data.shows)
          result = res.data.shows.find((element) => element === this.state.id)
          console.log(result);
      }); 
}
    render(props) {
        if (result) {
            console.log("Inside Render")
            this.getAPI();
        }
    return(
        <div>
            <Typography>
              <h1>{this.state.name}</h1>
          </Typography>
        <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        alt="The house from the offer."
        src={this.state.url}
        name = {this.state.name}
      >
          </Box>
         
</div>
    );
}
}
export default  Dashboard;
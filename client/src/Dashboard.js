import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Typography  from '@material-ui/core/Typography';
import axios from 'axios';

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
        console.log("Datta:",data.id)
    this.setState({
        id:data.id,
        url:data.image.medium,
        name:data.name,
        shows:[]
    });

    const display = res.data.map(item => {
        this.setState({
            shows: this.state.shows.concat(item.id)
        })
        
    })
   

    axios.post("http://localhost:5000/user/updateShow",{id:128,userId:JSON.parse(localStorage.getItem('this.props.userId'))})
          .then((res) => {console.log("Shows",res.data.shows)
      });
      axios.post(" http://localhost:5000/user/filter",{id:128,container:this.state.shows})
      .then((res)=>{console.log("List of Unrecommended Shows:!!",res.data)
  })
}); 
     
}
    render(props) {

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
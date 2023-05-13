import React,{useState} from "react";
import { AppBar, Toolbar, Typography ,Tabs,Tab,Button} from "@mui/material";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { useNavigate } from "react-router-dom";
import Product_details from "./product_details";



const Header =() =>{
    const navigate = useNavigate()
    const  Login =()=>{
        navigate("/Login")
    }


    const  Signup =()=>{
        navigate("/Signup")
    }
    
    const  Home =()=>{
        navigate("/Home")
    }
    const  Services =()=>{
        navigate("/CartItems")
    }
    const  LineChart =()=>{
        navigate("/LineChart")
    }
    const  Products =()=>{
        navigate("/Product")
    }
    const  Product_Details =()=>{
        navigate("/Product_details")
    }
    const  Contactus  =()=>{
        navigate("/Contactus ")
    }
    
    
    const [value,setValue] = useState()


    return(
    <React.Fragment>
<AppBar>
    <Toolbar sx={{backgroundColor:"darkblue",color:"yellow"}} id="1">
    <AccountBalanceIcon sx={{marginRight:'auto '}} variant="contained"/>


            <Tabs  textColor="inherit" sx={{marginRight:'380px'}} value={value} indicatorColor="secondary" 
            onChange={(e,value)=> setValue(value)  }
            
            >
                <Tab label="Home" onClick={()=>Home()} />
                <Tab label="Services" onClick={()=>Services()}/>
                <Tab label="LineChart" onClick={()=>LineChart()} />
                <Tab label="Products" onClick={()=>Products()} />
                {/* <Tab label="Product_Details" onClick={()=>Product_Details()}/> */}
                <Tab label="Contactus" onClick={()=>Contactus()}/>


            </Tabs>
            
            <Button sx={{  color:"white"}} variant="contained"   onClick={()=>Login()}>
                Login{""}
                

            </Button>
            <Button sx={{marginLeft:'10px', color:"white"}} variant="contained" onClick={()=>Signup()}>
                signup{""}
            </Button>
         
    </Toolbar>
    
</AppBar>
    </React.Fragment>
    )
}
export default Header



// https://www.youtube.com/watch?v=lUkxSnJ7aDw     

// navbar contineue
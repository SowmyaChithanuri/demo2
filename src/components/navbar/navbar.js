import { FormatItalic, KeyboardArrowDown } from "@mui/icons-material";
import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import SelectInput from "@mui/material/Select/SelectInput";
import { useState } from "react";

function Navbar() {
    const [age, setAge]=useState("")
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
  return (
    <>
    <FormControl sx={{ m: 1, minWidth: 120, borderBottom:1/2,display:"flex",flexDirection:"row"}} size="small">
      {/* <InputLabel>Age</InputLabel> */}
<div style={{marginBottom:33,marginLeft:30,flex:3.5}}>
    <h2 style={{display:"inline-block", marginRight:10,fontStyle:"Italic",color:""}}>
    <font color="#00bcd4">S</font>
            <font color="#00bcd4">O</font>
            <font color="#26c6da">W</font>
            <font color="#00acc1">M</font>
            <font color="#26c6da">Y</font>
            <font color="#00acc1">A</font>
            
    </h2>
<Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant=""
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDown/>}
      >
        Design spotlight
      </Button>
   
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant=""
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDown/>}
      >
       Education
      </Button>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant=""
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDown/>}
      >
      Bussiness
      </Button>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant=""
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDown/>}
      >
    Learn
      </Button>
</div>
     <div style={{marginTop:23,flex:0.8}}>
     <Button variant="contained"style={{marginRight:20}}>Login</Button>
     <Button variant="contained" style={{marginRight:20,backgroundColor:"purple"}}>Sign Up</Button>
     </div>
    </FormControl>
    
    </>
    

  )
}

export default Navbar;
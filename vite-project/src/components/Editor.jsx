import {Box,styled} from "@mui/material";
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { Controlled as ControlledEditor } from "react-codemirror2";
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { useState } from "react";

import '../App.css';

const Container=styled(Box)`
flex-grow:1;
padding:0px 8px 8px;
`


const Heading =styled(Box)`
background:#1d1e22;
display:flex;
color:white;
padding:15px 10px ;
margin:5px
`

const Header =styled(Box)`
display:flex;
background:#060606;
color:#AAAEBC;
justify-Content:space-Between;
`


const Editor =({HeadingLogo ,icons,color,value,onChange})=>{

    const [open ,setOpen]=useState(true)

    const handelChange=(editor,data,value)=>{
        onChange(value)
    }
    return (
        <>
            <Container style={open ? null : {flexGrow:0}} >
                <Header>
                   <Heading>
                    <Box component="span"  
                    style={{
                        display:"flex",
                        height:20,
                        width:20,
                        background:color,
                        placeContent:"center",
                        borderRadius:4,
                        color: "#000"
                     }}
                    >
                           {icons}
                    </Box>
                    {HeadingLogo}
                   </Heading>
                   <Box style={{
                    placeContent:"center",
                    }}>
                   <CloseFullscreenIcon
                            fontSize="small"
                            onClick ={()=>setOpen(prevState =>!prevState)}
                   />
                   </Box>
                  
                 </Header>
                 <ControlledEditor
                  className="controlled-editor"
                  value={value}
                  onBeforeChange={handelChange}

                  options={{
                   theme: 'material',
                    lineNumbers: true

                  }}
                  />
            </Container>
        </>
    )

}


export default Editor;
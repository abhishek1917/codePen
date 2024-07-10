
import Editor from "./Editor";
import { Box,styled } from "@mui/material";
import { DataContext } from "../context/DataProvider";
import { useContext } from "react";

const Constainer=styled(Box)`
display:flex;
background-color:#060606;
`
const Code =()=>{
        
    const {html,setHtml,css,setCss,js,setJs}=useContext(DataContext);
    
    return (
        <>
            
          <Constainer>
            <Editor HeadingLogo="HTML"
                icons="/"
                color="#FF3C41"
                value={html}
                onChange={setHtml}
             />
             <Editor HeadingLogo="CSS"
                 icons="*"
                 color="#0EBEFF"
                 value={css}
                 onChange={setCss}
             />
             <Editor HeadingLogo="JavaScript"
                icons="( )"
                color="#FCD000"
                value={js}
                onChange={setJs}
             />
          </Constainer>
           
           
             

        </>
       
    )
}

export default Code; 
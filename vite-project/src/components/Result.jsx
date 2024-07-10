import { Box } from "@mui/material";
import { useState,useEffect } from "react";

import { DataContext } from "../context/DataProvider";
import { useContext } from "react";

// const Container=styled(Box)`

// `



const Result =()=>{
    const {html,css,js}=useContext(DataContext);

    const [src,setSrc]=useState("");

    useEffect(()=>{
        const timeOut = setTimeout(
            ()=>{
                setSrc(sourceCode)
            },
            1000 )
        return ()=>clearTimeout()
        
    },[html,css,js])

    
    const sourceCode=`
<html>
<body>  ${html} </body>
<style> ${css} </style>
<script> ${js} </script>

</html>
`

    return(
        <>
           <Box>
                 <iframe
                    srcDoc={src}
                    title="OUTPUT"
                    sandbox="allow-scripts"
                    height='400vh'
                    width="100%"
                   
                    
                 />
           </Box> 
        </>
    )
}

export default Result;
import {AppBar,Toolbar,styled} from '@mui/material';

const Header=()=>{

    const Container= styled(AppBar)`
    background:#060606;
    height:9vh;
    `

    const src='https://img.freepik.com/premium-photo/symbol-atom-black-background_483040-6846.jpg'


    return (
        <>
        <Container position='static'>
            <Toolbar style={{color:'yellow'}}>
              <img src={src} alt='logo' style={{width:60}}/>
            </Toolbar>
        </Container>
           
        </>
    )
}

export default Header;
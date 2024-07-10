import {AppBar,Toolbar,styled} from '@mui/material';

const Header=()=>{

    const Container= styled(AppBar)`
    background:#060606;
    height:9vh;
    `


    return (
        <>
        <Container position='static'>
            <Toolbar style={{color:'orange'}}>
                hello
            </Toolbar>
        </Container>
            <h2>Header hai mere bhai</h2>
        </>
    )
}

export default Header;
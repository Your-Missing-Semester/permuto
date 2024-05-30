// implement header 
// MVP: HOME LOG-IN SIGN-UP ABOUT
// later implement: search bar, navbar
import './NavBar.css';

function NavBar() {
    return (
        <div className="NavBar">
            <a href="https://youtu.be/av4sEcTS8QA?si=f1nBMSFSZSVo-AZB">
                HOME
            </a>
            
            <a href="https://youtu.be/HPjB0_weI-U?si=16cJtiITMezGjfbM">
                SIGN IN
            </a>
            
            <a href="https://youtu.be/Y7vDu7wsuys?si=PnYWguH0P73KG7_w">
                LOG IN
            </a>
            
            <a href="https://youtu.be/sELakii91sI?si=tJwDAXLT28LUqggX">
                ABOUT
            </a>    
            
        </div>
    );
}

export default NavBar;
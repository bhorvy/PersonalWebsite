export default function MainPage() {
    return (
        <div className="col">
       <div className="container text-center">
            <div className="row">
                <div className="col div-style">
               <img src="../me.jpg" alt="picture of me :)"></img>
                </div>
                <div className="col d-flex flex-column align-items-center justify-content-center text-center div-style" style={{ minHeight: '20vh' }}>
                <h2>Hello, I'm Brennan.</h2>
                <p className="main-p">Computer Science Student at the University of Regina</p>
                <p className="main-p">Currently: Work Term with SGI 🚗</p>
 
                </div>
            </div>
        </div>
        <div className="d-flex justify-content-center">
            <div className="col d-flex flex-column align-items-center justify-content-center text-center div-style-2">
                <h5>About Me</h5>
                <p>22 year old fourth year student, average of 89%.
                    I like to "try" coding. </p>
            </div>
        </div>
        </div>
    )
    
}
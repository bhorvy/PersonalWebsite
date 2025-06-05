export default function MainPage() {
    return (
        <div className="col parent-div">
            <div className="container text-center" style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="row w-100 align-items-center justify-content-center">
                    <div className="col-lg-4 d-flex justify-content-center align-items-center div-style-2" style={{ maxHeight: '40vh' }}>
                        <img className="me" src="../me.jpg" alt="me :)" style={{ maxHeight: '40vh', minHeight: '40vh', minWidth: '40vh' }}/>
                    </div>
                    <div className="col-lg-5 d-flex flex-column align-items-center justify-content-center text-center div-style" style={{ minHeight: '40vh' }}>
                        <h2>Hello, I'm Brennan.</h2>
                        <p className="main-p">Computer Science Student at the University of Regina</p>
                        <p className="main-p">Currently: Work Term with SGI 🚗</p>
                    </div>
                </div>
            </div>
            <div className="container text-center mt-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="row w-100 align-items-center justify-content-center">
                    <div className="col-lg-5 d-flex flex-column align-items-center justify-content-center text-center div-style" style={{ minHeight: '30vh' }}>
                        <h5>About Me</h5>
                        <p>22 year old fourth year student, average of 89%. I like "trying" coding. </p>
                    </div>
                    <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center text-center div-style" style={{ minHeight: '30vh' }}>
                        <h2>Technologies</h2>
                        <p className="main-p"></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
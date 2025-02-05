import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <div id="Navbar"> 
            <div className="item">
                <Link to="/"><button>Home</button></Link>
            </div>
            <div className="item">
                <Link to="/about"><button>About Me</button></Link>
            </div>
            <div className="item">
                <Link to="/work"><button>Experience</button></Link>
            </div>
            <div className="item">
                <Link to="/projects"><button>Projects</button></Link>
            </div>
        </div>
    )
}

export default Navbar
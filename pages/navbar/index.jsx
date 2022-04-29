import Logo1 from '../../assets/img/logo_1.png';
import Icon1svg from '../../assets/img/logo2.png';
import avatar from '../../assets/img/logo200x200.png';

function Navbar() {
  return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <div className="row rowNav w-100">
              <div className="col d-flex">
                <a className="navbar-brand" href="#">NFTapp</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
              <div className="col d-flex justify-content-end">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  {/* <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>                                        
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </>
  );
}

export default Navbar;

import Logo from "../../assets/img/vidya.png";

export const Header = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-secondary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={Logo}
              alt=""
              width="150"
              className="d-inline-block align-text-top"
            />
          </a>

          <div className="sidenav-toggler sidenav-toggler-inner d-xl-block  p-2">
            <a
              className="nav-link text-body p-0"
              data-bs-toggle="offcanvas"
              href="#offcanvasRight"
              role="button"
              aria-controls="offcanvasRight"
            >
              <div className="sidenav-toggler-inner text-white">
                <i className="sidenav-toggler-line bg-white"></i>
                <i className="sidenav-toggler-line bg-white"></i>
                <i className="sidenav-toggler-line bg-white"></i>
              </div>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

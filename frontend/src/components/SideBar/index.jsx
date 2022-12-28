import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <>
      <div
        className="offcanvas offcanvas-end d-flex flex-column flex-shrink-0 p-3 bg-light"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        style={{ width: 280 }}
      >
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="text-secondary"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            X
          </button>
        </div>

        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <img
            src="https://avatars.githubusercontent.com/u/32652021?v=4"
            alt=""
            width="50"
            height="50"
            className="rounded-circle me-4"
          />
          <span className="fs-4">Sidebar</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link className="nav-link link-dark" to="/clientes">
              <i className="fa fa-users mx-2"></i>
              Clientes
            </Link>
          </li>
          <li>
            <Link className="nav-link link-dark" to="/produtos">
              <i className="fa fa-cart-plus mx-2"></i>
              Produtos
            </Link>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
            id="dropdownUser2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://avatars.githubusercontent.com/u/32652021?v=4"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>Configurações</strong>
          </a>
          <ul
            className="dropdown-menu text-small shadow"
            aria-labelledby="dropdownUser2"
          >
            <li>
              <a className="dropdown-item" href="#">
                Perfil
              </a>
            </li>
            <li>
              <Link className="dropdown-item" to="/clientes">
                Meus produtos
              </Link>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Alterar senha
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sair
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

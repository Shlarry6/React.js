import CategoryMenu from "../Categories/CategoryMenu";
import ProductContextProvider from "../../Store/ProductContextProvider";

const NavBar = () => {
  return (
    <>
      <div className="container-fluid bg-dark mb-30">
        <div className="row px-xl-5">
          <ProductContextProvider>
            <CategoryMenu />
          </ProductContextProvider>
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
              <a href="/" className="text-decoration-none d-block d-lg-none">
                <span className="h1 text-uppercase text-dark bg-light px-2">
                  Multi
                </span>
                <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">
                  Shop
                </span>
              </a>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav mr-auto py-0">
                  <a href="/" className="nav-item nav-link active">
                    Home
                  </a>
                  <a href="/categories" className="nav-item nav-link">
                    Shop
                  </a>
                  <a href="/" className="nav-item nav-link">
                    Shop Detail
                  </a>
                  <div className="nav-item dropdown">
                    <a
                      href="/"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Pages <i className="fa fa-angle-down mt-1"></i>
                    </a>
                    <div className="dropdown-menu bg-primary rounded-0 border-0 m-0">
                      <a href="/" className="dropdown-item">
                        Shopping Cart
                      </a>
                      <a href="/" className="dropdown-item">
                        Checkout
                      </a>
                    </div>
                  </div>
                  <a href="/contact" className="nav-item nav-link">
                    Contact
                  </a>
                  <a href="/requests" className="nav-item nav-link">
                    Requests
                  </a>
                </div>
                <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                  <a href="/" className="btn px-0">
                    <i className="fas fa-heart text-primary"></i>
                    <span
                      className="badge text-secondary border border-secondary rounded-circle"
                      style={{ paddingBottom: "2px" }}
                    >
                      0
                    </span>
                  </a>
                  <a href="/" className="btn px-0 ml-3">
                    <i className="fas fa-shopping-cart text-primary"></i>
                    <span
                      className="badge text-secondary border border-secondary rounded-circle"
                      style={{ paddingBottom: "2px" }}
                    >
                      0
                    </span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;

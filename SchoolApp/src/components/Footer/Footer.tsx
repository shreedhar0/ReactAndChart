import "bootstrap/dist/css/bootstrap.css";
import "./Footer.css";
function Footer() {
  return (
    <>
      <footer
        className="bg-light text-center text-lg-start fixed-bottom"
        style={{ marginTop: "30px" }}
      >
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright:
          <a className="text-dark" href="#">
            Demo Copyrights
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;

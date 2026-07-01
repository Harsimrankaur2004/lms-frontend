import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="page_404">
      <div className="container">
            <div className="text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
              </div>

              <div className="contant_box_404">
                <h3 className="text-3xl mb-2">Look like you're lost</h3>

                <p>the page you are looking for not avaible!</p>

                <Link to="/" className="link_404">
                  Go to Home
                </Link>
              </div>
            </div>
      </div>
    </div>
  );
};

export default NotFound;

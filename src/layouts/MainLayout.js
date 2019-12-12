// import { useHistory } from "react-router-dom";
import { withRouter } from "react-router";

const MainLayout = ({ children }) => {
//   const history = useHistory();
  return children;
};

export default withRouter(MainLayout);
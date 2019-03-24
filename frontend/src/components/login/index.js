import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Login from './Login';
import { postLogin } from '../../actions/loginActions';

const mapDispatchToProps = { postLogin };

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Login)
);

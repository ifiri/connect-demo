import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import OauthForm from './OauthForm';
import styles from '../styles';

const FORM_VIEW = {
  LOADING: 'LOADING',
  LOGIN: 'LOGIN',
  AUTHORIZED: 'AUTHORIZED',
};

class EndpassOauthApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formView: null,
      accounts: null,
      error: null,
    };

    this.onClickSignInButton = this.onClickSignInButton.bind(this);
    this.onOauthSignOut = this.onOauthSignOut.bind(this);
  }

  async componentDidMount() {
    await this.getOauthData();
  }

  async getOauthData() {
    this.setState({
      formView: FORM_VIEW.LOADING,
    });

    try {
      await this.props.connect.loginWithOauth({
        scopes: ['wallet:accounts:read'],
        oauthServer: ENV.VUE_APP_OAUTH_SERVER,
      });
      const { data } = await this.props.connect.request({
        method: 'GET',
        url: `${ENV.VUE_APP_ENDPASS_API_URL}/accounts`,
      });

      this.setState({
        accounts: data,
        formView: FORM_VIEW.AUTHORIZED,
      });
    } catch (err) {
      this.setState({
        formView: FORM_VIEW.LOGIN,
      });
    }
  }

  async onClickSignInButton() {
    await this.getOauthData();
  }

  async onClickGetData() {
    const { data } = await this.props.connect.request({
      method: 'GET',
      url: `${ENV.VUE_APP_ENDPASS_API_URL}/accounts`,
    });

    this.setState({
      accounts: data,
      formView: FORM_VIEW.OAUTH,
    });
  }

  async onOauthSignOut() {
    this.setState({
      formView: FORM_VIEW.LOADING,
    });

    await this.props.connect.logoutFromOauth();

    this.setState({
      formView: FORM_VIEW.LOGIN,
    });
  }

  renderContent() {
    const { formView, authorized, accounts } = this.state;
    const { classes, connect } = this.props;

    if (formView === FORM_VIEW.LOADING) {
      return (
        <div className={classes.loader}>
          <CircularProgress data-test="oauth-form-loader" />
        </div>
      );
    }

    return (
      <div>
        {formView === FORM_VIEW.AUTHORIZED && (
          <OauthForm accounts={accounts} onSignOut={this.onOauthSignOut} />
        )}
        {formView === FORM_VIEW.LOGIN && (
          <Button
            variant="contained"
            className={classes.fluid}
            onClick={this.onClickSignInButton}
            data-test="oauth-form-get-accounts-button"
          >
            Get accounts via OAuth
          </Button>
        )}
      </div>
    );
  }

  render() {
    const { error } = this.state;
    const { classes } = this.props;

    return (
      <div data-test="oauth-form">
        {error && (
          <Typography
            className={classes.row}
            color="error"
            variant="caption"
            data-test="oauth-form-error"
          >
            {error}
          </Typography>
        )}
        {this.renderContent()}
      </div>
    );
  }
}

export default withStyles(styles)(EndpassOauthApp);
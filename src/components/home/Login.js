import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { setUser } from "../../redux/reducer";
import "./Login.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      typedUser: "",
      password: "",
      email: "",
      loading: false
    };
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }

  login() {
      this.setState({
          loading: true
      })
    Axios.post("/api/login", {
      email: "myTestEmail@email.com",
      password: "1stM84Lyfe"
    }).then(res => {
      this.props.setUser(res.data);
      this.setState({
        loading: false
    })
    });
  }

  register() {
    Axios.post("/api/register", {
      email: this.state.email,
      password: this.state.password,
      username: this.state.typedUser
    }).then(res => {
      this.props.setUser(res.data);
    });
  }

  universalChangeHandler(property, value) {
    this.setState({
      [property]: value
    });
  }

  render() {
    const { typedUser, password, email, loading} = this.state;
    console.log(typedUser, password, email);
    console.log("from redux ==========>", this.props.user);

    return (
      <div>
          {loading ? (
              <img 
              width="100%"
              src="https://media1.tenor.com/images/8d8356c866266cef31ed2f2e119ffe58/tenor.gif?itemid=5552832" />
          ) : (  
      <div className="login-container">
        <input
          placeholder="UserName"
          name="typedUser"
          value={typedUser}
          onChange={e =>
            this.universalChangeHandler(e.target.name, e.target.value)
          }
        />

        <input
          placeholder="password"
          type="password"
          name="password"
          value={password}
          onChange={e =>
            this.universalChangeHandler(e.target.name, e.target.value)
          }
        />

        <input
          placeholder="email"
          type="email"
          name="email"
          value={email}
          onChange={e =>
            this.universalChangeHandler(e.target.name, e.target.value)
          }
        />
        <div>
          <button onClick={this.login}>Login</button>
          <button onClick={this.register}>Register</button>
        </div>
      </div>
          )}
          </div>
    );
  }
}

function mapReduxStateToProps(reduxState) {
  return reduxState;
}

const mapDispatchToProps = {
  setUser
};

const connectInvoked = connect(
  mapReduxStateToProps,
  mapDispatchToProps
);

export default connectInvoked(Login);

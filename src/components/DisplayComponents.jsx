import React from "react";
import { connect } from "react-redux";
import DisplayArticles from "./DisplayArticles";
import DisplaySingleArticle from "./DisplaySingleArticle";
import { fetchArticles } from "../state/actions/articleAction";
import { bindActionCreators } from "redux";
import SubscriptionForm from "./SubscriptionForm";
import { Elements } from "react-stripe-elements";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import sponsor from '../assets/sponsor.png'

const DisplayComponents = (props) => {
  props.fetchArticles();

  return (
    <>
     <img id="sponsor" src={sponsor} alt="add" />
      {props.showLoginForm && <LoginForm />}
      {props.showSignUpForm && <SignUpForm />}
      {props.flashMessage.length > 0 && (
        <h2 id="flash-message">{props.flashMessage}</h2>
      )}
      {props.articleList && <DisplayArticles />}
      {props.singleArticle && <DisplaySingleArticle />}
      {props.showForm && (
        <Elements>
          <SubscriptionForm />
        </Elements>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticles: bindActionCreators(fetchArticles, dispatch),
  };
};

const mapStateToProps = (state) => {
  return {
    singleArticle: state.singleArticle,
    articleList: state.articleList,
    showForm: state.showForm,
    flashMessage: state.flashMessage,
    showLoginForm: state.showLoginForm,
    showSignUpForm: state.showSignUpForm,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayComponents);

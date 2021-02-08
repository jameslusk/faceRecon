import React from 'react';
import './Signin.css';

const Signin = ({ onRouteChange }) => {
    return (
        <article className="glass br3 shadow-5 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
            <main className="pa4 black-80">
                <form className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f3" for="email-address">Email</label>
                            <input className="pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f3" for="password">Password</label>
                            <input className="b pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                        </div>
                    </fieldset>
                    <div className="">
                        <input
                            onclick={onRouteChange}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib"
                            type="submit"
                            value="Sign in"

                        />
                    </div>
                    <div className="lh-copy mt3">
                        <a href="#0" className="f4 link dim black db">Register</a>
                    </div>
                </form>
            </main>
        </article>
    )
}

export default Signin;

// https://tachyons.io/components/forms/sign-in/index.html
// https://tachyons.io/components/cards/product-card/index.html
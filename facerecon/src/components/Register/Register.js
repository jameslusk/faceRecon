import React from 'react';
import './Register.css';

const Register = ({ onRouteChange }) => {
    return (
        <article className="glass br3 shadow-5 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f3" htmlFor="name">Name</label>
                            <input className="pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" type="text" name="name" id="name" />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f3" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f3" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                        </div>
                    </fieldset>
                    <div className="">
                        <input
                            onClick={() => onRouteChange('home')}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib"
                            type="submit"
                            value="Complete"

                        />
                    </div>
                </div>
            </main>
        </article>
    )
}

export default Register;

// https://tachyons.io/components/forms/sign-in/index.html
// https://tachyons.io/components/cards/product-card/index.html
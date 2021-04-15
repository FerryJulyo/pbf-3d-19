import React from 'react';
import { Field, reduxForm } from 'redux-form';

const SimpleForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div class="form-group">
                    <Field
                        id="contact-name"
                        class="form-control"
                        name="name"
                        component="input"
                        type="text"
                        placeholder="Name"
                    />
                </div>
            </div>
            <div>
                <div class="form-group">
                    <Field
                        id="contact-email"
                        class="form-control"
                        name="email"
                        component="input"
                        type="email"
                        placeholder="Email"
                    />
                </div>
            </div>
            <div>
                <div class="form-group">
                    <Field
                        id="contact-subject"
                        class="form-control"
                        name="subject"
                        component="input"
                        type="text"
                        placeholder="Subject"
                    />
                </div>
            </div>
            <div>
                <div class="form-group">
                    <Field
                        id="contact-message"
                        class="form-control"
                        name="message"
                        component="textarea"
                        rows="6"
                        type="text"
                        placeholder="Message"
                    />
                </div>
            </div>
            <div class="form-group">
                <button class="tm-more-button" name="submit" type="submit" disabled={pristine || submitting}>Send message</button>
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'simple', // a unique identifier for this form
})(SimpleForm);

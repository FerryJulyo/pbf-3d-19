import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from "../store/reducer/store";
import showResults from "../store/showResult";
import SimpleForm from "../store/action/SimpleForm";

class Contact extends React.Component {
    render() {
        return (
            <div>

                <section class="tm-welcome-section">
                    <div class="container tm-position-relative">
                        <div class="tm-lights-container">
                            <img src="assets/img/light.png" alt="Light" class="light light-1" />
                            <img src="assets/img/light.png" alt="Light" class="light light-2" />
                            <img src="assets/img/light.png" alt="Light" class="light light-3" />
                        </div>
                        <div class="row tm-welcome-content">
                            <h2 class="white-text tm-handwriting-font tm-welcome-header"><img src="assets/img/header-line.png" alt="Line" class="tm-header-line" />&nbsp;Contact Us&nbsp;&nbsp;<img src="assets/img/header-line.png" alt="Line" class="tm-header-line" /></h2>
                            <h2 class="gold-text tm-welcome-header-2">Cafe House</h2>
                            <p class="gray-text tm-welcome-description">Cafe House is free <span class="gold-text">responsive Bootstrap</span> v3.3.5 layout by <span class="gold-text">templatemo</span>. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculusnec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                            <a href="#main" class="tm-more-button tm-more-button-welcome">Message Us</a>
                        </div>
                        <img src="assets/img/table-set.png" alt="Table Set" class="tm-table-set img-responsive" />
                    </div>
                </section>
                <div class="tm-main-section light-gray-bg">
                    <div class="container" id="main">
                        <section class="tm-section row">
                            <h2 class="col-lg-12 margin-bottom-30">Send us a message</h2>
                            <form action="#" method="post" class="tm-contact-form">
                                <div class="col-lg-6 col-md-6">
                                <Provider store={store}>
                                    <div style={{ padding: 15 }}>
                                        <SimpleForm onSubmit={showResults} />
                                    </div>
                                </Provider>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div id="google-map" class="google-map"></div>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>

                <script type="text/javascript" src="js/jquery-1.11.2.min.js"></script>
                <script type="text/javascript" src="js/templatemo-script.js"></script>

            </div>
        );
    }
}

export default Contact;
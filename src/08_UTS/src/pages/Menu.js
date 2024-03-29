import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../service/Api'

class Menu extends React.Component {
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
                            <h2 class="white-text tm-handwriting-font tm-welcome-header"><img src="assets/img/header-line.png" alt="Line" class="tm-header-line" />&nbsp;Our Menus&nbsp;&nbsp;<img src="assets/img/header-line.png" alt="Line" class="tm-header-line" /></h2>
                            <h2 class="gold-text tm-welcome-header-2">Cafe House</h2>
                            <p class="gray-text tm-welcome-description">Cafe House template is a mobile-friendly responsive <span class="gold-text">Bootstrap v3.3.5 layout</span> by <span class="gold-text">templatemo</span>. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculusnec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                            <a href="#main" class="tm-more-button tm-more-button-welcome">Read More</a>
                        </div>
                        <img src="assets/img/table-set.png" alt="Table Set" class="tm-table-set img-responsive" />
                    </div>
                </section>
                <div class="tm-main-section light-gray-bg">
                    <div class="container" id="main">
                        <section class="tm-section row">
                            <div class="col-lg-9 col-md-9 col-sm-8">
                                <h2 class="tm-section-header gold-text tm-handwriting-font">Variety of Menus</h2>
                                <h2>Cafe House</h2>
                                <p class="tm-welcome-description">This is free HTML5 website template from <span class="blue-text">template</span><span class="green-text">mo</span>. Fndimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Ettiam sit amet orci eget eros faucibus tincidunt.</p>
                                <a href="#" class="tm-more-button margin-top-30">Read More</a>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-4 tm-welcome-img-container">
                                <div class="inline-block shadow-img">
                                    <img src="assets/img/1.jpg" alt="Image" class="img-circle img-thumbnail" />
                                </div>
                            </div>
                        </section>
                        <section class="tm-section row">
                            <div class="col-lg-12 tm-section-header-container margin-bottom-30">
                                <h2 class="tm-section-header gold-text tm-handwriting-font"><img src="assets/img/logo.png" alt="Logo" class="tm-site-logo" /> Our Menus</h2>
                                <div class="tm-hr-container"><hr class="tm-hr" /></div>
                            </div>
                            <div>
                                <div class="col-lg-3 col-md-3">
                                    <div class="tm-position-relative margin-bottom-30">
                                        <nav class="tm-side-menu">
                                            <ul>
                                                <li><a href="#" class="active">Affogato</a></li>
                                                <li><a href="#">Caffè Americano</a></li>
                                                <li><a href="#">Caffè latte</a></li>
                                                <li><a href="#">Coffee milk</a></li>
                                                <li><a href="#">Café mocha</a></li>
                                                <li><a href="#">Cappuccino</a></li>
                                                <li><a href="#">Espresso</a></li>
                                                <li><a href="#">Iced coffee</a></li>
                                                <li><a href="#">Instant coffee</a></li>
                                                <li><a href="#">Mocha</a></li>
                                                <li><a href="#">black coffee</a></li>
                                            </ul>
                                        </nav>
                                        <img src="assets/img/vertical-menu-bg.png" alt="Menu bg" class="tm-side-menu-bg" />
                                    </div>
                                </div>
                                <API />
                            </div>
                        </section>
                    </div>
                </div>

                <script type="text/javascript" src="js/jquery-1.11.2.min.js"></script>
                <script type="text/javascript" src="js/templatemo-script.js"></script>

            </div>
        );
    }
}

export default Menu;
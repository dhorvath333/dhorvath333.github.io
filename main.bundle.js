webpackJsonp([1,4],{

/***/ 290:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 290;


/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(406);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'p-about',
            template: __webpack_require__(467),
            styles: [__webpack_require__(460)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        var webpage = $('html,body');
        $('.section-link').on('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            var menubarHeight = $('.header__nav').height();
            webpage.stop().animate({
                scrollTop: $($(this).attr('href')).offset().top - menubarHeight
            }, 2000, 'easeInOutQuint');
        });
        $('#home-link').on('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            webpage.stop().animate({
                scrollTop: 0
            }, 2000, 'easeInOutQuint');
        });
        $(window).on('scroll', ChangeHeader);
        var mq = window.matchMedia("(min-width: 768px)").addListener(ChangeHeader);
        function ChangeHeader(mq) {
            mq.matches = mq.matches || true;
            if (document.body.scrollTop == 0 && mq.matches) {
                $('#header .navbar').removeClass('header__nav-background');
            }
            else {
                $('#header .navbar').addClass('header__nav-background');
            }
        }
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'p-root',
            template: __webpack_require__(468),
            styles: [__webpack_require__(461)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menubar_menubar_component__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about_component__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__hero_hero_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__portfolio_portfolio_component__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__ = __webpack_require__(402);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__menubar_menubar_component__["a" /* MenubarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_7__hero_hero_component__["a" /* HeroComponent */],
                __WEBPACK_IMPORTED_MODULE_8__portfolio_portfolio_component__["a" /* PortfolioComponent */],
                __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__["a" /* ContactComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'p-contact',
            template: __webpack_require__(469),
            styles: [__webpack_require__(462)]
        }), 
        __metadata('design:paramtypes', [])
    ], ContactComponent);
    return ContactComponent;
}());
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeroComponent = (function () {
    function HeroComponent() {
    }
    HeroComponent.prototype.ngOnInit = function () {
    };
    HeroComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'p-hero',
            template: __webpack_require__(470),
            styles: [__webpack_require__(463)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeroComponent);
    return HeroComponent;
}());
//# sourceMappingURL=hero.component.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenubarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenubarComponent = (function () {
    function MenubarComponent() {
    }
    MenubarComponent.prototype.ngOnInit = function () {
    };
    MenubarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'p-menubar',
            template: __webpack_require__(471),
            styles: [__webpack_require__(464)]
        }), 
        __metadata('design:paramtypes', [])
    ], MenubarComponent);
    return MenubarComponent;
}());
//# sourceMappingURL=menubar.component.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'p-portfolio',
            template: __webpack_require__(472),
            styles: [__webpack_require__(465)]
        }), 
        __metadata('design:paramtypes', [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());
//# sourceMappingURL=portfolio.component.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)();
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/*\r\n$background-color-dark: #eee;\r\n$background-color-light: #FFF;\r\n$main-color: #28AFEA;\r\n$text-color: #333;\r\n*/\n/* TECHNOLOGIES */\nhtml, body {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  color: #FFF; }\n\nbody {\n  background: #13131D; }\n\na {\n  text-decoration: none;\n  color: #FFF;\n  cursor: pointer; }\n\nbutton:hover,\na:hover {\n  cursor: pointer;\n  text-decoration: none; }\n\n.section {\n  min-height: 85%; }\n\n.section-title {\n  margin-top: 3rem;\n  margin-bottom: 2rem;\n  text-transform: uppercase;\n  font-weight: bold; }\n\n/* ENABLE SECTIONS */\n#services, #services-nav-item {\n  display: none; }\n\n#blog, #blog-nav-item {\n  display: none; }\n\n.progress {\n  background: #13131D; }\n\n.progress-bar {\n  background-color: #22BC65; }\n\n.about__primary-area {\n  background: #1B1A28;\n  border-radius: 10px;\n  padding: 1.2rem;\n  margin-bottom: 3rem; }\n  .about__primary-area ul {\n    list-style: none; }\n\n.about__personal-info,\n.about__personal-info-list {\n  text-align: center; }\n\n.about__skills {\n  text-align: center; }\n\n.about__skill-list {\n  text-align: left;\n  overflow-y: auto;\n  max-height: 100%; }\n\n.about__skill-item {\n  padding: 10px 0; }\n\n.about__highlight-text {\n  color: #22BC65;\n  font-weight: bold;\n  margin-right: 10px; }\n\n.about__profile-picture {\n  border-radius: 50%;\n  width: 150px;\n  height: 150px;\n  background: url(\"/assets/images/cv_pic.jpg\") center center;\n  background-size: cover;\n  border: 2px solid #22BC65;\n  margin: 10px auto 30px auto; }\n\n.about__button {\n  display: block;\n  width: 100%;\n  background: transparent;\n  border: 1px solid;\n  border-radius: 10px;\n  padding: 10px;\n  margin: 10px 0; }\n  .about__button .fa {\n    margin-right: 10px; }\n\n.about__button-cv {\n  color: #FFF;\n  border-color: #FFF; }\n  .about__button-cv:hover, .about__button-cv:focus {\n    color: #1B1A28;\n    background: #FFF; }\n\n.about__button-linkedin {\n  color: #0075B5;\n  border-color: #0075B5; }\n  .about__button-linkedin:hover, .about__button-linkedin:focus {\n    color: #FFF;\n    background: #0075B5; }\n\n.about__button-github {\n  color: #93979C;\n  border-color: #93979C; }\n  .about__button-github:hover, .about__button-github:focus {\n    color: #FFF;\n    background: #93979C; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)();
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/*\r\n$background-color-dark: #eee;\r\n$background-color-light: #FFF;\r\n$main-color: #28AFEA;\r\n$text-color: #333;\r\n*/\n/* TECHNOLOGIES */\nhtml, body {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  color: #FFF; }\n\nbody {\n  background: #13131D; }\n\na {\n  text-decoration: none;\n  color: #FFF;\n  cursor: pointer; }\n\nbutton:hover,\na:hover {\n  cursor: pointer;\n  text-decoration: none; }\n\n.section {\n  min-height: 85%; }\n\n.section-title {\n  margin-top: 3rem;\n  margin-bottom: 2rem;\n  text-transform: uppercase;\n  font-weight: bold; }\n\n/* ENABLE SECTIONS */\n#services, #services-nav-item {\n  display: none; }\n\n#blog, #blog-nav-item {\n  display: none; }\n\n#contact {\n  background: #13131D; }\n\n.contact__input-field {\n  width: 100%;\n  background: #1B1A28;\n  border: none;\n  padding: 10px;\n  color: #FFF; }\n\n.contact-section .fa {\n  color: #22BC65;\n  font-size: 2em; }\n\n.contact__info {\n  text-align: center; }\n  .contact__info p {\n    font-size: 14px;\n    font-style: italic; }\n  .contact__info h4 {\n    font-weight: bold; }\n\n.contact__info > * {\n  margin-bottom: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)();
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/*\r\n$background-color-dark: #eee;\r\n$background-color-light: #FFF;\r\n$main-color: #28AFEA;\r\n$text-color: #333;\r\n*/\n/* TECHNOLOGIES */\nhtml, body {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  color: #FFF; }\n\nbody {\n  background: #13131D; }\n\na {\n  text-decoration: none;\n  color: #FFF;\n  cursor: pointer; }\n\nbutton:hover,\na:hover {\n  cursor: pointer;\n  text-decoration: none; }\n\n.section {\n  min-height: 85%; }\n\n.section-title {\n  margin-top: 3rem;\n  margin-bottom: 2rem;\n  text-transform: uppercase;\n  font-weight: bold; }\n\n/* ENABLE SECTIONS */\n#services, #services-nav-item {\n  display: none; }\n\n#blog, #blog-nav-item {\n  display: none; }\n\n#hero {\n  position: relative;\n  background: #13131D url(\"/assets/images/hero.jpg\") no-repeat center center;\n  background-size: cover;\n  background-attachment: fixed;\n  width: 100%;\n  height: 100%; }\n\n.hero__layer {\n  background-color: rgba(19, 19, 29, 0.8);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n.hero__text-area {\n  position: absolute;\n  top: 50%;\n  left: 20rem;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 350px; }\n  .hero__text-area p {\n    margin: 20px 0; }\n\n.hero__secondary-text {\n  background: #22BC65;\n  padding: 5px;\n  border-radius: 5px; }\n\n.hero__button {\n  display: block;\n  width: 150px;\n  background: transparent;\n  border: 1px solid;\n  border-radius: 10px;\n  padding: 10px;\n  margin: 10px 0;\n  text-align: center;\n  color: #22BC65;\n  border-color: #22BC65; }\n  .hero__button:hover {\n    color: #FFF;\n    background: #22BC65; }\n\n@media (max-width: 992px) {\n  .hero__text-area {\n    left: 50%;\n    text-align: center; }\n  .hero__button {\n    width: 100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)();
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/*\r\n$background-color-dark: #eee;\r\n$background-color-light: #FFF;\r\n$main-color: #28AFEA;\r\n$text-color: #333;\r\n*/\n/* TECHNOLOGIES */\nhtml, body {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  color: #FFF; }\n\nbody {\n  background: #13131D; }\n\na {\n  text-decoration: none;\n  color: #FFF;\n  cursor: pointer; }\n\nbutton:hover,\na:hover {\n  cursor: pointer;\n  text-decoration: none; }\n\n.section {\n  min-height: 85%; }\n\n.section-title {\n  margin-top: 3rem;\n  margin-bottom: 2rem;\n  text-transform: uppercase;\n  font-weight: bold; }\n\n/* ENABLE SECTIONS */\n#services, #services-nav-item {\n  display: none; }\n\n#blog, #blog-nav-item {\n  display: none; }\n\n.navbar {\n  min-height: 60px;\n  transition: 0.3s; }\n\n.header__ul {\n  list-style: none; }\n\n.header__nav {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.3); }\n\n.header__nav-background {\n  background-color: #13131D; }\n\n.header__nav-item {\n  display: inline;\n  margin: 10px 15px; }\n  .header__nav-item a {\n    text-transform: uppercase;\n    text-decoration: none;\n    color: #FFF; }\n    .header__nav-item a:hover {\n      color: #22BC65; }\n\n.navbar-toggler {\n  border-color: #ccc; }\n\n.navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\"); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)();
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/*\r\n$background-color-dark: #eee;\r\n$background-color-light: #FFF;\r\n$main-color: #28AFEA;\r\n$text-color: #333;\r\n*/\n/* TECHNOLOGIES */\nhtml, body {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  color: #FFF; }\n\nbody {\n  background: #13131D; }\n\na {\n  text-decoration: none;\n  color: #FFF;\n  cursor: pointer; }\n\nbutton:hover,\na:hover {\n  cursor: pointer;\n  text-decoration: none; }\n\n.section {\n  min-height: 85%; }\n\n.section-title {\n  margin-top: 3rem;\n  margin-bottom: 2rem;\n  text-transform: uppercase;\n  font-weight: bold; }\n\n/* ENABLE SECTIONS */\n#services, #services-nav-item {\n  display: none; }\n\n#blog, #blog-nav-item {\n  display: none; }\n\n#portfolio {\n  background: #1B1A28; }\n\n.portfolio__filter-list {\n  list-style: none; }\n\n.portfolio__filter-item {\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 10px;\n  text-transform: uppercase;\n  border: 1px solid transparent; }\n  .portfolio__filter-item:hover {\n    border: 1px solid #FFF;\n    border-radius: 10px; }\n\n.portfolio__items-row {\n  margin-top: 40px; }\n\n.portfolio__item-container {\n  padding-top: 15px;\n  padding-bottom: 15px; }\n\n.portfolio__item {\n  background: #FFF;\n  width: 250px;\n  height: 250px;\n  margin: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 467:
/***/ (function(module, exports) {

module.exports = "<section id=\"about\" class=\"section about-me-section\">\n  <div class=\"container\">\n      <div class=\"row justify-content-center\">\n          <h2 class=\"section-title\">About Me</h2>\n          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius amet rerum, provident nulla ullam quas? Corrupti officia ducimus consequuntur quasi!</p>\n      </div>\n      <div class=\"row justify-content-around about__primary-area\">\n          <div class=\"col-sm-12 col-md-6 about__personal-info\">\n              <!--<img src=\"images/cv_pic.jpg\" alt=\"\" class=\"about__profile-picture\">-->\n              <div class=\"about__profile-picture\"></div>\n              <ul class=\"about__personal-info-list\">\n                  <li><span class=\"about__highlight-text\">Full Name:</span>David Horvath</li>\n                  <li><span class=\"about__highlight-text\">Birth Date:</span>1995.03.23</li>\n                  <li><span class=\"about__highlight-text\">Mobile:</span>+36-30-925-6691</li>\n                  <li><span class=\"about__highlight-text\">Email:</span>dhorvath333@gmail.com</li>\n              </ul>\n              <div class=\"row\">\n                  <div class=\"col-sm-12 col-md-12 col-lg-4\">     \n                      <a role=\"button\" target=\"_blank\" href=\"assets/pdf/CV_English.pdf\" class=\"about__button about__button-cv\"><i class=\"fa fa-download\"></i> CV</a>\n                  </div>\n                  <div class=\"col-sm-12 col-md-12 col-lg-4\">\n                      <a role=\"button\" target=\"_blank\" href=\"https://www.linkedin.com/in/d%C3%A1vid-horv%C3%A1th-7b1065124/\" class=\"about__button about__button-linkedin\"><i class=\"fa fa-linkedin-square\"></i> LinkedIn</a>\n                  </div>\n                  <div class=\"col-sm-12 col-md-12 col-lg-4\">\n                      <a role=\"button\" target=\"_blank\" href=\"https://github.com/dhorvath333?tab=repositories\" class=\"about__button about__button-github\"><i class=\"fa fa-github\"></i> GitHub</a>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-sm-12 col-md-6 about__skills\">\n              <h3>Skills</h3>\n              <ul class=\"about__skill-list\">\n                  <li class=\"about__skill-item\">\n                      <h6><i class=\"devicon-html5-plain\"></i> HTML5 / <i class=\"devicon-css3-plain\"></i> CSS3 / <i class=\"devicon-javascript-plain\"></i> JavaScript</h6>\n                      <div class=\"progress\">\n                          <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" style=\"width: 80%\"></div>\n                      </div>\n                  </li>\n                  <li class=\"about__skill-item\">\n                      <h6><i class=\"devicon-angularjs-plain\"></i> Angular 4</h6>\n                      <div class=\"progress\">\n                          <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" style=\"width: 70%\"></div>\n                      </div>\n                  </li>\n                  <li class=\"about__skill-item\">\n                      <h6><i class=\"devicon-mysql-plain\"></i> SQL</h6>\n                      <div class=\"progress\">\n                          <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" style=\"width: 70%\"></div>\n                      </div>\n                  </li>\n                  <li class=\"about__skill-item\">\n                      <h6><i class=\"devicon-sass-plain\"></i> Sass</h6>\n                      <div class=\"progress\">\n                          <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" style=\"width: 60%\"></div>\n                      </div>\n                  </li>\n                  <li class=\"about__skill-item\">\n                      <h6><i class=\"devicon-csharp-plain\"></i> C#</h6>\n                      <div class=\"progress\">\n                          <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" style=\"width: 50%\"></div>\n                      </div>\n                  </li>\n                  <li class=\"about__skill-item\">\n                      <h6><i class=\"devicon-nodejs-plain\"></i> Node.js / <i class=\"devicon-express-original\"></i> Express</h6>\n                      <div class=\"progress\">\n                          <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" style=\"width: 50%\"></div>\n                      </div>\n                  </li>\n                  <li class=\"about__skill-item\">\n                      <h6><i class=\"devicon-gulp-plain\"></i> Gulp / <i class=\"devicon-webpack-plain\"></i> Webpack</h6>\n                      <div class=\"progress\">\n                          <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" style=\"width: 50%\"></div>\n                      </div>\n                  </li>\n                  <li class=\"about__skill-item\">\n                      <h6><i class=\"devicon-react-plain\"></i> React</h6>\n                      <div class=\"progress\">\n                          <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" style=\"width: 30%\"></div>\n                      </div>\n                  </li>\n                  <li class=\"about__skill-item\">\n                      <h6><i class=\"devicon-photoshop-plain\"></i> Photoshop</h6>\n                      <div class=\"progress\">\n                          <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" style=\"width: 30%\"></div>\n                      </div>\n                  </li>\n              </ul>\n          </div>\n      </div>\n  </div>\n</section>"

/***/ }),

/***/ 468:
/***/ (function(module, exports) {

module.exports = "<p-menubar></p-menubar>\n<p-hero></p-hero>\n<p-about></p-about>\n<p-portfolio></p-portfolio>\n<p-contact></p-contact>"

/***/ }),

/***/ 469:
/***/ (function(module, exports) {

module.exports = "<!--<section id=\"contact\" class=\"section contact-section\">\n  <div class=\"container\">\n      <div class=\"row justify-content-center\">\n          <h2 class=\"section-title\">Contact</h2>\n      </div>\n      <form>\n          <div class=\"row justify-content-center\">\n              <div class=\"col-lg-3 contact__info\">\n                  <i class=\"fa fa-envelope-o\"></i>\n                  <h4>Email</h4>\n                  <p>dhorvath333@gmail.com</p>\n              </div>\n              <div class=\"col-lg-3 contact__info\">\n                  <i class=\"fa fa-mobile\"></i>\n                  <h4>Phone number</h4>\n                  <p>+36 30 925 6691</p>\n              </div>\n              <div class=\"col-lg-3 contact__info\">\n                  <i class=\"fa fa-globe\"></i>\n                  <h4>Website</h4>\n                  <a href=\"https://dhorvath333.github.io\">https://dhorvath333.github.io</a>\n              </div>\n          </div>\n          <div class=\"row\">\n              <form>\n              <div class=\"col-lg-12\">\n                  <label for=\"name\">Name</label><br>\n                  <input type=\"text\" name=\"name\" placeholder=\"Name\" class=\"contact__input-field\">\n              </div>\n              <div class=\"col-lg-12\">\n                  <label for=\"subject\">Subject</label><br>\n                  <input type=\"text\" name=\"subject\" placeholder=\"Subject\" class=\"contact__input-field\">\n              </div>\n              <div class=\"col-lg-12\">\n                  <label for=\"message\">Message</label><br>\n                  <textarea rows=\"6\" placeholder=\"Message\" class=\"contact__input-field\"></textarea>\n              </div>\n          </div>\n      </form>\n  </div>\n</section>-->\n"

/***/ }),

/***/ 470:
/***/ (function(module, exports) {

module.exports = "<section id=\"hero\" class=\"hero-section\">\n  <div id=\"particles-js\" class=\"hero__layer\">\n      <div class=\"hero__text-area\">\n          <h1 class=\"hero__primary-text\">I'm David Horvath</h1>\n          <h6 class=\"hero__secondary-text\">Web Developer</h6>\n          <p>\n              My goal is to make modern, beautiful, responsive websites and applications <br>\n              with state of the art technologies.\n          </p>\n          <a role=\"button\" href=\"#about\" class=\"hero__button section-link\">Learn More</a>\n      </div>\n  </div>\n</section>\n"

/***/ }),

/***/ 471:
/***/ (function(module, exports) {

module.exports = "<header id=\"header\" class=\"header\">\n  <nav class=\"navbar navbar-toggleable-md fixed-top header__nav\">\n      <button class=\"navbar-toggler navbar-toggler-right header__nav-button\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n      <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarSupportedContent\">\n          <ul class=\"navbar-nav header__ul\">\n              <li id=\"home-nav-item\" class=\"nav-item header__nav-item\"><a id=\"home-link\" class=\"nav-link\" href=\"#\">Home</a></li>\n              <li id=\"about-nav-item\" class=\"nav-item header__nav-item\"><a class=\"nav-link section-link\" href=\"#about\">About</a></li>\n              <li id=\"portfolio-nav-item\" class=\"nav-item header__nav-item\"><a class=\"nav-link section-link\" href=\"#portfolio\">Portfolio</a></li>\n              <li id=\"services-nav-item\" class=\"nav-item header__nav-item\"><a class=\"nav-link section-link\" href=\"#services\">Services</a></li>\n              <li id=\"blog-nav-item\" class=\"nav-item header__nav-item\"><a class=\"nav-link section-link\" href=\"#blog\">Blog</a></li>\n              <li id=\"contact-nav-item\" class=\"nav-item header__nav-item\"><a class=\"nav-link section-link\" href=\"#contact\">Contact</a></li>\n          </ul>\n      </div>\n  </nav>\n</header>\n"

/***/ }),

/***/ 472:
/***/ (function(module, exports) {

module.exports = "<section id=\"portfolio\" class=\"section portfolio-section\">\n  <div class=\"container\">\n      <div class=\"row justify-content-center\">\n          <h2 class=\"section-title\">Portfolio</h2>\n      </div>\n      <div class=\"row justify-content-center\">\n          <ul class=\"portfolio__filter-list\">\n              <li class=\"portfolio__filter-item\"><a>Recent</a></li>\n              <li class=\"portfolio__filter-item\"><a>All</a></li>\n              <li class=\"portfolio__filter-item\"><a>Development</a></li>\n              <li class=\"portfolio__filter-item\"><a>Web Design</a></li>\n          </ul>\n      </div>\n      <div class=\"row portfolio__items-row\">\n          <div class=\"col-sm-12 col-md-6 col-lg-3 portfolio__item-container\">\n              <div class=\"portfolio__item\"></div>\n          </div>\n          <div class=\"col-sm-12 col-md-6 col-lg-3 portfolio__item-container\">\n              <div class=\"portfolio__item\"></div>\n          </div>\n          <div class=\"col-sm-12 col-md-6 col-lg-3 portfolio__item-container\">\n              <div class=\"portfolio__item\"></div>\n          </div>\n          <div class=\"col-sm-12 col-md-6 col-lg-3 portfolio__item-container\">\n              <div class=\"portfolio__item\"></div>\n          </div>\n\n          <div class=\"col-sm-12 col-md-6 col-lg-3 portfolio__item-container\">\n            <div class=\"portfolio__item\"></div>\n         </div>\n         <div class=\"col-sm-12 col-md-6 col-lg-3 portfolio__item-container\">\n            <div class=\"portfolio__item\"></div>\n         </div>\n         <div class=\"col-sm-12 col-md-6 col-lg-3 portfolio__item-container\">\n            <div class=\"portfolio__item\"></div>\n         </div>\n         <div class=\"col-sm-12 col-md-6 col-lg-3 portfolio__item-container\">\n            <div class=\"portfolio__item\"></div>\n         </div>\n      </div>\n  </div>\n</section>"

/***/ }),

/***/ 485:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(291);


/***/ })

},[485]);
//# sourceMappingURL=main.bundle.js.map
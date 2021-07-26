(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["main"], {
    /***/
    8255: function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 8255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    158: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _pages_pages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./pages/pages.component */
      7664);

      var routes = [{
        path: "",
        component: _pages_pages_component__WEBPACK_IMPORTED_MODULE_0__.PagesComponent
      }];

      var _AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      _AppRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AppRoutingModule);
      /***/
    },

    /***/
    5041: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./app.component.html */
      1106);
      /* harmony import */


      var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.css */
      1249);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'frontend';
      };

      _AppComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AppComponent);
      /***/
    },

    /***/
    6747: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.module */
      158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      5041);
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./header/header.component */
      3482);
      /* harmony import */


      var _pages_poll_poll_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/poll/poll.component */
      4402);
      /* harmony import */


      var _pages_voting_voting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/voting/voting.component */
      3175);
      /* harmony import */


      var _pages_pages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pages/pages.component */
      7664);
      /* harmony import */


      var _pages_chart_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pages/chart/chart.component */
      2433);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _service_ts_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./service.ts/data.service */
      1589);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      5835);
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/radio */
      2613);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/button */
      1095);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/form-field */
      8295);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/card */
      3738);
      /* harmony import */


      var angular_fusioncharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! angular-fusioncharts */
      9672);
      /* harmony import */


      var fusioncharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! fusioncharts */
      8965);
      /* harmony import */


      var fusioncharts__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(fusioncharts__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var fusioncharts_fusioncharts_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! fusioncharts/fusioncharts.charts */
      1677);
      /* harmony import */


      var fusioncharts_fusioncharts_charts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(fusioncharts_fusioncharts_charts__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! fusioncharts/themes/fusioncharts.theme.fusion */
      4715);
      /* harmony import */


      var fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_11__); // Import FusionCharts library and chart modules
      // Pass the fusioncharts library and chart modules


      angular_fusioncharts__WEBPACK_IMPORTED_MODULE_8__.FusionChartsModule.fcRoot(fusioncharts__WEBPACK_IMPORTED_MODULE_9__, fusioncharts_fusioncharts_charts__WEBPACK_IMPORTED_MODULE_10__, fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_11__);

      var _AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      _AppModule = (0, tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_13__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _pages_poll_poll_component__WEBPACK_IMPORTED_MODULE_3__.PollComponent, _pages_voting_voting_component__WEBPACK_IMPORTED_MODULE_4__.VotingComponent, _pages_pages_component__WEBPACK_IMPORTED_MODULE_5__.PagesComponent, _pages_chart_chart_component__WEBPACK_IMPORTED_MODULE_6__.ChartComponent],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__.MatRadioModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButtonModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormFieldModule, angular_fusioncharts__WEBPACK_IMPORTED_MODULE_8__.FusionChartsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__.BrowserAnimationsModule],
        providers: [_service_ts_data_service__WEBPACK_IMPORTED_MODULE_7__.DataService],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      })], _AppModule);
      /***/
    },

    /***/
    3482: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeaderComponent": function HeaderComponent() {
          return (
            /* binding */
            _HeaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./header.component.html */
      2998);
      /* harmony import */


      var _header_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./header.component.css */
      8775);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent() {
          _classCallCheck(this, HeaderComponent);
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HeaderComponent;
      }();

      _HeaderComponent.ctorParameters = function () {
        return [];
      };

      _HeaderComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_header_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _HeaderComponent);
      /***/
    },

    /***/
    2433: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChartComponent": function ChartComponent() {
          return (
            /* binding */
            _ChartComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _raw_loader_chart_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./chart.component.html */
      33);
      /* harmony import */


      var _chart_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./chart.component.css */
      8396);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var src_app_service_ts_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/service.ts/data.service */
      1589);

      var _ChartComponent = /*#__PURE__*/function () {
        function ChartComponent(data) {
          _classCallCheck(this, ChartComponent);

          this.data = data;
        }

        _createClass(ChartComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.subscription = this.data.currentMessage.subscribe(function (data) {
              if (data) {
                _this.poll.question = data.question;
                _this.poll.answers = data.answers;
              }

              console.log(data, "voting com");

              _this.initializeVottingGraph();
            });
          }
        }, {
          key: "initializeVottingGraph",
          value: function initializeVottingGraph() {
            var chartData = [];
            this.poll.answers.forEach(function (el) {
              chartData.push({
                label: el.answer,
                value: el.voteCount
              });
              return chartData;
            });
            this.dataSource = {
              chart: {
                caption: this.poll.question,
                captionFontColor: "#1f448a",
                paletteColors: "3f51b5",
                // xaxisname: "",
                // yaxisname: "",
                // numbersuffix: "K",
                theme: "gammel"
              },
              data: chartData
            };
          }
        }]);

        return ChartComponent;
      }();

      _ChartComponent.ctorParameters = function () {
        return [{
          type: src_app_service_ts_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService
        }];
      };

      _ChartComponent.propDecorators = {
        poll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }]
      };
      _ChartComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: "app-chart",
        template: _raw_loader_chart_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_chart_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ChartComponent);
      /***/
    },

    /***/
    7664: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PagesComponent": function PagesComponent() {
          return (
            /* binding */
            _PagesComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _raw_loader_pages_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./pages.component.html */
      8928);
      /* harmony import */


      var _pages_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pages.component.css */
      7009);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _service_ts_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../service.ts/data.service */
      1589);
      /* harmony import */


      var _poll_poll_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./poll/poll.component */
      4402);

      var _PagesComponent = /*#__PURE__*/function () {
        function PagesComponent(data) {
          _classCallCheck(this, PagesComponent);

          this.data = data;
          this.poll = new _poll_poll_component__WEBPACK_IMPORTED_MODULE_3__.PollData("What is the value \u03C0 ?", [{
            answer: "3.14",
            voteCount: 4
          }, {
            answer: "3.1416",
            voteCount: 3
          }, {
            answer: "3.14159264",
            voteCount: 4
          }], 11);
        }

        _createClass(PagesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PagesComponent;
      }();

      _PagesComponent.ctorParameters = function () {
        return [{
          type: _service_ts_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService
        }];
      };

      _PagesComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: "app-pages",
        template: _raw_loader_pages_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_pages_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PagesComponent);
      /***/
    },

    /***/
    4402: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Answer": function Answer() {
          return (
            /* binding */
            _Answer
          );
        },

        /* harmony export */
        "PollData": function PollData() {
          return (
            /* binding */
            _PollData
          );
        },

        /* harmony export */
        "PollComponent": function PollComponent() {
          return (
            /* binding */
            _PollComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _raw_loader_poll_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./poll.component.html */
      6724);
      /* harmony import */


      var _poll_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./poll.component.css */
      8291);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var src_app_service_ts_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/service.ts/data.service */
      1589);

      var _Answer = // public voteCount?: number = 0;
      function _Answer(answer, voteCount) {
        _classCallCheck(this, _Answer);

        this.answer = answer;
        this.voteCount = voteCount;
      };

      var _PollData = function _PollData(question, answers, sum) {
        _classCallCheck(this, _PollData);

        this.question = question;
        this.answers = answers;
        this.sum = sum;
      };

      var _PollComponent = /*#__PURE__*/function () {
        function PollComponent(fb, data) {
          _classCallCheck(this, PollComponent);

          this.fb = fb;
          this.data = data;
          this.shareData = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        }

        _createClass(PollComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initializeFormGroup(); // this.pollForm.controls["question"].disable();
            // this.pollForm.controls["question"].hasError("maxlength");
          }
        }, {
          key: "initializeFormGroup",
          value: function initializeFormGroup() {
            var _this2 = this;

            this.pollForm = this.fb.group({
              question: [this.poll.question, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(80)],
              answers: this.fb.array( // this.poll.answers && this.poll.answers.length > 0
              // ?
              _toConsumableArray(this.poll.answers.map(function (el) {
                return _this2.fb.group({
                  voteCount: el.voteCount,
                  answer: [el.answer, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(80)])]
                });
              })) // : [
              //     ...[new Answer(undefined, 0)].map((el) =>
              //       this.fb.group({
              //         voteCount: el.voteCount,
              //         answer: [el.answer, Validators.maxLength(80)],
              //       })
              //     ),
              //   ]
              )
            }); // if (this.pollForm.controls["question"].hasError("maxlength")) {
            //   this.pollForm.controls["question"].disable();
            // this.pollForm.get('endDate').disable();
            // }
          }
        }, {
          key: "updateQuestion",
          value: function updateQuestion() {
            this.poll.question = this.pollForm.get("question").value;
            this.data.changeMessage(this.poll);
          }
        }, {
          key: "updateAnswer",
          value: function updateAnswer() {
            this.poll.answers = this.pollForm.get("answers").value;
            this.poll.answers.map(function (el) {
              if (el.answer === "") {
                el.voteCount = null;
              }
            });
            this.data.changeMessage(this.poll);
          }
        }, {
          key: "answersForms",
          get: function get() {
            return this.pollForm.get("answers");
          }
        }, {
          key: "getAnswersFormGroup",
          value: function getAnswersFormGroup(index) {
            return this.pollForm.get("answers").controls[index];
          }
        }, {
          key: "createAnswer",
          value: function createAnswer() {
            return this.fb.group({
              answer: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(80)],
              voteCount: 0
            });
          }
        }, {
          key: "onAddAnswer",
          value: function onAddAnswer() {
            this.pollForm.get("answers").push(this.createAnswer());
          }
        }, {
          key: "onRemoveAnswer",
          value: function onRemoveAnswer(index) {
            if (this.pollForm.get("answers").length > 2) {
              this.pollForm.get("answers").removeAt(index);
              this.updateAnswer();
            }
          }
        }, {
          key: "resetForm",
          value: function resetForm() {
            this.pollForm.reset({
              question: "What is the value \u03C0 ?",
              answers: [{
                answer: "3.14",
                voteCount: 4
              }, {
                answer: "3.1416",
                voteCount: 3
              }, {
                answer: "3.14159264",
                voteCount: 4
              }],
              sum: 11
            });
            this.updateQuestion();
            this.updateAnswer();
          }
        }]);

        return PollComponent;
      }();

      _PollComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
        }, {
          type: src_app_service_ts_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService
        }];
      };

      _PollComponent.propDecorators = {
        poll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }],
        shareData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
        }]
      };
      _PollComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: "app-poll",
        template: _raw_loader_poll_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_poll_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PollComponent);
      /***/
    },

    /***/
    3175: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VotingComponent": function VotingComponent() {
          return (
            /* binding */
            _VotingComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _raw_loader_voting_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./voting.component.html */
      8058);
      /* harmony import */


      var _voting_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./voting.component.css */
      1078);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var src_app_service_ts_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/service.ts/data.service */
      1589);

      var _VotingComponent = /*#__PURE__*/function () {
        function VotingComponent(data) {
          _classCallCheck(this, VotingComponent);

          this.data = data;
        }

        _createClass(VotingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.subscription = this.data.currentMessage.subscribe(function (data) {
              if (data) {
                _this3.poll.question = data.question;
                _this3.poll.answers = data.answers; // console.log(data, "voting com");
              }
            });
          }
        }, {
          key: "voteForAnswer",
          value: function voteForAnswer(vote) {
            vote.voteCount += 1;
            this.poll.sum += 1;
            this.data.changeMessage(this.poll);
          }
        }]);

        return VotingComponent;
      }();

      _VotingComponent.ctorParameters = function () {
        return [{
          type: src_app_service_ts_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService
        }];
      };

      _VotingComponent.propDecorators = {
        poll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
        }]
      };
      _VotingComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: "app-voting",
        template: _raw_loader_voting_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_voting_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _VotingComponent);
      /***/
    },

    /***/
    1589: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DataService": function DataService() {
          return (
            /* binding */
            _DataService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      6215);

      var _DataService = /*#__PURE__*/function () {
        function DataService() {
          _classCallCheck(this, DataService);

          this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
          this.currentMessage = this.messageSource.asObservable();
        }

        _createClass(DataService, [{
          key: "changeMessage",
          value: function changeMessage(data) {
            this.messageSource.next(data);
          }
        }]);

        return DataService;
      }();

      _DataService.ctorParameters = function () {
        return [];
      };

      _DataService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()], _DataService);
      /***/
    },

    /***/
    2340: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    4431: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      4608);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      6747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      2340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      (0, _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    1249: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    8775: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    8396: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFydC5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    7009: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlcy5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    8291: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb2xsLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    1078: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2b3RpbmcuY29tcG9uZW50LmNzcyJ9 */";
      /***/
    },

    /***/
    1106: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header></app-header>\n\n<router-outlet></router-outlet>\n";
      /***/
    },

    /***/
    2998: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<header>\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <h1 class=\"p-5\">Sir Vote-a-lot</h1>\n    </div>\n    <hr />\n  </div>\n</header>\n";
      /***/
    },

    /***/
    33: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<fusioncharts\n  width=\"500\"\n  height=\"400\"\n  type=\"column2d\"\n  [dataSource]=\"dataSource\"\n>\n</fusioncharts>\n\n<div>Total vote: {{ poll.sum }}</div>\n";
      /***/
    },

    /***/
    8928: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container-fluid\">\n  <div class=\"row mx-4\">\n    <div class=\"col-4\">\n      <app-poll [poll]=\"poll\"></app-poll>\n    </div>\n    <div class=\"col-4\">\n      <app-voting [poll]=\"poll\"></app-voting>\n    </div>\n    <div class=\"col-4\">\n      <app-chart [poll]=\"poll\"></app-chart>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    6724: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-card>\n  <mat-card-content>\n    <form [formGroup]=\"pollForm\" id=\"pollForm\">\n      <div class=\"row\">\n        <div class=\"col-9\">\n          <input\n            formControlName=\"question\"\n            id=\"question\"\n            type=\"text\"\n            class=\"form-control\"\n            (keyup)=\"updateQuestion()\"\n            maxlength=\"81\"\n          />\n\n          <mat-error\n            class=\"px-1\"\n            *ngIf=\"pollForm.controls['question'].hasError('maxlength')\"\n          >\n            Max 80 characters are allowed\n          </mat-error>\n        </div>\n        <div class=\"col-12\">\n          <div\n            formArrayName=\"answers\"\n            *ngFor=\"let item of answersForms.controls; let i = index\"\n            class=\"mb-2 mt-2\"\n          >\n            <div class=\"row\" [formGroupName]=\"i\">\n              <div class=\"col-9 mt-3 d-flex align-items-center\">\n                <input\n                  formControlName=\"answer\"\n                  matInput\n                  placeholder=\"Type an answer {{ i + 1 }}\"\n                  class=\"form-control\"\n                  (keyup)=\"updateAnswer()\"\n                  maxlength=\"81\"\n                />\n              </div>\n\n              <mat-error\n                *ngIf=\"\n                  getAnswersFormGroup(i).controls['answer'].hasError(\n                    'maxlength'\n                  )\n                \"\n              >\n                Max 80 characters are allowed\n              </mat-error>\n\n              <div\n                class=\"\n                  col-md-2 col-12\n                  action-buttons\n                  d-flex\n                  align-items-center\n                  mt-3\n                \"\n              >\n                <button\n                  class=\"btn btn-outline-secondary m-1\"\n                  (click)=\"onRemoveAnswer(i)\"\n                >\n                  <i class=\"fa fa-times\"></i>\n                </button>\n                <button\n                  *ngIf=\"\n                    answersForms.length === i + 1 && answersForms.length <= 9\n                  \"\n                  type=\"button\"\n                  class=\"btn btn-outline-secondary\"\n                  (click)=\"onAddAnswer()\"\n                >\n                  Add\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-12 d-flex justify-content-between mt-5\">\n          <div>\n            <span>{{ poll.answers.length }}</span\n            >/10 possible answers\n          </div>\n          <button\n            type=\"button\"\n            class=\"btn btn-outline-secondary\"\n            (click)=\"resetForm()\"\n          >\n            Reset\n          </button>\n        </div>\n      </div>\n    </form>\n  </mat-card-content>\n</mat-card>\n";
      /***/
    },

    /***/
    8058: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-card>\n  <mat-card-content>\n    <div class=\"row\">\n      <h2>\n        {{ poll.question }}\n      </h2>\n\n      <mat-radio-group [(ngModel)]=\"vote\" name=\"vote\">\n        <div *ngFor=\"let answer of poll.answers\">\n          <mat-radio-button\n            *ngIf=\"answer.answer\"\n            class=\"col-12 p-3\"\n            [value]=\"answer\"\n            color=\"primary\"\n          >\n            {{ answer.answer }}\n          </mat-radio-button>\n        </div>\n      </mat-radio-group>\n\n      <div class=\"col-12 d-flex justify-content-end mt-5\">\n        <button\n          type=\"button\"\n          class=\"btn btn-outline-secondary\"\n          (click)=\"voteForAnswer(vote)\"\n        >\n          Vote\n        </button>\n      </div>\n    </div>\n  </mat-card-content>\n</mat-card>\n";
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(4431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map
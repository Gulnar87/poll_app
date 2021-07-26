(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/pages.component */ 7664);




const routes = [
    {
        path: "",
        component: _pages_pages_component__WEBPACK_IMPORTED_MODULE_0__.PagesComponent,
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css */ 1249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let AppComponent = class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _pages_poll_poll_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/poll/poll.component */ 4402);
/* harmony import */ var _pages_voting_voting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/voting/voting.component */ 3175);
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/pages.component */ 7664);
/* harmony import */ var _pages_chart_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/chart/chart.component */ 2433);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _service_ts_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service.ts/data.service */ 1589);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/radio */ 2613);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var angular_fusioncharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-fusioncharts */ 9672);
/* harmony import */ var fusioncharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! fusioncharts */ 8965);
/* harmony import */ var fusioncharts__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(fusioncharts__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var fusioncharts_fusioncharts_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! fusioncharts/fusioncharts.charts */ 1677);
/* harmony import */ var fusioncharts_fusioncharts_charts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(fusioncharts_fusioncharts_charts__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! fusioncharts/themes/fusioncharts.theme.fusion */ 4715);
/* harmony import */ var fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_11__);


















// Import FusionCharts library and chart modules



// Pass the fusioncharts library and chart modules
angular_fusioncharts__WEBPACK_IMPORTED_MODULE_8__.FusionChartsModule.fcRoot(fusioncharts__WEBPACK_IMPORTED_MODULE_9__, fusioncharts_fusioncharts_charts__WEBPACK_IMPORTED_MODULE_10__, fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_11__);
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
            _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
            _pages_poll_poll_component__WEBPACK_IMPORTED_MODULE_3__.PollComponent,
            _pages_voting_voting_component__WEBPACK_IMPORTED_MODULE_4__.VotingComponent,
            _pages_pages_component__WEBPACK_IMPORTED_MODULE_5__.PagesComponent,
            _pages_chart_chart_component__WEBPACK_IMPORTED_MODULE_6__.ChartComponent,
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__.MatRadioModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButtonModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormFieldModule,
            angular_fusioncharts__WEBPACK_IMPORTED_MODULE_8__.FusionChartsModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__.BrowserAnimationsModule,
        ],
        providers: [_service_ts_data_service__WEBPACK_IMPORTED_MODULE_7__.DataService],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 3482:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": function() { return /* binding */ HeaderComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./header.component.html */ 2998);
/* harmony import */ var _header_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.css */ 8775);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent.ctorParameters = () => [];
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_header_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HeaderComponent);



/***/ }),

/***/ 2433:
/*!************************************************!*\
  !*** ./src/app/pages/chart/chart.component.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartComponent": function() { return /* binding */ ChartComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_chart_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./chart.component.html */ 33);
/* harmony import */ var _chart_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart.component.css */ 8396);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_service_ts_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.ts/data.service */ 1589);





let ChartComponent = class ChartComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
        this.subscription = this.data.currentMessage.subscribe((data) => {
            if (data) {
                this.poll.question = data.question;
                this.poll.answers = data.answers;
            }
            console.log(data, "voting com");
            this.initializeVottingGraph();
        });
    }
    initializeVottingGraph() {
        const chartData = [];
        this.poll.answers.forEach((el) => {
            chartData.push({ label: el.answer, value: el.voteCount });
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
                theme: "gammel",
            },
            data: chartData,
        };
    }
};
ChartComponent.ctorParameters = () => [
    { type: src_app_service_ts_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService }
];
ChartComponent.propDecorators = {
    poll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
ChartComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: "app-chart",
        template: _raw_loader_chart_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_chart_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ChartComponent);



/***/ }),

/***/ 7664:
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesComponent": function() { return /* binding */ PagesComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_pages_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./pages.component.html */ 8928);
/* harmony import */ var _pages_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages.component.css */ 7009);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _service_ts_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service.ts/data.service */ 1589);
/* harmony import */ var _poll_poll_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./poll/poll.component */ 4402);






let PagesComponent = class PagesComponent {
    constructor(data) {
        this.data = data;
        this.poll = new _poll_poll_component__WEBPACK_IMPORTED_MODULE_3__.PollData("What is the value \u03C0 ?", [
            { answer: "3.14", voteCount: 4 },
            { answer: "3.1416", voteCount: 3 },
            { answer: "3.14159264", voteCount: 4 },
        ], 11);
    }
    ngOnInit() { }
};
PagesComponent.ctorParameters = () => [
    { type: _service_ts_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService }
];
PagesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: "app-pages",
        template: _raw_loader_pages_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pages_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PagesComponent);



/***/ }),

/***/ 4402:
/*!**********************************************!*\
  !*** ./src/app/pages/poll/poll.component.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Answer": function() { return /* binding */ Answer; },
/* harmony export */   "PollData": function() { return /* binding */ PollData; },
/* harmony export */   "PollComponent": function() { return /* binding */ PollComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_poll_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./poll.component.html */ 6724);
/* harmony import */ var _poll_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./poll.component.css */ 8291);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_service_ts_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.ts/data.service */ 1589);






class Answer {
    // public voteCount?: number = 0;
    constructor(answer, voteCount) {
        this.answer = answer;
        this.voteCount = voteCount;
    }
}
class PollData {
    constructor(question, answers, sum) {
        this.question = question;
        this.answers = answers;
        this.sum = sum;
    }
}
let PollComponent = class PollComponent {
    constructor(fb, data) {
        this.fb = fb;
        this.data = data;
        this.shareData = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngOnInit() {
        this.initializeFormGroup();
        // this.pollForm.controls["question"].disable();
        // this.pollForm.controls["question"].hasError("maxlength");
    }
    initializeFormGroup() {
        this.pollForm = this.fb.group({
            question: [this.poll.question, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(80)],
            answers: this.fb.array(
            // this.poll.answers && this.poll.answers.length > 0
            // ?
            [
                ...this.poll.answers.map((el) => this.fb.group({
                    voteCount: el.voteCount,
                    answer: [
                        el.answer,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(80)]),
                    ],
                })),
            ]
            // : [
            //     ...[new Answer(undefined, 0)].map((el) =>
            //       this.fb.group({
            //         voteCount: el.voteCount,
            //         answer: [el.answer, Validators.maxLength(80)],
            //       })
            //     ),
            //   ]
            ),
        });
        // if (this.pollForm.controls["question"].hasError("maxlength")) {
        //   this.pollForm.controls["question"].disable();
        // this.pollForm.get('endDate').disable();
        // }
    }
    updateQuestion() {
        this.poll.question = this.pollForm.get("question").value;
        this.data.changeMessage(this.poll);
    }
    updateAnswer() {
        this.poll.answers = this.pollForm.get("answers").value;
        this.poll.answers.map((el) => {
            if (el.answer === "") {
                el.voteCount = null;
            }
        });
        this.data.changeMessage(this.poll);
    }
    get answersForms() {
        return this.pollForm.get("answers");
    }
    getAnswersFormGroup(index) {
        return this.pollForm.get("answers").controls[index];
    }
    createAnswer() {
        return this.fb.group({
            answer: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(80)],
            voteCount: 0,
        });
    }
    onAddAnswer() {
        this.pollForm.get("answers").push(this.createAnswer());
    }
    onRemoveAnswer(index) {
        if (this.pollForm.get("answers").length > 2) {
            this.pollForm.get("answers").removeAt(index);
            this.updateAnswer();
        }
    }
    resetForm() {
        this.pollForm.reset({
            question: "What is the value \u03C0 ?",
            answers: [
                { answer: "3.14", voteCount: 4 },
                { answer: "3.1416", voteCount: 3 },
                { answer: "3.14159264", voteCount: 4 },
            ],
            sum: 11,
        });
        this.updateQuestion();
        this.updateAnswer();
    }
};
PollComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: src_app_service_ts_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService }
];
PollComponent.propDecorators = {
    poll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    shareData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
PollComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: "app-poll",
        template: _raw_loader_poll_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_poll_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PollComponent);



/***/ }),

/***/ 3175:
/*!**************************************************!*\
  !*** ./src/app/pages/voting/voting.component.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VotingComponent": function() { return /* binding */ VotingComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_voting_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./voting.component.html */ 8058);
/* harmony import */ var _voting_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./voting.component.css */ 1078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_service_ts_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.ts/data.service */ 1589);





let VotingComponent = class VotingComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
        this.subscription = this.data.currentMessage.subscribe((data) => {
            if (data) {
                this.poll.question = data.question;
                this.poll.answers = data.answers;
                // console.log(data, "voting com");
            }
        });
    }
    voteForAnswer(vote) {
        vote.voteCount += 1;
        this.poll.sum += 1;
        this.data.changeMessage(this.poll);
    }
};
VotingComponent.ctorParameters = () => [
    { type: src_app_service_ts_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService }
];
VotingComponent.propDecorators = {
    poll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
VotingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: "app-voting",
        template: _raw_loader_voting_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_voting_component_css__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VotingComponent);



/***/ }),

/***/ 1589:
/*!********************************************!*\
  !*** ./src/app/service.ts/data.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": function() { return /* binding */ DataService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6215);



let DataService = class DataService {
    constructor() {
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.currentMessage = this.messageSource.asObservable();
    }
    changeMessage(data) {
        this.messageSource.next(data);
    }
};
DataService.ctorParameters = () => [];
DataService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], DataService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 1249:
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ 8775:
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ 8396:
/*!*************************************************!*\
  !*** ./src/app/pages/chart/chart.component.css ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFydC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ 7009:
/*!*******************************************!*\
  !*** ./src/app/pages/pages.component.css ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ 8291:
/*!***********************************************!*\
  !*** ./src/app/pages/poll/poll.component.css ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb2xsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ 1078:
/*!***************************************************!*\
  !*** ./src/app/pages/voting/voting.component.css ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2b3RpbmcuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ 2998:
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <h1 class=\"p-5\">Sir Vote-a-lot</h1>\n    </div>\n    <hr />\n  </div>\n</header>\n");

/***/ }),

/***/ 33:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chart/chart.component.html ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<fusioncharts\n  width=\"500\"\n  height=\"400\"\n  type=\"column2d\"\n  [dataSource]=\"dataSource\"\n>\n</fusioncharts>\n\n<div>Total vote: {{ poll.sum }}</div>\n");

/***/ }),

/***/ 8928:
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages.component.html ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <div class=\"row mx-4\">\n    <div class=\"col-4\">\n      <app-poll [poll]=\"poll\"></app-poll>\n    </div>\n    <div class=\"col-4\">\n      <app-voting [poll]=\"poll\"></app-voting>\n    </div>\n    <div class=\"col-4\">\n      <app-chart [poll]=\"poll\"></app-chart>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ 6724:
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/poll/poll.component.html ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n  <mat-card-content>\n    <form [formGroup]=\"pollForm\" id=\"pollForm\">\n      <div class=\"row\">\n        <div class=\"col-9\">\n          <input\n            formControlName=\"question\"\n            id=\"question\"\n            type=\"text\"\n            class=\"form-control\"\n            (keyup)=\"updateQuestion()\"\n            maxlength=\"81\"\n          />\n\n          <mat-error\n            class=\"px-1\"\n            *ngIf=\"pollForm.controls['question'].hasError('maxlength')\"\n          >\n            Max 80 characters are allowed\n          </mat-error>\n        </div>\n        <div class=\"col-12\">\n          <div\n            formArrayName=\"answers\"\n            *ngFor=\"let item of answersForms.controls; let i = index\"\n            class=\"mb-2 mt-2\"\n          >\n            <div class=\"row\" [formGroupName]=\"i\">\n              <div class=\"col-9 mt-3 d-flex align-items-center\">\n                <input\n                  formControlName=\"answer\"\n                  matInput\n                  placeholder=\"Type an answer {{ i + 1 }}\"\n                  class=\"form-control\"\n                  (keyup)=\"updateAnswer()\"\n                  maxlength=\"81\"\n                />\n              </div>\n\n              <mat-error\n                *ngIf=\"\n                  getAnswersFormGroup(i).controls['answer'].hasError(\n                    'maxlength'\n                  )\n                \"\n              >\n                Max 80 characters are allowed\n              </mat-error>\n\n              <div\n                class=\"\n                  col-md-2 col-12\n                  action-buttons\n                  d-flex\n                  align-items-center\n                  mt-3\n                \"\n              >\n                <button\n                  class=\"btn btn-outline-secondary m-1\"\n                  (click)=\"onRemoveAnswer(i)\"\n                >\n                  <i class=\"fa fa-times\"></i>\n                </button>\n                <button\n                  *ngIf=\"\n                    answersForms.length === i + 1 && answersForms.length <= 9\n                  \"\n                  type=\"button\"\n                  class=\"btn btn-outline-secondary\"\n                  (click)=\"onAddAnswer()\"\n                >\n                  Add\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-12 d-flex justify-content-between mt-5\">\n          <div>\n            <span>{{ poll.answers.length }}</span\n            >/10 possible answers\n          </div>\n          <button\n            type=\"button\"\n            class=\"btn btn-outline-secondary\"\n            (click)=\"resetForm()\"\n          >\n            Reset\n          </button>\n        </div>\n      </div>\n    </form>\n  </mat-card-content>\n</mat-card>\n");

/***/ }),

/***/ 8058:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/voting/voting.component.html ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n  <mat-card-content>\n    <div class=\"row\">\n      <h2>\n        {{ poll.question }}\n      </h2>\n\n      <mat-radio-group [(ngModel)]=\"vote\" name=\"vote\">\n        <div *ngFor=\"let answer of poll.answers\">\n          <mat-radio-button\n            *ngIf=\"answer.answer\"\n            class=\"col-12 p-3\"\n            [value]=\"answer\"\n            color=\"primary\"\n          >\n            {{ answer.answer }}\n          </mat-radio-button>\n        </div>\n      </mat-radio-group>\n\n      <div class=\"col-12 d-flex justify-content-end mt-5\">\n        <button\n          type=\"button\"\n          class=\"btn btn-outline-secondary\"\n          (click)=\"voteForAnswer(vote)\"\n        >\n          Vote\n        </button>\n      </div>\n    </div>\n  </mat-card-content>\n</mat-card>\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(4431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map
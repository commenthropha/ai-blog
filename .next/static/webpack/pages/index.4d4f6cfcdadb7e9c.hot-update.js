"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/postcards/FeaturePostCard.jsx":
/*!**************************************************!*\
  !*** ./components/postcards/FeaturePostCard.jsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_BlogIndex_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/BlogIndex.module.css */ \"./styles/BlogIndex.module.css\");\n/* harmony import */ var _styles_BlogIndex_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_BlogIndex_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util */ \"./util.js\");\n\n\n\n\n\n\n\nconst FeaturePostCard = (param)=>{\n    let { post  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/post/\".concat(post.slug),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat((_styles_BlogIndex_module_css__WEBPACK_IMPORTED_MODULE_6___default().ai__blog_container_article_featured), \" \").concat((_styles_BlogIndex_module_css__WEBPACK_IMPORTED_MODULE_6___default().gradient__bg)),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_BlogIndex_module_css__WEBPACK_IMPORTED_MODULE_6___default().ai__blog_container_article_featured_image),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        loader: _util__WEBPACK_IMPORTED_MODULE_5__.graphCMSImageLoader,\n                        alt: post.title,\n                        src: post.featuredImage.url,\n                        height: \"1\",\n                        width: \"1\"\n                    }, void 0, false, {\n                        fileName: \"/home/anees/repos/ai-blog/components/postcards/FeaturePostCard.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 7\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/anees/repos/ai-blog/components/postcards/FeaturePostCard.jsx\",\n                    lineNumber: 14,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_BlogIndex_module_css__WEBPACK_IMPORTED_MODULE_6___default().ai__blog_container_article_featured_content),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: moment__WEBPACK_IMPORTED_MODULE_3___default()(post.createdAt).format(\"MMM DD, YYYY\")\n                                }, void 0, false, {\n                                    fileName: \"/home/anees/repos/ai-blog/components/postcards/FeaturePostCard.jsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: post.title\n                                }, void 0, false, {\n                                    fileName: \"/home/anees/repos/ai-blog/components/postcards/FeaturePostCard.jsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: post.subheading\n                                }, void 0, false, {\n                                    fileName: \"/home/anees/repos/ai-blog/components/postcards/FeaturePostCard.jsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 9\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/anees/repos/ai-blog/components/postcards/FeaturePostCard.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Read Full Article\"\n                            }, void 0, false, {\n                                fileName: \"/home/anees/repos/ai-blog/components/postcards/FeaturePostCard.jsx\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/anees/repos/ai-blog/components/postcards/FeaturePostCard.jsx\",\n                            lineNumber: 29,\n                            columnNumber: 7\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/anees/repos/ai-blog/components/postcards/FeaturePostCard.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/anees/repos/ai-blog/components/postcards/FeaturePostCard.jsx\",\n            lineNumber: 13,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/anees/repos/ai-blog/components/postcards/FeaturePostCard.jsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_c = FeaturePostCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FeaturePostCard);\nvar _c;\n$RefreshReg$(_c, \"FeaturePostCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Bvc3RjYXJkcy9GZWF0dXJlUG9zdENhcmQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDRztBQUNEO0FBQzJCO0FBRXpCO0FBQ21CO0FBRWpELE1BQU1NLGtCQUFrQixTQUFZO1FBQVgsRUFBQ0MsS0FBSSxFQUFDO0lBRTdCLHFCQUNFLDhEQUFDTixrREFBSUE7UUFBQ08sTUFBTyxTQUFtQixPQUFWRCxLQUFLRSxJQUFJO2tCQUMvQiw0RUFBQ0M7WUFBSUMsV0FBVyxHQUFpRFIsT0FBOUNBLHlHQUEwQyxFQUFDLEtBQXVCLE9BQXBCQSxrRkFBbUI7OzhCQUNsRiw4REFBQ087b0JBQUlDLFdBQVdSLCtHQUFnRDs4QkFDaEUsNEVBQUNDLG1EQUFLQTt3QkFDRlcsUUFBUVYsc0RBQW1CQTt3QkFDM0JXLEtBQUtULEtBQUtVLEtBQUs7d0JBQ2ZDLEtBQUtYLEtBQUtZLGFBQWEsQ0FBQ0MsR0FBRzt3QkFDM0JDLFFBQVE7d0JBQ1JDLE9BQU87Ozs7Ozs7Ozs7OzhCQUdiLDhEQUFDWjtvQkFBSUMsV0FBV1IsaUhBQWtEOztzQ0FDaEUsOERBQUNPOzs4Q0FDQyw4REFBQ2M7OENBQUd0Qiw2Q0FBTUEsQ0FBQ0ssS0FBS2tCLFNBQVMsRUFBRUMsTUFBTSxDQUFDOzs7Ozs7OENBQ2xDLDhEQUFDQzs4Q0FBSXBCLEtBQUtVLEtBQUs7Ozs7Ozs4Q0FDZiw4REFBQ1c7OENBQUlyQixLQUFLc0IsVUFBVTs7Ozs7Ozs7Ozs7O3NDQUV0Qiw4REFBQ25CO3NDQUNHLDRFQUFDYzswQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtaO0tBMUJLbEI7QUE0Qk4sK0RBQWVBLGVBQWVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0Y2FyZHMvRmVhdHVyZVBvc3RDYXJkLmpzeD9lMjA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvQmxvZ0luZGV4Lm1vZHVsZS5jc3MnO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IGdyYXBoQ01TSW1hZ2VMb2FkZXIgfSBmcm9tICcuLi8uLi91dGlsJztcblxuY29uc3QgRmVhdHVyZVBvc3RDYXJkID0gKHtwb3N0fSkgPT4ge1xuICBcbiAgcmV0dXJuIChcbiAgICA8TGluayBocmVmID17YC9wb3N0LyR7cG9zdC5zbHVnfWB9PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYWlfX2Jsb2dfY29udGFpbmVyX2FydGljbGVfZmVhdHVyZWR9ICR7c3R5bGVzLmdyYWRpZW50X19iZ31gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWlfX2Jsb2dfY29udGFpbmVyX2FydGljbGVfZmVhdHVyZWRfaW1hZ2V9PlxuICAgICAgPEltYWdlXG4gICAgICAgICAgbG9hZGVyPXtncmFwaENNU0ltYWdlTG9hZGVyfVxuICAgICAgICAgIGFsdD17cG9zdC50aXRsZX1cbiAgICAgICAgICBzcmM9e3Bvc3QuZmVhdHVyZWRJbWFnZS51cmx9XG4gICAgICAgICAgaGVpZ2h0PSAnMSdcbiAgICAgICAgICB3aWR0aD0gJzEnXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFpX19ibG9nX2NvbnRhaW5lcl9hcnRpY2xlX2ZlYXR1cmVkX2NvbnRlbnR9PlxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+e21vbWVudChwb3N0LmNyZWF0ZWRBdCkuZm9ybWF0KCdNTU0gREQsIFlZWVknKX08L3A+XG4gICAgICAgIDxoMz57cG9zdC50aXRsZX08L2gzPlxuICAgICAgICA8aDI+e3Bvc3Quc3ViaGVhZGluZ308L2gyPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICAgIDxwPlJlYWQgRnVsbCBBcnRpY2xlPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8L0xpbms+XG4pfVxuXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlUG9zdENhcmQiXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwibW9tZW50Iiwic3R5bGVzIiwiSW1hZ2UiLCJncmFwaENNU0ltYWdlTG9hZGVyIiwiRmVhdHVyZVBvc3RDYXJkIiwicG9zdCIsImhyZWYiLCJzbHVnIiwiZGl2IiwiY2xhc3NOYW1lIiwiYWlfX2Jsb2dfY29udGFpbmVyX2FydGljbGVfZmVhdHVyZWQiLCJncmFkaWVudF9fYmciLCJhaV9fYmxvZ19jb250YWluZXJfYXJ0aWNsZV9mZWF0dXJlZF9pbWFnZSIsImxvYWRlciIsImFsdCIsInRpdGxlIiwic3JjIiwiZmVhdHVyZWRJbWFnZSIsInVybCIsImhlaWdodCIsIndpZHRoIiwiYWlfX2Jsb2dfY29udGFpbmVyX2FydGljbGVfZmVhdHVyZWRfY29udGVudCIsInAiLCJjcmVhdGVkQXQiLCJmb3JtYXQiLCJoMyIsImgyIiwic3ViaGVhZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/postcards/FeaturePostCard.jsx\n"));

/***/ })

});
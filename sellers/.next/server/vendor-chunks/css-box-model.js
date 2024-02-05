"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/css-box-model";
exports.ids = ["vendor-chunks/css-box-model"];
exports.modules = {

/***/ "(ssr)/../node_modules/css-box-model/dist/css-box-model.esm.js":
/*!***************************************************************!*\
  !*** ../node_modules/css-box-model/dist/css-box-model.esm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calculateBox: () => (/* binding */ calculateBox),\n/* harmony export */   createBox: () => (/* binding */ createBox),\n/* harmony export */   expand: () => (/* binding */ expand),\n/* harmony export */   getBox: () => (/* binding */ getBox),\n/* harmony export */   getRect: () => (/* binding */ getRect),\n/* harmony export */   offset: () => (/* binding */ offset),\n/* harmony export */   shrink: () => (/* binding */ shrink),\n/* harmony export */   withScroll: () => (/* binding */ withScroll)\n/* harmony export */ });\n/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-invariant */ \"(ssr)/../node_modules/tiny-invariant/dist/esm/tiny-invariant.js\");\n\nvar getRect = function getRect(_ref) {\n    var top = _ref.top, right = _ref.right, bottom = _ref.bottom, left = _ref.left;\n    var width = right - left;\n    var height = bottom - top;\n    var rect = {\n        top: top,\n        right: right,\n        bottom: bottom,\n        left: left,\n        width: width,\n        height: height,\n        x: left,\n        y: top,\n        center: {\n            x: (right + left) / 2,\n            y: (bottom + top) / 2\n        }\n    };\n    return rect;\n};\nvar expand = function expand(target, expandBy) {\n    return {\n        top: target.top - expandBy.top,\n        left: target.left - expandBy.left,\n        bottom: target.bottom + expandBy.bottom,\n        right: target.right + expandBy.right\n    };\n};\nvar shrink = function shrink(target, shrinkBy) {\n    return {\n        top: target.top + shrinkBy.top,\n        left: target.left + shrinkBy.left,\n        bottom: target.bottom - shrinkBy.bottom,\n        right: target.right - shrinkBy.right\n    };\n};\nvar shift = function shift(target, shiftBy) {\n    return {\n        top: target.top + shiftBy.y,\n        left: target.left + shiftBy.x,\n        bottom: target.bottom + shiftBy.y,\n        right: target.right + shiftBy.x\n    };\n};\nvar noSpacing = {\n    top: 0,\n    right: 0,\n    bottom: 0,\n    left: 0\n};\nvar createBox = function createBox(_ref2) {\n    var borderBox = _ref2.borderBox, _ref2$margin = _ref2.margin, margin = _ref2$margin === void 0 ? noSpacing : _ref2$margin, _ref2$border = _ref2.border, border = _ref2$border === void 0 ? noSpacing : _ref2$border, _ref2$padding = _ref2.padding, padding = _ref2$padding === void 0 ? noSpacing : _ref2$padding;\n    var marginBox = getRect(expand(borderBox, margin));\n    var paddingBox = getRect(shrink(borderBox, border));\n    var contentBox = getRect(shrink(paddingBox, padding));\n    return {\n        marginBox: marginBox,\n        borderBox: getRect(borderBox),\n        paddingBox: paddingBox,\n        contentBox: contentBox,\n        margin: margin,\n        border: border,\n        padding: padding\n    };\n};\nvar parse = function parse(raw) {\n    var value = raw.slice(0, -2);\n    var suffix = raw.slice(-2);\n    if (suffix !== \"px\") {\n        return 0;\n    }\n    var result = Number(value);\n    !!isNaN(result) ?  true ? (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(false, \"Could not parse value [raw: \" + raw + \", without suffix: \" + value + \"]\") : 0 : void 0;\n    return result;\n};\nvar getWindowScroll = function getWindowScroll() {\n    return {\n        x: window.pageXOffset,\n        y: window.pageYOffset\n    };\n};\nvar offset = function offset(original, change) {\n    var borderBox = original.borderBox, border = original.border, margin = original.margin, padding = original.padding;\n    var shifted = shift(borderBox, change);\n    return createBox({\n        borderBox: shifted,\n        border: border,\n        margin: margin,\n        padding: padding\n    });\n};\nvar withScroll = function withScroll(original, scroll) {\n    if (scroll === void 0) {\n        scroll = getWindowScroll();\n    }\n    return offset(original, scroll);\n};\nvar calculateBox = function calculateBox(borderBox, styles) {\n    var margin = {\n        top: parse(styles.marginTop),\n        right: parse(styles.marginRight),\n        bottom: parse(styles.marginBottom),\n        left: parse(styles.marginLeft)\n    };\n    var padding = {\n        top: parse(styles.paddingTop),\n        right: parse(styles.paddingRight),\n        bottom: parse(styles.paddingBottom),\n        left: parse(styles.paddingLeft)\n    };\n    var border = {\n        top: parse(styles.borderTopWidth),\n        right: parse(styles.borderRightWidth),\n        bottom: parse(styles.borderBottomWidth),\n        left: parse(styles.borderLeftWidth)\n    };\n    return createBox({\n        borderBox: borderBox,\n        margin: margin,\n        padding: padding,\n        border: border\n    });\n};\nvar getBox = function getBox(el) {\n    var borderBox = el.getBoundingClientRect();\n    var styles = window.getComputedStyle(el);\n    return calculateBox(borderBox, styles);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL2Nzcy1ib3gtbW9kZWwvZGlzdC9jc3MtYm94LW1vZGVsLmVzbS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBdUM7QUFFdkMsSUFBSUMsVUFBVSxTQUFTQSxRQUFRQyxJQUFJO0lBQ2pDLElBQUlDLE1BQU1ELEtBQUtDLEdBQUcsRUFDZEMsUUFBUUYsS0FBS0UsS0FBSyxFQUNsQkMsU0FBU0gsS0FBS0csTUFBTSxFQUNwQkMsT0FBT0osS0FBS0ksSUFBSTtJQUNwQixJQUFJQyxRQUFRSCxRQUFRRTtJQUNwQixJQUFJRSxTQUFTSCxTQUFTRjtJQUN0QixJQUFJTSxPQUFPO1FBQ1ROLEtBQUtBO1FBQ0xDLE9BQU9BO1FBQ1BDLFFBQVFBO1FBQ1JDLE1BQU1BO1FBQ05DLE9BQU9BO1FBQ1BDLFFBQVFBO1FBQ1JFLEdBQUdKO1FBQ0hLLEdBQUdSO1FBQ0hTLFFBQVE7WUFDTkYsR0FBRyxDQUFDTixRQUFRRSxJQUFHLElBQUs7WUFDcEJLLEdBQUcsQ0FBQ04sU0FBU0YsR0FBRSxJQUFLO1FBQ3RCO0lBQ0Y7SUFDQSxPQUFPTTtBQUNUO0FBQ0EsSUFBSUksU0FBUyxTQUFTQSxPQUFPQyxNQUFNLEVBQUVDLFFBQVE7SUFDM0MsT0FBTztRQUNMWixLQUFLVyxPQUFPWCxHQUFHLEdBQUdZLFNBQVNaLEdBQUc7UUFDOUJHLE1BQU1RLE9BQU9SLElBQUksR0FBR1MsU0FBU1QsSUFBSTtRQUNqQ0QsUUFBUVMsT0FBT1QsTUFBTSxHQUFHVSxTQUFTVixNQUFNO1FBQ3ZDRCxPQUFPVSxPQUFPVixLQUFLLEdBQUdXLFNBQVNYLEtBQUs7SUFDdEM7QUFDRjtBQUNBLElBQUlZLFNBQVMsU0FBU0EsT0FBT0YsTUFBTSxFQUFFRyxRQUFRO0lBQzNDLE9BQU87UUFDTGQsS0FBS1csT0FBT1gsR0FBRyxHQUFHYyxTQUFTZCxHQUFHO1FBQzlCRyxNQUFNUSxPQUFPUixJQUFJLEdBQUdXLFNBQVNYLElBQUk7UUFDakNELFFBQVFTLE9BQU9ULE1BQU0sR0FBR1ksU0FBU1osTUFBTTtRQUN2Q0QsT0FBT1UsT0FBT1YsS0FBSyxHQUFHYSxTQUFTYixLQUFLO0lBQ3RDO0FBQ0Y7QUFFQSxJQUFJYyxRQUFRLFNBQVNBLE1BQU1KLE1BQU0sRUFBRUssT0FBTztJQUN4QyxPQUFPO1FBQ0xoQixLQUFLVyxPQUFPWCxHQUFHLEdBQUdnQixRQUFRUixDQUFDO1FBQzNCTCxNQUFNUSxPQUFPUixJQUFJLEdBQUdhLFFBQVFULENBQUM7UUFDN0JMLFFBQVFTLE9BQU9ULE1BQU0sR0FBR2MsUUFBUVIsQ0FBQztRQUNqQ1AsT0FBT1UsT0FBT1YsS0FBSyxHQUFHZSxRQUFRVCxDQUFDO0lBQ2pDO0FBQ0Y7QUFFQSxJQUFJVSxZQUFZO0lBQ2RqQixLQUFLO0lBQ0xDLE9BQU87SUFDUEMsUUFBUTtJQUNSQyxNQUFNO0FBQ1I7QUFDQSxJQUFJZSxZQUFZLFNBQVNBLFVBQVVDLEtBQUs7SUFDdEMsSUFBSUMsWUFBWUQsTUFBTUMsU0FBUyxFQUMzQkMsZUFBZUYsTUFBTUcsTUFBTSxFQUMzQkEsU0FBU0QsaUJBQWlCLEtBQUssSUFBSUosWUFBWUksY0FDL0NFLGVBQWVKLE1BQU1LLE1BQU0sRUFDM0JBLFNBQVNELGlCQUFpQixLQUFLLElBQUlOLFlBQVlNLGNBQy9DRSxnQkFBZ0JOLE1BQU1PLE9BQU8sRUFDN0JBLFVBQVVELGtCQUFrQixLQUFLLElBQUlSLFlBQVlRO0lBQ3JELElBQUlFLFlBQVk3QixRQUFRWSxPQUFPVSxXQUFXRTtJQUMxQyxJQUFJTSxhQUFhOUIsUUFBUWUsT0FBT08sV0FBV0k7SUFDM0MsSUFBSUssYUFBYS9CLFFBQVFlLE9BQU9lLFlBQVlGO0lBQzVDLE9BQU87UUFDTEMsV0FBV0E7UUFDWFAsV0FBV3RCLFFBQVFzQjtRQUNuQlEsWUFBWUE7UUFDWkMsWUFBWUE7UUFDWlAsUUFBUUE7UUFDUkUsUUFBUUE7UUFDUkUsU0FBU0E7SUFDWDtBQUNGO0FBRUEsSUFBSUksUUFBUSxTQUFTQSxNQUFNQyxHQUFHO0lBQzVCLElBQUlDLFFBQVFELElBQUlFLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDMUIsSUFBSUMsU0FBU0gsSUFBSUUsS0FBSyxDQUFDLENBQUM7SUFFeEIsSUFBSUMsV0FBVyxNQUFNO1FBQ25CLE9BQU87SUFDVDtJQUVBLElBQUlDLFNBQVNDLE9BQU9KO0lBQ3BCLENBQUMsQ0FBQ0ssTUFBTUYsVUFBVUcsS0FBcUMsR0FBR3pDLDBEQUFTQSxDQUFDLE9BQU8saUNBQWlDa0MsTUFBTSx1QkFBdUJDLFFBQVEsT0FBT25DLENBQWdCLEdBQUcsS0FBSztJQUNoTCxPQUFPc0M7QUFDVDtBQUVBLElBQUlJLGtCQUFrQixTQUFTQTtJQUM3QixPQUFPO1FBQ0xoQyxHQUFHaUMsT0FBT0MsV0FBVztRQUNyQmpDLEdBQUdnQyxPQUFPRSxXQUFXO0lBQ3ZCO0FBQ0Y7QUFFQSxJQUFJQyxTQUFTLFNBQVNBLE9BQU9DLFFBQVEsRUFBRUMsTUFBTTtJQUMzQyxJQUFJekIsWUFBWXdCLFNBQVN4QixTQUFTLEVBQzlCSSxTQUFTb0IsU0FBU3BCLE1BQU0sRUFDeEJGLFNBQVNzQixTQUFTdEIsTUFBTSxFQUN4QkksVUFBVWtCLFNBQVNsQixPQUFPO0lBQzlCLElBQUlvQixVQUFVL0IsTUFBTUssV0FBV3lCO0lBQy9CLE9BQU8zQixVQUFVO1FBQ2ZFLFdBQVcwQjtRQUNYdEIsUUFBUUE7UUFDUkYsUUFBUUE7UUFDUkksU0FBU0E7SUFDWDtBQUNGO0FBQ0EsSUFBSXFCLGFBQWEsU0FBU0EsV0FBV0gsUUFBUSxFQUFFSSxNQUFNO0lBQ25ELElBQUlBLFdBQVcsS0FBSyxHQUFHO1FBQ3JCQSxTQUFTVDtJQUNYO0lBRUEsT0FBT0ksT0FBT0MsVUFBVUk7QUFDMUI7QUFDQSxJQUFJQyxlQUFlLFNBQVNBLGFBQWE3QixTQUFTLEVBQUU4QixNQUFNO0lBQ3hELElBQUk1QixTQUFTO1FBQ1h0QixLQUFLOEIsTUFBTW9CLE9BQU9DLFNBQVM7UUFDM0JsRCxPQUFPNkIsTUFBTW9CLE9BQU9FLFdBQVc7UUFDL0JsRCxRQUFRNEIsTUFBTW9CLE9BQU9HLFlBQVk7UUFDakNsRCxNQUFNMkIsTUFBTW9CLE9BQU9JLFVBQVU7SUFDL0I7SUFDQSxJQUFJNUIsVUFBVTtRQUNaMUIsS0FBSzhCLE1BQU1vQixPQUFPSyxVQUFVO1FBQzVCdEQsT0FBTzZCLE1BQU1vQixPQUFPTSxZQUFZO1FBQ2hDdEQsUUFBUTRCLE1BQU1vQixPQUFPTyxhQUFhO1FBQ2xDdEQsTUFBTTJCLE1BQU1vQixPQUFPUSxXQUFXO0lBQ2hDO0lBQ0EsSUFBSWxDLFNBQVM7UUFDWHhCLEtBQUs4QixNQUFNb0IsT0FBT1MsY0FBYztRQUNoQzFELE9BQU82QixNQUFNb0IsT0FBT1UsZ0JBQWdCO1FBQ3BDMUQsUUFBUTRCLE1BQU1vQixPQUFPVyxpQkFBaUI7UUFDdEMxRCxNQUFNMkIsTUFBTW9CLE9BQU9ZLGVBQWU7SUFDcEM7SUFDQSxPQUFPNUMsVUFBVTtRQUNmRSxXQUFXQTtRQUNYRSxRQUFRQTtRQUNSSSxTQUFTQTtRQUNURixRQUFRQTtJQUNWO0FBQ0Y7QUFDQSxJQUFJdUMsU0FBUyxTQUFTQSxPQUFPQyxFQUFFO0lBQzdCLElBQUk1QyxZQUFZNEMsR0FBR0MscUJBQXFCO0lBQ3hDLElBQUlmLFNBQVNWLE9BQU8wQixnQkFBZ0IsQ0FBQ0Y7SUFDckMsT0FBT2YsYUFBYTdCLFdBQVc4QjtBQUNqQztBQUV3RiIsInNvdXJjZXMiOlsid2VicGFjazovL3NlbGxlcnMvLi4vbm9kZV9tb2R1bGVzL2Nzcy1ib3gtbW9kZWwvZGlzdC9jc3MtYm94LW1vZGVsLmVzbS5qcz9hY2RjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpbnZhcmlhbnQgZnJvbSAndGlueS1pbnZhcmlhbnQnO1xuXG52YXIgZ2V0UmVjdCA9IGZ1bmN0aW9uIGdldFJlY3QoX3JlZikge1xuICB2YXIgdG9wID0gX3JlZi50b3AsXG4gICAgICByaWdodCA9IF9yZWYucmlnaHQsXG4gICAgICBib3R0b20gPSBfcmVmLmJvdHRvbSxcbiAgICAgIGxlZnQgPSBfcmVmLmxlZnQ7XG4gIHZhciB3aWR0aCA9IHJpZ2h0IC0gbGVmdDtcbiAgdmFyIGhlaWdodCA9IGJvdHRvbSAtIHRvcDtcbiAgdmFyIHJlY3QgPSB7XG4gICAgdG9wOiB0b3AsXG4gICAgcmlnaHQ6IHJpZ2h0LFxuICAgIGJvdHRvbTogYm90dG9tLFxuICAgIGxlZnQ6IGxlZnQsXG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHg6IGxlZnQsXG4gICAgeTogdG9wLFxuICAgIGNlbnRlcjoge1xuICAgICAgeDogKHJpZ2h0ICsgbGVmdCkgLyAyLFxuICAgICAgeTogKGJvdHRvbSArIHRvcCkgLyAyXG4gICAgfVxuICB9O1xuICByZXR1cm4gcmVjdDtcbn07XG52YXIgZXhwYW5kID0gZnVuY3Rpb24gZXhwYW5kKHRhcmdldCwgZXhwYW5kQnkpIHtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IHRhcmdldC50b3AgLSBleHBhbmRCeS50b3AsXG4gICAgbGVmdDogdGFyZ2V0LmxlZnQgLSBleHBhbmRCeS5sZWZ0LFxuICAgIGJvdHRvbTogdGFyZ2V0LmJvdHRvbSArIGV4cGFuZEJ5LmJvdHRvbSxcbiAgICByaWdodDogdGFyZ2V0LnJpZ2h0ICsgZXhwYW5kQnkucmlnaHRcbiAgfTtcbn07XG52YXIgc2hyaW5rID0gZnVuY3Rpb24gc2hyaW5rKHRhcmdldCwgc2hyaW5rQnkpIHtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IHRhcmdldC50b3AgKyBzaHJpbmtCeS50b3AsXG4gICAgbGVmdDogdGFyZ2V0LmxlZnQgKyBzaHJpbmtCeS5sZWZ0LFxuICAgIGJvdHRvbTogdGFyZ2V0LmJvdHRvbSAtIHNocmlua0J5LmJvdHRvbSxcbiAgICByaWdodDogdGFyZ2V0LnJpZ2h0IC0gc2hyaW5rQnkucmlnaHRcbiAgfTtcbn07XG5cbnZhciBzaGlmdCA9IGZ1bmN0aW9uIHNoaWZ0KHRhcmdldCwgc2hpZnRCeSkge1xuICByZXR1cm4ge1xuICAgIHRvcDogdGFyZ2V0LnRvcCArIHNoaWZ0QnkueSxcbiAgICBsZWZ0OiB0YXJnZXQubGVmdCArIHNoaWZ0QnkueCxcbiAgICBib3R0b206IHRhcmdldC5ib3R0b20gKyBzaGlmdEJ5LnksXG4gICAgcmlnaHQ6IHRhcmdldC5yaWdodCArIHNoaWZ0QnkueFxuICB9O1xufTtcblxudmFyIG5vU3BhY2luZyA9IHtcbiAgdG9wOiAwLFxuICByaWdodDogMCxcbiAgYm90dG9tOiAwLFxuICBsZWZ0OiAwXG59O1xudmFyIGNyZWF0ZUJveCA9IGZ1bmN0aW9uIGNyZWF0ZUJveChfcmVmMikge1xuICB2YXIgYm9yZGVyQm94ID0gX3JlZjIuYm9yZGVyQm94LFxuICAgICAgX3JlZjIkbWFyZ2luID0gX3JlZjIubWFyZ2luLFxuICAgICAgbWFyZ2luID0gX3JlZjIkbWFyZ2luID09PSB2b2lkIDAgPyBub1NwYWNpbmcgOiBfcmVmMiRtYXJnaW4sXG4gICAgICBfcmVmMiRib3JkZXIgPSBfcmVmMi5ib3JkZXIsXG4gICAgICBib3JkZXIgPSBfcmVmMiRib3JkZXIgPT09IHZvaWQgMCA/IG5vU3BhY2luZyA6IF9yZWYyJGJvcmRlcixcbiAgICAgIF9yZWYyJHBhZGRpbmcgPSBfcmVmMi5wYWRkaW5nLFxuICAgICAgcGFkZGluZyA9IF9yZWYyJHBhZGRpbmcgPT09IHZvaWQgMCA/IG5vU3BhY2luZyA6IF9yZWYyJHBhZGRpbmc7XG4gIHZhciBtYXJnaW5Cb3ggPSBnZXRSZWN0KGV4cGFuZChib3JkZXJCb3gsIG1hcmdpbikpO1xuICB2YXIgcGFkZGluZ0JveCA9IGdldFJlY3Qoc2hyaW5rKGJvcmRlckJveCwgYm9yZGVyKSk7XG4gIHZhciBjb250ZW50Qm94ID0gZ2V0UmVjdChzaHJpbmsocGFkZGluZ0JveCwgcGFkZGluZykpO1xuICByZXR1cm4ge1xuICAgIG1hcmdpbkJveDogbWFyZ2luQm94LFxuICAgIGJvcmRlckJveDogZ2V0UmVjdChib3JkZXJCb3gpLFxuICAgIHBhZGRpbmdCb3g6IHBhZGRpbmdCb3gsXG4gICAgY29udGVudEJveDogY29udGVudEJveCxcbiAgICBtYXJnaW46IG1hcmdpbixcbiAgICBib3JkZXI6IGJvcmRlcixcbiAgICBwYWRkaW5nOiBwYWRkaW5nXG4gIH07XG59O1xuXG52YXIgcGFyc2UgPSBmdW5jdGlvbiBwYXJzZShyYXcpIHtcbiAgdmFyIHZhbHVlID0gcmF3LnNsaWNlKDAsIC0yKTtcbiAgdmFyIHN1ZmZpeCA9IHJhdy5zbGljZSgtMik7XG5cbiAgaWYgKHN1ZmZpeCAhPT0gJ3B4Jykge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IE51bWJlcih2YWx1ZSk7XG4gICEhaXNOYU4ocmVzdWx0KSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgXCJDb3VsZCBub3QgcGFyc2UgdmFsdWUgW3JhdzogXCIgKyByYXcgKyBcIiwgd2l0aG91dCBzdWZmaXg6IFwiICsgdmFsdWUgKyBcIl1cIikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxudmFyIGdldFdpbmRvd1Njcm9sbCA9IGZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbCgpIHtcbiAgcmV0dXJuIHtcbiAgICB4OiB3aW5kb3cucGFnZVhPZmZzZXQsXG4gICAgeTogd2luZG93LnBhZ2VZT2Zmc2V0XG4gIH07XG59O1xuXG52YXIgb2Zmc2V0ID0gZnVuY3Rpb24gb2Zmc2V0KG9yaWdpbmFsLCBjaGFuZ2UpIHtcbiAgdmFyIGJvcmRlckJveCA9IG9yaWdpbmFsLmJvcmRlckJveCxcbiAgICAgIGJvcmRlciA9IG9yaWdpbmFsLmJvcmRlcixcbiAgICAgIG1hcmdpbiA9IG9yaWdpbmFsLm1hcmdpbixcbiAgICAgIHBhZGRpbmcgPSBvcmlnaW5hbC5wYWRkaW5nO1xuICB2YXIgc2hpZnRlZCA9IHNoaWZ0KGJvcmRlckJveCwgY2hhbmdlKTtcbiAgcmV0dXJuIGNyZWF0ZUJveCh7XG4gICAgYm9yZGVyQm94OiBzaGlmdGVkLFxuICAgIGJvcmRlcjogYm9yZGVyLFxuICAgIG1hcmdpbjogbWFyZ2luLFxuICAgIHBhZGRpbmc6IHBhZGRpbmdcbiAgfSk7XG59O1xudmFyIHdpdGhTY3JvbGwgPSBmdW5jdGlvbiB3aXRoU2Nyb2xsKG9yaWdpbmFsLCBzY3JvbGwpIHtcbiAgaWYgKHNjcm9sbCA9PT0gdm9pZCAwKSB7XG4gICAgc2Nyb2xsID0gZ2V0V2luZG93U2Nyb2xsKCk7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0KG9yaWdpbmFsLCBzY3JvbGwpO1xufTtcbnZhciBjYWxjdWxhdGVCb3ggPSBmdW5jdGlvbiBjYWxjdWxhdGVCb3goYm9yZGVyQm94LCBzdHlsZXMpIHtcbiAgdmFyIG1hcmdpbiA9IHtcbiAgICB0b3A6IHBhcnNlKHN0eWxlcy5tYXJnaW5Ub3ApLFxuICAgIHJpZ2h0OiBwYXJzZShzdHlsZXMubWFyZ2luUmlnaHQpLFxuICAgIGJvdHRvbTogcGFyc2Uoc3R5bGVzLm1hcmdpbkJvdHRvbSksXG4gICAgbGVmdDogcGFyc2Uoc3R5bGVzLm1hcmdpbkxlZnQpXG4gIH07XG4gIHZhciBwYWRkaW5nID0ge1xuICAgIHRvcDogcGFyc2Uoc3R5bGVzLnBhZGRpbmdUb3ApLFxuICAgIHJpZ2h0OiBwYXJzZShzdHlsZXMucGFkZGluZ1JpZ2h0KSxcbiAgICBib3R0b206IHBhcnNlKHN0eWxlcy5wYWRkaW5nQm90dG9tKSxcbiAgICBsZWZ0OiBwYXJzZShzdHlsZXMucGFkZGluZ0xlZnQpXG4gIH07XG4gIHZhciBib3JkZXIgPSB7XG4gICAgdG9wOiBwYXJzZShzdHlsZXMuYm9yZGVyVG9wV2lkdGgpLFxuICAgIHJpZ2h0OiBwYXJzZShzdHlsZXMuYm9yZGVyUmlnaHRXaWR0aCksXG4gICAgYm90dG9tOiBwYXJzZShzdHlsZXMuYm9yZGVyQm90dG9tV2lkdGgpLFxuICAgIGxlZnQ6IHBhcnNlKHN0eWxlcy5ib3JkZXJMZWZ0V2lkdGgpXG4gIH07XG4gIHJldHVybiBjcmVhdGVCb3goe1xuICAgIGJvcmRlckJveDogYm9yZGVyQm94LFxuICAgIG1hcmdpbjogbWFyZ2luLFxuICAgIHBhZGRpbmc6IHBhZGRpbmcsXG4gICAgYm9yZGVyOiBib3JkZXJcbiAgfSk7XG59O1xudmFyIGdldEJveCA9IGZ1bmN0aW9uIGdldEJveChlbCkge1xuICB2YXIgYm9yZGVyQm94ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHZhciBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG4gIHJldHVybiBjYWxjdWxhdGVCb3goYm9yZGVyQm94LCBzdHlsZXMpO1xufTtcblxuZXhwb3J0IHsgY2FsY3VsYXRlQm94LCBjcmVhdGVCb3gsIGV4cGFuZCwgZ2V0Qm94LCBnZXRSZWN0LCBvZmZzZXQsIHNocmluaywgd2l0aFNjcm9sbCB9O1xuIl0sIm5hbWVzIjpbImludmFyaWFudCIsImdldFJlY3QiLCJfcmVmIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJyZWN0IiwieCIsInkiLCJjZW50ZXIiLCJleHBhbmQiLCJ0YXJnZXQiLCJleHBhbmRCeSIsInNocmluayIsInNocmlua0J5Iiwic2hpZnQiLCJzaGlmdEJ5Iiwibm9TcGFjaW5nIiwiY3JlYXRlQm94IiwiX3JlZjIiLCJib3JkZXJCb3giLCJfcmVmMiRtYXJnaW4iLCJtYXJnaW4iLCJfcmVmMiRib3JkZXIiLCJib3JkZXIiLCJfcmVmMiRwYWRkaW5nIiwicGFkZGluZyIsIm1hcmdpbkJveCIsInBhZGRpbmdCb3giLCJjb250ZW50Qm94IiwicGFyc2UiLCJyYXciLCJ2YWx1ZSIsInNsaWNlIiwic3VmZml4IiwicmVzdWx0IiwiTnVtYmVyIiwiaXNOYU4iLCJwcm9jZXNzIiwiZ2V0V2luZG93U2Nyb2xsIiwid2luZG93IiwicGFnZVhPZmZzZXQiLCJwYWdlWU9mZnNldCIsIm9mZnNldCIsIm9yaWdpbmFsIiwiY2hhbmdlIiwic2hpZnRlZCIsIndpdGhTY3JvbGwiLCJzY3JvbGwiLCJjYWxjdWxhdGVCb3giLCJzdHlsZXMiLCJtYXJnaW5Ub3AiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJwYWRkaW5nVG9wIiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdMZWZ0IiwiYm9yZGVyVG9wV2lkdGgiLCJib3JkZXJSaWdodFdpZHRoIiwiYm9yZGVyQm90dG9tV2lkdGgiLCJib3JkZXJMZWZ0V2lkdGgiLCJnZXRCb3giLCJlbCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImdldENvbXB1dGVkU3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/css-box-model/dist/css-box-model.esm.js\n");

/***/ })

};
;
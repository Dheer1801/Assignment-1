<!DOCTYPE html>
<!-- saved from url=(0044)https://onecompiler.com/javascript/3x4nus8ch -->
<html lang="en" style="" class=" "><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><style id="autocompletion.css">.ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {    background-color: #CAD6FA;    z-index: 1;}.ace_dark.ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {    background-color: #3a674e;}.ace_editor.ace_autocomplete .ace_line-hover {    border: 1px solid #abbffe;    margin-top: -1px;    background: rgba(233,233,253,0.4);    position: absolute;    z-index: 2;}.ace_dark.ace_editor.ace_autocomplete .ace_line-hover {    border: 1px solid rgba(109, 150, 13, 0.8);    background: rgba(58, 103, 78, 0.62);}.ace_completion-meta {    opacity: 0.5;    margin: 0.9em;}.ace_completion-message {    color: blue;}.ace_editor.ace_autocomplete .ace_completion-highlight{    color: #2d69c7;}.ace_dark.ace_editor.ace_autocomplete .ace_completion-highlight{    color: #93ca12;}.ace_editor.ace_autocomplete {    width: 300px;    z-index: 200000;    border: 1px lightgray solid;    position: fixed;    box-shadow: 2px 3px 5px rgba(0,0,0,.2);    line-height: 1.4;    background: #fefefe;    color: #111;}.ace_dark.ace_editor.ace_autocomplete {    border: 1px #484747 solid;    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.51);    line-height: 1.4;    background: #25282c;    color: #c1c1c1;}
/*# sourceURL=ace/css/autocompletion.css */</style><style>.ace_snippet-marker {    -moz-box-sizing: border-box;    box-sizing: border-box;    background: rgba(194, 193, 208, 0.09);    border: 1px dotted rgba(211, 208, 235, 0.62);    position: absolute;}</style><style id="ace-xcode">.ace-xcode .ace_gutter {background: #e8e8e8;color: #333}.ace-xcode .ace_print-margin {width: 1px;background: #e8e8e8}.ace-xcode {background-color: #FFFFFF;color: #000000}.ace-xcode .ace_cursor {color: #000000}.ace-xcode .ace_marker-layer .ace_selection {background: #B5D5FF}.ace-xcode.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #FFFFFF;}.ace-xcode .ace_marker-layer .ace_step {background: rgb(198, 219, 174)}.ace-xcode .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid #BFBFBF}.ace-xcode .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.071)}.ace-xcode .ace_gutter-active-line {background-color: rgba(0, 0, 0, 0.071)}.ace-xcode .ace_marker-layer .ace_selected-word {border: 1px solid #B5D5FF}.ace-xcode .ace_constant.ace_language,.ace-xcode .ace_keyword,.ace-xcode .ace_meta,.ace-xcode .ace_variable.ace_language {color: #C800A4}.ace-xcode .ace_invisible {color: #BFBFBF}.ace-xcode .ace_constant.ace_character,.ace-xcode .ace_constant.ace_other {color: #275A5E}.ace-xcode .ace_constant.ace_numeric {color: #3A00DC}.ace-xcode .ace_entity.ace_other.ace_attribute-name,.ace-xcode .ace_support.ace_constant,.ace-xcode .ace_support.ace_function {color: #450084}.ace-xcode .ace_fold {background-color: #C800A4;border-color: #000000}.ace-xcode .ace_entity.ace_name.ace_tag,.ace-xcode .ace_support.ace_class,.ace-xcode .ace_support.ace_type {color: #790EAD}.ace-xcode .ace_storage {color: #C900A4}.ace-xcode .ace_string {color: #DF0002}.ace-xcode .ace_comment {color: #008E00}.ace-xcode .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==) right repeat-y}
/*# sourceURL=ace/css/ace-xcode */</style><style id="ace-dracula">.ace-dracula .ace_gutter {background: #282a36;color: rgb(144,145,148)}.ace-dracula .ace_print-margin {width: 1px;background: #44475a}.ace-dracula {background-color: #282a36;color: #f8f8f2}.ace-dracula .ace_cursor {color: #f8f8f0}.ace-dracula .ace_marker-layer .ace_selection {background: #44475a}.ace-dracula.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #282a36;border-radius: 2px}.ace-dracula .ace_marker-layer .ace_step {background: rgb(198, 219, 174)}.ace-dracula .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid #a29709}.ace-dracula .ace_marker-layer .ace_active-line {background: #44475a}.ace-dracula .ace_gutter-active-line {background-color: #44475a}.ace-dracula .ace_marker-layer .ace_selected-word {box-shadow: 0px 0px 0px 1px #a29709;border-radius: 3px;}.ace-dracula .ace_fold {background-color: #50fa7b;border-color: #f8f8f2}.ace-dracula .ace_keyword {color: #ff79c6}.ace-dracula .ace_constant.ace_language {color: #bd93f9}.ace-dracula .ace_constant.ace_numeric {color: #bd93f9}.ace-dracula .ace_constant.ace_character {color: #bd93f9}.ace-dracula .ace_constant.ace_character.ace_escape {color: #ff79c6}.ace-dracula .ace_constant.ace_other {color: #bd93f9}.ace-dracula .ace_support.ace_function {color: #8be9fd}.ace-dracula .ace_support.ace_constant {color: #6be5fd}.ace-dracula .ace_support.ace_class {font-style: italic;color: #66d9ef}.ace-dracula .ace_support.ace_type {font-style: italic;color: #66d9ef}.ace-dracula .ace_storage {color: #ff79c6}.ace-dracula .ace_storage.ace_type {font-style: italic;color: #8be9fd}.ace-dracula .ace_invalid {color: #F8F8F0;background-color: #ff79c6}.ace-dracula .ace_invalid.ace_deprecated {color: #F8F8F0;background-color: #bd93f9}.ace-dracula .ace_string {color: #f1fa8c}.ace-dracula .ace_comment {color: #6272a4}.ace-dracula .ace_variable {color: #50fa7b}.ace-dracula .ace_variable.ace_parameter {font-style: italic;color: #ffb86c}.ace-dracula .ace_entity.ace_other.ace_attribute-name {color: #50fa7b}.ace-dracula .ace_entity.ace_name.ace_function {color: #50fa7b}.ace-dracula .ace_entity.ace_name.ace_tag {color: #ff79c6}.ace-dracula .ace_invisible {color: #626680;}.ace-dracula .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYHB3d/8PAAOIAdULw8qMAAAAAElFTkSuQmCC) right repeat-y}
/*# sourceURL=ace/css/ace-dracula */</style><style id="ace-github">.ace-github .ace_gutter {background: #e8e8e8;color: #AAA;}.ace-github  {background: #fff;color: #000;}.ace-github .ace_keyword {font-weight: bold;}.ace-github .ace_string {color: #D14;}.ace-github .ace_variable.ace_class {color: teal;}.ace-github .ace_constant.ace_numeric {color: #099;}.ace-github .ace_constant.ace_buildin {color: #0086B3;}.ace-github .ace_support.ace_function {color: #0086B3;}.ace-github .ace_comment {color: #998;font-style: italic;}.ace-github .ace_variable.ace_language  {color: #0086B3;}.ace-github .ace_paren {font-weight: bold;}.ace-github .ace_boolean {font-weight: bold;}.ace-github .ace_string.ace_regexp {color: #009926;font-weight: normal;}.ace-github .ace_variable.ace_instance {color: teal;}.ace-github .ace_constant.ace_language {font-weight: bold;}.ace-github .ace_cursor {color: black;}.ace-github.ace_focus .ace_marker-layer .ace_active-line {background: rgb(255, 255, 204);}.ace-github .ace_marker-layer .ace_active-line {background: rgb(245, 245, 245);}.ace-github .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-github.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px white;}.ace-github.ace_nobold .ace_line > span {font-weight: normal !important;}.ace-github .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-github .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-github .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-github .ace_gutter-active-line {background-color : rgba(0, 0, 0, 0.07);}.ace-github .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-github .ace_invisible {color: #BFBFBF}.ace-github .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-github .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}
/*# sourceURL=ace/css/ace-github */</style><style>    .error_widget_wrapper {        background: inherit;        color: inherit;        border:none    }    .error_widget {        border-top: solid 2px;        border-bottom: solid 2px;        margin: 5px 0;        padding: 10px 40px;        white-space: pre-wrap;    }    .error_widget.ace_error, .error_widget_arrow.ace_error{        border-color: #ff5a5a    }    .error_widget.ace_warning, .error_widget_arrow.ace_warning{        border-color: #F1D817    }    .error_widget.ace_info, .error_widget_arrow.ace_info{        border-color: #5a5a5a    }    .error_widget.ace_ok, .error_widget_arrow.ace_ok{        border-color: #5aaa5a    }    .error_widget_arrow {        position: absolute;        border: solid 5px;        border-top-color: transparent!important;        border-right-color: transparent!important;        border-left-color: transparent!important;        top: -5px;    }</style><style id="ace-tm">.ace-tm .ace_gutter {background: #f0f0f0;color: #333;}.ace-tm .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-tm .ace_fold {background-color: #6B72E6;}.ace-tm {background-color: #FFFFFF;color: black;}.ace-tm .ace_cursor {color: black;}.ace-tm .ace_invisible {color: rgb(191, 191, 191);}.ace-tm .ace_storage,.ace-tm .ace_keyword {color: blue;}.ace-tm .ace_constant {color: rgb(197, 6, 11);}.ace-tm .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-tm .ace_constant.ace_language {color: rgb(88, 92, 246);}.ace-tm .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-tm .ace_invalid {background-color: rgba(255, 0, 0, 0.1);color: red;}.ace-tm .ace_support.ace_function {color: rgb(60, 76, 114);}.ace-tm .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-tm .ace_support.ace_type,.ace-tm .ace_support.ace_class {color: rgb(109, 121, 222);}.ace-tm .ace_keyword.ace_operator {color: rgb(104, 118, 135);}.ace-tm .ace_string {color: rgb(3, 106, 7);}.ace-tm .ace_comment {color: rgb(76, 136, 107);}.ace-tm .ace_comment.ace_doc {color: rgb(0, 102, 255);}.ace-tm .ace_comment.ace_doc.ace_tag {color: rgb(128, 159, 191);}.ace-tm .ace_constant.ace_numeric {color: rgb(0, 0, 205);}.ace-tm .ace_variable {color: rgb(49, 132, 149);}.ace-tm .ace_xml-pe {color: rgb(104, 104, 91);}.ace-tm .ace_entity.ace_name.ace_function {color: #0000A2;}.ace-tm .ace_heading {color: rgb(12, 7, 255);}.ace-tm .ace_list {color:rgb(185, 6, 144);}.ace-tm .ace_meta.ace_tag {color:rgb(0, 22, 142);}.ace-tm .ace_string.ace_regex {color: rgb(255, 0, 0)}.ace-tm .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-tm.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px white;}.ace-tm .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-tm .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-tm .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-tm .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.07);}.ace-tm .ace_gutter-active-line {background-color : #dcdcdc;}.ace-tm .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-tm .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}
/*# sourceURL=ace/css/ace-tm */</style><style id="ace_editor.css">.ace_br1 {border-top-left-radius    : 3px;}.ace_br2 {border-top-right-radius   : 3px;}.ace_br3 {border-top-left-radius    : 3px; border-top-right-radius:    3px;}.ace_br4 {border-bottom-right-radius: 3px;}.ace_br5 {border-top-left-radius    : 3px; border-bottom-right-radius: 3px;}.ace_br6 {border-top-right-radius   : 3px; border-bottom-right-radius: 3px;}.ace_br7 {border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px;}.ace_br8 {border-bottom-left-radius : 3px;}.ace_br9 {border-top-left-radius    : 3px; border-bottom-left-radius:  3px;}.ace_br10{border-top-right-radius   : 3px; border-bottom-left-radius:  3px;}.ace_br11{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-left-radius:  3px;}.ace_br12{border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br13{border-top-left-radius    : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br14{border-top-right-radius   : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br15{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px;}.ace_editor {position: relative;overflow: hidden;padding: 0;font: 12px/normal 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;direction: ltr;text-align: left;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);}.ace_scroller {position: absolute;overflow: hidden;top: 0;bottom: 0;background-color: inherit;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;cursor: text;}.ace_content {position: absolute;box-sizing: border-box;min-width: 100%;contain: style size layout;font-variant-ligatures: no-common-ligatures;}.ace_dragging .ace_scroller:before{position: absolute;top: 0;left: 0;right: 0;bottom: 0;content: '';background: rgba(250, 250, 250, 0.01);z-index: 1000;}.ace_dragging.ace_dark .ace_scroller:before{background: rgba(0, 0, 0, 0.01);}.ace_selecting, .ace_selecting * {cursor: text !important;}.ace_gutter {position: absolute;overflow : hidden;width: auto;top: 0;bottom: 0;left: 0;cursor: default;z-index: 4;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;contain: style size layout;}.ace_gutter-active-line {position: absolute;left: 0;right: 0;}.ace_scroller.ace_scroll-left {box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;}.ace_gutter-cell {position: absolute;top: 0;left: 0;right: 0;padding-left: 19px;padding-right: 6px;background-repeat: no-repeat;}.ace_gutter-cell.ace_error {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABOFBMVEX/////////QRswFAb/Ui4wFAYwFAYwFAaWGAfDRymzOSH/PxswFAb/SiUwFAYwFAbUPRvjQiDllog5HhHdRybsTi3/Tyv9Tir+Syj/UC3////XurebMBIwFAb/RSHbPx/gUzfdwL3kzMivKBAwFAbbvbnhPx66NhowFAYwFAaZJg8wFAaxKBDZurf/RB6mMxb/SCMwFAYwFAbxQB3+RB4wFAb/Qhy4Oh+4QifbNRcwFAYwFAYwFAb/QRzdNhgwFAYwFAbav7v/Uy7oaE68MBK5LxLewr/r2NXewLswFAaxJw4wFAbkPRy2PyYwFAaxKhLm1tMwFAazPiQwFAaUGAb/QBrfOx3bvrv/VC/maE4wFAbRPBq6MRO8Qynew8Dp2tjfwb0wFAbx6eju5+by6uns4uH9/f36+vr/GkHjAAAAYnRSTlMAGt+64rnWu/bo8eAA4InH3+DwoN7j4eLi4xP99Nfg4+b+/u9B/eDs1MD1mO7+4PHg2MXa347g7vDizMLN4eG+Pv7i5evs/v79yu7S3/DV7/498Yv24eH+4ufQ3Ozu/v7+y13sRqwAAADLSURBVHjaZc/XDsFgGIBhtDrshlitmk2IrbHFqL2pvXf/+78DPokj7+Fz9qpU/9UXJIlhmPaTaQ6QPaz0mm+5gwkgovcV6GZzd5JtCQwgsxoHOvJO15kleRLAnMgHFIESUEPmawB9ngmelTtipwwfASilxOLyiV5UVUyVAfbG0cCPHig+GBkzAENHS0AstVF6bacZIOzgLmxsHbt2OecNgJC83JERmePUYq8ARGkJx6XtFsdddBQgZE2nPR6CICZhawjA4Fb/chv+399kfR+MMMDGOQAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: 2px center;}.ace_gutter-cell.ace_warning {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAmVBMVEX///8AAAD///8AAAAAAABPSzb/5sAAAAB/blH/73z/ulkAAAAAAAD85pkAAAAAAAACAgP/vGz/rkDerGbGrV7/pkQICAf////e0IsAAAD/oED/qTvhrnUAAAD/yHD/njcAAADuv2r/nz//oTj/p064oGf/zHAAAAA9Nir/tFIAAAD/tlTiuWf/tkIAAACynXEAAAAAAAAtIRW7zBpBAAAAM3RSTlMAABR1m7RXO8Ln31Z36zT+neXe5OzooRDfn+TZ4p3h2hTf4t3k3ucyrN1K5+Xaks52Sfs9CXgrAAAAjklEQVR42o3PbQ+CIBQFYEwboPhSYgoYunIqqLn6/z8uYdH8Vmdnu9vz4WwXgN/xTPRD2+sgOcZjsge/whXZgUaYYvT8QnuJaUrjrHUQreGczuEafQCO/SJTufTbroWsPgsllVhq3wJEk2jUSzX3CUEDJC84707djRc5MTAQxoLgupWRwW6UB5fS++NV8AbOZgnsC7BpEAAAAABJRU5ErkJggg==");background-position: 2px center;}.ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAJ0Uk5TAAB2k804AAAAPklEQVQY02NgIB68QuO3tiLznjAwpKTgNyDbMegwisCHZUETUZV0ZqOquBpXj2rtnpSJT1AEnnRmL2OgGgAAIKkRQap2htgAAAAASUVORK5CYII=");background-position: 2px center;}.ace_dark .ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAChoaGAgIAqKiq+vr6tra1ZWVmUlJSbm5s8PDxubm56enrdgzg3AAAAAXRSTlMAQObYZgAAAClJREFUeNpjYMAPdsMYHegyJZFQBlsUlMFVCWUYKkAZMxZAGdxlDMQBAG+TBP4B6RyJAAAAAElFTkSuQmCC");}.ace_scrollbar {contain: strict;position: absolute;right: 0;bottom: 0;z-index: 6;}.ace_scrollbar-inner {position: absolute;cursor: text;left: 0;top: 0;}.ace_scrollbar-v{overflow-x: hidden;overflow-y: scroll;top: 0;}.ace_scrollbar-h {overflow-x: scroll;overflow-y: hidden;left: 0;}.ace_print-margin {position: absolute;height: 100%;}.ace_text-input {position: absolute;z-index: 0;width: 0.5em;height: 1em;opacity: 0;background: transparent;-moz-appearance: none;appearance: none;border: none;resize: none;outline: none;overflow: hidden;font: inherit;padding: 0 1px;margin: 0 -1px;contain: strict;-ms-user-select: text;-moz-user-select: text;-webkit-user-select: text;user-select: text;white-space: pre!important;}.ace_text-input.ace_composition {background: transparent;color: inherit;z-index: 1000;opacity: 1;}.ace_composition_placeholder { color: transparent }.ace_composition_marker { border-bottom: 1px solid;position: absolute;border-radius: 0;margin-top: 1px;}[ace_nocontext=true] {transform: none!important;filter: none!important;clip-path: none!important;mask : none!important;contain: none!important;perspective: none!important;mix-blend-mode: initial!important;z-index: auto;}.ace_layer {z-index: 1;position: absolute;overflow: hidden;word-wrap: normal;white-space: pre;height: 100%;width: 100%;box-sizing: border-box;pointer-events: none;}.ace_gutter-layer {position: relative;width: auto;text-align: right;pointer-events: auto;height: 1000000px;contain: style size layout;}.ace_text-layer {font: inherit !important;position: absolute;height: 1000000px;width: 1000000px;contain: style size layout;}.ace_text-layer > .ace_line, .ace_text-layer > .ace_line_group {contain: style size layout;position: absolute;top: 0;left: 0;right: 0;}.ace_hidpi .ace_text-layer,.ace_hidpi .ace_gutter-layer,.ace_hidpi .ace_content,.ace_hidpi .ace_gutter {contain: strict;will-change: transform;}.ace_hidpi .ace_text-layer > .ace_line, .ace_hidpi .ace_text-layer > .ace_line_group {contain: strict;}.ace_cjk {display: inline-block;text-align: center;}.ace_cursor-layer {z-index: 4;}.ace_cursor {z-index: 4;position: absolute;box-sizing: border-box;border-left: 2px solid;transform: translatez(0);}.ace_multiselect .ace_cursor {border-left-width: 1px;}.ace_slim-cursors .ace_cursor {border-left-width: 1px;}.ace_overwrite-cursors .ace_cursor {border-left-width: 0;border-bottom: 1px solid;}.ace_hidden-cursors .ace_cursor {opacity: 0.2;}.ace_hasPlaceholder .ace_hidden-cursors .ace_cursor {opacity: 0;}.ace_smooth-blinking .ace_cursor {transition: opacity 0.18s;}.ace_animate-blinking .ace_cursor {animation-duration: 1000ms;animation-timing-function: step-end;animation-name: blink-ace-animate;animation-iteration-count: infinite;}.ace_animate-blinking.ace_smooth-blinking .ace_cursor {animation-duration: 1000ms;animation-timing-function: ease-in-out;animation-name: blink-ace-animate-smooth;}@keyframes blink-ace-animate {from, to { opacity: 1; }60% { opacity: 0; }}@keyframes blink-ace-animate-smooth {from, to { opacity: 1; }45% { opacity: 1; }60% { opacity: 0; }85% { opacity: 0; }}.ace_marker-layer .ace_step, .ace_marker-layer .ace_stack {position: absolute;z-index: 3;}.ace_marker-layer .ace_selection {position: absolute;z-index: 5;}.ace_marker-layer .ace_bracket {position: absolute;z-index: 6;}.ace_marker-layer .ace_error_bracket {position: absolute;border-bottom: 1px solid #DE5555;border-radius: 0;}.ace_marker-layer .ace_active-line {position: absolute;z-index: 2;}.ace_marker-layer .ace_selected-word {position: absolute;z-index: 4;box-sizing: border-box;}.ace_line .ace_fold {box-sizing: border-box;display: inline-block;height: 11px;margin-top: -2px;vertical-align: middle;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACJJREFUeNpi+P//fxgTAwPDBxDxD078RSX+YeEyDFMCIMAAI3INmXiwf2YAAAAASUVORK5CYII=");background-repeat: no-repeat, repeat-x;background-position: center center, top left;color: transparent;border: 1px solid black;border-radius: 2px;cursor: pointer;pointer-events: auto;}.ace_dark .ace_fold {}.ace_fold:hover{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeNpi+P//fz4TAwPDZxDxD5X4i5fLMEwJgAADAEPVDbjNw87ZAAAAAElFTkSuQmCC");}.ace_tooltip {background-color: #FFF;background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1));border: 1px solid gray;border-radius: 1px;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);color: black;max-width: 100%;padding: 3px 4px;position: fixed;z-index: 999999;box-sizing: border-box;cursor: default;white-space: pre;word-wrap: break-word;line-height: normal;font-style: normal;font-weight: normal;letter-spacing: normal;pointer-events: none;}.ace_folding-enabled > .ace_gutter-cell {padding-right: 13px;}.ace_fold-widget {box-sizing: border-box;margin: 0 -12px 0 1px;display: none;width: 11px;vertical-align: top;background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42mWKsQ0AMAzC8ixLlrzQjzmBiEjp0A6WwBCSPgKAXoLkqSot7nN3yMwR7pZ32NzpKkVoDBUxKAAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: center;border-radius: 3px;border: 1px solid transparent;cursor: pointer;}.ace_folding-enabled .ace_fold-widget {display: inline-block;   }.ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42m3HwQkAMAhD0YzsRchFKI7sAikeWkrxwScEB0nh5e7KTPWimZki4tYfVbX+MNl4pyZXejUO1QAAAABJRU5ErkJggg==");}.ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAGCAYAAAAG5SQMAAAAOUlEQVR42jXKwQkAMAgDwKwqKD4EwQ26sSOkVWjgIIHAzPiCgaqiqnJHZnKICBERHN194O5b9vbLuAVRL+l0YWnZAAAAAElFTkSuQmCCXA==");}.ace_fold-widget:hover {border: 1px solid rgba(0, 0, 0, 0.3);background-color: rgba(255, 255, 255, 0.2);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);}.ace_fold-widget:active {border: 1px solid rgba(0, 0, 0, 0.4);background-color: rgba(0, 0, 0, 0.05);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);}.ace_dark .ace_fold-widget {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC");}.ace_dark .ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget:hover {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);background-color: rgba(255, 255, 255, 0.1);}.ace_dark .ace_fold-widget:active {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);}.ace_inline_button {border: 1px solid lightgray;display: inline-block;margin: -1px 8px;padding: 0 5px;pointer-events: auto;cursor: pointer;}.ace_inline_button:hover {border-color: gray;background: rgba(200,200,200,0.2);display: inline-block;pointer-events: auto;}.ace_fold-widget.ace_invalid {background-color: #FFB4B4;border-color: #DE5555;}.ace_fade-fold-widgets .ace_fold-widget {transition: opacity 0.4s ease 0.05s;opacity: 0;}.ace_fade-fold-widgets:hover .ace_fold-widget {transition: opacity 0.05s ease 0.05s;opacity:1;}.ace_underline {text-decoration: underline;}.ace_bold {font-weight: bold;}.ace_nobold .ace_bold {font-weight: normal;}.ace_italic {font-style: italic;}.ace_error-marker {background-color: rgba(255, 0, 0,0.2);position: absolute;z-index: 9;}.ace_highlight-marker {background-color: rgba(255, 255, 0,0.2);position: absolute;z-index: 8;}.ace_mobile-menu {position: absolute;line-height: 1.5;border-radius: 4px;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;background: white;box-shadow: 1px 3px 2px grey;border: 1px solid #dcdcdc;color: black;}.ace_dark > .ace_mobile-menu {background: #333;color: #ccc;box-shadow: 1px 3px 2px grey;border: 1px solid #444;}.ace_mobile-button {padding: 2px;cursor: pointer;overflow: hidden;}.ace_mobile-button:hover {background-color: #eee;opacity:1;}.ace_mobile-button:active {background-color: #ddd;}.ace_placeholder {font-family: arial;transform: scale(0.9);transform-origin: left;white-space: pre;opacity: 0.7;margin: 0 10px;}
/*# sourceURL=ace/css/ace_editor.css */</style><link rel="shortcut icon" href="https://onecompiler.com/favicon.ico"><link rel="stylesheet" href="./Assign_files/css"><script src="./Assign_files/cb=gapi.loaded_0" async=""></script><script src="./Assign_files/sdk.js.download" async="" crossorigin="anonymous"></script><script async="" src="./Assign_files/analytics.js.download"></script><script src="./Assign_files/polyfill.min.js.download"></script><script async="" custom-element="amp-timeago" src="./Assign_files/highlight.min.js.download"></script><meta name="viewport" content="width=device-width"><title>3x4nus8ch - JavaScript - OneCompiler</title><meta name="next-head-count" content="3"><link rel="preload" href="./Assign_files/1b0b4a66374c232b96d8.css" as="style"><link rel="stylesheet" href="./Assign_files/1b0b4a66374c232b96d8.css" data-n-g=""><noscript data-n-css=""></noscript><link rel="preload" href="./Assign_files/main-ae0cb640eba706a0affd.js.download" as="script"><link rel="preload" href="./Assign_files/webpack-b82f27b444ef2fcdf5b0.js.download" as="script"><link rel="preload" href="./Assign_files/framework.1a8e5b8ac72aee184af3.js.download" as="script"><link rel="preload" href="./Assign_files/commons.0b90add706d614eb037c.js.download" as="script"><link rel="preload" href="./Assign_files/1188305e405f651ebfaddcec80e16b719aeead2a.bacf850d3e386babd61d.js.download" as="script"><link rel="preload" href="./Assign_files/3d545192f940ee84c01fcafcf50d4593b0d84dd4.8fb068cb141727af4d09.js.download" as="script"><link rel="preload" href="./Assign_files/_app-1ab70d9812df7570a9a5.js.download" as="script"><link rel="preload" href="./Assign_files/0b7b90cd.fd9f5f5679f4acd57030.js.download" as="script"><link rel="preload" href="./Assign_files/117007c18bdb927a9a016f9e318eb51d2400f955.c87f694fe3512b929ea7.js.download" as="script"><link rel="preload" href="./Assign_files/2cc21498b1f239057f626929b66d39f295bbdbd2.08dfdbeba363574be55f.js.download" as="script"><link rel="preload" href="./Assign_files/2297dfd59a9b59c88de8f02832530b83a4a772de.df4ec9fdb619da1b0cef.js.download" as="script"><link rel="preload" href="./Assign_files/c98d624bfe36ec51252babbeb10c34cba6ad7720.96eb6be4130d14b60cd5.js.download" as="script"><link rel="preload" href="./Assign_files/f580a4dc091bcb286379eeeb6e26bc9bc980fbf4.178d98c398f5fd5e92cc.js.download" as="script"><link rel="preload" href="./Assign_files/3558d97e4001fc36fe953d1123d319e4c35aaab2.5388725a21bc4dde4849.js.download" as="script"><link rel="preload" href="./Assign_files/0908abc5bf769e7a78d47de49b1d5ce553db9810.a66dfb92b12405571985.js.download" as="script"><link rel="preload" href="./Assign_files/65c0c77e49afcc7e359a3b1aee8075c6ad73cec7.40fabacb103c03230555.js.download" as="script"><link rel="preload" href="./Assign_files/bf240ec8346ec7915119adf045cb55a20052cf37.fe47851802ae8af70c8a.js.download" as="script"><link rel="preload" href="./Assign_files/27.9a00b8fc76963dc60182.js.download" as="script"><link rel="preload" href="./Assign_files/index-bd2edae5be741533d601.js.download" as="script"><style data-jss="" data-meta="MuiCssBaseline">
html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*, *::before, *::after {
  box-sizing: inherit;
}
strong, b {
  font-weight: 700;
}
body {
  color: #fff;
  margin: 0;
  font-size: 0.875rem;
  font-family: Lato;
  font-weight: 400;
  line-height: 1.43;
  background-color: #121212;
}
@media print {
  body {
    background-color: #fff;
  }
}
body::backdrop {
  background-color: #121212;
}
</style><style data-jss="" data-meta="PrivateHiddenCss">
@media (min-width:0px) and (max-width:599.95px) {
  .jss131 {
    display: none;
  }
}
@media (min-width:0px) {
  .jss132 {
    display: none;
  }
}
@media (max-width:599.95px) {
  .jss133 {
    display: none;
  }
}
@media (min-width:600px) and (max-width:959.95px) {
  .jss134 {
    display: none;
  }
}
@media (min-width:600px) {
  .jss135 {
    display: none;
  }
}
@media (max-width:959.95px) {
  .jss136 {
    display: none;
  }
}
@media (min-width:960px) and (max-width:1279.95px) {
  .jss137 {
    display: none;
  }
}
@media (min-width:960px) {
  .jss138 {
    display: none;
  }
}
@media (max-width:1279.95px) {
  .jss139 {
    display: none;
  }
}
@media (min-width:1280px) and (max-width:1919.95px) {
  .jss140 {
    display: none;
  }
}
@media (min-width:1280px) {
  .jss141 {
    display: none;
  }
}
@media (max-width:1919.95px) {
  .jss142 {
    display: none;
  }
}
@media (min-width:1920px) {
  .jss143 {
    display: none;
  }
}
@media (min-width:1920px) {
  .jss144 {
    display: none;
  }
}
@media (min-width:0px) {
  .jss145 {
    display: none;
  }
}
</style><style data-jss="" data-meta="MuiDivider">
.MuiDivider-root {
  border: none;
  height: 1px;
  margin: 0;
  flex-shrink: 0;
  background-color: rgba(255, 255, 255, 0.12);
}
.MuiDivider-absolute {
  left: 0;
  width: 100%;
  bottom: 0;
  position: absolute;
}
.MuiDivider-inset {
  margin-left: 72px;
}
.MuiDivider-light {
  background-color: rgba(255, 255, 255, 0.08);
}
.MuiDivider-middle {
  margin-left: 16px;
  margin-right: 16px;
}
.MuiDivider-vertical {
  width: 1px;
  height: 100%;
}
.MuiDivider-flexItem {
  height: auto;
  align-self: stretch;
}
</style><style data-jss="" data-meta="MuiContainer">
.MuiContainer-root {
  width: 100%;
  display: block;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
}
@media (min-width:600px) {
  .MuiContainer-root {
    padding-left: 24px;
    padding-right: 24px;
  }
}
.MuiContainer-disableGutters {
  padding-left: 0;
  padding-right: 0;
}
@media (min-width:600px) {
  .MuiContainer-fixed {
    max-width: 600px;
  }
}
@media (min-width:960px) {
  .MuiContainer-fixed {
    max-width: 960px;
  }
}
@media (min-width:1280px) {
  .MuiContainer-fixed {
    max-width: 1280px;
  }
}
@media (min-width:1920px) {
  .MuiContainer-fixed {
    max-width: 1920px;
  }
}
@media (min-width:0px) {
  .MuiContainer-maxWidthXs {
    max-width: 444px;
  }
}
@media (min-width:600px) {
  .MuiContainer-maxWidthSm {
    max-width: 600px;
  }
}
@media (min-width:960px) {
  .MuiContainer-maxWidthMd {
    max-width: 960px;
  }
}
@media (min-width:1280px) {
  .MuiContainer-maxWidthLg {
    max-width: 1280px;
  }
}
@media (min-width:1920px) {
  .MuiContainer-maxWidthXl {
    max-width: 1920px;
  }
}
</style><style data-jss="" data-meta="MuiGrid">
.MuiGrid-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
}
.MuiGrid-item {
  margin: 0;
  box-sizing: border-box;
}
.MuiGrid-zeroMinWidth {
  min-width: 0;
}
.MuiGrid-direction-xs-column {
  flex-direction: column;
}
.MuiGrid-direction-xs-column-reverse {
  flex-direction: column-reverse;
}
.MuiGrid-direction-xs-row-reverse {
  flex-direction: row-reverse;
}
.MuiGrid-wrap-xs-nowrap {
  flex-wrap: nowrap;
}
.MuiGrid-wrap-xs-wrap-reverse {
  flex-wrap: wrap-reverse;
}
.MuiGrid-align-items-xs-center {
  align-items: center;
}
.MuiGrid-align-items-xs-flex-start {
  align-items: flex-start;
}
.MuiGrid-align-items-xs-flex-end {
  align-items: flex-end;
}
.MuiGrid-align-items-xs-baseline {
  align-items: baseline;
}
.MuiGrid-align-content-xs-center {
  align-content: center;
}
.MuiGrid-align-content-xs-flex-start {
  align-content: flex-start;
}
.MuiGrid-align-content-xs-flex-end {
  align-content: flex-end;
}
.MuiGrid-align-content-xs-space-between {
  align-content: space-between;
}
.MuiGrid-align-content-xs-space-around {
  align-content: space-around;
}
.MuiGrid-justify-xs-center {
  justify-content: center;
}
.MuiGrid-justify-xs-flex-end {
  justify-content: flex-end;
}
.MuiGrid-justify-xs-space-between {
  justify-content: space-between;
}
.MuiGrid-justify-xs-space-around {
  justify-content: space-around;
}
.MuiGrid-justify-xs-space-evenly {
  justify-content: space-evenly;
}
.MuiGrid-spacing-xs-1 {
  width: calc(100% + 8px);
  margin: -4px;
}
.MuiGrid-spacing-xs-1 > .MuiGrid-item {
  padding: 4px;
}
.MuiGrid-spacing-xs-2 {
  width: calc(100% + 16px);
  margin: -8px;
}
.MuiGrid-spacing-xs-2 > .MuiGrid-item {
  padding: 8px;
}
.MuiGrid-spacing-xs-3 {
  width: calc(100% + 24px);
  margin: -12px;
}
.MuiGrid-spacing-xs-3 > .MuiGrid-item {
  padding: 12px;
}
.MuiGrid-spacing-xs-4 {
  width: calc(100% + 32px);
  margin: -16px;
}
.MuiGrid-spacing-xs-4 > .MuiGrid-item {
  padding: 16px;
}
.MuiGrid-spacing-xs-5 {
  width: calc(100% + 40px);
  margin: -20px;
}
.MuiGrid-spacing-xs-5 > .MuiGrid-item {
  padding: 20px;
}
.MuiGrid-spacing-xs-6 {
  width: calc(100% + 48px);
  margin: -24px;
}
.MuiGrid-spacing-xs-6 > .MuiGrid-item {
  padding: 24px;
}
.MuiGrid-spacing-xs-7 {
  width: calc(100% + 56px);
  margin: -28px;
}
.MuiGrid-spacing-xs-7 > .MuiGrid-item {
  padding: 28px;
}
.MuiGrid-spacing-xs-8 {
  width: calc(100% + 64px);
  margin: -32px;
}
.MuiGrid-spacing-xs-8 > .MuiGrid-item {
  padding: 32px;
}
.MuiGrid-spacing-xs-9 {
  width: calc(100% + 72px);
  margin: -36px;
}
.MuiGrid-spacing-xs-9 > .MuiGrid-item {
  padding: 36px;
}
.MuiGrid-spacing-xs-10 {
  width: calc(100% + 80px);
  margin: -40px;
}
.MuiGrid-spacing-xs-10 > .MuiGrid-item {
  padding: 40px;
}
.MuiGrid-grid-xs-auto {
  flex-grow: 0;
  max-width: none;
  flex-basis: auto;
}
.MuiGrid-grid-xs-true {
  flex-grow: 1;
  max-width: 100%;
  flex-basis: 0;
}
.MuiGrid-grid-xs-1 {
  flex-grow: 0;
  max-width: 8.333333%;
  flex-basis: 8.333333%;
}
.MuiGrid-grid-xs-2 {
  flex-grow: 0;
  max-width: 16.666667%;
  flex-basis: 16.666667%;
}
.MuiGrid-grid-xs-3 {
  flex-grow: 0;
  max-width: 25%;
  flex-basis: 25%;
}
.MuiGrid-grid-xs-4 {
  flex-grow: 0;
  max-width: 33.333333%;
  flex-basis: 33.333333%;
}
.MuiGrid-grid-xs-5 {
  flex-grow: 0;
  max-width: 41.666667%;
  flex-basis: 41.666667%;
}
.MuiGrid-grid-xs-6 {
  flex-grow: 0;
  max-width: 50%;
  flex-basis: 50%;
}
.MuiGrid-grid-xs-7 {
  flex-grow: 0;
  max-width: 58.333333%;
  flex-basis: 58.333333%;
}
.MuiGrid-grid-xs-8 {
  flex-grow: 0;
  max-width: 66.666667%;
  flex-basis: 66.666667%;
}
.MuiGrid-grid-xs-9 {
  flex-grow: 0;
  max-width: 75%;
  flex-basis: 75%;
}
.MuiGrid-grid-xs-10 {
  flex-grow: 0;
  max-width: 83.333333%;
  flex-basis: 83.333333%;
}
.MuiGrid-grid-xs-11 {
  flex-grow: 0;
  max-width: 91.666667%;
  flex-basis: 91.666667%;
}
.MuiGrid-grid-xs-12 {
  flex-grow: 0;
  max-width: 100%;
  flex-basis: 100%;
}
@media (min-width:600px) {
  .MuiGrid-grid-sm-auto {
    flex-grow: 0;
    max-width: none;
    flex-basis: auto;
  }
  .MuiGrid-grid-sm-true {
    flex-grow: 1;
    max-width: 100%;
    flex-basis: 0;
  }
  .MuiGrid-grid-sm-1 {
    flex-grow: 0;
    max-width: 8.333333%;
    flex-basis: 8.333333%;
  }
  .MuiGrid-grid-sm-2 {
    flex-grow: 0;
    max-width: 16.666667%;
    flex-basis: 16.666667%;
  }
  .MuiGrid-grid-sm-3 {
    flex-grow: 0;
    max-width: 25%;
    flex-basis: 25%;
  }
  .MuiGrid-grid-sm-4 {
    flex-grow: 0;
    max-width: 33.333333%;
    flex-basis: 33.333333%;
  }
  .MuiGrid-grid-sm-5 {
    flex-grow: 0;
    max-width: 41.666667%;
    flex-basis: 41.666667%;
  }
  .MuiGrid-grid-sm-6 {
    flex-grow: 0;
    max-width: 50%;
    flex-basis: 50%;
  }
  .MuiGrid-grid-sm-7 {
    flex-grow: 0;
    max-width: 58.333333%;
    flex-basis: 58.333333%;
  }
  .MuiGrid-grid-sm-8 {
    flex-grow: 0;
    max-width: 66.666667%;
    flex-basis: 66.666667%;
  }
  .MuiGrid-grid-sm-9 {
    flex-grow: 0;
    max-width: 75%;
    flex-basis: 75%;
  }
  .MuiGrid-grid-sm-10 {
    flex-grow: 0;
    max-width: 83.333333%;
    flex-basis: 83.333333%;
  }
  .MuiGrid-grid-sm-11 {
    flex-grow: 0;
    max-width: 91.666667%;
    flex-basis: 91.666667%;
  }
  .MuiGrid-grid-sm-12 {
    flex-grow: 0;
    max-width: 100%;
    flex-basis: 100%;
  }
}
@media (min-width:960px) {
  .MuiGrid-grid-md-auto {
    flex-grow: 0;
    max-width: none;
    flex-basis: auto;
  }
  .MuiGrid-grid-md-true {
    flex-grow: 1;
    max-width: 100%;
    flex-basis: 0;
  }
  .MuiGrid-grid-md-1 {
    flex-grow: 0;
    max-width: 8.333333%;
    flex-basis: 8.333333%;
  }
  .MuiGrid-grid-md-2 {
    flex-grow: 0;
    max-width: 16.666667%;
    flex-basis: 16.666667%;
  }
  .MuiGrid-grid-md-3 {
    flex-grow: 0;
    max-width: 25%;
    flex-basis: 25%;
  }
  .MuiGrid-grid-md-4 {
    flex-grow: 0;
    max-width: 33.333333%;
    flex-basis: 33.333333%;
  }
  .MuiGrid-grid-md-5 {
    flex-grow: 0;
    max-width: 41.666667%;
    flex-basis: 41.666667%;
  }
  .MuiGrid-grid-md-6 {
    flex-grow: 0;
    max-width: 50%;
    flex-basis: 50%;
  }
  .MuiGrid-grid-md-7 {
    flex-grow: 0;
    max-width: 58.333333%;
    flex-basis: 58.333333%;
  }
  .MuiGrid-grid-md-8 {
    flex-grow: 0;
    max-width: 66.666667%;
    flex-basis: 66.666667%;
  }
  .MuiGrid-grid-md-9 {
    flex-grow: 0;
    max-width: 75%;
    flex-basis: 75%;
  }
  .MuiGrid-grid-md-10 {
    flex-grow: 0;
    max-width: 83.333333%;
    flex-basis: 83.333333%;
  }
  .MuiGrid-grid-md-11 {
    flex-grow: 0;
    max-width: 91.666667%;
    flex-basis: 91.666667%;
  }
  .MuiGrid-grid-md-12 {
    flex-grow: 0;
    max-width: 100%;
    flex-basis: 100%;
  }
}
@media (min-width:1280px) {
  .MuiGrid-grid-lg-auto {
    flex-grow: 0;
    max-width: none;
    flex-basis: auto;
  }
  .MuiGrid-grid-lg-true {
    flex-grow: 1;
    max-width: 100%;
    flex-basis: 0;
  }
  .MuiGrid-grid-lg-1 {
    flex-grow: 0;
    max-width: 8.333333%;
    flex-basis: 8.333333%;
  }
  .MuiGrid-grid-lg-2 {
    flex-grow: 0;
    max-width: 16.666667%;
    flex-basis: 16.666667%;
  }
  .MuiGrid-grid-lg-3 {
    flex-grow: 0;
    max-width: 25%;
    flex-basis: 25%;
  }
  .MuiGrid-grid-lg-4 {
    flex-grow: 0;
    max-width: 33.333333%;
    flex-basis: 33.333333%;
  }
  .MuiGrid-grid-lg-5 {
    flex-grow: 0;
    max-width: 41.666667%;
    flex-basis: 41.666667%;
  }
  .MuiGrid-grid-lg-6 {
    flex-grow: 0;
    max-width: 50%;
    flex-basis: 50%;
  }
  .MuiGrid-grid-lg-7 {
    flex-grow: 0;
    max-width: 58.333333%;
    flex-basis: 58.333333%;
  }
  .MuiGrid-grid-lg-8 {
    flex-grow: 0;
    max-width: 66.666667%;
    flex-basis: 66.666667%;
  }
  .MuiGrid-grid-lg-9 {
    flex-grow: 0;
    max-width: 75%;
    flex-basis: 75%;
  }
  .MuiGrid-grid-lg-10 {
    flex-grow: 0;
    max-width: 83.333333%;
    flex-basis: 83.333333%;
  }
  .MuiGrid-grid-lg-11 {
    flex-grow: 0;
    max-width: 91.666667%;
    flex-basis: 91.666667%;
  }
  .MuiGrid-grid-lg-12 {
    flex-grow: 0;
    max-width: 100%;
    flex-basis: 100%;
  }
}
@media (min-width:1920px) {
  .MuiGrid-grid-xl-auto {
    flex-grow: 0;
    max-width: none;
    flex-basis: auto;
  }
  .MuiGrid-grid-xl-true {
    flex-grow: 1;
    max-width: 100%;
    flex-basis: 0;
  }
  .MuiGrid-grid-xl-1 {
    flex-grow: 0;
    max-width: 8.333333%;
    flex-basis: 8.333333%;
  }
  .MuiGrid-grid-xl-2 {
    flex-grow: 0;
    max-width: 16.666667%;
    flex-basis: 16.666667%;
  }
  .MuiGrid-grid-xl-3 {
    flex-grow: 0;
    max-width: 25%;
    flex-basis: 25%;
  }
  .MuiGrid-grid-xl-4 {
    flex-grow: 0;
    max-width: 33.333333%;
    flex-basis: 33.333333%;
  }
  .MuiGrid-grid-xl-5 {
    flex-grow: 0;
    max-width: 41.666667%;
    flex-basis: 41.666667%;
  }
  .MuiGrid-grid-xl-6 {
    flex-grow: 0;
    max-width: 50%;
    flex-basis: 50%;
  }
  .MuiGrid-grid-xl-7 {
    flex-grow: 0;
    max-width: 58.333333%;
    flex-basis: 58.333333%;
  }
  .MuiGrid-grid-xl-8 {
    flex-grow: 0;
    max-width: 66.666667%;
    flex-basis: 66.666667%;
  }
  .MuiGrid-grid-xl-9 {
    flex-grow: 0;
    max-width: 75%;
    flex-basis: 75%;
  }
  .MuiGrid-grid-xl-10 {
    flex-grow: 0;
    max-width: 83.333333%;
    flex-basis: 83.333333%;
  }
  .MuiGrid-grid-xl-11 {
    flex-grow: 0;
    max-width: 91.666667%;
    flex-basis: 91.666667%;
  }
  .MuiGrid-grid-xl-12 {
    flex-grow: 0;
    max-width: 100%;
    flex-basis: 100%;
  }
}
</style><style data-jss="" data-meta="MuiTypography">
.MuiTypography-root {
  margin: 0;
}
.MuiTypography-body2 {
  font-size: 0.875rem;
  font-family: Lato;
  font-weight: 400;
  line-height: 1.43;
}
.MuiTypography-body1 {
  font-size: 1rem;
  font-family: Lato;
  font-weight: 400;
  line-height: 1.5;
}
.MuiTypography-caption {
  font-size: 0.75rem;
  font-family: Lato;
  font-weight: 400;
  line-height: 1.66;
}
.MuiTypography-button {
  font-size: 0.875rem;
  font-family: Lato;
  font-weight: 500;
  line-height: 1.75;
  text-transform: uppercase;
}
.MuiTypography-h1 {
  font-size: 3.5rem;
  font-family: Lato;
  font-weight: 300;
  line-height: 1.167;
}
@media (min-width:600px) {
  .MuiTypography-h1 {
    font-size: 4.7129rem;
  }
}
@media (min-width:960px) {
  .MuiTypography-h1 {
    font-size: 5.3556rem;
  }
}
@media (min-width:1280px) {
  .MuiTypography-h1 {
    font-size: 5.9983rem;
  }
}
.MuiTypography-h2 {
  font-size: 2.375rem;
  font-family: Lato;
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width:600px) {
  .MuiTypography-h2 {
    font-size: 2.9167rem;
  }
}
@media (min-width:960px) {
  .MuiTypography-h2 {
    font-size: 3.3333rem;
  }
}
@media (min-width:1280px) {
  .MuiTypography-h2 {
    font-size: 3.75rem;
  }
}
.MuiTypography-h3 {
  font-size: 2rem;
  font-family: Lato;
  font-weight: 400;
  line-height: 1.167;
}
@media (min-width:600px) {
  .MuiTypography-h3 {
    font-size: 2.5707rem;
  }
}
@media (min-width:960px) {
  .MuiTypography-h3 {
    font-size: 2.7849rem;
  }
}
@media (min-width:1280px) {
  .MuiTypography-h3 {
    font-size: 2.9991rem;
  }
}
.MuiTypography-h4 {
  font-size: 1.5625rem;
  font-family: Lato;
  font-weight: 400;
  line-height: 1.235;
}
@media (min-width:600px) {
  .MuiTypography-h4 {
    font-size: 1.8219rem;
  }
}
@media (min-width:960px) {
  .MuiTypography-h4 {
    font-size: 2.0243rem;
  }
}
@media (min-width:1280px) {
  .MuiTypography-h4 {
    font-size: 2.0243rem;
  }
}
.MuiTypography-h5 {
  font-size: 1.25rem;
  font-family: Lato;
  font-weight: 400;
  line-height: 1.334;
}
@media (min-width:600px) {
  .MuiTypography-h5 {
    font-size: 1.3118rem;
  }
}
@media (min-width:960px) {
  .MuiTypography-h5 {
    font-size: 1.4993rem;
  }
}
@media (min-width:1280px) {
  .MuiTypography-h5 {
    font-size: 1.4993rem;
  }
}
.MuiTypography-h6 {
  font-size: 1.125rem;
  font-family: Lato;
  font-weight: 500;
  line-height: 1.6;
}
@media (min-width:600px) {
  .MuiTypography-h6 {
    font-size: 1.25rem;
  }
}
@media (min-width:960px) {
  .MuiTypography-h6 {
    font-size: 1.25rem;
  }
}
@media (min-width:1280px) {
  .MuiTypography-h6 {
    font-size: 1.25rem;
  }
}
.MuiTypography-subtitle1 {
  font-size: 1rem;
  font-family: Lato;
  font-weight: 400;
  line-height: 1.75;
}
.MuiTypography-subtitle2 {
  font-size: 0.875rem;
  font-family: Lato;
  font-weight: 500;
  line-height: 1.57;
}
.MuiTypography-overline {
  font-size: 0.75rem;
  font-family: Lato;
  font-weight: 400;
  line-height: 2.66;
  text-transform: uppercase;
}
.MuiTypography-srOnly {
  width: 1px;
  height: 1px;
  overflow: hidden;
  position: absolute;
}
.MuiTypography-alignLeft {
  text-align: left;
}
.MuiTypography-alignCenter {
  text-align: center;
}
.MuiTypography-alignRight {
  text-align: right;
}
.MuiTypography-alignJustify {
  text-align: justify;
}
.MuiTypography-noWrap {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.MuiTypography-gutterBottom {
  margin-bottom: 0.35em;
}
.MuiTypography-paragraph {
  margin-bottom: 16px;
}
.MuiTypography-colorInherit {
  color: inherit;
}
.MuiTypography-colorPrimary {
  color: #fff;
}
.MuiTypography-colorSecondary {
  color: rgba(233, 30, 99, 1);
}
.MuiTypography-colorTextPrimary {
  color: #fff;
}
.MuiTypography-colorTextSecondary {
  color: rgba(255, 255, 255, 0.7);
}
.MuiTypography-colorError {
  color: #f44336;
}
.MuiTypography-displayInline {
  display: inline;
}
.MuiTypography-displayBlock {
  display: block;
}
</style><style data-jss="" data-meta="makeStyles">
.jss153 {
  color: white;
  background: #000000;
  margin-top: 60px;
  padding-top: 60px;
  padding-bottom: 20px;
}
.jss154 {
  text-decoration: none;
}
.jss155 {
  color: #adb5bd;
  text-align: center;
}
.jss156 {
  color: #FFF;
}
</style><style data-jss="" data-meta="MuiTouchRipple">
.MuiTouchRipple-root {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
}
.MuiTouchRipple-ripple {
  opacity: 0;
  position: absolute;
}
.MuiTouchRipple-rippleVisible {
  opacity: 0.3;
  animation: MuiTouchRipple-keyframes-enter 550ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: scale(1);
}
.MuiTouchRipple-ripplePulsate {
  animation-duration: 200ms;
}
.MuiTouchRipple-child {
  width: 100%;
  height: 100%;
  display: block;
  opacity: 1;
  border-radius: 50%;
  background-color: currentColor;
}
.MuiTouchRipple-childLeaving {
  opacity: 0;
  animation: MuiTouchRipple-keyframes-exit 550ms cubic-bezier(0.4, 0, 0.2, 1);
}
.MuiTouchRipple-childPulsate {
  top: 0;
  left: 0;
  position: absolute;
  animation: MuiTouchRipple-keyframes-pulsate 2500ms cubic-bezier(0.4, 0, 0.2, 1) 200ms infinite;
}
@-webkit-keyframes MuiTouchRipple-keyframes-enter {
  0% {
    opacity: 0.1;
    transform: scale(0);
  }
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
}
@-webkit-keyframes MuiTouchRipple-keyframes-exit {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-webkit-keyframes MuiTouchRipple-keyframes-pulsate {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.92);
  }
  100% {
    transform: scale(1);
  }
}
</style><style data-jss="" data-meta="MuiButtonBase">
.MuiButtonBase-root {
  color: inherit;
  border: 0;
  cursor: pointer;
  margin: 0;
  display: inline-flex;
  outline: 0;
  padding: 0;
  position: relative;
  align-items: center;
  user-select: none;
  border-radius: 0;
  vertical-align: middle;
  -moz-appearance: none;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
}
.MuiButtonBase-root::-moz-focus-inner {
  border-style: none;
}
.MuiButtonBase-root.Mui-disabled {
  cursor: default;
  pointer-events: none;
}
@media print {
  .MuiButtonBase-root {
    -webkit-print-color-adjust: exact;
  }
}
</style><style data-jss="" data-meta="MuiButton">
.MuiButton-root {
  color: #fff;
  padding: 6px 16px;
  font-size: 0.875rem;
  min-width: 64px;
  box-sizing: border-box;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-family: Lato;
  font-weight: 500;
  line-height: 1.75;
  border-radius: 4px;
  text-transform: uppercase;
}
.MuiButton-root:hover {
  text-decoration: none;
  background-color: rgba(255, 255, 255, 0.08);
}
.MuiButton-root.Mui-disabled {
  color: rgba(255, 255, 255, 0.3);
}
@media (hover: none) {
  .MuiButton-root:hover {
    background-color: transparent;
  }
}
.MuiButton-root:hover.Mui-disabled {
  background-color: transparent;
}
.MuiButton-label {
  width: 100%;
  display: inherit;
  align-items: inherit;
  justify-content: inherit;
}
.MuiButton-text {
  padding: 6px 8px;
}
.MuiButton-textPrimary {
  color: #fff;
}
.MuiButton-textPrimary:hover {
  background-color: rgba(255, 255, 255, 0.08);
}
@media (hover: none) {
  .MuiButton-textPrimary:hover {
    background-color: transparent;
  }
}
.MuiButton-textSecondary {
  color: rgba(233, 30, 99, 1);
}
.MuiButton-textSecondary:hover {
  background-color: rgba(233, 30, 99, 0.08);
}
@media (hover: none) {
  .MuiButton-textSecondary:hover {
    background-color: transparent;
  }
}
.MuiButton-outlined {
  border: 1px solid rgba(255, 255, 255, 0.23);
  padding: 5px 15px;
}
.MuiButton-outlined.Mui-disabled {
  border: 1px solid rgba(255, 255, 255, 0.12);
}
.MuiButton-outlinedPrimary {
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.5);
}
.MuiButton-outlinedPrimary:hover {
  border: 1px solid #fff;
  background-color: rgba(255, 255, 255, 0.08);
}
@media (hover: none) {
  .MuiButton-outlinedPrimary:hover {
    background-color: transparent;
  }
}
.MuiButton-outlinedSecondary {
  color: rgba(233, 30, 99, 1);
  border: 1px solid rgba(233, 30, 99, 0.5);
}
.MuiButton-outlinedSecondary:hover {
  border: 1px solid rgba(233, 30, 99, 1);
  background-color: rgba(233, 30, 99, 0.08);
}
.MuiButton-outlinedSecondary.Mui-disabled {
  border: 1px solid rgba(255, 255, 255, 0.3);
}
@media (hover: none) {
  .MuiButton-outlinedSecondary:hover {
    background-color: transparent;
  }
}
.MuiButton-contained {
  color: rgba(0, 0, 0, 0.87);
  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);
  background-color: #e0e0e0;
}
.MuiButton-contained:hover {
  box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);
  background-color: #d5d5d5;
}
.MuiButton-contained.Mui-focusVisible {
  box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12);
}
.MuiButton-contained:active {
  box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12);
}
.MuiButton-contained.Mui-disabled {
  color: rgba(255, 255, 255, 0.3);
  box-shadow: none;
  background-color: rgba(255, 255, 255, 0.12);
}
@media (hover: none) {
  .MuiButton-contained:hover {
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);
    background-color: #e0e0e0;
  }
}
.MuiButton-contained:hover.Mui-disabled {
  background-color: rgba(255, 255, 255, 0.12);
}
.MuiButton-containedPrimary {
  color: rgba(0, 0, 0, 0.87);
  background-color: #fff;
}
.MuiButton-containedPrimary:hover {
  background-color: #3845a8;
}
@media (hover: none) {
  .MuiButton-containedPrimary:hover {
    background-color: #fff;
  }
}
.MuiButton-containedSecondary {
  color: white;
  background-color: rgba(233, 30, 99, 1);
}
.MuiButton-containedSecondary:hover {
  background-color: rgba(163, 21, 69, 1);
}
@media (hover: none) {
  .MuiButton-containedSecondary:hover {
    background-color: rgba(233, 30, 99, 1);
  }
}
.MuiButton-disableElevation {
  box-shadow: none;
}
.MuiButton-disableElevation:hover {
  box-shadow: none;
}
.MuiButton-disableElevation.Mui-focusVisible {
  box-shadow: none;
}
.MuiButton-disableElevation:active {
  box-shadow: none;
}
.MuiButton-disableElevation.Mui-disabled {
  box-shadow: none;
}
.MuiButton-colorInherit {
  color: inherit;
  border-color: currentColor;
}
.MuiButton-textSizeSmall {
  padding: 4px 5px;
  font-size: 0.8125rem;
}
.MuiButton-textSizeLarge {
  padding: 8px 11px;
  font-size: 0.9375rem;
}
.MuiButton-outlinedSizeSmall {
  padding: 3px 9px;
  font-size: 0.8125rem;
}
.MuiButton-outlinedSizeLarge {
  padding: 7px 21px;
  font-size: 0.9375rem;
}
.MuiButton-containedSizeSmall {
  padding: 4px 10px;
  font-size: 0.8125rem;
}
.MuiButton-containedSizeLarge {
  padding: 8px 22px;
  font-size: 0.9375rem;
}
.MuiButton-fullWidth {
  width: 100%;
}
.MuiButton-startIcon {
  display: inherit;
  margin-left: -4px;
  margin-right: 8px;
}
.MuiButton-startIcon.MuiButton-iconSizeSmall {
  margin-left: -2px;
}
.MuiButton-endIcon {
  display: inherit;
  margin-left: 8px;
  margin-right: -4px;
}
.MuiButton-endIcon.MuiButton-iconSizeSmall {
  margin-right: -2px;
}
.MuiButton-iconSizeSmall > *:first-child {
  font-size: 18px;
}
.MuiButton-iconSizeMedium > *:first-child {
  font-size: 20px;
}
.MuiButton-iconSizeLarge > *:first-child {
  font-size: 22px;
}
</style><style data-jss="" data-meta="MuiSvgIcon">
.MuiSvgIcon-root {
  fill: currentColor;
  width: 1em;
  height: 1em;
  display: inline-block;
  font-size: 1.5rem;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  flex-shrink: 0;
  user-select: none;
}
.MuiSvgIcon-colorPrimary {
  color: #fff;
}
.MuiSvgIcon-colorSecondary {
  color: rgba(233, 30, 99, 1);
}
.MuiSvgIcon-colorAction {
  color: #fff;
}
.MuiSvgIcon-colorError {
  color: #f44336;
}
.MuiSvgIcon-colorDisabled {
  color: rgba(255, 255, 255, 0.3);
}
.MuiSvgIcon-fontSizeInherit {
  font-size: inherit;
}
.MuiSvgIcon-fontSizeSmall {
  font-size: 1.25rem;
}
.MuiSvgIcon-fontSizeLarge {
  font-size: 2.1875rem;
}
</style><style data-jss="" data-meta="MuiIconButton">
.MuiIconButton-root {
  flex: 0 0 auto;
  color: #fff;
  padding: 12px;
  overflow: visible;
  font-size: 1.5rem;
  text-align: center;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 50%;
}
.MuiIconButton-root:hover {
  background-color: rgba(255, 255, 255, 0.08);
}
.MuiIconButton-root.Mui-disabled {
  color: rgba(255, 255, 255, 0.3);
  background-color: transparent;
}
@media (hover: none) {
  .MuiIconButton-root:hover {
    background-color: transparent;
  }
}
.MuiIconButton-edgeStart {
  margin-left: -12px;
}
.MuiIconButton-sizeSmall.MuiIconButton-edgeStart {
  margin-left: -3px;
}
.MuiIconButton-edgeEnd {
  margin-right: -12px;
}
.MuiIconButton-sizeSmall.MuiIconButton-edgeEnd {
  margin-right: -3px;
}
.MuiIconButton-colorInherit {
  color: inherit;
}
.MuiIconButton-colorPrimary {
  color: #fff;
}
.MuiIconButton-colorPrimary:hover {
  background-color: rgba(255, 255, 255, 0.08);
}
@media (hover: none) {
  .MuiIconButton-colorPrimary:hover {
    background-color: transparent;
  }
}
.MuiIconButton-colorSecondary {
  color: rgba(233, 30, 99, 1);
}
.MuiIconButton-colorSecondary:hover {
  background-color: rgba(233, 30, 99, 0.08);
}
@media (hover: none) {
  .MuiIconButton-colorSecondary:hover {
    background-color: transparent;
  }
}
.MuiIconButton-sizeSmall {
  padding: 3px;
  font-size: 1.125rem;
}
.MuiIconButton-label {
  width: 100%;
  display: flex;
  align-items: inherit;
  justify-content: inherit;
}
</style><style data-jss="" data-meta="MuiAvatar">
.MuiAvatar-root {
  width: 40px;
  height: 40px;
  display: flex;
  overflow: hidden;
  position: relative;
  font-size: 1.25rem;
  align-items: center;
  flex-shrink: 0;
  font-family: Lato;
  line-height: 1;
  user-select: none;
  border-radius: 50%;
  justify-content: center;
}
.MuiAvatar-colorDefault {
  color: #121212;
  background-color: #757575;
}
.MuiAvatar-rounded {
  border-radius: 4px;
}
.MuiAvatar-square {
  border-radius: 0;
}
.MuiAvatar-img {
  color: transparent;
  width: 100%;
  height: 100%;
  object-fit: cover;
  text-align: center;
  text-indent: 10000px;
}
.MuiAvatar-fallback {
  width: 75%;
  height: 75%;
}
</style><style data-jss="" data-meta="MuiPaper">
.MuiPaper-root {
  color: #fff;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: #121212;
}
.MuiPaper-rounded {
  border-radius: 4px;
}
.MuiPaper-outlined {
  border: 1px solid rgba(255, 255, 255, 0.12);
}
.MuiPaper-elevation0 {
  box-shadow: none;
}
.MuiPaper-elevation1 {
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);
}
.MuiPaper-elevation2 {
  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);
}
.MuiPaper-elevation3 {
  box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12);
}
.MuiPaper-elevation4 {
  box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);
}
.MuiPaper-elevation5 {
  box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12);
}
.MuiPaper-elevation6 {
  box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12);
}
.MuiPaper-elevation7 {
  box-shadow: 0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12);
}
.MuiPaper-elevation8 {
  box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12);
}
.MuiPaper-elevation9 {
  box-shadow: 0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12);
}
.MuiPaper-elevation10 {
  box-shadow: 0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12);
}
.MuiPaper-elevation11 {
  box-shadow: 0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12);
}
.MuiPaper-elevation12 {
  box-shadow: 0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12);
}
.MuiPaper-elevation13 {
  box-shadow: 0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12);
}
.MuiPaper-elevation14 {
  box-shadow: 0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12);
}
.MuiPaper-elevation15 {
  box-shadow: 0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12);
}
.MuiPaper-elevation16 {
  box-shadow: 0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12);
}
.MuiPaper-elevation17 {
  box-shadow: 0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12);
}
.MuiPaper-elevation18 {
  box-shadow: 0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12);
}
.MuiPaper-elevation19 {
  box-shadow: 0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12);
}
.MuiPaper-elevation20 {
  box-shadow: 0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12);
}
.MuiPaper-elevation21 {
  box-shadow: 0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12);
}
.MuiPaper-elevation22 {
  box-shadow: 0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12);
}
.MuiPaper-elevation23 {
  box-shadow: 0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12);
}
.MuiPaper-elevation24 {
  box-shadow: 0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12);
}
</style><style data-jss="" data-meta="MuiInputBase">
@-webkit-keyframes mui-auto-fill {}
@-webkit-keyframes mui-auto-fill-cancel {}
.MuiInputBase-root {
  color: #fff;
  cursor: text;
  display: inline-flex;
  position: relative;
  font-size: 1rem;
  box-sizing: border-box;
  align-items: center;
  font-family: Lato;
  font-weight: 400;
  line-height: 1.1876em;
}
.MuiInputBase-root.Mui-disabled {
  color: rgba(255, 255, 255, 0.5);
  cursor: default;
}
.MuiInputBase-multiline {
  padding: 6px 0 7px;
}
.MuiInputBase-multiline.MuiInputBase-marginDense {
  padding-top: 3px;
}
.MuiInputBase-fullWidth {
  width: 100%;
}
.MuiInputBase-input {
  font: inherit;
  color: currentColor;
  width: 100%;
  border: 0;
  height: 1.1876em;
  margin: 0;
  display: block;
  padding: 6px 0 7px;
  min-width: 0;
  background: none;
  box-sizing: content-box;
  animation-name: mui-auto-fill-cancel;
  letter-spacing: inherit;
  animation-duration: 10ms;
  -webkit-tap-highlight-color: transparent;
}
.MuiInputBase-input::-webkit-input-placeholder {
  color: currentColor;
  opacity: 0.5;
  transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
.MuiInputBase-input::-moz-placeholder {
  color: currentColor;
  opacity: 0.5;
  transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
.MuiInputBase-input:-ms-input-placeholder {
  color: currentColor;
  opacity: 0.5;
  transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
.MuiInputBase-input::-ms-input-placeholder {
  color: currentColor;
  opacity: 0.5;
  transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
.MuiInputBase-input:focus {
  outline: 0;
}
.MuiInputBase-input:invalid {
  box-shadow: none;
}
.MuiInputBase-input::-webkit-search-decoration {
  -webkit-appearance: none;
}
.MuiInputBase-input.Mui-disabled {
  opacity: 1;
}
.MuiInputBase-input:-webkit-autofill {
  animation-name: mui-auto-fill;
  animation-duration: 5000s;
}
label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input::-webkit-input-placeholder {
  opacity: 0 !important;
}
label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input::-moz-placeholder {
  opacity: 0 !important;
}
label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:-ms-input-placeholder {
  opacity: 0 !important;
}
label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input::-ms-input-placeholder {
  opacity: 0 !important;
}
label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:focus::-webkit-input-placeholder {
  opacity: 0.5;
}
label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:focus::-moz-placeholder {
  opacity: 0.5;
}
label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:focus:-ms-input-placeholder {
  opacity: 0.5;
}
label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:focus::-ms-input-placeholder {
  opacity: 0.5;
}
.MuiInputBase-inputMarginDense {
  padding-top: 3px;
}
.MuiInputBase-inputMultiline {
  height: auto;
  resize: none;
  padding: 0;
}
.MuiInputBase-inputTypeSearch {
  -moz-appearance: textfield;
  -webkit-appearance: textfield;
}
</style><style data-jss="" data-meta="PrivateNotchedOutline">
.jss104 {
  top: -5px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0 8px;
  overflow: hidden;
  position: absolute;
  border-style: solid;
  border-width: 1px;
  border-radius: inherit;
  pointer-events: none;
}
.jss105 {
  padding: 0;
  text-align: left;
  transition: width 150ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
  line-height: 11px;
}
.jss106 {
  width: auto;
  height: 11px;
  display: block;
  padding: 0;
  font-size: 0.75em;
  max-width: 0.01px;
  text-align: left;
  transition: max-width 50ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
  visibility: hidden;
}
.jss106 > span {
  display: inline-block;
  padding-left: 5px;
  padding-right: 5px;
}
.jss107 {
  max-width: 1000px;
  transition: max-width 100ms cubic-bezier(0.0, 0, 0.2, 1) 50ms;
}
</style><style data-jss="" data-meta="MuiOutlinedInput">
.MuiOutlinedInput-root {
  position: relative;
  border-radius: 4px;
}
.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
  border-color: #fff;
}
@media (hover: none) {
  .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: rgba(255, 255, 255, 0.23);
  }
}
.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
  border-color: #fff;
  border-width: 2px;
}
.MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {
  border-color: #f44336;
}
.MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline {
  border-color: rgba(255, 255, 255, 0.3);
}
.MuiOutlinedInput-colorSecondary.Mui-focused .MuiOutlinedInput-notchedOutline {
  border-color: rgba(233, 30, 99, 1);
}
.MuiOutlinedInput-adornedStart {
  padding-left: 14px;
}
.MuiOutlinedInput-adornedEnd {
  padding-right: 14px;
}
.MuiOutlinedInput-multiline {
  padding: 18.5px 14px;
}
.MuiOutlinedInput-multiline.MuiOutlinedInput-marginDense {
  padding-top: 10.5px;
  padding-bottom: 10.5px;
}
.MuiOutlinedInput-notchedOutline {
  border-color: rgba(255, 255, 255, 0.23);
}
.MuiOutlinedInput-input {
  padding: 18.5px 14px;
}
.MuiOutlinedInput-input:-webkit-autofill {
  caret-color: #fff;
  border-radius: inherit;
  -webkit-box-shadow: 0 0 0 100px #266798 inset;
  -webkit-text-fill-color: #fff;
}
.MuiOutlinedInput-inputMarginDense {
  padding-top: 10.5px;
  padding-bottom: 10.5px;
}
.MuiOutlinedInput-inputMultiline {
  padding: 0;
}
.MuiOutlinedInput-inputAdornedStart {
  padding-left: 0;
}
.MuiOutlinedInput-inputAdornedEnd {
  padding-right: 0;
}
</style><style data-jss="" data-meta="MuiFormLabel">
.MuiFormLabel-root {
  color: rgba(255, 255, 255, 0.7);
  padding: 0;
  font-size: 1rem;
  font-family: Lato;
  font-weight: 400;
  line-height: 1;
}
.MuiFormLabel-root.Mui-focused {
  color: #fff;
}
.MuiFormLabel-root.Mui-disabled {
  color: rgba(255, 255, 255, 0.5);
}
.MuiFormLabel-root.Mui-error {
  color: #f44336;
}
.MuiFormLabel-colorSecondary.Mui-focused {
  color: rgba(233, 30, 99, 1);
}
.MuiFormLabel-asterisk.Mui-error {
  color: #f44336;
}
</style><style data-jss="" data-meta="MuiInputLabel">
.MuiInputLabel-root {
  display: block;
  transform-origin: top left;
}
.MuiInputLabel-formControl {
  top: 0;
  left: 0;
  position: absolute;
  transform: translate(0, 24px) scale(1);
}
.MuiInputLabel-marginDense {
  transform: translate(0, 21px) scale(1);
}
.MuiInputLabel-shrink {
  transform: translate(0, 1.5px) scale(0.75);
  transform-origin: top left;
}
.MuiInputLabel-animated {
  transition: color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
}
.MuiInputLabel-filled {
  z-index: 1;
  transform: translate(12px, 20px) scale(1);
  pointer-events: none;
}
.MuiInputLabel-filled.MuiInputLabel-marginDense {
  transform: translate(12px, 17px) scale(1);
}
.MuiInputLabel-filled.MuiInputLabel-shrink {
  transform: translate(12px, 10px) scale(0.75);
}
.MuiInputLabel-filled.MuiInputLabel-shrink.MuiInputLabel-marginDense {
  transform: translate(12px, 7px) scale(0.75);
}
.MuiInputLabel-outlined {
  z-index: 1;
  transform: translate(14px, 20px) scale(1);
  pointer-events: none;
}
.MuiInputLabel-outlined.MuiInputLabel-marginDense {
  transform: translate(14px, 12px) scale(1);
}
.MuiInputLabel-outlined.MuiInputLabel-shrink {
  transform: translate(14px, -6px) scale(0.75);
}
</style><style data-jss="" data-meta="MuiFormControl">
.MuiFormControl-root {
  border: 0;
  margin: 0;
  display: inline-flex;
  padding: 0;
  position: relative;
  min-width: 0;
  flex-direction: column;
  vertical-align: top;
}
.MuiFormControl-marginNormal {
  margin-top: 16px;
  margin-bottom: 8px;
}
.MuiFormControl-marginDense {
  margin-top: 8px;
  margin-bottom: 4px;
}
.MuiFormControl-fullWidth {
  width: 100%;
}
</style><style data-jss="" data-meta="MuiPopover">
.MuiPopover-paper {
  outline: 0;
  position: absolute;
  max-width: calc(100% - 32px);
  min-width: 16px;
  max-height: calc(100% - 32px);
  min-height: 16px;
  overflow-x: hidden;
  overflow-y: auto;
}
</style><style data-jss="" data-meta="MuiMenu">
.MuiMenu-paper {
  max-height: calc(100% - 96px);
  -webkit-overflow-scrolling: touch;
}
.MuiMenu-list {
  outline: 0;
}
</style><style data-jss="" data-meta="MuiTextField">

</style><style data-jss="" data-meta="MuiAppBar">
.MuiAppBar-root {
  width: 100%;
  display: flex;
  z-index: 1200;
  box-sizing: border-box;
  flex-shrink: 0;
  flex-direction: column;
}
.MuiAppBar-positionFixed {
  top: 0;
  left: auto;
  right: 0;
  position: fixed;
}
@media print {
  .MuiAppBar-positionFixed {
    position: absolute;
  }
}
.MuiAppBar-positionAbsolute {
  top: 0;
  left: auto;
  right: 0;
  position: absolute;
}
.MuiAppBar-positionSticky {
  top: 0;
  left: auto;
  right: 0;
  position: sticky;
}
.MuiAppBar-positionStatic {
  position: static;
}
.MuiAppBar-positionRelative {
  position: relative;
}
.MuiAppBar-colorDefault {
  color: #fff;
  background-color: #212121;
}
.MuiAppBar-colorPrimary {
  color: rgba(0, 0, 0, 0.87);
  background-color: #fff;
}
.MuiAppBar-colorSecondary {
  color: rgba(0, 0, 0, 0.87);
  background-color: rgba(233, 30, 99, 1);
}
.MuiAppBar-colorInherit {
  color: inherit;
}
.MuiAppBar-colorTransparent {
  color: inherit;
  background-color: transparent;
}
</style><style data-jss="" data-meta="MuiBackdrop">
.MuiBackdrop-root {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  z-index: -1;
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
}
.MuiBackdrop-invisible {
  background-color: transparent;
}
</style><style data-jss="" data-meta="MuiDialog">
@media print {
  .MuiDialog-root {
    position: absolute !important;
  }
}
.MuiDialog-scrollPaper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.MuiDialog-scrollBody {
  overflow-x: hidden;
  overflow-y: auto;
  text-align: center;
}
.MuiDialog-scrollBody:after {
  width: 0;
  height: 100%;
  content: "";
  display: inline-block;
  vertical-align: middle;
}
.MuiDialog-container {
  height: 100%;
  outline: 0;
}
@media print {
  .MuiDialog-container {
    height: auto;
  }
}
.MuiDialog-paper {
  margin: 32px;
  position: relative;
  overflow-y: auto;
}
@media print {
  .MuiDialog-paper {
    box-shadow: none;
    overflow-y: visible;
  }
}
.MuiDialog-paperScrollPaper {
  display: flex;
  max-height: calc(100% - 64px);
  flex-direction: column;
}
.MuiDialog-paperScrollBody {
  display: inline-block;
  text-align: left;
  vertical-align: middle;
}
.MuiDialog-paperWidthFalse {
  max-width: calc(100% - 64px);
}
.MuiDialog-paperWidthXs {
  max-width: 444px;
}
@media (max-width:507.95px) {
  .MuiDialog-paperWidthXs.MuiDialog-paperScrollBody {
    max-width: calc(100% - 64px);
  }
}
.MuiDialog-paperWidthSm {
  max-width: 600px;
}
@media (max-width:663.95px) {
  .MuiDialog-paperWidthSm.MuiDialog-paperScrollBody {
    max-width: calc(100% - 64px);
  }
}
.MuiDialog-paperWidthMd {
  max-width: 960px;
}
@media (max-width:1023.95px) {
  .MuiDialog-paperWidthMd.MuiDialog-paperScrollBody {
    max-width: calc(100% - 64px);
  }
}
.MuiDialog-paperWidthLg {
  max-width: 1280px;
}
@media (max-width:1343.95px) {
  .MuiDialog-paperWidthLg.MuiDialog-paperScrollBody {
    max-width: calc(100% - 64px);
  }
}
.MuiDialog-paperWidthXl {
  max-width: 1920px;
}
@media (max-width:1983.95px) {
  .MuiDialog-paperWidthXl.MuiDialog-paperScrollBody {
    max-width: calc(100% - 64px);
  }
}
.MuiDialog-paperFullWidth {
  width: calc(100% - 64px);
}
.MuiDialog-paperFullScreen {
  width: 100%;
  height: 100%;
  margin: 0;
  max-width: 100%;
  max-height: none;
  border-radius: 0;
}
.MuiDialog-paperFullScreen.MuiDialog-paperScrollBody {
  margin: 0;
  max-width: 100%;
}
</style><style data-jss="" data-meta="MuiDialogContent">
.MuiDialogContent-root {
  flex: 1 1 auto;
  padding: 8px 24px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
.MuiDialogContent-root:first-child {
  padding-top: 20px;
}
.MuiDialogContent-dividers {
  padding: 16px 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}
</style><style data-jss="" data-meta="MuiDrawer">
.MuiDrawer-docked {
  flex: 0 0 auto;
}
.MuiDrawer-paper {
  top: 0;
  flex: 1 0 auto;
  height: 100%;
  display: flex;
  outline: 0;
  z-index: 1100;
  position: fixed;
  overflow-y: auto;
  flex-direction: column;
  -webkit-overflow-scrolling: touch;
}
.MuiDrawer-paperAnchorLeft {
  left: 0;
  right: auto;
}
.MuiDrawer-paperAnchorRight {
  left: auto;
  right: 0;
}
.MuiDrawer-paperAnchorTop {
  top: 0;
  left: 0;
  right: 0;
  bottom: auto;
  height: auto;
  max-height: 100%;
}
.MuiDrawer-paperAnchorBottom {
  top: auto;
  left: 0;
  right: 0;
  bottom: 0;
  height: auto;
  max-height: 100%;
}
.MuiDrawer-paperAnchorDockedLeft {
  border-right: 1px solid rgba(255, 255, 255, 0.12);
}
.MuiDrawer-paperAnchorDockedTop {
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}
.MuiDrawer-paperAnchorDockedRight {
  border-left: 1px solid rgba(255, 255, 255, 0.12);
}
.MuiDrawer-paperAnchorDockedBottom {
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}
</style><style data-jss="" data-meta="MuiToolbar">
.MuiToolbar-root {
  display: flex;
  position: relative;
  align-items: center;
}
.MuiToolbar-gutters {
  padding-left: 16px;
  padding-right: 16px;
}
@media (min-width:600px) {
  .MuiToolbar-gutters {
    padding-left: 24px;
    padding-right: 24px;
  }
}
.MuiToolbar-regular {
  min-height: 56px;
}
@media (min-width:0px) and (orientation: landscape) {
  .MuiToolbar-regular {
    min-height: 48px;
  }
}
@media (min-width:600px) {
  .MuiToolbar-regular {
    min-height: 64px;
  }
}
.MuiToolbar-dense {
  min-height: 48px;
}
</style><style data-jss="" data-meta="MuiTooltip">
.MuiTooltip-popper {
  z-index: 1500;
  pointer-events: none;
}
.MuiTooltip-popperInteractive {
  pointer-events: auto;
}
.MuiTooltip-popperArrow[x-placement*="bottom"] .MuiTooltip-arrow {
  top: 0;
  left: 0;
  margin-top: -0.71em;
  margin-left: 4px;
  margin-right: 4px;
}
.MuiTooltip-popperArrow[x-placement*="top"] .MuiTooltip-arrow {
  left: 0;
  bottom: 0;
  margin-left: 4px;
  margin-right: 4px;
  margin-bottom: -0.71em;
}
.MuiTooltip-popperArrow[x-placement*="right"] .MuiTooltip-arrow {
  left: 0;
  width: 0.71em;
  height: 1em;
  margin-top: 4px;
  margin-left: -0.71em;
  margin-bottom: 4px;
}
.MuiTooltip-popperArrow[x-placement*="left"] .MuiTooltip-arrow {
  right: 0;
  width: 0.71em;
  height: 1em;
  margin-top: 4px;
  margin-right: -0.71em;
  margin-bottom: 4px;
}
.MuiTooltip-popperArrow[x-placement*="left"] .MuiTooltip-arrow::before {
  transform-origin: 0 0;
}
.MuiTooltip-popperArrow[x-placement*="right"] .MuiTooltip-arrow::before {
  transform-origin: 100% 100%;
}
.MuiTooltip-popperArrow[x-placement*="top"] .MuiTooltip-arrow::before {
  transform-origin: 100% 0;
}
.MuiTooltip-popperArrow[x-placement*="bottom"] .MuiTooltip-arrow::before {
  transform-origin: 0 100%;
}
.MuiTooltip-tooltip {
  color: #fff;
  padding: 4px 8px;
  font-size: 0.625rem;
  max-width: 300px;
  word-wrap: break-word;
  font-family: Lato;
  font-weight: 500;
  line-height: 1.4em;
  border-radius: 4px;
  background-color: rgba(97, 97, 97, 0.9);
}
.MuiTooltip-tooltipArrow {
  margin: 0;
  position: relative;
}
.MuiTooltip-arrow {
  color: rgba(97, 97, 97, 0.9);
  width: 1em;
  height: 0.71em;
  overflow: hidden;
  position: absolute;
  box-sizing: border-box;
}
.MuiTooltip-arrow::before {
  width: 100%;
  height: 100%;
  margin: auto;
  content: "";
  display: block;
  transform: rotate(45deg);
  background-color: currentColor;
}
.MuiTooltip-touch {
  padding: 8px 16px;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.14286em;
}
.MuiTooltip-tooltipPlacementLeft {
  margin: 0 24px ;
  transform-origin: right center;
}
@media (min-width:600px) {
  .MuiTooltip-tooltipPlacementLeft {
    margin: 0 14px;
  }
}
.MuiTooltip-tooltipPlacementRight {
  margin: 0 24px;
  transform-origin: left center;
}
@media (min-width:600px) {
  .MuiTooltip-tooltipPlacementRight {
    margin: 0 14px;
  }
}
.MuiTooltip-tooltipPlacementTop {
  margin: 24px 0;
  transform-origin: center bottom;
}
@media (min-width:600px) {
  .MuiTooltip-tooltipPlacementTop {
    margin: 14px 0;
  }
}
.MuiTooltip-tooltipPlacementBottom {
  margin: 24px 0;
  transform-origin: center top;
}
@media (min-width:600px) {
  .MuiTooltip-tooltipPlacementBottom {
    margin: 14px 0;
  }
}
</style><style data-jss="" data-meta="MuiSnackbar">
.MuiSnackbar-root {
  left: 8px;
  right: 8px;
  display: flex;
  z-index: 1400;
  position: fixed;
  align-items: center;
  justify-content: center;
}
.MuiSnackbar-anchorOriginTopCenter {
  top: 8px;
}
@media (min-width:600px) {
  .MuiSnackbar-anchorOriginTopCenter {
    top: 24px;
    left: 50%;
    right: auto;
    transform: translateX(-50%);
  }
}
.MuiSnackbar-anchorOriginBottomCenter {
  bottom: 8px;
}
@media (min-width:600px) {
  .MuiSnackbar-anchorOriginBottomCenter {
    left: 50%;
    right: auto;
    bottom: 24px;
    transform: translateX(-50%);
  }
}
.MuiSnackbar-anchorOriginTopRight {
  top: 8px;
  justify-content: flex-end;
}
@media (min-width:600px) {
  .MuiSnackbar-anchorOriginTopRight {
    top: 24px;
    left: auto;
    right: 24px;
  }
}
.MuiSnackbar-anchorOriginBottomRight {
  bottom: 8px;
  justify-content: flex-end;
}
@media (min-width:600px) {
  .MuiSnackbar-anchorOriginBottomRight {
    left: auto;
    right: 24px;
    bottom: 24px;
  }
}
.MuiSnackbar-anchorOriginTopLeft {
  top: 8px;
  justify-content: flex-start;
}
@media (min-width:600px) {
  .MuiSnackbar-anchorOriginTopLeft {
    top: 24px;
    left: 24px;
    right: auto;
  }
}
.MuiSnackbar-anchorOriginBottomLeft {
  bottom: 8px;
  justify-content: flex-start;
}
@media (min-width:600px) {
  .MuiSnackbar-anchorOriginBottomLeft {
    left: 24px;
    right: auto;
    bottom: 24px;
  }
}
</style><style data-jss="" data-meta="makeStyles">
.jss99 {
  display: flex;
  align-items: center;
  padding-top: 8px;
  flex-direction: column;
  padding-bottom: 8px;
}
.jss100 {
  padding-top: 32px;
}
.jss101 {
  width: 100%;
  min-width: 320px;
  padding-top: 48px;
}
.jss102 {
  width: 304px;
  margin: 8px;
}
.jss103 {
  cursor: pointer;
  text-decoration: underline;
}
</style><style data-jss="" data-meta="MuiBadge">
.MuiBadge-root {
  display: inline-flex;
  position: relative;
  flex-shrink: 0;
  vertical-align: middle;
}
.MuiBadge-badge {
  height: 20px;
  display: flex;
  padding: 0 6px;
  z-index: 1;
  position: absolute;
  flex-wrap: wrap;
  font-size: 0.75rem;
  min-width: 20px;
  box-sizing: border-box;
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  align-items: center;
  font-family: Lato;
  font-weight: 500;
  line-height: 1;
  align-content: center;
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
}
.MuiBadge-colorPrimary {
  color: rgba(0, 0, 0, 0.87);
  background-color: #fff;
}
.MuiBadge-colorSecondary {
  color: rgba(0, 0, 0, 0.87);
  background-color: rgba(233, 30, 99, 1);
}
.MuiBadge-colorError {
  color: #fff;
  background-color: #f44336;
}
.MuiBadge-dot {
  height: 8px;
  padding: 0;
  min-width: 8px;
  border-radius: 4px;
}
.MuiBadge-anchorOriginTopRightRectangle {
  top: 0;
  right: 0;
  transform: scale(1) translate(50%, -50%);
  transform-origin: 100% 0%;
}
.MuiBadge-anchorOriginTopRightRectangle.MuiBadge-invisible {
  transform: scale(0) translate(50%, -50%);
}
.MuiBadge-anchorOriginBottomRightRectangle {
  right: 0;
  bottom: 0;
  transform: scale(1) translate(50%, 50%);
  transform-origin: 100% 100%;
}
.MuiBadge-anchorOriginBottomRightRectangle.MuiBadge-invisible {
  transform: scale(0) translate(50%, 50%);
}
.MuiBadge-anchorOriginTopLeftRectangle {
  top: 0;
  left: 0;
  transform: scale(1) translate(-50%, -50%);
  transform-origin: 0% 0%;
}
.MuiBadge-anchorOriginTopLeftRectangle.MuiBadge-invisible {
  transform: scale(0) translate(-50%, -50%);
}
.MuiBadge-anchorOriginBottomLeftRectangle {
  left: 0;
  bottom: 0;
  transform: scale(1) translate(-50%, 50%);
  transform-origin: 0% 100%;
}
.MuiBadge-anchorOriginBottomLeftRectangle.MuiBadge-invisible {
  transform: scale(0) translate(-50%, 50%);
}
.MuiBadge-anchorOriginTopRightCircle {
  top: 14%;
  right: 14%;
  transform: scale(1) translate(50%, -50%);
  transform-origin: 100% 0%;
}
.MuiBadge-anchorOriginTopRightCircle.MuiBadge-invisible {
  transform: scale(0) translate(50%, -50%);
}
.MuiBadge-anchorOriginBottomRightCircle {
  right: 14%;
  bottom: 14%;
  transform: scale(1) translate(50%, 50%);
  transform-origin: 100% 100%;
}
.MuiBadge-anchorOriginBottomRightCircle.MuiBadge-invisible {
  transform: scale(0) translate(50%, 50%);
}
.MuiBadge-anchorOriginTopLeftCircle {
  top: 14%;
  left: 14%;
  transform: scale(1) translate(-50%, -50%);
  transform-origin: 0% 0%;
}
.MuiBadge-anchorOriginTopLeftCircle.MuiBadge-invisible {
  transform: scale(0) translate(-50%, -50%);
}
.MuiBadge-anchorOriginBottomLeftCircle {
  left: 14%;
  bottom: 14%;
  transform: scale(1) translate(-50%, 50%);
  transform-origin: 0% 100%;
}
.MuiBadge-anchorOriginBottomLeftCircle.MuiBadge-invisible {
  transform: scale(0) translate(-50%, 50%);
}
.MuiBadge-invisible {
  transition: transform 195ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
</style><style data-jss="" data-meta="MuiBox">

</style><style data-jss="" data-meta="MuiBox">
</style><style data-jss="" data-meta="makeStyles">
.jss157 {
  width: 500px;
  max-width: 100%;
}
.jss158 {
  color: rgba(0, 0, 0, 0.87);
  background-color: #fff;
}
.jss159 {
  cursor: pointer;
}
</style><style data-jss="" data-meta="makeStyles">
.jss160 {
  top: 5px;
  right: -4px;
  border: 2px solid #121212;
  padding: 0 4px;
}
</style><style data-jss="" data-meta="makeStyles">
.jss84 {
  z-index: 1101;
  border-bottom: 1px solid #d3d7da;
}
.jss85 {
  background: #ffffff;
}
.jss86 {
  border: 1px solid #c1c1c1;
  cursor: pointer;
}
.jss87 {
  flex-grow: 1;
}
.jss88 {
  padding-top: 1px;
  padding-left: 5px;
  padding-right: 10px;
}
.jss89 {
  width: 180px;
  cursor: pointer;
  height: 27px;
  background-size: auto;
  background-image: url(https://res.cloudinary.com/onecompiler/image/upload/v1609016684/public/logo/v4-dark_fpmic8.svg);
  background-repeat: no-repeat;
  background-position: center;
}
.jss90 {
  width: 48px;
  height: 48px;
}
.jss91 {
  height: 40px;
  font-size: 30px;;
  margin-left: 18px;;
  border-right: 1px solid #464748;
  margin-right: 18px;;
  padding-bottom: 10px;;
}
.jss92 {
  margin-bottom: 30px;
}
@media (max-width:959.95px) {
  .jss92 {
    margin-bottom: 10px;
  }
}
.jss93 {
  color: #ffffff;
  margin-left: -8px;
  margin-right: 8px;
}
.jss95 {
  width: 250px;
}
.jss96 {
  cursor: pointer;
  padding-top: 4px;
}
.jss96:hover {
  border-radius: 50%;
  background-color: #ebecf1;
}
.jss97 {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style><style data-jss="" data-meta="MuiTab">
.MuiTab-root {
  padding: 6px 12px;
  overflow: hidden;
  position: relative;
  font-size: 0.875rem;
  max-width: 264px;
  min-width: 72px;
  box-sizing: border-box;
  min-height: 48px;
  text-align: center;
  flex-shrink: 0;
  font-family: Lato;
  font-weight: 500;
  line-height: 1.75;
  white-space: normal;
  text-transform: uppercase;
}
@media (min-width:600px) {
  .MuiTab-root {
    min-width: 160px;
  }
}
.MuiTab-labelIcon {
  min-height: 72px;
  padding-top: 9px;
}
.MuiTab-labelIcon .MuiTab-wrapper > *:first-child {
  margin-bottom: 6px;
}
.MuiTab-textColorInherit {
  color: inherit;
  opacity: 0.7;
}
.MuiTab-textColorInherit.Mui-selected {
  opacity: 1;
}
.MuiTab-textColorInherit.Mui-disabled {
  opacity: 0.5;
}
.MuiTab-textColorPrimary {
  color: rgba(255, 255, 255, 0.7);
}
.MuiTab-textColorPrimary.Mui-selected {
  color: #fff;
}
.MuiTab-textColorPrimary.Mui-disabled {
  color: rgba(255, 255, 255, 0.5);
}
.MuiTab-textColorSecondary {
  color: rgba(255, 255, 255, 0.7);
}
.MuiTab-textColorSecondary.Mui-selected {
  color: rgba(233, 30, 99, 1);
}
.MuiTab-textColorSecondary.Mui-disabled {
  color: rgba(255, 255, 255, 0.5);
}
.MuiTab-fullWidth {
  flex-grow: 1;
  max-width: none;
  flex-basis: 0;
  flex-shrink: 1;
}
.MuiTab-wrapped {
  font-size: 0.75rem;
  line-height: 1.5;
}
.MuiTab-wrapper {
  width: 100%;
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
</style><style data-jss="" data-meta="PrivateTabIndicator">
.jss147 {
  width: 100%;
  bottom: 0;
  height: 2px;
  position: absolute;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
.jss148 {
  background-color: #fff;
}
.jss149 {
  background-color: rgba(233, 30, 99, 1);
}
.jss150 {
  right: 0;
  width: 2px;
  height: 100%;
}
</style><style data-jss="" data-meta="MuiTabs">
.MuiTabs-root {
  display: flex;
  overflow: hidden;
  min-height: 48px;
  -webkit-overflow-scrolling: touch;
}
.MuiTabs-vertical {
  flex-direction: column;
}
.MuiTabs-flexContainer {
  display: flex;
}
.MuiTabs-flexContainerVertical {
  flex-direction: column;
}
.MuiTabs-centered {
  justify-content: center;
}
.MuiTabs-scroller {
  flex: 1 1 auto;
  display: inline-block;
  position: relative;
  white-space: nowrap;
}
.MuiTabs-fixed {
  width: 100%;
  overflow-x: hidden;
}
.MuiTabs-scrollable {
  overflow-x: scroll;
  scrollbar-width: none;
}
.MuiTabs-scrollable::-webkit-scrollbar {
  display: none;
}
@media (max-width:599.95px) {
  .MuiTabs-scrollButtonsDesktop {
    display: none;
  }
}
</style><style data-jss="" data-meta="makeStyles">
.jss151 {
  flex-grow: 1;
}
.jss152 {
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
}
.jss152:hover {
  background-color: #ddd;
}
</style><style data-jss="" data-meta="makeStyles">
.jss146 {
  text-transform: none;
}
.jss146:hover {
  color: #fff;
  opacity: 1;
}
</style><style data-jss="" data-meta="makeStyles">
.jss108 {
  border-top: 1px solid #26de81 !important;
}
.jss109 {
  border-top: 1px solid #f44336 !important;
}
.jss110 {
  font-size: 1.1rem;
  font-weight: 400;
}
.jss111 {
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.5;
  padding-top: 3px;
  padding-bottom: 3px;
}
.jss112 {
  width: 100%;
}
.jss113 {
  text-align: right;
}
.jss114 {
  float: right;
  padding-top: 2px;
  padding-right: 2px;
}
.jss115 {
  color: #fff;
  text-decoration: none;
}
.jss116 {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
.jss117 {
  padding: 6px;
}
.jss118 {
  margin: 0;
  padding: 0px 0px 0px 42px;
  background: white;
}
.jss119 {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.jss120 {
  border-color: #121212 !important;
  border-width: 1px;
}
.jss121 {
  background: #24242b;
}
.jss122 {
  padding-top: 8px;
}
@media (min-width:600px) {
  .jss123 {
    border-left: 5px solid #24242b;
  }
}
.jss124 {
  overflow: auto;
  border-top: 1px solid #424242;
  max-height: 380px;
  padding-left: 8px;
}
.jss125 {
  overflow: auto;
  border-top: 1px solid #fff;
  max-height: 80%;
  padding-left: 8px;
}
.jss127 {
  height: 100%;
}
.jss128 {
  height: calc(100vh - 60px);
}
.jss129 {
  padding-bottom: 8px;
}
.jss130 {
  height: calc(100vh - 50px);
}
</style><style data-jss="" data-meta="makeStyles">
.jss79 {
  flex-grow: 1;
}
@media (max-width:959.95px) {
  .jss80 {
    padding-left: 4px;
    padding-right: 4px;
  }
}
.jss81 {
  margin-left: 8px;
  margin-right: 8px;
}
.jss82 {
  box-shadow: 0 2px 10px 0 rgba(23,70,161,.11);
}
</style><script charset="utf-8" src="./Assign_files/8a28b14e.95a9799c793909e4db50.js.download"></script><script charset="utf-8" src="./Assign_files/1c377de9871869784a9a644e97cd16155818224d.7a5e727298d3e46caece.js.download"></script><script charset="utf-8" src="./Assign_files/71.bb2a4138766457346d89.js.download"></script><script charset="utf-8" src="./Assign_files/78.987aad680fb786ad26a7.js.download"></script><script src="./Assign_files/platform.js.download" id="gapi-client" gapi_processed="true"></script><script src="./Assign_files/sdk.js(1).download" id="facebook-jssdk"></script><link as="script" rel="prefetch" href="./Assign_files/117007c18bdb927a9a016f9e318eb51d2400f955.c87f694fe3512b929ea7.js.download"><link as="script" rel="prefetch" href="./Assign_files/2cc21498b1f239057f626929b66d39f295bbdbd2.08dfdbeba363574be55f.js.download"><link as="script" rel="prefetch" href="./Assign_files/2297dfd59a9b59c88de8f02832530b83a4a772de.df4ec9fdb619da1b0cef.js.download"><link as="script" rel="prefetch" href="./Assign_files/c98d624bfe36ec51252babbeb10c34cba6ad7720.96eb6be4130d14b60cd5.js.download"><link as="script" rel="prefetch" href="./Assign_files/f580a4dc091bcb286379eeeb6e26bc9bc980fbf4.178d98c398f5fd5e92cc.js.download"><link as="script" rel="prefetch" href="./Assign_files/3558d97e4001fc36fe953d1123d319e4c35aaab2.5388725a21bc4dde4849.js.download"><link as="script" rel="prefetch" href="./Assign_files/orgs-1021c9763529df7f7d48.js.download"><link as="script" rel="prefetch" href="./Assign_files/b06fe1afdd5d3242a58612f8245687f3c8f06b00.4cee29414992c2434599.js.download"><link as="script" rel="prefetch" href="./Assign_files/c76e1d80449db1ec58a6046042d64902fe6b9193.098c156565352d163958.js.download"><link as="script" rel="prefetch" href="./Assign_files/challenges-b8566c55bf8e2b42ced4.js.download"><link as="script" rel="prefetch" href="./Assign_files/posts-838e39c78ba213d025af.js.download"><link as="script" rel="prefetch" href="./Assign_files/questions-97da9ccd7ec612ed2cb8.js.download"><link as="script" rel="prefetch" href="./Assign_files/0b7b90cd.fd9f5f5679f4acd57030.js.download"><link as="script" rel="prefetch" href="./Assign_files/0908abc5bf769e7a78d47de49b1d5ce553db9810.a66dfb92b12405571985.js.download"><link as="script" rel="prefetch" href="./Assign_files/65c0c77e49afcc7e359a3b1aee8075c6ad73cec7.40fabacb103c03230555.js.download"><link as="script" rel="prefetch" href="./Assign_files/bf240ec8346ec7915119adf045cb55a20052cf37.fe47851802ae8af70c8a.js.download"><link as="script" rel="prefetch" href="./Assign_files/27.9a00b8fc76963dc60182.js.download"><link as="script" rel="prefetch" href="./Assign_files/index-bd2edae5be741533d601.js.download"><script id="_carbonads_projs" type="text/javascript" src="./Assign_files/CK7DL53L.json"></script><style type="text/css" data-fbcssmodules="css:fb.css.base css:fb.css.dialog css:fb.css.iframewidget css:fb.css.customer_chat_plugin_iframe">.fb_hidden{position:absolute;top:-10000px;z-index:10001}.fb_reposition{overflow:hidden;position:relative}.fb_invisible{display:none}.fb_reset{background:none;border:0;border-spacing:0;color:#000;cursor:auto;direction:ltr;font-family:"lucida grande", tahoma, verdana, arial, sans-serif;font-size:11px;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal}.fb_reset>div{overflow:hidden}@keyframes fb_transform{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}.fb_animate{animation:fb_transform .3s forwards}
.fb_dialog{background:rgba(82, 82, 82, .7);position:absolute;top:-10000px;z-index:10001}.fb_dialog_advanced{border-radius:8px;padding:10px}.fb_dialog_content{background:#fff;color:#373737}.fb_dialog_close_icon{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 0 transparent;cursor:pointer;display:block;height:15px;position:absolute;right:18px;top:17px;width:15px}.fb_dialog_mobile .fb_dialog_close_icon{left:5px;right:auto;top:5px}.fb_dialog_padding{background-color:transparent;position:absolute;width:1px;z-index:-1}.fb_dialog_close_icon:hover{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 -15px transparent}.fb_dialog_close_icon:active{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 -30px transparent}.fb_dialog_iframe{line-height:0}.fb_dialog_content .dialog_title{background:#6d84b4;border:1px solid #365899;color:#fff;font-size:14px;font-weight:bold;margin:0}.fb_dialog_content .dialog_title>span{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Cou7n-nqK52.gif) no-repeat 5px 50%;float:left;padding:5px 0 7px 26px}body.fb_hidden{height:100%;left:0;margin:0;overflow:visible;position:absolute;top:-10000px;transform:none;width:100%}.fb_dialog.fb_dialog_mobile.loading{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/3rhSv5V8j3o.gif) white no-repeat 50% 50%;min-height:100%;min-width:100%;overflow:hidden;position:absolute;top:0;z-index:10001}.fb_dialog.fb_dialog_mobile.loading.centered{background:none;height:auto;min-height:initial;min-width:initial;width:auto}.fb_dialog.fb_dialog_mobile.loading.centered #fb_dialog_loader_spinner{width:100%}.fb_dialog.fb_dialog_mobile.loading.centered .fb_dialog_content{background:none}.loading.centered #fb_dialog_loader_close{clear:both;color:#fff;display:block;font-size:18px;padding-top:20px}#fb-root #fb_dialog_ipad_overlay{background:rgba(0, 0, 0, .4);bottom:0;left:0;min-height:100%;position:absolute;right:0;top:0;width:100%;z-index:10000}#fb-root #fb_dialog_ipad_overlay.hidden{display:none}.fb_dialog.fb_dialog_mobile.loading iframe{visibility:hidden}.fb_dialog_mobile .fb_dialog_iframe{position:sticky;top:0}.fb_dialog_content .dialog_header{background:linear-gradient(from(#738aba), to(#2c4987));border-bottom:1px solid;border-color:#043b87;box-shadow:white 0 1px 1px -1px inset;color:#fff;font:bold 14px Helvetica, sans-serif;text-overflow:ellipsis;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0;vertical-align:middle;white-space:nowrap}.fb_dialog_content .dialog_header table{height:43px;width:100%}.fb_dialog_content .dialog_header td.header_left{font-size:12px;padding-left:5px;vertical-align:middle;width:60px}.fb_dialog_content .dialog_header td.header_right{font-size:12px;padding-right:5px;vertical-align:middle;width:60px}.fb_dialog_content .touchable_button{background:linear-gradient(from(#4267B2), to(#2a4887));background-clip:padding-box;border:1px solid #29487d;border-radius:3px;display:inline-block;line-height:18px;margin-top:3px;max-width:85px;padding:4px 12px;position:relative}.fb_dialog_content .dialog_header .touchable_button input{background:none;border:none;color:#fff;font:bold 12px Helvetica, sans-serif;margin:2px -12px;padding:2px 6px 3px 6px;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}.fb_dialog_content .dialog_header .header_center{color:#fff;font-size:16px;font-weight:bold;line-height:18px;text-align:center;vertical-align:middle}.fb_dialog_content .dialog_content{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/jKEcVPZFk-2.gif) no-repeat 50% 50%;border:1px solid #4a4a4a;border-bottom:0;border-top:0;height:150px}.fb_dialog_content .dialog_footer{background:#f5f6f7;border:1px solid #4a4a4a;border-top-color:#ccc;height:40px}#fb_dialog_loader_close{float:left}.fb_dialog.fb_dialog_mobile .fb_dialog_close_icon{visibility:hidden}#fb_dialog_loader_spinner{animation:rotateSpinner 1.2s linear infinite;background-color:transparent;background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/t-wz8gw1xG1.png);background-position:50% 50%;background-repeat:no-repeat;height:24px;width:24px}@keyframes rotateSpinner{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
.fb_iframe_widget{display:inline-block;position:relative}.fb_iframe_widget span{display:inline-block;position:relative;text-align:justify}.fb_iframe_widget iframe{position:absolute}.fb_iframe_widget_fluid_desktop,.fb_iframe_widget_fluid_desktop span,.fb_iframe_widget_fluid_desktop iframe{max-width:100%}.fb_iframe_widget_fluid_desktop iframe{min-width:220px;position:relative}.fb_iframe_widget_lift{z-index:1}.fb_iframe_widget_fluid{display:inline}.fb_iframe_widget_fluid span{width:100%}
.fb_mpn_mobile_landing_page_slide_out{animation-duration:200ms;animation-name:fb_mpn_landing_page_slide_out;transition-timing-function:ease-in}.fb_mpn_mobile_landing_page_slide_out_from_left{animation-duration:200ms;animation-name:fb_mpn_landing_page_slide_out_from_left;transition-timing-function:ease-in}.fb_mpn_mobile_landing_page_slide_up{animation-duration:500ms;animation-name:fb_mpn_landing_page_slide_up;transition-timing-function:ease-in}.fb_mpn_mobile_bounce_in{animation-duration:300ms;animation-name:fb_mpn_bounce_in;transition-timing-function:ease-in}.fb_mpn_mobile_bounce_out{animation-duration:300ms;animation-name:fb_mpn_bounce_out;transition-timing-function:ease-in}.fb_mpn_mobile_bounce_out_v2{animation-duration:300ms;animation-name:fb_mpn_fade_out;transition-timing-function:ease-in}.fb_customer_chat_bounce_in_v2{animation-duration:300ms;animation-name:fb_bounce_in_v2;transition-timing-function:ease-in}.fb_customer_chat_bounce_in_from_left{animation-duration:300ms;animation-name:fb_bounce_in_from_left;transition-timing-function:ease-in}.fb_customer_chat_bounce_out_v2{animation-duration:300ms;animation-name:fb_bounce_out_v2;transition-timing-function:ease-in}.fb_customer_chat_bounce_out_from_left{animation-duration:300ms;animation-name:fb_bounce_out_from_left;transition-timing-function:ease-in}.fb_customer_chat_bubble_animated_no_badge{box-shadow:0 3px 12px rgba(0, 0, 0, .15);transition:box-shadow 150ms linear}.fb_customer_chat_bubble_animated_no_badge:hover{box-shadow:0 5px 24px rgba(0, 0, 0, .3)}.fb_customer_chat_bubble_animated_with_badge{box-shadow:-5px 4px 14px rgba(0, 0, 0, .15);transition:box-shadow 150ms linear}.fb_customer_chat_bubble_animated_with_badge:hover{box-shadow:-5px 8px 24px rgba(0, 0, 0, .2)}.fb_invisible_flow{display:inherit;height:0;overflow-x:hidden;width:0}.fb_new_ui_mobile_overlay_active{overflow:hidden}@keyframes fb_mpn_landing_page_slide_in{0%{border-radius:50%;margin:0 24px;width:60px}40%{border-radius:18px}100%{margin:0 12px;width:100% - 24px}}@keyframes fb_mpn_landing_page_slide_in_from_left{0%{border-radius:50%;left:12px;margin:0 24px;width:60px}40%{border-radius:18px}100%{left:12px;margin:0 12px;width:100% - 24px}}@keyframes fb_mpn_landing_page_slide_out{0%{margin:0 12px;width:100% - 24px}60%{border-radius:18px}100%{border-radius:50%;margin:0 24px;width:60px}}@keyframes fb_mpn_landing_page_slide_out_from_left{0%{left:12px;width:100% - 24px}60%{border-radius:18px}100%{border-radius:50%;left:12px;width:60px}}@keyframes fb_mpn_landing_page_slide_up{0%{bottom:0;opacity:0}100%{bottom:24px;opacity:1}}@keyframes fb_mpn_bounce_in{0%{opacity:.5;top:100%}100%{opacity:1;top:0}}@keyframes fb_mpn_fade_out{0%{bottom:30px;opacity:1}100%{bottom:0;opacity:0}}@keyframes fb_mpn_bounce_out{0%{opacity:1;top:0}100%{opacity:.5;top:100%}}@keyframes fb_bounce_in_v2{0%{opacity:0;transform:scale(0, 0);transform-origin:bottom right}50%{transform:scale(1.03, 1.03);transform-origin:bottom right}100%{opacity:1;transform:scale(1, 1);transform-origin:bottom right}}@keyframes fb_bounce_in_from_left{0%{opacity:0;transform:scale(0, 0);transform-origin:bottom left}50%{transform:scale(1.03, 1.03);transform-origin:bottom left}100%{opacity:1;transform:scale(1, 1);transform-origin:bottom left}}@keyframes fb_bounce_out_v2{0%{opacity:1;transform:scale(1, 1);transform-origin:bottom right}100%{opacity:0;transform:scale(0, 0);transform-origin:bottom right}}@keyframes fb_bounce_out_from_left{0%{opacity:1;transform:scale(1, 1);transform-origin:bottom left}100%{opacity:0;transform:scale(0, 0);transform-origin:bottom left}}@keyframes fb_bounce_out_v2_mobile_chat_started{0%{opacity:1;top:0}100%{opacity:0;top:20px}}@keyframes fb_customer_chat_bubble_bounce_in_animation{0%{bottom:6pt;opacity:0;transform:scale(0, 0);transform-origin:center}70%{bottom:18pt;opacity:1;transform:scale(1.2, 1.2)}100%{transform:scale(1, 1)}}@keyframes slideInFromBottom{0%{opacity:.1;transform:translateY(100%)}100%{opacity:1;transform:translateY(0)}}@keyframes slideInFromBottomDelay{0%{opacity:0;transform:translateY(100%)}97%{opacity:0;transform:translateY(100%)}100%{opacity:1;transform:translateY(0)}}</style><script src="./Assign_files/platform.js.download" id="gapi-client" gapi_processed="true"></script></head><body style=""><div id="__next"><header class="MuiPaper-root MuiAppBar-root MuiAppBar-positionStatic MuiAppBar-colorInherit jss83 MuiPaper-elevation0"><div class="MuiToolbar-root MuiToolbar-dense jss94 MuiToolbar-gutters"><button class="MuiButtonBase-root MuiIconButton-root jss93 MuiIconButton-colorInherit MuiIconButton-edgeStart" tabindex="0" type="button" aria-label="Menu"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg></span><span class="MuiTouchRipple-root"></span></button><a class="jss88" href="https://onecompiler.com/"> <div class="MuiBox-root jss98 jss89"></div> </a><span class="jss87"></span><button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button" aria-label="search" title="Search"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg></span><span class="MuiTouchRipple-root"></span></button><button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button" aria-label="dark mode" title="Toggle DarkMode"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"></path></svg></span><span class="MuiTouchRipple-root"></span></button><button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorPrimary" tabindex="0" type="button"><span class="MuiIconButton-label"><span class="MuiBadge-root"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"></path></svg><span class="MuiBadge-badge jss160 MuiBadge-anchorOriginTopRightRectangle MuiBadge-colorSecondary MuiBadge-invisible">0</span></span></span><span class="MuiTouchRipple-root"></span></button><a class="textDecorationNone" href="https://onecompiler.com/questions"> <button class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary" tabindex="0" type="button"><span class="MuiButton-label">Q&amp;A</span><span class="MuiTouchRipple-root"></span></button> </a><a class="textDecorationNone" href="https://onecompiler.com/posts"> <button class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary" tabindex="0" type="button"><span class="MuiButton-label">Posts</span><span class="MuiTouchRipple-root"></span></button> </a><a class="textDecorationNone" href="https://onecompiler.com/challenges"> <button class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary" tabindex="0" type="button"><span class="MuiButton-label">Challenges</span><span class="MuiTouchRipple-root"></span></button> </a><a class="textDecorationNone" href="https://onecompiler.com/orgs"> <button class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary" tabindex="0" type="button"><span class="MuiButton-label">ORGS</span><span class="MuiTouchRipple-root"></span></button> </a><button class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary" tabindex="0" type="button" aria-haspopup="true"><span class="MuiButton-label">More</span><span class="MuiTouchRipple-root"></span></button><span class="jss91"></span><div class="MuiAvatar-root MuiAvatar-circle jss86" aria-haspopup="true"><img alt="?" src="./Assign_files/unnamed.png" class="MuiAvatar-img"></div></div></header><hr class="MuiDivider-root"><div class="jss92"></div><main class="MuiContainer-root jss80 MuiContainer-maxWidthXl"><div class="MuiGrid-root MuiGrid-container MuiGrid-justify-xs-center"><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-9"><div class="jss82"><div class="jss135"><div class="MuiGrid-root MuiGrid-container MuiGrid-align-items-xs-center MuiGrid-justify-xs-center"><div class="MuiGrid-root MuiGrid-item"><div class="jss129"><div class="jss116"><h1 class="MuiTypography-root jss110 MuiTypography-h1 MuiTypography-colorPrimary" itemprop="headline">3x4nus8ch<!-- -->&nbsp;<button class="MuiButtonBase-root MuiIconButton-root jss117 MuiIconButton-colorPrimary" tabindex="0" type="button" aria-label="Edit"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg></span><span class="MuiTouchRipple-root"></span></button></h1></div></div></div></div></div><div class="MuiPaper-root MuiPaper-outlined MuiPaper-rounded"><div class="jss133"><div class="MuiGrid-root jss121 MuiGrid-container MuiGrid-align-items-xs-center MuiGrid-justify-xs-space-between"><div class="MuiGrid-root MuiGrid-item"> <div class="MuiTabs-root"><div class="MuiTabs-scroller MuiTabs-fixed" style="overflow:hidden"><div class="MuiTabs-flexContainer" role="tablist"><button class="MuiButtonBase-root MuiTab-root jss146 MuiTab-textColorPrimary Mui-selected" tabindex="0" type="button" role="tab" aria-selected="true"><span class="MuiTab-wrapper">HelloWorld.js</span><span class="MuiTouchRipple-root"></span></button></div><span class="jss147 jss148 MuiTabs-indicator" style="left: 0px; width: 160px;"></span></div></div> </div><div class="MuiGrid-root MuiGrid-item"> <div class="jss116"><h1 class="MuiTypography-root jss110 MuiTypography-h1 MuiTypography-colorPrimary" itemprop="headline">3x4nus8ch<!-- -->&nbsp;<button class="MuiButtonBase-root MuiIconButton-root jss117 MuiIconButton-colorPrimary" tabindex="0" type="button" aria-label="Edit"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg></span><span class="MuiTouchRipple-root"></span></button></h1></div> </div><div class="MuiGrid-root MuiGrid-item"> <!-- --><button class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-textSizeSmall MuiButton-sizeSmall" tabindex="0" type="button"><span class="MuiButton-label">New</span><span class="MuiTouchRipple-root"></span></button>&nbsp;&nbsp;&nbsp;<button class="MuiButtonBase-root MuiButton-root MuiButton-contained mr10 MuiButton-containedPrimary MuiButton-containedSizeSmall MuiButton-sizeSmall" tabindex="0" type="button"><span class="MuiButton-label">javascript <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></span><span class="MuiTouchRipple-root"></span></button><button class="MuiButtonBase-root MuiButton-root MuiButton-contained mr10 MuiButton-containedSecondary MuiButton-containedSizeSmall MuiButton-sizeSmall" tabindex="0" type="button" title="ctrl + enter"><span class="MuiButton-label">Run  <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"></path></svg></span><span class="MuiTouchRipple-root"></span></button><button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button" aria-label="delete" title="Full Screen"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path></svg></span><span class="MuiTouchRipple-root"></span></button> </div></div></div><div class="jss135"><div class="MuiGrid-root jss121 jss122  MuiGrid-container MuiGrid-direction-xs-column MuiGrid-align-items-xs-center MuiGrid-justify-xs-center"><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12"> <button class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-textSizeSmall MuiButton-sizeSmall" tabindex="0" type="button" title="Create a new JAVASCRIPT program"><span class="MuiButton-label">New</span><span class="MuiTouchRipple-root"></span></button>&nbsp;&nbsp;&nbsp;<button class="MuiButtonBase-root MuiButton-root MuiButton-contained mr10 MuiButton-containedPrimary MuiButton-containedSizeSmall MuiButton-sizeSmall" tabindex="0" type="button" title="Click to change the language"><span class="MuiButton-label">javascript <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></span><span class="MuiTouchRipple-root"></span></button><button class="MuiButtonBase-root MuiButton-root MuiButton-contained mr10 MuiButton-containedSecondary MuiButton-containedSizeSmall MuiButton-sizeSmall" tabindex="0" type="button" title="ctrl + enter"><span class="MuiButton-label">Run  <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"></path></svg></span><span class="MuiTouchRipple-root"></span></button><button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button" aria-label="delete" title="Full Screen"><span class="MuiIconButton-label"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path></svg></span><span class="MuiTouchRipple-root"></span></button></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12"> <div class="MuiTabs-root"><div class="MuiTabs-scroller MuiTabs-fixed" style="overflow:hidden"><div class="MuiTabs-flexContainer" role="tablist"><button class="MuiButtonBase-root MuiTab-root jss146 MuiTab-textColorPrimary Mui-selected" tabindex="0" type="button" role="tab" aria-selected="true"><span class="MuiTab-wrapper">HelloWorld.js</span><span class="MuiTouchRipple-root"></span></button></div><span class="jss147 jss148 MuiTabs-indicator" style="left: 0px; width: 0px;"></span></div></div>   </div></div></div><div class="MuiGrid-root MuiGrid-container"><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-8"><div id="oc_ace" class=" ace_editor ace-dracula ace_dark ace_focus" style="width: 100%; height: 450px; font-size: 14px;" draggable="false"><textarea class="ace_text-input" wrap="off" autocorrect="off" autocapitalize="off" spellcheck="false" style="opacity: 0; font-size: 1px; height: 1px; width: 1px; top: 51px; left: 152px;"></textarea><div class="ace_gutter" aria-hidden="true" style="left: 0px; width: 41px;"><div class="ace_layer ace_gutter-layer ace_folding-enabled" style="height: 1e+06px; top: 0px; left: 0px; width: 41px;"><div class="ace_gutter-cell " style="height: 17px; top: 0px;">1<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 17px;">2<span style="display: inline-block; height: 17px;" class="ace_fold-widget ace_start ace_open"></span></div><div class="ace_gutter-cell ace_gutter-active-line " style="height: 17px; top: 34px;">3<span style="display: none; height: 17px;" class="ace_fold-widget ace_start ace_open"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 51px;">4<span class="ace_fold-widget ace_start ace_open" style="height: 17px; display: inline-block;"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 68px;">5<span style="display: none; height: 17px;" class="ace_fold-widget ace_start ace_open"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 85px;">6<span class="ace_fold-widget ace_start ace_open" style="height: 17px; display: none;"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 102px;">7<span style="display: none; height: 17px;" class="ace_fold-widget ace_start ace_open"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 119px;">8<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 136px;">9<span style="display: none;"></span></div></div></div><div class="ace_scroller" style="line-height: 17px; left: 40.6992px; right: 0px; bottom: 0px;"><div class="ace_content" style="top: 0px; left: 0px; width: 605.301px; height: 484px;"><div class="ace_layer ace_print-margin-layer"><div class="ace_print-margin" style="left: 620px; visibility: hidden;"></div></div><div class="ace_layer ace_marker-layer"><div class="ace_active-line" style="height: 17px; top: 34px; left: 0px; right: 0px;"></div></div><div class="ace_layer ace_text-layer" style="height: 1e+06px; margin: 0px 4px; top: 0px; left: 0px;"><div class="ace_line" style="height: 17px; top: 0px;"><span class="ace_storage ace_type">let</span> <span class="ace_identifier">n</span> <span class="ace_keyword ace_operator">=</span> <span class="ace_constant ace_numeric">5</span><span class="ace_punctuation ace_operator">;</span></div><div class="ace_line" style="height: 17px; top: 17px;"><span class="ace_keyword">for</span> <span class="ace_paren ace_lparen">(</span><span class="ace_identifier">i</span> <span class="ace_keyword ace_operator">=</span> <span class="ace_constant ace_numeric">1</span><span class="ace_punctuation ace_operator">;</span> <span class="ace_identifier">i</span> <span class="ace_keyword ace_operator">&lt;=</span> <span class="ace_constant ace_numeric">1</span><span class="ace_punctuation ace_operator">;</span> <span class="ace_identifier">i</span><span class="ace_keyword ace_operator">++</span><span class="ace_paren ace_rparen">)</span><span class="ace_paren ace_lparen">{</span></div><div class="ace_line" style="height: 17px; top: 34px;"><span class="ace_indent-guide">  </span>  <span class="ace_storage ace_type">var</span> <span class="ace_identifier">a</span> <span class="ace_keyword ace_operator">=</span> <span class="ace_string">""</span></div><div class="ace_line" style="height: 17px; top: 51px;"><span class="ace_indent-guide">  </span>  <span class="ace_keyword">for</span> <span class="ace_paren ace_lparen">(</span><span class="ace_identifier">j</span> <span class="ace_keyword ace_operator">=</span> <span class="ace_constant ace_numeric">1</span><span class="ace_punctuation ace_operator">;</span> <span class="ace_identifier">j</span> <span class="ace_keyword ace_operator">&lt;=</span> <span class="ace_identifier">n</span><span class="ace_punctuation ace_operator">;</span> <span class="ace_identifier">j</span><span class="ace_keyword ace_operator">++</span><span class="ace_paren ace_rparen">)</span><span class="ace_paren ace_lparen">{</span></div><div class="ace_line" style="height: 17px; top: 68px;"><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span> </div><div class="ace_line" style="height: 17px; top: 85px;"><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span>  <span class="ace_identifier">a</span><span class="ace_keyword ace_operator">=</span><span class="ace_identifier">a</span> <span class="ace_keyword ace_operator">+</span> <span class="ace_string">" * "</span></div><div class="ace_line" style="height: 17px; top: 102px;"><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span> <span class="ace_paren ace_rparen">}</span></div><div class="ace_line" style="height: 17px; top: 119px;"><span class="ace_indent-guide">  </span><span class="ace_indent-guide">  </span> <span class="ace_storage ace_type">console</span><span class="ace_punctuation ace_operator">.</span><span class="ace_support ace_function ace_firebug">log</span><span class="ace_paren ace_lparen">(</span><span class="ace_identifier">a</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">;</span></div><div class="ace_line" style="height: 17px; top: 136px;"><span class="ace_paren ace_rparen">}</span></div></div><div class="ace_layer ace_marker-layer"></div><div class="ace_layer ace_cursor-layer ace_animate-blinking"><div class="ace_cursor" style="display: block; top: 34px; left: 112px; width: 8px; height: 17px; animation-duration: 1000ms;"></div></div></div></div><div class="ace_scrollbar ace_scrollbar-v" style="display: none; width: 22px; bottom: 0px;"><div class="ace_scrollbar-inner" style="width: 22px; height: 153px;">&nbsp;</div></div><div class="ace_scrollbar ace_scrollbar-h" style="display: none; height: 22px; left: 40.6992px; right: 0px;"><div class="ace_scrollbar-inner" style="height: 22px; width: 605px;">&nbsp;</div></div><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font: inherit; overflow: hidden;"><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font: inherit; overflow: visible;">הההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההה</div><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; overflow: visible;">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div></div></div></div><div class="MuiGrid-root jss123 MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-4"><div class="jss127"><div class="jss126"><div class="MuiFormControl-root MuiTextField-root MuiFormControl-marginNormal MuiFormControl-fullWidth"><label class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined" data-shrink="true">STDIN</label><div class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-multiline MuiOutlinedInput-multiline"><textarea rows="3" aria-invalid="false" placeholder="Input for the program ( Optional )" class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMultiline MuiOutlinedInput-inputMultiline" style="height: 57px;"></textarea><textarea aria-hidden="true" class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMultiline MuiOutlinedInput-inputMultiline" readonly="" tabindex="-1" style="visibility: hidden; position: absolute; overflow: hidden; height: 0px; top: 0px; left: 0px; transform: translateZ(0px); width: 290.078px;"></textarea><fieldset aria-hidden="true" class="jss104 MuiOutlinedInput-notchedOutline jss120"><legend class="jss106 jss107"><span>STDIN</span></legend></fieldset></div></div></div><div class="  jss124   
                                                       jss108  
                                                         "><p>Output:</p><div><pre> * 
</pre></div></div></div></div></div><div></div></div></div><div class="oc-theme-dark"><span id="_carbonads_js_slot" class="inline-add"><script async="" id="_carbonads_js" src="./Assign_files/carbon.js.download"></script><div id="carbonads"><span><span class="carbon-wrap"><a href="https://srv.carbonads.net/ads/click/x/GTND42JLCWBIP5QUC6BLYKQNCVBIV23ECWYDLZ3JCY7DP23ICAYD523KCKBIVKQECEBD553UC6BI65QWF6AIE5QKC6SD62QMFT7IKK3EHJNCLSIZ?segment=placement:onecompilercom;" class="carbon-img" target="_blank" rel="noopener sponsored"><img src="./Assign_files/1525189943-38523.png" alt="ads via Carbon" border="0" height="100" width="130" style="max-width: 130px;"></a><a href="https://srv.carbonads.net/ads/click/x/GTND42JLCWBIP5QUC6BLYKQNCVBIV23ECWYDLZ3JCY7DP23ICAYD523KCKBIVKQECEBD553UC6BI65QWF6AIE5QKC6SD62QMFT7IKK3EHJNCLSIZ?segment=placement:onecompilercom;" class="carbon-text" target="_blank" rel="noopener sponsored">Limited time offer: Get 10 free Adobe Stock images.</a></span><a href="http://carbonads.net/?utm_source=onecompilercom&amp;utm_medium=ad_via_link&amp;utm_campaign=in_unit&amp;utm_term=carbon" class="carbon-poweredby" target="_blank" rel="noopener sponsored">ads via Carbon</a></span></div></span><div class="md-view  oc-theme-dark "><h1>Javascript Online Compiler</h1><p>Write, Run &amp; Share Javascript code online using OneCompiler's JS online compiler for free. It's one of the robust, feature-rich online compilers for Javascript language. Getting started with the OneCompiler's Javascript editor is easy and fast. The editor shows sample boilerplate code when you choose language as Javascript. OneCompiler also has reference programs, where you can look for the sample programs and start learning. Happy learning!!</p><h1>About Javascript</h1><p>Javascript(JS) is a object-oriented programming language which adhere to ECMA Script Standards. Javascript is required to design the behaviour of the web pages.</p><h1>Key Features</h1><ul><li>Open-source</li><li>Just-in-time compiled language</li><li>Embedded along with HTML and makes web pages alive</li><li>Originally names as LiveScript.</li><li>Executable in both browser and server which has Javascript engines like V8(chrome), SpiderMonkey(Firefox) etc.</li></ul><h1>Syntax help</h1><h2>variable declaration</h2><table><thead><tr><th>Keyword</th><th>Description</th><th>Scope</th></tr></thead><tbody><tr><td>var</td><td>Var is used to declare variables(old way of declaring variables)</td><td>Function or global scope</td></tr><tr><td>let</td><td>let is also used to declare variables(new way)</td><td>Global or block Scope</td></tr><tr><td>const</td><td>const is used to declare const values. Once the value is assigned it can not be modified</td><td>Global or block Scope</td></tr></tbody></table><h2>Arrays</h2><p>An array is a collection of items or values.</p><h3>Syntax:</h3><pre><code class="language-javascript hljs"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword">let</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span> arrayName = [value1, value2,..etc];
<span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment">// or</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
<span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword">let</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span> arrayName = <span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword">new</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span> <span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in">Array</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>(<span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string">"value1"</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>,<span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string">"value2"</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>,..etc);</code></pre><h3>Example:</h3><pre><code class="language-javascript hljs"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword">let</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span> mobiles = [<span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string">"iPhone"</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>, <span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string">"Samsung"</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>, <span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string">"Pixel"</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>];

<span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment">// accessing an array</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
<span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in">console</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>.log(mobiles[<span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number">0</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>]);

<span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment">// changing an array element</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
mobiles[<span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number">3</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>] = <span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string">"Nokia"</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>;</code></pre><h2>Arrow functions</h2><p>Arrow Functions helps developers to write code in concise way, it’s introduced in ES6.<br>Arrow functions can be written in multiple ways. Below are couple of ways to use arrow function but it can be written in many other ways as well.</p><h3>Syntax:</h3><pre><code class="language-javascript hljs">() =&gt; expression</code></pre><h3>Example:</h3><pre><code class="language-javascript hljs"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword">const</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span> numbers = [<span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number">0</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>, <span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number">1</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>, <span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number">2</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>, <span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number">3</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>, <span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number">4</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>, <span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number">5</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>, <span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number">6</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>, <span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number">7</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>, <span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number">8</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>, <span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number">9</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>]
<span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword">const</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span> squaresOfEvenNumbers = numbers.filter(<span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params">ele</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"> =&gt;</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span> ele % <span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number">2</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span> == <span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number">0</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>)
                                    .map(<span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params">ele</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"> =&gt;</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span> ele ** <span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number"><span class="hljs-number">2</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>);
<span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in">console</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>.log(squaresOfEvenNumbers);</code></pre><h2>Loops</h2><h3>1. If:</h3><p>IF is used to execute a block of code based on a condition.</p><h3>Syntax</h3><pre><code class="language-javascript hljs"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword">if</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>(condition){
    <span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment">// code</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
}</code></pre><h3>2. If-Else:</h3><p>Else part is used to execute the block of code when the condition fails.</p><h3>Syntax</h3><pre><code class="language-javascript hljs"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword">if</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>(condition){
    <span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment">// code</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
} <span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword">else</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span> {
    <span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment">// code</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
}</code></pre><h3>3. Switch:</h3><p>Switch is used to replace nested If-Else statements.</p><h3>Syntax</h3><pre><code class="language-javascript hljs"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword">switch</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>(condition){
    <span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword">case</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span> <span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string">'value1'</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span> :
        <span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment">//code</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
        [<span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword">break</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>;]
    <span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword">case</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span> <span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string">'value2'</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span> :
        <span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment">//code</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
        [<span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword">break</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>;]
    .......
    <span class="hljs-attr"><span class="hljs-attr"><span class="hljs-attr"><span class="hljs-attr"><span class="hljs-attr"><span class="hljs-attr"><span class="hljs-attr"><span class="hljs-attr"><span class="hljs-attr"><span class="hljs-attr"><span class="hljs-attr"><span class="hljs-attr"><span class="hljs-attr"><span class="hljs-attr"><span class="hljs-attr"><span class="hljs-attr"><span class="hljs-attr"><span class="hljs-attr"><span class="hljs-attr"><span class="hljs-attr"><span class="hljs-attr"><span class="hljs-attr"><span class="hljs-attr"><span class="hljs-attr"><span class="hljs-attr"><span class="hljs-attr"><span class="hljs-attr"><span class="hljs-attr"><span class="hljs-attr"><span class="hljs-attr"><span class="hljs-attr"><span class="hljs-attr"><span class="hljs-attr"><span class="hljs-attr"><span class="hljs-attr">default</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span> :
        <span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment">//code</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
        [<span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword">break</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>;]
}</code></pre><h3>4. For</h3><p>For loop is used to iterate a set of statements based on a condition.</p><pre><code class="language-javascript hljs"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword">for</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>(Initialization; Condition; Increment/decrement){  
<span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment">//code  </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
} </code></pre><h3>5. While</h3><p>While is also used to iterate a set of statements based on a condition. Usually while is preferred when number of ierations is not known in advance.</p><pre><code class="language-javascript hljs"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword">while</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span> (condition) {  
  <span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment">// code </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
}  </code></pre><h3>6. Do-While</h3><p>Do-while is also used to iterate a set of statements based on a condition. It is mostly used when you need to execute the statements atleast once.</p><pre><code class="language-javascript hljs"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword">do</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span> {  
  <span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment">// code </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
} <span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword">while</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span> (condition); </code></pre><h2>Classes</h2><p>ES6 introduced classes along with OOPS concepts in JS. Class is similar to a function which you can think like kind of template which will get called when ever you initialize class.</p><h2>Syntax:</h2><pre><code class="language-javascript hljs"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword">class</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"> </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title">className</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"> </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>{
  <span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title">constructor</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function">(</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span>)</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span> { ... } <span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment"><span class="hljs-comment">//Mandatory Class method</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
  <span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title">method1</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function">(</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span>)</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span> { ... }
  <span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title">method2</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function">(</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span><span class="hljs-function"><span class="hljs-params"></span>)</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span> { ... }
  ...
}</code></pre><h2>Example:</h2><pre><code class="language-javascript hljs"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword">class</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"> </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title">Mobile</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"><span class="hljs-class"> </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>{
  <span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title"><span class="hljs-function"><span class="hljs-title">constructor</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function">(</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params">model</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function"><span class="hljs-function">)</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span> {
    <span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in">this</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>.name = model;
  }
}

mbl = <span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword"><span class="hljs-keyword">new</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span> Mobile(<span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string"><span class="hljs-string">"iPhone"</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>);</code></pre></div></div></div></div></main><hr class="MuiDivider-root"><div class="MuiGrid-root jss153 MuiGrid-container"><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-1"> </div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-10"><div class="MuiGrid-root MuiGrid-container"><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-10 MuiGrid-grid-md-3 MuiGrid-grid-lg-3"><h6 class="MuiTypography-root footerText MuiTypography-h6 MuiTypography-gutterBottom">OneCompiler.com</h6><br><a class="jss154" href="https://onecompiler.com/about"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> About</p></a><a class="jss154" href="https://onecompiler.com/contact"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Contact</p></a><br><a class="jss154" href="https://onecompiler.com/users"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Users</p></a><a class="jss154" href="https://status.onecompiler.com/" target="_blank"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Status</p></a><br><a class="jss154" href="https://github.com/onecompiler" target="_blank"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> GitHub </p></a><a class="jss154" href="https://www.linkedin.com/company/onecompiler" target="_blank"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> LinkedIn </p></a><a class="jss154" href="https://www.facebook.com/onecompiler" target="_blank"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Facebook </p></a><a class="jss154" href="https://www.instagram.com/onecompiler" target="_blank"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Instagram </p></a><a class="jss154" href="https://twitter.com/one_compiler" target="_blank"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Twitter </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-10 MuiGrid-grid-md-3 MuiGrid-grid-lg-6"><h6 class="MuiTypography-root footerText MuiTypography-h6 MuiTypography-gutterBottom">Languages</h6><br><div class="MuiGrid-root MuiGrid-container"><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-3"><a class="jss154" href="https://onecompiler.com/java"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Java </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-3"><a class="jss154" href="https://onecompiler.com/python"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Python </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-3"><a class="jss154" href="https://onecompiler.com/c"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> C </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-3"><a class="jss154" href="https://onecompiler.com/cpp"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> C++ </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-3"><a class="jss154" href="https://onecompiler.com/nodejs"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> NodeJS </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-3"><a class="jss154" href="https://onecompiler.com/javascript"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> JavaScript </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-3"><a class="jss154" href="https://onecompiler.com/groovy"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Groovy </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-3"><a class="jss154" href="https://onecompiler.com/jshell"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> JShell </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-3"><a class="jss154" href="https://onecompiler.com/haskell"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Haskell </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-3"><a class="jss154" href="https://onecompiler.com/tcl"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Tcl </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-3"><a class="jss154" href="https://onecompiler.com/lua"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Lua </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-3"><a class="jss154" href="https://onecompiler.com/ada"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Ada </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-3"><a class="jss154" href="https://onecompiler.com/commonlisp"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> CommonLisp </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-3"><a class="jss154" href="https://onecompiler.com/d"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> D </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-3"><a class="jss154" href="https://onecompiler.com/elixir"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Elixir </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-3"><a class="jss154" href="https://onecompiler.com/erlang"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Erlang </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-3"><a class="jss154" href="https://onecompiler.com/fsharp"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> F# </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-3"><a class="jss154" href="https://onecompiler.com/fortran"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Fortran </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-3"><a class="jss154" href="https://onecompiler.com/assembly"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Assembly </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-3"><a class="jss154" href="https://onecompiler.com/scala"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Scala </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-3"><a class="jss154" href="https://onecompiler.com/php"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Php </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-3"><a class="jss154" href="https://onecompiler.com/python2"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Python2 </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-3"><a class="jss154" href="https://onecompiler.com/csharp"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> C# </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-3"><a class="jss154" href="https://onecompiler.com/perl"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Perl </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-3"><a class="jss154" href="https://onecompiler.com/ruby"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Ruby </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-3"><a class="jss154" href="https://onecompiler.com/go"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Go </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-3"><a class="jss154" href="https://onecompiler.com/r"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> R </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-3"><a class="jss154" href="https://onecompiler.com/racket"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Racket </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-3"><a class="jss154" href="https://onecompiler.com/ocaml"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> OCaml </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-3"><a class="jss154" href="https://onecompiler.com/vb"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Visual Basic(VB.NET) </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-3"><a class="jss154" href="https://onecompiler.com/html"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> HTML </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-3"><a class="jss154" href="https://onecompiler.com/materialize"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Materialize </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-3"><a class="jss154" href="https://onecompiler.com/bootstrap"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Bootstrap </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-3"><a class="jss154" href="https://onecompiler.com/foundation"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Foundation </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-3"><a class="jss154" href="https://onecompiler.com/bulma"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Bulma </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-3"><a class="jss154" href="https://onecompiler.com/uikit"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Uikit </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-3"><a class="jss154" href="https://onecompiler.com/semanticUI"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Semantic UI </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-3"><a class="jss154" href="https://onecompiler.com/skeleton"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Skeleton </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-3"><a class="jss154" href="https://onecompiler.com/milligram"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Milligram </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-3"><a class="jss154" href="https://onecompiler.com/paperCss"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> PaperCSS </p></a></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-3"><a class="jss154" href="https://onecompiler.com/mysql"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> MySQL </p></a></div></div></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-10 MuiGrid-grid-md-3 MuiGrid-grid-lg-3"><h6 class="MuiTypography-root footerText MuiTypography-h6 MuiTypography-gutterBottom">More</h6><br><a class="jss154" href="https://onecompiler.com/cheatsheets"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Cheatsheets</p></a><a class="jss154" href="https://onecompiler.com/tutorials"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Tutorials</p></a><a class="jss154" href="https://onecompiler.com/tools"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Tools</p></a><a class="jss154" href="https://onecompiler.com/stats"><p class="MuiTypography-root footerLink MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom"> Stats</p></a></div></div></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-1"> </div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12"><br><br><p class="MuiTypography-root jss155 MuiTypography-body1 MuiTypography-noWrap MuiTypography-gutterBottom">© Copyright 2021 One Compiler Pvt. Ltd. |<a class="jss154" href="https://onecompiler.com/privacy-policy"><span class="footerLink"> Privacy Policy </span></a>|<a href="https://onecompiler.com/terms-and-conditions/" class="jss154"><span class="footerLink"> Terms &amp; Conditions </span></a></p></div><div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-1"> </div></div></div><script id="__NEXT_DATA__" type="application/json">{"props":{"pageProps":{"pathname":"/","query":{"language":"javascript"},"codeObj":{"name":"JavaScript","title":"JavaScript Hello World","version":"ES6","mode":"javascript","description":null,"extension":"js","languageType":"programming","active":true,"properties":{"language":"javascript","docs":true,"tutorials":true,"cheatsheets":true,"files":[{"name":"HelloWorld.js","content":"console.log(\"Hello, World!\");"}]}},"language":"javascript","timestamp":"1625586959809_537","doc":"# Javascript Online Compiler\n\nWrite, Run \u0026 Share Javascript code online using OneCompiler's JS online compiler for free. It's one of the robust, feature-rich online compilers for Javascript language. Getting started with the OneCompiler's Javascript editor is easy and fast. The editor shows sample boilerplate code when you choose language as Javascript. OneCompiler also has reference programs, where you can look for the sample programs and start learning. Happy learning!!\n\n# About Javascript\n\nJavascript(JS) is a object-oriented programming language which adhere to ECMA Script Standards. Javascript is required to design the behaviour of the web pages.\n\n# Key Features\n\n* Open-source\n* Just-in-time compiled language\n* Embedded along with HTML and makes web pages alive\n* Originally names as LiveScript.\n* Executable in both browser and server which has Javascript engines like V8(chrome), SpiderMonkey(Firefox) etc.\n\n# Syntax help\n\n## variable declaration\n\n|Keyword|Description|Scope|\n|----|----|----|\n|var| Var is used to declare variables(old way of declaring variables)| Function or global scope|\n|let| let is also used to declare variables(new way)|Global or block Scope|\n|const|const is used to declare const values. Once the value is assigned it can not be modified|Global or block Scope|\n\n## Arrays\nAn array is a collection of items or values. \n\n### Syntax:\n\n```javascript\nlet arrayName = [value1, value2,..etc];\n// or\nlet arrayName = new Array(\"value1\",\"value2\",..etc);\n```\n\n### Example:\n\n```javascript\nlet mobiles = [\"iPhone\", \"Samsung\", \"Pixel\"];\n\n// accessing an array\nconsole.log(mobiles[0]);\n\n// changing an array element\nmobiles[3] = \"Nokia\";\n```\n\n## Arrow functions\nArrow Functions helps developers to write code in concise way, it’s introduced in ES6.\nArrow functions can be written in multiple ways. Below are couple of ways to use arrow function but it can be written in many other ways as well. \n\n### Syntax:\n\n```javascript\n() =\u003e expression\n```\n\n### Example:\n\n```javascript\nconst numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\nconst squaresOfEvenNumbers = numbers.filter(ele =\u003e ele % 2 == 0)\n                                    .map(ele =\u003e ele ** 2);\nconsole.log(squaresOfEvenNumbers);\n```\n## Loops\n### 1. If:\n\nIF is used to execute a block of code based on a condition. \n\n### Syntax\n\n```javascript\nif(condition){\n    // code\n}\n```\n### 2. If-Else:\n\nElse part is used to execute the block of code when the condition fails.\n\n### Syntax\n```javascript\nif(condition){\n    // code\n} else {\n    // code\n}\n```\n\n\n### 3. Switch:\n\nSwitch is used to replace nested If-Else statements.\n\n### Syntax\n```javascript\nswitch(condition){\n    case 'value1' :\n        //code\n        [break;]\n    case 'value2' :\n        //code\n        [break;]\n    .......\n    default :\n        //code\n        [break;]\n}\n```\n\n\n### 4. For\n\nFor loop is used to iterate a set of statements based on a condition.\n\n```javascript\nfor(Initialization; Condition; Increment/decrement){  \n//code  \n} \n```\n\n### 5. While\n\nWhile is also used to iterate a set of statements based on a condition. Usually while is preferred when number of ierations is not known in advance.\n\n```javascript\nwhile (condition) {  \n  // code \n}  \n```\n\n### 6. Do-While\nDo-while is also used to iterate a set of statements based on a condition. It is mostly used when you need to execute the statements atleast once.\n\n```javascript\ndo {  \n  // code \n} while (condition); \n```\n\n## Classes\nES6 introduced classes along with OOPS concepts in JS. Class is similar to a function which you can think like kind of template which will get called when ever you initialize class.\n\n## Syntax:\n```javascript\nclass className {\n  constructor() { ... } //Mandatory Class method\n  method1() { ... }\n  method2() { ... }\n  ...\n}\n```\n\n## Example:\n```javascript\nclass Mobile {\n  constructor(model) {\n    this.name = model;\n  }\n}\n\nmbl = new Mobile(\"iPhone\");\n```\n"},"initialReduxState":{"user":{"version":"v4","userLoggedIn":false,"_id":null,"userId":null,"name":null,"email":null,"token":null,"picture":null,"thumbnail":null,"loginTime":"2021-07-04T17:35:35.346Z","orgs":[],"language":"en","theme":"light","isServer":true}}},"page":"/","query":{"language":"javascript"},"buildId":"7e259b4adf73e056dcd6890e3d567a210af34084","isFallback":false,"customServer":true,"gip":true,"appGip":true}</script><script nomodule="" src="./Assign_files/polyfills-caad98f200002a637f0f.js.download"></script><script src="./Assign_files/main-ae0cb640eba706a0affd.js.download" async=""></script><script src="./Assign_files/webpack-b82f27b444ef2fcdf5b0.js.download" async=""></script><script src="./Assign_files/framework.1a8e5b8ac72aee184af3.js.download" async=""></script><script src="./Assign_files/commons.0b90add706d614eb037c.js.download" async=""></script><script src="./Assign_files/1188305e405f651ebfaddcec80e16b719aeead2a.bacf850d3e386babd61d.js.download" async=""></script><script src="./Assign_files/3d545192f940ee84c01fcafcf50d4593b0d84dd4.8fb068cb141727af4d09.js.download" async=""></script><script src="./Assign_files/_app-1ab70d9812df7570a9a5.js.download" async=""></script><script src="./Assign_files/0b7b90cd.fd9f5f5679f4acd57030.js.download" async=""></script><script src="./Assign_files/117007c18bdb927a9a016f9e318eb51d2400f955.c87f694fe3512b929ea7.js.download" async=""></script><script src="./Assign_files/2cc21498b1f239057f626929b66d39f295bbdbd2.08dfdbeba363574be55f.js.download" async=""></script><script src="./Assign_files/2297dfd59a9b59c88de8f02832530b83a4a772de.df4ec9fdb619da1b0cef.js.download" async=""></script><script src="./Assign_files/c98d624bfe36ec51252babbeb10c34cba6ad7720.96eb6be4130d14b60cd5.js.download" async=""></script><script src="./Assign_files/f580a4dc091bcb286379eeeb6e26bc9bc980fbf4.178d98c398f5fd5e92cc.js.download" async=""></script><script src="./Assign_files/3558d97e4001fc36fe953d1123d319e4c35aaab2.5388725a21bc4dde4849.js.download" async=""></script><script src="./Assign_files/0908abc5bf769e7a78d47de49b1d5ce553db9810.a66dfb92b12405571985.js.download" async=""></script><script src="./Assign_files/65c0c77e49afcc7e359a3b1aee8075c6ad73cec7.40fabacb103c03230555.js.download" async=""></script><script src="./Assign_files/bf240ec8346ec7915119adf045cb55a20052cf37.fe47851802ae8af70c8a.js.download" async=""></script><script src="./Assign_files/27.9a00b8fc76963dc60182.js.download" async=""></script><script src="./Assign_files/index-bd2edae5be741533d601.js.download" async=""></script><script src="./Assign_files/_buildManifest.js.download" async=""></script><script src="./Assign_files/_ssgManifest.js.download" async=""></script><div role="presentation" class="MuiDialog-root" aria-hidden="true" style="position: fixed; z-index: 1300; inset: 0px; visibility: hidden;"><div class="MuiBackdrop-root" aria-hidden="true" style="opacity: 0; visibility: hidden;"></div><div tabindex="0" data-test="sentinelStart"></div><div class="MuiDialog-container MuiDialog-scrollPaper" role="none presentation" tabindex="-1" style="visibility: hidden; transform: translateY(-657px);"><div class="MuiPaper-root MuiDialog-paper MuiDialog-paperScrollPaper MuiDialog-paperWidthSm MuiPaper-elevation24 MuiPaper-rounded" role="dialog"><div class="MuiDialogContent-root jss97"><div class="jss99"><div class="MuiAvatar-root MuiAvatar-rounded"><img src="./Assign_files/logo_iy7frf.png" class="MuiAvatar-img"></div><div><div class="jss100"><div class="MuiGrid-root MuiGrid-container MuiGrid-direction-xs-column MuiGrid-justify-xs-center"><div class="MuiGrid-root MuiGrid-item" style="flex-grow: 1;"><button style="display: block; border: 0px; border-radius: 3px; box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 2px; color: rgb(255, 255, 255); cursor: pointer; font-size: 19px; margin: 5px; width: calc(100% - 10px); overflow: hidden; padding: 0px 10px; user-select: none; height: 50px; background: rgb(203, 63, 34);"><div style="align-items: center; display: flex; height: 100%;"><div style="display: flex; justify-content: center; min-width: 26px;"><svg xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" fill="#FFFFFF" viewBox="0 0 50 50"><g><path d="M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z "></path></g></svg></div><div style="width: 10px;"></div><div style="text-align: left; width: 100%;">Login with Google</div></div></button></div><div class="MuiGrid-root MuiGrid-item" style="flex-grow: 1;"><button style="display: block; border: 0px; border-radius: 3px; box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 2px; color: rgb(255, 255, 255); cursor: pointer; font-size: 19px; margin: 5px; width: calc(100% - 10px); overflow: hidden; padding: 0px 10px; user-select: none; height: 50px; background: rgb(59, 89, 152);"><div style="align-items: center; display: flex; height: 100%;"><div style="display: flex; justify-content: center; min-width: 26px;"><svg xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" viewBox="0 0 90 90"><g><path d="M90,15.001C90,7.119,82.884,0,75,0H15C7.116,0,0,7.119,0,15.001v59.998   C0,82.881,7.116,90,15.001,90H45V56H34V41h11v-5.844C45,25.077,52.568,16,61.875,16H74v15H61.875C60.548,31,59,32.611,59,35.024V41   h15v15H59v34h16c7.884,0,15-7.119,15-15.001V15.001z" fill="#FFFFFF"></path></g></svg></div><div style="width: 10px;"></div><div style="text-align: left; width: 100%;">Login with Facebook</div></div></button></div></div></div><form novalidate="" autocomplete="off"><div class="MuiGrid-root jss101 MuiGrid-container MuiGrid-direction-xs-column MuiGrid-align-items-xs-center"><p class="MuiTypography-root MuiTypography-body1 MuiTypography-gutterBottom"> or login with email &amp; password </p><div class="MuiFormControl-root MuiTextField-root jss102"><label class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-marginDense MuiInputLabel-outlined" data-shrink="false" for="email" id="email-label">Email</label><div class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense"><input aria-invalid="false" id="email" type="text" class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" value=""><fieldset aria-hidden="true" class="jss104 MuiOutlinedInput-notchedOutline"><legend class="jss106"><span>Email</span></legend></fieldset></div></div><div class="MuiFormControl-root MuiTextField-root jss102"><label class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-marginDense MuiInputLabel-outlined" data-shrink="false" for="password" id="password-label">Password</label><div class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl MuiInputBase-marginDense MuiOutlinedInput-marginDense"><input aria-invalid="false" id="password" type="password" class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputMarginDense MuiOutlinedInput-inputMarginDense" value=""><fieldset aria-hidden="true" class="jss104 MuiOutlinedInput-notchedOutline"><legend class="jss106"><span>Password</span></legend></fieldset></div></div><button class="MuiButtonBase-root MuiButton-root MuiButton-contained jss102 MuiButton-containedPrimary" tabindex="0" type="button"><span class="MuiButton-label"> Login </span><span class="MuiTouchRipple-root"></span></button><p class="MuiTypography-root MuiTypography-body2 MuiTypography-gutterBottom">New to OneCompiler? <span class="jss103">Sign Up</span></p><p class="MuiTypography-root MuiTypography-body2 MuiTypography-gutterBottom"><span class="jss103">Forgot password?</span></p></div></form></div></div></div></div></div><div tabindex="0" data-test="sentinelEnd"></div></div><script src="./Assign_files/orgs-1021c9763529df7f7d48.js.download"></script><iframe id="ssIFrame_google" sandbox="allow-scripts allow-same-origin" aria-hidden="true" frame-border="0" src="./Assign_files/iframe.html" style="position: absolute; width: 1px; height: 1px; inset: -9999px; display: none;"></iframe><script src="./Assign_files/b06fe1afdd5d3242a58612f8245687f3c8f06b00.4cee29414992c2434599.js.download"></script><script src="./Assign_files/c76e1d80449db1ec58a6046042d64902fe6b9193.098c156565352d163958.js.download"></script><script src="./Assign_files/challenges-b8566c55bf8e2b42ced4.js.download"></script><script src="./Assign_files/posts-838e39c78ba213d025af.js.download"></script><script src="./Assign_files/questions-97da9ccd7ec612ed2cb8.js.download"></script><div id="fb-root" class=" fb_reset"><div style="position: absolute; top: -10000px; width: 0px; height: 0px;"><div></div></div></div><div class=" ace_editor ace_autocomplete ace_dark ace-dracula" style="font-size: 14px; top: 180px; left: 326.664px; height: 152px; display: none;"><textarea class="ace_text-input" wrap="off" autocorrect="off" autocapitalize="off" spellcheck="false" style="opacity: 0; font-size: 1px; top: 0px; left: -100px;"></textarea><div class="ace_gutter" aria-hidden="true" style="display: none; left: 0px; width: 41px;"><div class="ace_layer ace_gutter-layer ace_folding-enabled" style="height: 1e+06px; top: 0px; left: 0px; width: 41px;"><div class="ace_gutter-cell " style="height: 19px; top: 0px;">1<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 19px; top: 19px;">2<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 19px; top: 38px;">3<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 19px; top: 57px;">4<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 19px; top: 76px;">5<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 19px; top: 95px;">6<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 19px; top: 114px;">7<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 19px; top: 133px;">8<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 19px; top: 152px;">9<span style="display: none;"></span></div></div></div><div class="ace_scroller" style="line-height: 19px; left: 0px; right: 17px; bottom: 0px;"><div class="ace_content" style="cursor: default; top: 0px; left: 0px; width: 281px; height: 190px;"><div class="ace_layer ace_print-margin-layer"><div class="ace_print-margin" style="left: 620px; visibility: hidden;"></div></div><div class="ace_layer ace_marker-layer"><div class="ace_active-line" style="height: 19px; top: 0px; left: 0px; right: 0px;"></div></div><div class="ace_layer ace_text-layer" style="height: 1e+06px; margin: 0px 4px; top: 0px; left: 0px;"><div class="ace_line ace_selected" style="height: 19px; top: 0px;"><span class="ace_completion-highlight">i</span><span class="ace_">f</span><span class="ace_completion-meta">snippet</span></div><div class="ace_line" style="height: 19px; top: 19px;"><span class="ace_completion-highlight">i</span><span class="ace_">f</span><span class="ace_completion-meta">keyword</span></div><div class="ace_line" style="height: 19px; top: 38px;"><span class="ace_completion-highlight">i</span><span class="ace_">fe</span><span class="ace_completion-meta">snippet</span></div><div class="ace_line" style="height: 19px; top: 57px;"><span class="ace_completion-highlight">i</span><span class="ace_">mplements</span><span class="ace_completion-meta">keyword</span></div><div class="ace_line" style="height: 19px; top: 76px;"><span class="ace_completion-highlight">i</span><span class="ace_">mport</span><span class="ace_completion-meta">keyword</span></div><div class="ace_line" style="height: 19px; top: 95px;"><span class="ace_completion-highlight">i</span><span class="ace_">n</span><span class="ace_completion-meta">keyword</span></div><div class="ace_line" style="height: 19px; top: 114px;"><span class="ace_completion-highlight">I</span><span class="ace_">nfinity</span><span class="ace_completion-meta">keyword</span></div><div class="ace_line" style="height: 19px; top: 133px;"><span class="ace_completion-highlight">i</span><span class="ace_">nstanceof</span><span class="ace_completion-meta">keyword</span></div><div class="ace_line" style="height: 19px; top: 152px;"><span class="ace_completion-highlight">I</span><span class="ace_">nt16Array</span><span class="ace_completion-meta">keyword</span></div></div><div class="ace_layer ace_marker-layer"></div><div class="ace_layer ace_cursor-layer ace_hidden-cursors" style="opacity: 0;"><div class="ace_cursor" style="display: block; top: 0px; left: 4px; width: 8px; height: 19px;"></div></div></div></div><div class="ace_scrollbar ace_scrollbar-v" style="width: 22px; bottom: 0px;"><div class="ace_scrollbar-inner" style="width: 22px; height: 912px;">&nbsp;</div></div><div class="ace_scrollbar ace_scrollbar-h" style="display: none; height: 22px; left: 0px; right: 17px;"><div class="ace_scrollbar-inner" style="height: 22px; width: 298px;">&nbsp;</div></div><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font: inherit; overflow: hidden;"><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font: inherit; overflow: visible;">הההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההה</div><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; overflow: visible;">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div></div></div></body></html>
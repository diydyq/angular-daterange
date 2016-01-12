/**
 * 日期选择控件
 * @author diydyq@126.com
 *
 * @require lib:angular.pack/angular/angular.js
 * @require lib:jquery.daterangepicker/index.js
 *
 */
angular.module('ui.daterange', [])

.controller('DateRangePopupController', ['$scope', '$element', '$attrs', '$compile', '$parse', '$document', '$rootScope', '$timeout', function(scope, element, attrs, $compile, $parse, $document, $rootScope, $timeout) {
    var self = this;

    this.init = function(_ngModel_) {
        ngModel = _ngModel_;

        var options = {};

        // 分隔符
        scope.separator && (options.separator = scope.separator);
        // 显示工具栏
        scope.showShortcuts && (options.showShortcuts = scope.showShortcuts);
        // 月份是否必须是连续的
        scope.stickyMonths && (options.stickyMonths = scope.stickyMonths);
        // 自动关闭
        scope.autoClose && (options.autoClose = scope.autoClose);
        // 仅显示一个日期
        scope.singleDate && (options.singleDate = scope.singleDate);
        // 最小日期
        scope.startDate && (options.startDate = scope.startDate);
        // 最大日期
        scope.endDate && (options.endDate = scope.endDate);
        // 具体日期的控制
        attrs.beforeShowDay && (options.beforeShowDay = function () {
            scope.$parent.showDay = arguments[0];
            var ret = scope.beforeShowDay.apply(scope, arguments);
            delete scope.showDay;
            return ret;
        });

        $(element).daterange(options)
        .on('datepicker-change', function (event, obj)
        {
            /* This event will be triggered when second date is selected */
            //console.info('change', obj);
            if(scope.rangeValueMode === 'object'){
                ngModel.$setViewValue(obj, true);
            }else{
                // 默认string；
                ngModel.$setViewValue(obj.value, true);
            }
        })
        .on('datepicker-apply',function(event, obj)
        {
            /* This event will be triggered when user clicks on the apply button */
            //console.info('apply',obj);
            scope.$parent.$evalAsync(attrs.onApply);
        })
        .on('datepicker-close',function()
        {
            /* This event will be triggered before date range picker close animation */
            //console.info('before close');
            scope.$parent.$evalAsync(attrs.onClose);
        })
        .on('datepicker-closed',function()
        {
            /* This event will be triggered after date range picker close animation */
            //console.info('after close');
            scope.$parent.$evalAsync(attrs.onClosed);
        })
        .on('datepicker-open',function()
        {
            /* This event will be triggered before date range picker open animation */
            //console.info('before open');
            scope.$parent.$evalAsync(attrs.onOpen);
        })
        .on('datepicker-opened',function()
        {
            /* This event will be triggered after date range picker open animation */
            //console.info('after open');
            scope.$parent.$evalAsync(attrs.onOpened);
        });
    };
}])

.directive('uiDateRange', function() {
    return {
        require: ['ngModel', 'uiDateRange'],
        controller: 'DateRangePopupController',
        scope: {
            // 分隔符
            separator:           '=',
            // 显示工具栏
            showShortcuts:      '=',
            // 月份是否必须是连续的
            stickyMonths:       '=',
            // 自动关闭
            autoClose:           '=',
            // 仅显示一个日期
            singleDate:          '=',
            // 最小日期
            startDate:           '=',
            // 最大日期
            endDate:              '=',
            // 方法：具体日期
            beforeShowDay:       '&',
            // 设值方式: 'string', 'object'
            rangeValueMode:     '='
        },
        link: function(scope, element, attrs, ctrls) {
            var ngModel = ctrls[0];
            var ctrl = ctrls[1];

            ctrl.init(ngModel);
        }
    };
});


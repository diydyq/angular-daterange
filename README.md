# angular-daterange
Daterange for angular

## Dependency List:
1. jQuery
2. [Daterange picker](https://github.com/longbill/jquery-date-range-picker);
3. AngualrJS 1.4.7

## Usage Demo

1. Html Tempalte:


        <input type="text" class="form-control" ng-model="formData.daterange"
               ui-date-range
               separator="daterangeOpn.separator"
               show-shortcuts="false"
               auto-close="false"
               start-date="'2016-1-1'"
               end-date="'2016-1-12'"
               ng-change="onDateRangeChange(formData.daterange)"
               on-apply="onDateRangeApply(formData.daterange)"
               on-close="onDateRangeClose(formData.daterange)"
               on-closed="onDateRangeClosed(formData.daterange)"
               on-open="onDateRangeOpen(formData.daterange)"
               on-opened="onDateRangeOpened(formData.daterange)"
               before-show-day="beforeShowDay(showDay)"
               range-value-mode="'object'"
                />

2. Used in controller:


        // 1. declare dependency module: 'ui.daterange'.
        var modBase = angular.module('modBase', [
            'ui.daterange'
        ]);
        // 2. Options and Event.
        modBase.controller('MyperfController', ['$scope', 'srvcPerf', function($scope, srvcPerf){

            $scope.daterangeOpn = {
                separator:      ' 到 '
            };
            $scope.onDateRangeChange = function (daterange) {
                console.info('onDateRangeChange:', arguments);
            };
            $scope.onDateRangeApply = function (daterange) {
                console.info('onDateRangeApply:', arguments);
            };
            $scope.onDateRangeClose = function (daterange) {
                console.info('onDateRangeClose:', arguments);
            };
            $scope.onDateRangeClosed = function (daterange) {
                console.info('onDateRangeClosed:', arguments);
            };
            $scope.onDateRangeOpen = function (daterange) {
                console.info('onDateRangeOpen:', arguments);
            };
            $scope.onDateRangeOpened = function (daterange) {
                console.info('onDateRangeOpened:', arguments);
            };
            $scope.beforeShowDay = function (t) {
                console.info('beforeShowDay:', arguments);
                // 周六日不可选
                var valid = !(t.getDay() == 0 || t.getDay() == 6);
                var _class = '';
                return [valid,_class];
            };

        }]);

## Options

        // Directive declare
        ui-date-range
        // Split sign between start date and end date
        separator="daterangeOpn.separator"
        // Show Quick choose on Toolbar(default: false)
        show-shortcuts="false"
        // Auto close after selection
        auto-close="false"
        // Minimum date for selection.
        start-date="'2016-1-1'"
        // Maxmium date for selection
        end-date="'2016-1-12'"
        // Event trigger while date select.
        ng-change="onDateRangeChange(formData.daterange)"
        // Event trigger while confirm button clicked.
        on-apply="onDateRangeApply(formData.daterange)"
        // Event trigger before close
        on-close="onDateRangeClose(formData.daterange)"
        // Event trigger after close
        on-closed="onDateRangeClosed(formData.daterange)"
        // Event trigger before open
        on-open="onDateRangeOpen(formData.daterange)"
        // Event trigger after opened
        on-opened="onDateRangeOpened(formData.daterange)"
        // Event trigger before render each day (eg: disable or enable day).
        before-show-day="beforeShowDay(showDay)"
        // Available date value: 'string' or 'object'(eg: '2015-1-1 至 2015-1-2', { date1: xxx, date2: xxx, value: xxx })
        range-value-mode="'object'"

## Snapshot


![Snapshot1][1]



[1]: http://www.github.com/diydyq/angular-daterange/blob/master/daterange.png?raw=true

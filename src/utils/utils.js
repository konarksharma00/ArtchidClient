String.prototype.hexEncode = function() {
    var hex, i;
    var result = "";
    for (i = 0; i < this.length; i++) {
        hex = this.charCodeAt(i).toString(16);
        result += ("000" + hex).slice(-4);
    }
    return result;
};
String.prototype.hexDecode = function() {
    var j;
    var hexes = this.match(/.{1,4}/g) || [];
    var back = "";
    for (j = 0; j < hexes.length; j++) {
        back += String.fromCharCode(parseInt(hexes[j], 16));
    }
    return back;
};
Number.prototype.toNDigits = function(NDigits) {
    var returnVal = '';
    var digits = '';
    var value = this.toString();
    var valueLength = value.length;
    var digitsToBeAdded = NDigits - valueLength;
    if (valueLength < NDigits) {
        for (var i = 0; i < digitsToBeAdded; i++) {
            digits += '0';
        }
    }
    returnVal = digits + value;
    //value < 10 ? returnVal = "0" + value : returnVal = value;
    return returnVal;
};

String.prototype.parseToDateObj = function(format, seperator) {
    var returnValue = this;
    if (returnValue.indexOf(seperator) > -1) {
        var date = {};
        var dateArr = returnValue.split(seperator);
        var formatArr = format.split(seperator);
        for (var i = 0; i < formatArr.length; i++) {
            date[formatArr[i]] = dateArr[i];
        }
        returnValue = new Date(date.y, Number(date.m) - 1, date.d);
    }
    return returnValue;
}

Date.prototype.parseDate = function(formatType) {
    var returnValue = this;
    var formats = {
        shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        shortWeeks: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        weeks: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday']
    };
    //console.log(Object.prototype.toString.call(this));
    var date = this.getDate();
    var month = this.getMonth();
    var year = this.getUTCFullYear();
    var hour = this.getHours();
    var min = this.getMinutes();
    var sec = this.getSeconds();
    switch (formatType ? formatType.toLowerCase() : '') {
        case 'serverdate':
            returnValue = year.toNDigits(4) + '-' + (month + 1).toNDigits(2) + '-' + date.toNDigits(2) + ' ' + hour.toNDigits(2) + ':' + min.toNDigits(2) + ':' + sec.toNDigits(2);
            break;
        case 'serverdateandtime':
            returnValue = date.toNDigits(2) + ' ' + formats['shortMonths'][Number(month)] + ', ' + year + ' ' + hour.toNDigits(2) + ':' + min.toNDigits(2);
            break;
        case 'dateserverdate':
            returnValue = date.toNDigits(2) + '-' + (month + 1).toNDigits(2) + '-' + year.toNDigits(4) + ' ' + hour.toNDigits(2) + ':' + min.toNDigits(2) + ':' + sec.toNDigits(2);
            break;
        case 'onboarddob':
            //var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
            returnValue = year.toNDigits(4) + '-' + (month + 1).toNDigits(2) + '-' + date.toNDigits(2) + 'T' + hour.toNDigits(2) + ':' + min.toNDigits(2) + ':' + sec.toNDigits(2);
            break;

        case 'ideaserverdate':
            var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
            returnValue = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -3);
            break;
        case 'shortdate':
            returnValue = date.toNDigits(2) + ' ' + formats['shortMonths'][Number(month)] + ', ' + year;
            break;
        case 'shortspacedate':
            returnValue = date + ' ' + formats['shortMonths'][Number(month)] + ' ' + year;
            break;
        case 'supershortdate':
            returnValue = date + ' ' + formats['shortMonths'][Number(month)];
            break;
        case 'isoshortdate':
            returnValue = year.toNDigits(4) + '-' + (month + 1).toNDigits(2) + '-' + date.toNDigits(2);
            break;
        case 'reverseisoshortdate':
            returnValue = date.toNDigits(2) + '-' + (month + 1).toNDigits(2) + '-' + year.toNDigits(4);
            break;
        case 'hour_min':
            returnValue = hour.toNDigits(2) + ':' + min.toNDigits(2)
            break;
        case 'dd/mmm/yyyy':
            returnValue = date.toNDigits(2) + '/' + formats['shortMonths'][Number(month)] + '/' + year;
            break;
        case 'dd,mm,yyyy':
            returnValue = date.toNDigits(2) + ',' + (month + 1).toNDigits(2) + ',' + year;
            break;
        case 'dd/mm/yyyy':
            returnValue = date.toNDigits(2) + '/' + (month + 1).toNDigits(2) + '/' + year;
            break;
        case 'mm/dd/yyyy':
            returnValue = (month + 1).toNDigits(2) + '/' + date.toNDigits(2) + '/' + year;
            break;
        case 'mm,dd,yyyy':
            returnValue = (month + 1).toNDigits(2) + ',' + date.toNDigits(2) + ',' + year;
            break;
        case 'dd,mm,yy':
            returnValue = date.toNDigits(2) + ',' + (month + 1).toNDigits(2) + ',' + year;
            break;
        case 'supershortdate':
            returnValue = date.toNDigits(2) + ' ' + formats['shortMonths'][Number(month)];
            break;
        case 'fulltextdate':
            var shortDate = returnValue.parseDate('shortDate');
            returnValue = shortDate.replace(',', ' ') + ', ' + formats.weeks[returnValue.getDay()];
            break;
        case "datetimecs":
            var ampm = hour >= 12 ? 'pm' : 'am';
            hour = hour % 12;
            hour = hour ? hour : 12; // the hour '0' should be '12'
            //            var strTime = hour + ':' + minutes + ' ' + ampm
            returnValue = date.toNDigits(2) + ',' + (month + 1).toNDigits(2) + ',' + year.toNDigits(4) + " " + hour.toNDigits(2) + " " + min.toNDigits(2) + " " + sec.toNDigits(2) + " " + ampm;
            break;
        default:

            break;
    }
    return returnValue;
};
Date.prototype.dateAdd = function(size, value) {
    value = parseInt(value);
    var incr = 0;
    switch (size) {
        case 'day':
            incr = value * 24;
            this.dateAdd('hour', incr);
            break;
        case 'hour':
            incr = value * 60;
            this.dateAdd('minute', incr);
            break;
        case 'week':
            incr = value * 7;
            this.dateAdd('day', incr);
            break;
        case 'minute':
            incr = value * 60;
            this.dateAdd('second', incr);
            break;
        case 'second':
            incr = value * 1000;
            this.dateAdd('millisecond', incr);
            break;
        case 'month':
            value = value + this.getUTCMonth();
            if (value / 12 > 0) {
                this.dateAdd('year', value / 12);
                value = value % 12;
            }
            this.setUTCMonth(value);
            break;
        case 'millisecond':
            this.setTime(this.getTime() + value);
            break;
        case 'year':
            this.setFullYear(this.getUTCFullYear() + value);
            break;
        default:
            throw new Error('Invalid date increment passed');
            break;
    }

};
Date.prototype.firstDay = function(size) {
    switch (size.toLowerCase()) {
        case 'week':
            var weekday = this.getDay();
            weekday === 0 ? weekday = 7 : '';
            this.dateAdd('day', -(weekday - 1));
            break;
        case 'month':
            this.setDate(1);
            break;
        case 'year':
            this.setMonth(0);
            this.firstDay('month');
            break;
        default:
            throw new Error('Invalid parameters');
            break;
    }
    return this;
};
Date.prototype.lastDay = function(size) {
    switch (size.toLowerCase()) {
        case 'week':
            var weekday = this.getDay();
            weekday === 0 ? weekday = 7 : '';
            this.dateAdd('day', 7 - weekday);
            break;
        case 'month':
            this.setDate(1);
            this.dateAdd('month', 1);
            this.dateAdd('day', -1);
            break;
        case 'year':
            this.setMonth(11);
            this.lastDay('month');
            break;
        default:
            throw new Error('Invalid parameters');
            break;
    }
    return this;

};

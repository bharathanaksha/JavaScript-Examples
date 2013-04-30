/**
 * Created with JetBrains WebStorm.
 * User: bharathkumarr
 * Date: 4/30/13
 * Time: 10:20 AM
 * To change this template use File | Settings | File Templates.
 */

function MyTimer(fn, timeOut) {

    this.timeout = timeOut;
    this.fn = fn;
    var timer;

    this.startTimer = function () {
        if (!this.isTimerRunning()) {
            this.isRunning = true;
            timer = setInterval(this.fn, this.timeout);
        }
    }

    this.stopTimer = function () {
        if (this.isTimerRunning()) {
            clearInterval(timer);
            this.isRunning = false;
        }
    }

    this.isTimerRunning = function () {
        return this.isRunning;
    }
}

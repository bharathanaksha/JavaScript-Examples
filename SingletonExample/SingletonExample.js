/**
 * Created with JetBrains WebStorm.
 * User: bharathkumarr
 * Date: 4/29/13
 * Time: 8:50 AM
 * To change this template use File | Settings | File Templates.
 */

var SingletonExample = (function(){

    var x = 10;

    function SingletonExample() {
        /**
         * This is a Public method.
         */
         this.printAB = function() {
            console.log(" PRINTING AB IN PUBLIC METHOD");
             printXY();
        }
    }

    /**
     * This is a private method.
     */
    function printXY() {
        console.log(" PRINTING XY IN PRIVATE METHOD");
    }

    var instance;
    return {
        getInstance: function(){
            if (instance == null) {
                instance = new SingletonExample();
                // Hide the constructor so the returned objected can't be new'd...
                instance.constructor = null;
            }
            return instance;
        }
    };
})();


var calc = SingletonExample.getInstance();
calc.printAB();

//This will come up with an error (Uncaught TypeError: object is not a function).
var calc2 = new SingletonExample();
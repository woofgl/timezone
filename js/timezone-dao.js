<!-- timeZone Dao -->
(function () {


    function readFromStorage(){
        var timeZoneString = localStorage.getItem("timeZone");
        if (timeZoneString){
            return JSON.parse(timeZoneString) || [];
        }else{
            return [];
        }
    }

    function saveToStorage(data){
       if(data){
           localStorage.timeZone = JSON.stringify(data);
       }
    }
    var _timeZone = readFromStorage();


    function TimeZoneDao() {
        TimeZoneDao._super.constructor.call(this, _timeZone);
    }

    brite.inherit(TimeZoneDao, brite.dao.SimpleDao);

    var oldCreate = TimeZoneDao.prototype.create;

    TimeZoneDao.prototype.create = function(objectType, data){
        oldCreate.call(this, objectType, data);
        saveToStorage(_timeZone);
        return data;
    };

    TimeZoneDao.prototype.list = function(objectType, opts) {
       return _timeZone;
    };
    // ------ DAO Generic CRUD Interface ------ //
    TimeZoneDao.prototype.get = function (objectType, id) {
        var idx = brite.array.getIndex(_timeZone, "city", id);
        return _timeZone[idx];
    };

    TimeZoneDao.prototype.remove = function(objectType, id) {
        var oldData = this.get(objectType, id);
        var idx = brite.array.getIndex(_timeZone, "city", id);
        if (idx > -1) {
            brite.array.remove(_timeZone, idx);
            saveToStorage(_timeZone);
        } else {
            var er = "SimpleDao.remove error: Ojbect " + objectType + "[" + id + "] not found. Cannot delete.";
            brite.log.debug(er);
            throw er;
        }

        return id;
    };

    //-----------/private method-----------------//
    brite.registerDao("TimeZone", new TimeZoneDao());
})();
<!-- timeZone Dao -->	
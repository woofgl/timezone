<!-- timeZone Dao -->
(function () {

    var _timeZone = [];

    function TimeZoneDao() {
        TimeZoneDao._super.constructor.call(this, _timeZone);
    }

    brite.inherit(TimeZoneDao, brite.dao.SimpleDao);

    TimeZoneDao.prototype.list = function(objectType, opts) {
       return _timeZone;
    };
    // ------ DAO Generic CRUD Interface ------ //
    TimeZoneDao.prototype.get = function (objectType, id) {
        var idx = brite.array.getIndex(_timeZone, "city", id);
        return _timeZone[idx];
    };

    //-----------/private method-----------------//
    brite.registerDao("TimeZone", new TimeZoneDao());
})();
<!-- timeZone Dao -->	
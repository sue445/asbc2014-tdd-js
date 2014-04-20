describe("Doorkeeper", function() {
    var doorkeeper;

    beforeEach(function() {
        doorkeeper = new Doorkeeper();
    });

    it("doorkeeperオブジェクトが存在すること", function() {
        expect(doorkeeper).not.toBeNull();
    });

    it("eventCallBackが呼び出されていること", function(){
        spyOn(doorkeeper, 'eventCallback');
        doorkeeper.eventCallback();
        expect(doorkeeper.eventCallback).toHaveBeenCalled();
    });

    it("searchBaseを呼んだ時にeventCallbackが1回以上呼ばれること", function(){
        spyOn(doorkeeper, 'eventCallback');

        doorkeeper.searchBase({}, doorkeeper.eventCallback);

        waitsFor(function(){
            return doorkeeper.eventCallback.callCount > 0;
        });

        runs(function(){
            expect(doorkeeper.eventCallback).toHaveBeenCalled();
        });
    });



});

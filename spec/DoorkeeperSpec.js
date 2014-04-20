describe("Doorkeeper", function() {
    var doorkeeper;

    beforeEach(function() {
        doorkeeper = new Doorkeeper();
        spyOn(doorkeeper, 'eventCallback');
        doorkeeper.eventCallback();
    });

    it("doorkeeperオブジェクトが存在すること", function() {
        expect(doorkeeper).not.toBeNull();
    });

    it("eventCallBackが呼び出されていること", function(){
        expect(doorkeeper.eventCallback).toHaveBeenCalled();
    });

});

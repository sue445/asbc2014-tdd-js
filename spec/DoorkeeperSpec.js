describe("Doorkeeper", function() {
    var doorkeeper;

    beforeEach(function() {
        doorkeeper = new Doorkeeper();
    });

    it("doorkeeperオブジェクトが存在すること", function() {
        expect(doorkeeper).not.toBeNull();
    });

});
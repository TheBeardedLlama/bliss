describe("Core Bliss", function () {
	"use strict";

	before(function() {
		fixture.setBase('tests/fixtures');
	});

	beforeEach(function () {
		this.fixture = fixture.load('core.html');
		document.body.innerHTML += this.fixture[0];
	});

	// testing setup
	it("has the fixture on the dom", function () {
		expect($('#fixture-container')).to.not.be.null;
	});

	it("has global methods and aliases", function() {
		expect(Bliss).to.exist;
		expect($).to.exist;
		expect($$).to.exist;

		expect($).to.equal(Bliss);
		expect($$).to.equal($.$);
	});
});

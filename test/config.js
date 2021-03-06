'use strict';

const Lab = require('@hapi/lab');
const Code = require('@hapi/code');
const Config = require('../config');

const lab = exports.lab = Lab.script();

lab.experiment('Config', () => {

    lab.test('it gets config data', (done) => {

        Code.expect(Config.get('/')).to.be.an.object();
        done();

    });

    lab.test('it gets config meta data', (done) => {

        Code.expect(Config.meta('/')).to.match(/This file configures Timmys API/i);
        done();

    });

});

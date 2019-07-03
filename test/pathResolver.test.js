/* eslint-disable no-unused-vars */
/* eslint-disable node/no-unpublished-require */
/* eslint-disable no-undef */
const assert = require('assert')
const expect = require('chai').expect
const pathResolver = require('../utility/pathResolver')

describe('pathResolver', function(){
	it('should return specified folder path', () => {
		expect(pathResolver('notifications')).equal('notifications/')
	})
})
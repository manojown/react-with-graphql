'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Group Schema
 */
var CareerSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Player name',
		trim: true
	},
	type: {
		type: String,
		enum: ['test', 'odi', 'wc', 't20', 'ipl']
	},
	match: {
		type: Number,
	},
	inningBatted: {
		type: Number,
	},
	notOut: {
		type: Number,
	},
	runs: {
		type: Number,
	},
	hundreds: {
		type: Number,
	},
	fifties: {
		type: Number,
	},
	fours: {
		type: Number,
	},
	sexes: {
		type: Number,
	},
	created: {
		type: Date,
		default: Date.now
	}
});

exports.CareerSchema = mongoose.model('Career', CareerSchema);
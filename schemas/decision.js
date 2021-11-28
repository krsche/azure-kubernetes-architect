const config = require('./config')
const _ = require('./helpers')

const questionExcerpted = [
	'path',
	'slug',
	'inputName',
	'shortTitle'
]
const factorExcerpted = [
	'path',
	'slug',
	'inputValue',
	'title',
	'points',
	'description'
]

/**
 * Decision Schema
 *
 */
class DecisionSchema {
	constructor () {
		return this
	}

	normalize (questionObj, factorObj) {
		const decision = {}
		decision.key = questionObj.inputName
		decision.value = factorObj.inputValue
		decision.question = _.only(questionObj, questionExcerpted)
		decision.factor = _.only(factorObj, factorExcerpted)
		return decision
	}
}

const schema = new DecisionSchema()
module.exports = schema

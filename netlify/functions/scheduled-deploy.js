// https://www.netlify.com/blog/how-to-schedule-deploys-with-netlify/?fbclid=IwAR1_9LI-a6h60HX65z8BSKhgAd0CC0KpiUFmlBRSAPIpL-MronBz6RTOfBs

import fetch from 'node-fetch'
import { schedule } from '@netlify/functions'

// This is a sample build hook URL
const BUILD_HOOK = 'https://api.netlify.com/build_hooks/65a4404effa330b85f1f5a87'

const handler = schedule('0 0 * * 1,3,5', async () => {
	await fetch(BUILD_HOOK, {
		method: 'POST'
	}).then(response => {
		console.log('Build hook response:', response)
	})

	return {
		statusCode: 200
	}
})

export { handler }
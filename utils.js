/**
 * PPY React Project
 * Created By Zwei in 2017/02/20
 */

import React, { Component } from 'react-native'

export default class Utils {

	static get(url, callback) {
		fetch(url)
			.then((response) => response.text())
			.then((responseText) => {
				callback(JSON.parse(responseText));
			}).done();
	}

	static post(url, data, callback, type = 'application/json') {
		var fetchOptions = {
			method: 'POST',
			headers: {
				'Accept': type,
				//json形式
				'Content-Type': type
			},
			body: JSON.stringify(data)
		};

		fetch(url, fetchOptions)
			.then((response) => response.text())
			.then((responseText) => {
				callback(JSON.parse(responseText));
			}).done();
	}
}
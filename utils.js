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
				'Content-Type': type
			},
			body: JSON.stringify(data) 
			//body: queryString.stringify(data)//如果解析不出来，可能是服务器解析方式与fetch不合，请将type改为application/x-www-form-urlencode，且body: queryString.stringify(data)
		};

		fetch(url, fetchOptions)
			.then((response) => response.text())
			.then((responseText) => {
				callback(JSON.parse(responseText));
			}).done();
	}
	
	//去除英文括号
	static clearBracket(aString) {
		if(aString.indexOf("(") >= 0) {
			aString = aString.replace("(", "")
			aString = aString.replace(")", "")
		}
		return aString
	}

	//解析普通链接的参数
	static analysisUriQuery(uri) {
		var urlSearch = uri.search
		var params = new Object()
		if(urlSearch.indexOf("?") == 0) {
			var paramsString = urlSearch.substr(1)
			var paramLink = paramsString.split("&linkUrl=")
			params.linkUrl = paramLink[1]
			var paramsStrings = paramLink[0].split("&")
			for(var i = 0; i < paramsStrings.length; i++) {
				params[paramsStrings[i].split("=")[0]] = paramsStrings[i].split("=")[1];
			}
		}
		return params
	}
}

let homeWorkDone = () => new Promise((resolve, reject) => resolve("Home work done"));

let wentOutToPlay = (pass) => new Promise((resolve, reject) =>
	resolve(pass + " went out to play"));

homeWorkDone().then(response => wentOutToPlay(response)).then(response => alert(response));

const request = new XMLHttpRequest();

request.open('GET', 'http://api.steampowered.com/ISteamApps/GetAppList/v0002/?format=json');
request.send();


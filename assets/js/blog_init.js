import Database from "assets/js/database.js";
const database = new Database();
var params = {};
location.search.slice(1).split("&").forEach(function(pair) {
pair = pair.split("=");
params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
});
const number = params["number"];
database.getArticle(number);
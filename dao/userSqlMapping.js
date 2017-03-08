// CRUD SQL语句
var user = {
	insert: function(){
		var timeStr = getDateTime();
		return 'INSERT INTO users(id, name, points, links, createTime) VALUES(null, ?, ?, "http", "2017-03-08")';
	}, 
	update:'update users set name=?, age=? where id=?',
	delete: 'delete from users where id=?',
	queryById: 'select * from users where id=?',
	queryAll: 'select * from users'
};

function getDateTime(){
	var date = new Date();
    var year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        hour = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();
    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    var timeStr = year + "-" + month + "-" + day + " " + hour + ":" + minutes + ":" + seconds;
    return timeStr;
}

module.exports = user;
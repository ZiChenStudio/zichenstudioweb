function run() {
	ctx.fillStyle = "rgba(0,0,0,0.1)";
	ctx.fillRect(0, 0, div.width, div.height);
	ctx.fillStyle = "green";
	ctx.font = size + "px arial";
	for (var i = 0; i < col; i++) {
		var text = str[Math.floor(Math.random() * (str.length))];
		ctx.fillText(text, i * size, drops[i] * size);
		if (drops[i] * size > div.height || Math.random() > 0.95)
			drops[i] = 0;
		drops[i]++;
	}
}
setInterval(run, 60);

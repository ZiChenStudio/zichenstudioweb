fetch('https://v1.hitokoto.cn/?c=a&c=b&c=c&c=h&c=i&c=j&c=k&encode=json&charset=utf-8')
    .then(response => response.json())
    .then(data => {
        const hitokoto = document.querySelector('#hitokoto_text')
        hitokoto.href = `https://hitokoto.cn/?uuid=${data.uuid}`
        // javascript判断出处是否为 null
        from = data.from;
        who = data.from_who;
        function isEmpty(from) {
            if (from === "") return true; //检验空字符串
            if (from === "null") return true; //检验字符串类型的null
            if (from === "undefined") return true; //检验字符串类型的 undefined
            if (!from && from !== 0 && from !== "") return true; //检验 undefined 和 null           
            if (Array.prototype.isPrototypeOf(from) && from.length === 0) return true; //检验空数组
            if (Object.prototype.isPrototypeOf(from) && Object.keys(from).length === 0) return true;  //检验空对象
            return false;
        }
        if (from) {
            from = "[" + from + "]";
        }
        else {
            from = "";
        }
        function isEmpty(who) {
            if (who === "") return true; //检验空字符串
            if (who === "null") return true; //检验字符串类型的null
            if (who === "undefined") return true; //检验字符串类型的 undefined
            if (!who && who !== 0 && who !== "") return true; //检验 undefined 和 null           
            if (Array.prototype.isPrototypeOf(who) && who.length === 0) return true; //检验空数组
            if (Object.prototype.isPrototypeOf(who) && Object.keys(who).length === 0) return true;  //检验空对象
            return false;
        }
        if (who) {
            who = data.from_who;
        }
        else {
            who = "";
        }

        // 拼接字符串，输出
        hittext = data.hitokoto + "—————" + who + from;
        hitokoto.innerText = hittext
    })
    .catch(console.error)

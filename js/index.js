function changeImg() {
	// 验证码组成库
	var arrays = new Array(
		'1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
		'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
		'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
		'u', 'v', 'w', 'x', 'y', 'z',
		'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
		'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
		'U', 'V', 'W', 'X', 'Y', 'Z'
	);
	// 重新初始化验证码
	code = '';
	// 随机从数组中获取四个元素组成验证码
	for(var i = 0; i < 4; i++) {
		// 随机获取一个数组的下标
		var r = parseInt(Math.random() * arrays.length);
		code += arrays[r];
	}
	// 验证码写入span区域
	//document.getElementById('code').innerHTML = code;
	$("#code").html(code)
}

// 验证验证码
function check() {
	var error;
	// 获取用户输入的验证码
	//var codeInput = document.getElementById('codeInput').value;
	var codeInput = $('#codeInput').val();
	if(codeInput.toLowerCase() == code.toLowerCase()) {
		error = '';
		//document.getElementById('errorTips').innerHTML = error;
		$("#errorTips").html(error)
		return true;
	} else {
		error = '验证码错误，重新输入';
		//document.getElementById('errorTips').innerHTML = error;
		$("#errorTips").html(error)
		return false;
	}
}

function tab(t) {
	var str = $(t).text();
	$(".tips").css("visibility", "hidden");
	$("input").val("");
	$(".errorTips").html("")
	if(str == "立即注册") {
		$(".submit").css("display", "none");
		$(".reg").css("display", "block");
		$(".pwd2").css("display", "block");
		$(t).html("立即登录");
		$(".pwd2").css("display", "block");
		$(".main_bar").css("height", "50rem");
		$(".tips2").css("display", "block")

		changeImg();
	} else if(str == "立即登录") {
		$(".submit").css("display", "block");
		$(".reg").css("display", "none");
		$(t).html("立即注册");
		$(".pwd2").css("display", "none");
		$(".main_bar").css("height", "45rem");
		$(".tips2").css("display", "none");

		changeImg();
	}
}

function userChange(t) {
	var str = $(t).val();
	if($(t).hasClass("name")) {

		if(str.length < 6 || !(/^(?=.*[a-z])[a-z0-9]+/ig.test(str))) {
			$(t).next().css("visibility", "visible")
		} else {
			$(t).next().css("visibility", "hidden")
		}
	} else if($(t).hasClass("pwd")) {
		if(str.length < 6) {
			$(t).next().css("visibility", "visible")
		} else {
			$(t).next().css("visibility", "hidden")
		}
	}

}

function submit_test() {
	var flag = false;
	var name = $(".name").val();
	var pwd1 = $(".pwd1").val();
	var codeInput = $('#codeInput').val();
	var code = $("#code").text();

	if(name.length < 6 || !(/^(?=.*[a-z])[a-z0-9]+/ig.test(name))) {
		flag = false;
		$(".name").next().css("visibility", "visible")
		return false
	} else {
		flag = true
		$(".name").next().css("visibility", "hidden")
	}
	if(pwd1.length < 6) {
		$(".pwd1").next().css("visibility", "visible")
		flag = false;
		return false
	} else {
		$(".pwd1").next().css("visibility", "hidden")
		flag = true
	}
	if(codeInput.toLowerCase() !== code.toLowerCase()) {
		flag = false;
		return false
	} else {
		flag = true
	}

	return flag
}

function reg_test() {
	var flag = false;
	var name = $(".name").val();
	var pwd1 = $(".pwd1").val();
	var pwd2 = $(".pwd2").val();
	var codeInput = $('#codeInput').val();
	var code = $("#code").text();

	if(name.length < 6 || !(/^(?=.*[a-z])[a-z0-9]+/ig.test(name))) {
		flag = false;
		$(".name").next().css("visibility", "visible");
		return false
	} else {
		flag = true
		$(".name").next().css("visibility", "hidden")
	}
	if(pwd1.length < 6) {
		$(".pwd1").next().css("visibility", "visible")
		flag = false;
		return false
	} else {
		$(".pwd1").next().css("visibility", "hidden")
		flag = true
	}
	if(pwd2.length < 6) {
		$(".pwd2").next().css("visibility", "visible")
		flag = false;
		return false
	} else {
		$(".pwd2").next().css("visibility", "hidden")
		flag = true
	}

	if(pwd2 == pwd1) {
		$(".pwd2").next().css("visibility", "hidden")
		flag = true
	} else {
		$(".pwd2").next().css("visibility", "visible").html("亲耐的童鞋，两次输入的密码咋不一样涅")
		flag = false;
		return false
	}

	if(codeInput.toLowerCase() !== code.toLowerCase()) {
		flag = false;
		return false
	} else {
		flag = true
	}

	return flag
}

function education_bc(str) {
	var edu_bc = "";
	if(str == "1") {
		edu_bc = "小学"
	} else if(str == "2") {
		edu_bc = "初中"
	} else if(str == "3") {
		edu_bc = "高中"
	} else if(str == "4") {
		edu_bc = "大专"
	} else if(str == "5") {
		edu_bc = "本科"
	} else if(str == "6") {
		edu_bc = "硕士"
	} else if(str == "7") {
		edu_bc = "博士"
	} else if(str == "8") {
		edu_bc = "不限"
	}
	return edu_bc
}

function type(str) {
	var typeStr = "";
	if(str == "1") {
		typeStr = "校招"
	} else if(str == "2") {
		typeStr = "社招"
	}
	return typeStr
}

function getcityId(str) {
	var cityId = "";
	if(str == "慈溪") {
		cityId = "1"
	} else if(str == "南京") {
		cityId = "2"
	} else if(str == "上海") {
		cityId = "3"
	} else if(str == "深圳") {
		cityId = "4"
	} else if(str == "杭州") {
		cityId = "5"
	} else if(str == "远程") {
		cityId = "6"
	}

	return cityId
}

function getExperience(str) {
	var experience = str;
	if(str == "0") {
		experience = "工作经验不限"
	} else if(str == "10") {
		experience = "10年以上"
	} else {
		experience = str
	}
	return experience
}

function success_query(data, e) {
	console.log(data);
	if(!e) {
		prodemo(data);
		return false;
	}
	var datainto = 0;
	if(data[0] == "" || data[0] == undefined) {
		var html = '<div class="container-right-part"><div class="container-right-parts"><p class="container-right-parts-left-title">暂无职位</p></div></div>'
		$(".container-right").html(html)
	} else {
		$(".container-right").html("")
		for(var i = 0; i < data.length; i++) {
			var isTop="&nbsp";
			if(data[i].isTop=="1"){
				isTop = '<img src="img/hot.png" /><a>急招</a>'
			}
			//判断招聘类型
			var dataType = data[i].type;
			var typeStr = type(dataType);
			//判断学历背景
			var edu = data[i].education_background;
			var edu_bc = education_bc(edu);

			var work_experience = data[i].work_experience;
			if(data[i].work_experience == "0") {
				work_experience = "工作经验不限"
			} else if(data[i].work_experience == "10") {
				work_experience = "10年以上"
			} else {
				work_experience = data[i].work_experience;
			}
			if(e !== "0年") {
				if(data[i].work_experience != "0") {
					datainto++;
					var html = '<div class="container-right-part">' +
						'<p class="hide message_id">' + data[i].message_id + '</p>' +
						'<div class="container-right-parts">' +
						'<div class="container-right-parts-left">' +
						'<p class="container-right-parts-left-title">' + data[i].position_name + '</p>' +
						'<p class="container-right-parts-left-price">' + data[i].salary + '</p>' +
						'<p class="container-right-parts-left-idonotknow"><a class="typeStr">' + typeStr + '</a><a class="split">|</a><a>' + work_experience + '</a><a class="split">|</a><a>' + edu_bc + '</a></p>' +
						'</div>' +
						'<div class="container-right-parts-right">' +
						'<p class="container-right-parts-right-top">' + isTop + '</p>' +
						'<p class="container-right-parts-right-dep">' + data[i].department_name + '</p>' +
						'<p class="container-right-parts-right-time"><a>发布日期</a><a class="split">|</a><a>' + data[i].add_time + '</a></p>' +
						'</div>' +
						'<div class="clear"></div>' +
						'</div>' +
						'</div>';
					$(".container-right").append(html);
				}
			} else {
				datainto++;
				var html = '<div class="container-right-part">' +
					'<p class="hide message_id">' + data[i].message_id + '</p>' +
					'<div class="container-right-parts">' +
					'<div class="container-right-parts-left">' +
					'<p class="container-right-parts-left-title">' + data[i].position_name + '</p>' +
					'<p class="container-right-parts-left-price">' + data[i].salary + '</p>' +
					'<p class="container-right-parts-left-idonotknow"><a class="typeStr">' + typeStr + '</a><a class="split">|</a><a>' + work_experience + '</a><a class="split">|</a><a>' + edu_bc + '</a></p>' +
					'</div>' +
					'<div class="container-right-parts-right">' +
					'<p class="container-right-parts-right-top">' + isTop + '</p>' +
					'<p class="container-right-parts-right-dep">' + data[i].department_name + '</p>' +
					'<p class="container-right-parts-right-time"><a>发布日期</a><a class="split">|</a><a>' + data[i].add_time + '</a></p>' +
					'</div>' +
					'<div class="clear"></div>' +
					'</div>' +
					'</div>';
				$(".container-right").append(html);
			}
		}
		console.log(datainto)
		if(datainto == 0) {
			var html = '<div class="container-right-part"><div class="container-right-parts"><p class="container-right-parts-left-title">暂无职位</p></div></div>'
			$(".container-right").html(html)
		}
	}
}

function prodemo(data) {
	if(data[0] == "" || data[0] == undefined) {
		var html = '<div class="container-right-part"><div class="container-right-parts"><p class="container-right-parts-left-title">暂无职位</p></div></div>'
		$(".container-right").html(html)
	} else {
		$(".container-right").html("")
		for(var i = 0; i < data.length; i++) {
			var isTop="&nbsp";
			if(data[i].isTop=="1"){
				isTop = '<img src="img/hot.png" /><a>急招</a>'
			}
			//判断招聘类型
			var dataType = data[i].type;
			var typeStr = type(dataType);
			//判断学历背景
			var edu = data[i].education_background;
			var edu_bc = education_bc(edu);

			var work_experience = data[i].work_experience;
			if(data[i].work_experience == "0") {
				work_experience = "工作经验不限"
			} else if(data[i].work_experience == "10") {
				work_experience = "10年以上"
			} else {
				work_experience = data[i].work_experience;
			}
			var html = '<div class="container-right-part">' +
				'<p class="hide message_id">' + data[i].message_id + '</p>' +
				'<div class="container-right-parts">' +
				'<div class="container-right-parts-left">' +
				'<p class="container-right-parts-left-title">' + data[i].position_name + '</p>' +
				'<p class="container-right-parts-left-price">' + data[i].salary + '</p>' +
				'<p class="container-right-parts-left-idonotknow"><a class="typeStr">' + typeStr + '</a><a class="split">|</a><a>' + work_experience + '</a><a class="split">|</a><a>' + edu_bc + '</a></p>' +
				'</div>' +
				'<div class="container-right-parts-right">' +
				'<p class="container-right-parts-right-top">' + isTop + '</p>' +
				'<p class="container-right-parts-right-dep">' + data[i].department_name + '</p>' +
				'<p class="container-right-parts-right-time"><a>发布日期</a><a class="split">|</a><a>' + data[i].add_time + '</a></p>' +
				'</div>' +
				'<div class="clear"></div>' +
				'</div>' +
				'</div>';
			$(".container-right").append(html);
		}
	}
}
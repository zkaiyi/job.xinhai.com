function query_all_value(){
	$.ajax({
		type:"post",
		url:url_path,
		data:{
			"operation":"query_all_value"
		},
		dataType:"json",
		success:function(data){
			success_query(data)
		},
		error:function(){}
	})
}
function query_specified(){

	var str=location.href.split("?")[1];
	var message_id = str.split("=")[1];
	

	$.ajax({
		type:"post",
		url:url_path,
		data:{
			"operation":"query_specified",
			"message_id":message_id
		},
		dataType:"json",
		success:function(data){
			console.log(data)
			//判断招聘类型
			var dataType = data.type;
			var typeStr = type(dataType);
			//判断学历背景
			var edu = data.education_background;
			var edu_bc = education_bc(edu);
			
			$(".position_name").html(data.position_name);
			$(".job-price").html(data.salary);
			$(".type").html(typeStr);
			
			var work_experience=data.work_experience;
			if(data.work_experience=="0"){
				work_experience="工作经验不限"
			}else if(data.work_experience=="10"){
				work_experience="10年以上"
			}else{
				work_experience=data.work_experience;
			}
			
			$(".work_experience").html(work_experience);
			$(".education_background").html(edu_bc);
			$(".department_name").html(data.department_name);
			$(".expiration_date").html(data.add_time);
			$(".job_require").html(data.job_require);
		},
		error:function(){}
	});

}



function query_department(){
	$.ajax({
		type:"post",
		url:url_path,
		data:{
			"operation":"query_department"
		},
		dataType:"json",
		success:function(data){
			if(data=="" || data==undefined){
				
			}else{
				for(var i=0;i<data.length;i++){
					var html = '<div class="container-left-main-bars" data-departmentId="'+data[i].department_id+'">'+data[i].department_name+'</div>';
					$(".query_department").prepend(html);
				}
			}
		},
		error:function(){}
	})
}
function query_position(){
	$.ajax({
		type:"post",
		url:url_path,
		data:{
			"operation":"query_position"
		},
		dataType:"json",
		success:function(data){
			if(data=="" || data==undefined){
				
			}else{
				for(var i=0;i<data.length;i++){
					var html = '<div class="container-left-main-bars" data-departmentId="'+data[i].department_id+'"  data-positionId="'+data[i].position_id+'">'+data[i].position_name+'</div>';
					$(".query_position").prepend(html);
				}
			}
		},
		error:function(){}
	});
}


function queryByDepartmentId(t){
	var departmentId = $(t).data("departmentid");
	$.ajax({
		type:"post",
		url:url_path,
		data:{
			"operation":"query_all_value",
			"department_id":departmentId
		},
		dataType:"json",
		success:function(data){
			
			success_query(data)
		},
		error:function(){}
	});
}

function queryByPositionId(t){
	var positionId = $(t).data("positionid");
	$.ajax({
		type:"post",
		url:url_path,
		data:{
			"operation":"query_all_value",
			"position_id":positionId
		},
		dataType:"json",
		success:function(data){
			
			success_query(data)
		},
		error:function(){}
	});
}

function queryCityId(t){
	var str = $(t).text();
	var city_id=getcityId(str);

	$.ajax({
		type:"post",
		url:url_path,
		data:{
			"operation":"query_all_value",
			"city":city_id
		},
		dataType:"json",
		success:function(data){
			console.log(data)
			success_query(data)
		},
		error:function(){}
	});
}
function queryByType(t){
	var container_right_part = $(".container-right-part");
	if($(t).text()=="校招"){
		for(var i=0;i<container_right_part.length;i++){
			var type = $(container_right_part[i]).find(".typeStr").text();
			if(type=="校招"){
				$(container_right_part[i]).css("display","block")
			}else{
				$(container_right_part[i]).css("display","none")
			}
		}
	}else if($(t).text()=="社招"){
		for(var i=0;i<container_right_part.length;i++){
			var type = $(container_right_part[i]).find(".typeStr").text();
			if(type=="社招"){
				$(container_right_part[i]).css("display","block")
			}else{
				$(container_right_part[i]).css("display","none")
			}
		}
	}
}
function myApplication(){
	var user_ids = sessionStorage.getItem("user_ids");
	$.ajax({
		 type:"post",
		 url:url_path,
		 data:{
		 	"operation":"query_user_info_v",
		 	"user_ids":user_ids
		 },
		 dataType:"json",
		 success:function(data){
		 	console.log(data)
		 	if(data[0]==undefined){
		 		nodata();
		 	}else{
		 		success_query(data)
		 	}
		 },
		 error:function(err){
		 	console.log(err)
		 }
	})
}


function nodata(){
	var html = '<div class="container-right-part"><div class="container-right-parts"><p class="container-right-parts-left-title">暂无职位</p></div></div>'
	$(".container-right").html(html)
}


function myOffer(){
	$.ajax({
		 type:"post",
		 url:url_path,
		 data:{
		 	"operation":"query_user_info_v",
		 	"offer":"1"
		 },
		 dataType:"json",
		 success:function(data){

		 	if(data[0]==undefined){
		 		nodata();
		 	}else{
		 		success_query(data)
		 	}
		 },
		 error:function(err){
		 	console.log(err)
		 }
	})
}


function connectXH(){
	$(".container-right").html('<div class="connect-xinhai-container">'+
													'<img class="about" src="img/aboutImg-1.jpg" />'+
													'<div>'+
														'<img src="img/address.png" /><a>中国宁波慈溪市永清南路8号</a>'+
													'</div>'+
													'<div>'+
														'<img src="img/email.png" /><a>156465@133.com</a>'+
													'</div>'+
													'<div>'+
														'<img src="img/icon-connect.png" /><a>0574-123454678</a>'+
													'</div>'+
												'</div>');
}

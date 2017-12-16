function nb(){
	var cityIdStr = $(".query_city").find(".orange").text();
	var cityId = getcityId(cityIdStr);

	var typeStr = $(".query_type").find(".orange").text();
	var type = "";
	if(typeStr=="校招"){
		type="1"
	}else if(typeStr=="社招"){
		type="2"
	}
	var experience_id = $(".query_experience").find(".orange").data("wordage");

	//var department_id2 = $(".query_department").find(".orange").text();
	//var position_id2 = $(".query_position").find(".orange").text();
	
	var department_id = String($(".query_department").find(".orange").data("departmentid"));
	var position_id = String($(".query_position").find(".orange").data("positionid"));
	
	var dataArray={};
	
	
	dataArray.operation="query_all_value";
	console.log(experience_id)
	if(experience_id!==undefined && experience_id!==""){
		dataArray.workingage = experience_id;
	}
	
	if(cityId!=="undefined" && cityId!==""){
		dataArray.city = cityId;
	}
	if(department_id!=="undefined"){
		dataArray.department_id = department_id;
	}
	if(position_id!=="undefined"){
		dataArray.position_id = position_id;
	}
	if(type!=="undefined" && type!==""){
		dataArray.type = type;
	}
	console.log(dataArray)
	$.ajax({
		type:"post",
		url:url_path,
		data:dataArray,
		dataType:"json",
		success:function(data){
			console.log(data)
			success_query(data,experience_id)
		},
		error:function(){}
	})
}

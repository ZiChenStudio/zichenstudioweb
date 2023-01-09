$('#button').click(function() {
	var num10 = $('#num').val();
	$('#num').val('');
	num10 = Number(num10)
	num16 = num10.toString(16);
	$('#awr').html(num16);
});

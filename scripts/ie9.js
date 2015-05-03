$(function(){
	$("#MainMenu .list-group-item").on("click",function(){
		$this = $(this);
		if($this.next().hasClass("in")){
			$this.next().removeClass("in");
		}else{
			$this.next().addClass("in");
		}
	})
});
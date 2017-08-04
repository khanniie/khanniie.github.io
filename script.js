$(".code-morph").hover(function() {
    if(!$(".code-morph").hasClass("morphed") && $(document).width() > 768){
    	document.getElementById("codeimg").src = 'images/code-ani-faster.gif'+'?a=' + Math.random();
    	$(".code-morph").addClass("morphed");
    }
}, function() {
	if($(".code-morph").hasClass("morphed")){
        document.getElementById("codeimg").src = 'images/code-ani-one.png';
    	$(".code-morph").removeClass("morphed");
    }
});

$(".art-morph").hover(function() {
    if(!$(".art-morph").hasClass("morphed") && $(document).width() > 768){
    	document.getElementById("artimg").src = 'images/art-ani-faster.gif'+'?a=' + Math.random();
    	$(".art-morph").addClass("morphed");
    }
}, function() {
	if($(".art-morph").hasClass("morphed")){
        document.getElementById("artimg").src = 'images/art-ani-one.png';
    	$(".art-morph").removeClass("morphed");
    }
});

$(".about-morph").hover(function() {
    if(!$(".about-morph").hasClass("morphed") && $(document).width() > 768){
    	document.getElementById("aboutimg").src = 'images/about-ani-faster.gif'+'?a=' + Math.random();
    	$(".about-morph").addClass("morphed");
    }
}, function() {
	if($(".about-morph").hasClass("morphed")){
        document.getElementById("aboutimg").src = 'images/about-ani-one.png';
    	$(".about-morph").removeClass("morphed");
    }
});
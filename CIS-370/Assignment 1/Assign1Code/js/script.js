 $(document).ready(function()
    {
	getHeader();
	getFooter();
	getPicture();
	
	$(".imageLoad").each(function() {
        this.onload = function() {
            $(this).animate({opacity: .8}, 4000);
        };
        this.src = this.getAttribute("src");
    });
	
	}, false);
	

	
	
function getPicture() {

      var pic = randomPic();
	  $('#headmiddle').html(pic);  
      }


function getHeader()
{
	var header = '<nav class="navbar navbar-default navbar-fixed-top">' +
                   '<div class="container-fluid">' +
					'<div class="navbar-header">' +
					'<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">' +
						'<span class="sr-only">Toggle navigation</span>' +
						'<span class="icon-bar"></span>' +
						'<span class="icon-bar"></span>' +
						'<span class="icon-bar"></span>' +
					'</button>' +
						'<a class="navbar-brand" href="#">' +
						   '<img width="80" alt="Logo" src="../images/logo.png"/>' +
						'</a>' +
						'<div class="logoText"> <span class="tclb">Audio</span><span class="tclg">Nexus</span></div>' +
					'</div>' +
				    '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">' +
						  '<ul class="nav navbar-nav navbar-right">' +
							'<li class="active"><a href="#">HOME</a></li>' + /*THIS CLASS ACTIVE NEEDS TO BE FIXED*/
							'<li><a href="">ABOUT</a></li>' +
							'<li><a href="#">ADMIN</a></li>' +
							'<li class="dropdown">'+
								  '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">HELP <span class="caret"></span></a>' +
								  '<ul class="dropdown-menu" role="menu">'+
									'<li><a href="#">ABOUT</a></li>' +
									'<li><a href="#">IDEAS</a></li>' +
									'<li class="divider"></li>' +
									'<li><a href="../view/checksheet.html">CHECKSHEET</a></li>' +
								  '</ul>' +
							'</li>' +
							'<li>' +
						    '<a class="userLoginImage pull-right" href="">' +
						     '<img title="Sign In"width="50" alt="user login image" src="../images/user.png"/>' +
						    '</a>' +
						  '</li>' +
						  '</ul>' +
						  
                    '</div><!-- /.navbar-collapse -->' +
                '</div>' +
            '</nav>';
	$('#mainHeader').html(header);
}
	  
function getFooter() {

        var footer = '<a href="mailto:michele.a.gregory@gmail.com"> Comments </a>'
					+ ' Copyright &copy; 2015'
		            +'<a href="newsletter.html"> <img src="../images/mail.png" width="80" height="80" float="right" /> </a>'
					+'<ul class="pull-right" style="list-style-type: none;">'
				    +   '<li class="pull-left"><a href="https://www.facebook.com/"><img class="socialMediaIcons" src="../images/Ifacebook.png" alt="Facebook Icon" title="Go To Facebook" /></a></li>'
				    +   '<li class="pull-left"><a href="https://twitter.com/"><img class="socialMediaIcons" src="../images/Itwitter.png" alt="Twitter Icon" title="Go To Twitter" /></a></li>'
			        +   '<li class="pull-left"><a href="https://instagram.com/accounts/login/"><img class="socialMediaIcons" src="../images/Iinstagram.png" alt="Instagram Icon" title="Go To Instagram"/></a></li>'
				    +   '<li class="pull-left"><a href="https://www.youtube.com/"><img class="socialMediaIcons" src="../images/Iyoutube.png" alt="Youtube Icon" title="Go To Youtube"/></a></li>'
			        +'</ul>';
                	
		
		$('#mainFooter').html(footer);
      //document.getElementById("mainFooter").innerHTML = "Copyright &copy; 2015";
	  }
	  
	  
function randomPic() {

      var picOne = '<img class="imageLoad" src="../images/guitarDesert.PNG" alt="Man in the desert with a guitar" title="" id="fadeIn"   />'; //onload="picLoad(this)
	  var picTwo = '<img class="imageLoad" src="../images/guitarKnobs.PNG" alt="The end of the guitar neck" title="" id="fadeIn"  />';
	  var picThree = '<img class="imageLoad" src="../images/levels.PNG" alt="A guy setting levels on a musical instrument" title="" id="fadeIn"  />';
	  var picFour ='<img class="imageLoad" src="../images/liveShow.PNG" alt="A setting of a concert" title="" id="fadeIn"  />';
	  var picFive ='<img class="imageLoad" src="../images/liveSinging.PNG" alt="A guitarist singing" title="" id="fadeIn"  />';
	  var picSix = '<img class="imageLoad" src="../images/sitting.PNG" alt="A guy sitting and looking at the city-scape" title="" id="fadeIn"  />';
	  
	  var arr = [];
	  arr[0] = picOne;
      arr[1] = picTwo;
	  arr[2] = picThree;
	  arr[3] = picFour;
	  arr[4] = picFive;
	  arr[5] = picSix;
	  
	  var rand = Math.floor(Math.random() * 6);
	  return arr[rand];
	  
}

$( document ).delegate("#videoplayer", "pageinit", function() { });


//  new page control
$( document ).delegate("#home", "pageinit", function() {
  //alert('A page with an id of "aboutPage" was just created by jQuery Mobile!');
  

  
 var x =document.getElementsByClassName('ui-icon-check');
console.log(x);
$(x).removeClass('ui-icon-check').addClass('icon-music');

var y =document.getElementsByClassName('ui-icon-star');

$(y).removeClass('ui-icon-star').addClass('icon-facetime-video'); 

  $("#buttonId").removeClass().addClass("ui-grid-c");
$("#add3,#add7").removeClass().addClass("ui-block-c");
$("#add4,#add8").removeClass().addClass("ui-block-d");
  
 $('#fade').bind("click", function(){
$('#add1,#add2,#add3,#add4').fadeOut('slow');
$('#add1,#add2,#add3,#add4').css('display', 'none');
$('#add5,#add6,#add7,#add8').fadeIn('slow');
//$('#add5,#add6,#add7,#add8').slideUp('slow');
});

$('#fade2').bind("click", function(){
$('#add5,#add6,#add7,#add8').fadeOut('slow');
$('#add5,#add6,#add7,#add8').css('display', 'none');
$('#add1,#add2,#add3,#add4').fadeIn('slow');

});
});

//  new page control
$( document ).delegate("#Lotto", "pageinit", function() {
  //windows.alert('A page with an id of "aboutPage" was just created by jQuery Mobile!');
  //window.alert("events")
  

  
 var a =document.getElementsByClassName('ui-icon-check');

$(a).removeClass('ui-icon-check').addClass('icon-music');

var b =document.getElementsByClassName('ui-icon-star');

$(b).removeClass('ui-icon-star').addClass('icon-facetime-video'); 
  $("#buttonId1").removeClass().addClass("ui-grid-c");
$("#add31,#add71").removeClass().addClass("ui-block-c");
$("#add41,#add81").removeClass().addClass("ui-block-d");
  
 $('#fade1').bind("click", function(){
$('#add11,#add21,#add31,#add41').fadeOut('slow');
$('#add11,#add21,#add31,#add41').css('display', 'none');
$('#add51,#add61,#add71,#add81').fadeIn('slow');
//$('#add5,#add6,#add7,#add8').slideUp('slow');
});

$('#fade21').bind("click", function(){
$('#add51,#add61,#add71,#add81').fadeOut('slow');
$('#add51,#add61,#add71,#add81').css('display', 'none');
$('#add11,#add21,#add31,#add41').fadeIn('slow');

});
});
//

//  new page control
$( document ).delegate("#Results", "pageinit", function() {
  //alert('A page with an id of "aboutPage" was just created by jQuery Mobile!');
  

  
 var c =document.getElementsByClassName('ui-icon-check');

$(c).removeClass('ui-icon-check').addClass('icon-music');

var d =document.getElementsByClassName('ui-icon-star');

$(d).removeClass('ui-icon-star').addClass('icon-facetime-video'); 

  $("#buttonId2").removeClass().addClass("ui-grid-c");
$("#add32,#add72").removeClass().addClass("ui-block-c");
$("#add42,#add82").removeClass().addClass("ui-block-d");
  
 $('#fade20').bind("click", function(){
$('#add12,#add22,#add32,#add42').fadeOut('slow');
$('#add12,#add22,#add32,#add42').css('display', 'none');
$('#add52,#add62,#add72,#add82').fadeIn('slow');
//$('#add5,#add6,#add7,#add8').slideUp('slow');
});

$('#fade22').bind("click", function(){
$('#add52,#add62,#add72,#add82').fadeOut('slow');
$('#add52,#add62,#add72,#add82').css('display', 'none');
$('#add12,#add22,#add32,#add42').fadeIn('slow');

});
});
//

//  new page control
$( document ).delegate("#clubNews", "pageinit", function() {
  //alert('A page with an id of "aboutPage" was just created by jQuery Mobile!');
  

  
var e =document.getElementsByClassName('ui-icon-check');

$(e).removeClass('ui-icon-check').addClass('icon-music');

var f =document.getElementsByClassName('ui-icon-star');

$(f).removeClass('ui-icon-star').addClass('icon-facetime-video');  
  $("#buttonId3").removeClass().addClass("ui-grid-c");
$("#add33,#add73").removeClass().addClass("ui-block-c");
$("#add43,#add83").removeClass().addClass("ui-block-d");
  
 $('#fade3').bind("click", function(){
$('#add13,#add23,#add33,#add43').fadeOut('slow');
$('#add13,#add23,#add33,#add43').css('display', 'none');
$('#add53,#add63,#add73,#add83').fadeIn('slow');
//$('#add5,#add6,#add7,#add8').slideUp('slow');
});

$('#fade23').bind("click", function(){
$('#add53,#add63,#add73,#add83').fadeOut('slow');
$('#add53,#add63,#add73,#add83').css('display', 'none');
$('#add13,#add23,#add33,#add43').fadeIn('slow');

});
});
//

//  new page control
$( document ).delegate("#socialMedia", "pageinit", function() {
  //alert('A page with an id of "aboutPage" was just created by jQuery Mobile!');

  
  var g =document.getElementsByClassName('ui-icon-check');

$(g).removeClass('ui-icon-check').addClass('icon-music');

var h =document.getElementsByClassName('ui-icon-star');

$(h).removeClass('ui-icon-star').addClass('icon-facetime-video');
  $("#buttonId4").removeClass().addClass("ui-grid-c");
$("#add34,#add74").removeClass().addClass("ui-block-c");
$("#add44,#add84").removeClass().addClass("ui-block-d");
  
 $('#fade4').bind("click", function(){
$('#add14,#add24,#add34,#add44').fadeOut('slow');
$('#add14,#add24,#add34,#add44').css('display', 'none');
$('#add54,#add64,#add74,#add84').fadeIn('slow');
//$('#add5,#add6,#add7,#add8').slideUp('slow');
});

$('#fade24').bind("click", function(){
$('#add54,#add64,#add74,#add84').fadeOut('slow');
$('#add54,#add64,#add74,#add84').css('display', 'none');
$('#add14,#add24,#add34,#add44').fadeIn('slow');

});
});
//

//  new page control
$( document ).delegate("#FindUs", "pageinit", function() {
  //alert('A page with an id of "aboutPage" was just created by jQuery Mobile!');
  

  
  var i =document.getElementsByClassName('ui-icon-check');

$(i).removeClass('ui-icon-check').addClass('icon-music');

var j =document.getElementsByClassName('ui-icon-star');

$(j).removeClass('ui-icon-star').addClass('icon-facetime-video');
  $("#buttonId5").removeClass().addClass("ui-grid-c");
$("#add35,#add75").removeClass().addClass("ui-block-c");
$("#add45,#add85").removeClass().addClass("ui-block-d");
  
 $('#fade5').bind("click", function(){
$('#add15,#add25,#add35,#add45').fadeOut('slow');
$('#add15,#add25,#add35,#add45').css('display', 'none');
$('#add55,#add65,#add75,#add85').fadeIn('slow');
//$('#add5,#add6,#add7,#add8').slideUp('slow');
});

$('#fade25').bind("click", function(){
$('#add55,#add65,#add75,#add85').fadeOut('slow');
$('#add55,#add65,#add75,#add85').css('display', 'none');
$('#add15,#add25,#add35,#add45').fadeIn('slow');

});
});
//
//  new page control
$( document ).delegate("#Videos", "pageinit", function() {
  //alert('A page with an id of "aboutPage" was just created by jQuery Mobile!');
  var k =document.getElementsByClassName('ui-icon-check');

$(k).removeClass('ui-icon-check').addClass('icon-music');

var l=document.getElementsByClassName('ui-icon-star');

$(l).removeClass('ui-icon-star').addClass('icon-facetime-video');
  $("#buttonId6").removeClass().addClass("ui-grid-c");
$("#add36,#add76").removeClass().addClass("ui-block-c");
$("#add46,#add86").removeClass().addClass("ui-block-d");
  
 $('#fade6').bind("click", function(){
$('#add16,#add26,#add36,#add46').fadeOut('slow');
$('#add16,#add26,#add36,#add46').css('display', 'none');
$('#add56,#add66,#add76,#add86').fadeIn('slow');
//$('#add5,#add6,#add7,#add8').slideUp('slow');
});

$('#fade26').bind("click", function(){
$('#add56,#add66,#add76,#add86').fadeOut('slow');
$('#add56,#add66,#add76,#add86').css('display', 'none');
$('#add16,#add26,#add36,#add46').fadeIn('slow');

});
});
//

//  new page control
$( document ).delegate("#irishClasses", "pageinit", function() {
  //alert('A page with an id of "aboutPage" was just created by jQuery Mobile!');
  var m =document.getElementsByClassName('ui-icon-check');

$(m).removeClass('ui-icon-check').addClass('icon-music');

var n=document.getElementsByClassName('ui-icon-star');

$(n).removeClass('ui-icon-star').addClass('icon-facetime-video');
  $("#buttonId7").removeClass().addClass("ui-grid-c");
$("#add37,#add77").removeClass().addClass("ui-block-c");
$("#add47,#add87").removeClass().addClass("ui-block-d");
  
 $('#fade7').bind("click", function(){
$('#add17,#add27,#add37,#add47').fadeOut('slow');
$('#add17,#add27,#add37,#add47').css('display', 'none');
$('#add57,#add67,#add77,#add87').fadeIn('slow');
//$('#add5,#add6,#add7,#add8').slideUp('slow');
});

$('#fade27').bind("click", function(){
$('#add57,#add67,#add77,#add87').fadeOut('slow');
$('#add57,#add67,#add77,#add87').css('display', 'none');
$('#add17,#add27,#add37,#add47').fadeIn('slow');

});
});
//

//  new page control
$( document ).delegate("#arasContact", "pageinit", function() {
  //alert('A page with an id of "aboutPage" was just created by jQuery Mobile!');
  var o =document.getElementsByClassName('ui-icon-check');

$(o).removeClass('ui-icon-check').addClass('icon-music');

var p=document.getElementsByClassName('ui-icon-star');

$(p).removeClass('ui-icon-star').addClass('icon-facetime-video');
  $("#buttonId8").removeClass().addClass("ui-grid-c");
$("#add38,#add78").removeClass().addClass("ui-block-c");
$("#add48,#add88").removeClass().addClass("ui-block-d");
  
 $('#fade8').bind("click", function(){
$('#add18,#add28,#add38,#add48').fadeOut('slow');
$('#add18,#add28,#add38,#add48').css('display', 'none');
$('#add58,#add68,#add78,#add88').fadeIn('slow');
//$('#add5,#add6,#add7,#add8').slideUp('slow');
});

$('#fade28').bind("click", function(){
$('#add58,#add68,#add78,#add88').fadeOut('slow');
$('#add58,#add68,#add78,#add88').css('display', 'none');
$('#add18,#add28,#add38,#add48').fadeIn('slow');

});
});
//


$(document).ready(function(){

$.get(
"https://www.googleapis.com/youtube/v3/channels",{
	
	part: 'contentDetails',
	forUsername: 'ARASCHRONAIN',
	key: 'AIzaSyAuRY6bVi1LTbSQu6wGb1qm920CzpAExLk'},
	function(data){
			$.each(data.items,function(i, item){
				console.log(item);
				console.log("Dec test");
				pid = item.contentDetails.relatedPlaylists.uploads;
				
				getVids(pid);
			})
			
		}

); // get closed

function getVids(pid){
	console.log("in vids");
	var output9 ='';
	$.get(
"https://www.googleapis.com/youtube/v3/playlistItems",{
	
	part: 'snippet',
	maxResults : 10,
	playlistId : pid,
	key: 'AIzaSyAuRY6bVi1LTbSQu6wGb1qm920CzpAExLk'},
	function(data){
		
			var outputvideos;
			//var output9 ='';
			var checktitle = data.items[0].snippet.title;
			//window.alert("array",checktitle );
			$.each(data.items,function(i, item){
				
				//
				
				var title = item.snippet.title;
				var thumbnail = item.snippet.thumbnails.medium.url;
				var id = item.snippet.channelId;
				var blocktype = ((i % 2)===1) ? 'b':'a';
				var videoId = item.snippet.resourceId.videoId;
				
				//console.log("Variable check");
				//console.log(title);
				//console.log(thumbnail);
				//console.log("i =",i);
				//console.log("array =",data.length);
				//console.log(id);
				//console.log("blocktype =",blocktype);
				
				
				//console.log(item);
				//console.log("title test");
				videTitle = item.snippet.title;
				//console.log(videTitle);
				//outputvideos = '<li><iframe src ="http://www.youtube.com/embed/'+videoId+'?wmode=transparent&amp;HD=0&amp;rel=0&amp;showinfo=0&amp;controls=1&amp" frameborder="0" allowfullscreen></iframe></li>';
				
				
				output9 += '<div class="ui-block-'+blocktype+'">';
				output9 +='<div class="backgroundVideo">';
				//output9 += '<a href="#videoplayer" data-transition="fade" onclick="playVideo(\''+videoId+'\',\''+title+'\')">';
				output9 += '<a href="#videoplayer" data-transition="fade" onclick="playVideo1(\''+videoId+'\',\''+title+'\')">';

				output9 +='<h3 class="movietitle">'+title+'</h3>';
				output9 +='<img src="'+thumbnail+'" alt="'+title+'"/>';
				output9 +="</a>";
				output9 +="</div>";
				output9 +="</div>";
				//output9 +='<iframe src ="https://www.youtube.com/embed/'+videoId+'" ></iframe>';
				//console.log("code output",output9);
				
				
				//$('#videolist').append(outputvideos);
				//$('#videolist').append(output9);
				
			})
			
					$('#videolist').append(output9);

			
		}

		
);
}

}); // ready close


function playVideo1(id,title){
	//window.alert("function finish");
	var output5='<div class="backgroundVideo">';
output5 += '<h3>' + title + '</h3>';
//output5 += '<h3>hey</h3>';
output5 +='<p></p>';
//output5 +='<iframe src ="https://www.youtube.com/watch?v='+id+'?wmode=transparent&amp;HD=0&amp;rel=0&amp;showinfo=0&amp;controls=1&amp;autoplay=1" frameborder="0" allowfullscreen></iframe>';
output5 +='<iframe src ="https://www.youtube.com/embed/'+id+'?wmode=transparent&amp;HD=0&amp;rel=0&amp;showinfo=0&amp;controls=1&amp;autoplay=1"  frameborder="0" allowfullscreen></iframe>';

output5 +='</div>';
//output+='</div>';


//var output ='<iframe src ="http://www.youtube.com/embed/'+id+'?wmode=transparent&amp;HD=0&amp;rel=0&amp;showinfo=0&amp;controls=1&amp;autoplay=1" frameborder="0" allowfullscreen></iframe>';
//var output ='<iframe  src="http://www.youtube.com/embed/r-KAECwqHPg" frameborder="0" allowfullscreen></iframe>';
//output += '<h3>' + title + '</h3>';
$('#myplayer').html(output5);

console.log('vid output5',output5);
	
}

function setupPages()

{
var i = 0;
var category = "";
var category1 = "";
//function hideSplash() {
 // $.mobile.changePage("#home", "fade");
//}

 //var pageheight=$(#home).height();
//window.alert("height of the page is");
//window.alert(data.ip)
console.log('test');
window.alert("sometext");
console.log('test2');


$.ajax({
		dataType: "json",
		url: "https://public-api.wordpress.com/rest/v1.1/sites/mmcglynntowers.wordpress.com/posts/",
		success: function( responseObject){
			console.log('testSUCCESS');
												data = responseObject;
												// data.posts[0].content
												console.log(data.posts[0].content ) ;
												//console.log(data.posts[0].categories.musicSessions.name ) ;
 
												$.each(data.posts[0].categories, function(key, value){
													category = key;
												});
																								
												listposts(data)
										  }
	});

//window.alert("finish");


function showMyVideos(data) 
{

console.log(data);

//description
//var description = data.feed.entry[0].media$group.media$description.$t;
// id

var output ='';
for ( var i=0; i<data.feed.entry.length; i++)
{
var title = data.feed.entry[i].title.$t;
var thumbnail = data.feed.entry[i].media$group.media$thumbnail[0].url;
var id =data.feed.entry[i].id.$t.substring(27);
var blocktype = ((i % 2)===1) ? 'b':'a';

output += '<div class="ui-block-'+blocktype+'">';
output +='<div class="backgroundVideo">';
//output += '<a href="#videoplayer" data-transition="fade" onclick="playVideo(\''+id+'\',\''+title+'\')">';
output +='<h3 class="movietitle">'+title+'</h3>';
output +='<img src="'+thumbnail+'" alt="'+title+'"/>';
output +="</a>";
output +="</div>";
output +="</div>";
//output +="hello";

}
//$('#videolist').html(output);

}

function playVideo()
{

//console.log(id);
//console.log(title);
//var output ='<div data-role="collapsible-set">';
//output +='<div class="background" data-role="collapsible" data-collapsed="false">';
var output5='<div class="backgroundVideo">';
output5 += '<h3>' + title + '</h3>';
output5 +='<p></p>';
output5 +='<iframe src ="http://www.youtube.com/'+i+'?wmode=transparent&amp;HD=0&amp;rel=0&amp;showinfo=0&amp;controls=1&amp;autoplay=1" frameborder="0" allowfullscreen></iframe>';
output5 +='</div>';
//output+='</div>';


//var output ='<iframe src ="http://www.youtube.com/embed/'+id+'?wmode=transparent&amp;HD=0&amp;rel=0&amp;showinfo=0&amp;controls=1&amp;autoplay=1" frameborder="0" allowfullscreen></iframe>';
//var output ='<iframe  src="http://www.youtube.com/embed/r-KAECwqHPg" frameborder="0" allowfullscreen></iframe>';
//output += '<h3>' + title + '</h3>';
$('#myplayer').append(output5);

console.log('vid output5',output5);

}


function listposts(data) 


{


console.log("in listposts function");




var LottoList="";
var Results="";
clubNews
var clubNews="";



var morningClasses = "";
var eveningClasses = "";
var musicClasses = "";
var otherMusicClasses = "";
var SetDancingClasses = "";
var kidsSetDancingClasses = "";
var musicSessions = "";
var studioInfo ="";
var venueHire="";
var whyJoin ="";
var howToApply="";
var intensive="";

//var output='<div data-role="collapsible-set">';
var output='';


$.each(data.posts,function(key,val){
	
	console.log(key,val);
	
	$.each(data.posts[i].categories, function(key, value){

													category = key;
													
													console.log(key,val);
													
													console.log("check value 1 "+val.content);
												});
console.log("check value 2 "+val.content);												
var cat = Object.keys(data.posts[i].categories)[0];	
//console.log("check category extra "+cat);
//console.log("check category "+category1);
console.log("in each loop");
console.log(i);

var tempDiv = document.createElement("tempDiv");
tempDiv.innerHTML = category.excerpt;
$("a",tempDiv).remove();
var excerpt= tempDiv.innerHTML;


if (category =='lotto')
{
console.log("each condition : "+i);
//output+='<div class="background" data-role="collapsible">';

//output+='<h3>'+val.title+'</h3>';
//output+='<p>'+excerpt+'</p>';
//output+='<img src="'+val.thumbnail+'" width="90%" height="90%" alt ="'+val.title+'" />';
//output+='</div>';
LottoList+=''+val.content+'';
}

if (category =='Upcoming')
{
Results+=''+val.content+'';
//otherMusicClasses+='<p>'+excerpt+'</p>';
//otherMusicClasses+='<img src="'+val.thumbnail+'" width="90%" height="90%" alt ="'+val.title+'" />';
}

if (category =='clubNews')
{
//morningClasses+='<p>'+excerpt+'</p>';
clubNews+=''+val.content+'';
//morningClasses+='<img src="'+val.thumbnail+'" width="90%" height="90%" alt ="'+val.title+'" />';
}
if (category =='eveningclasses')
{
eveningClasses+=''+val.content+'';
}

if (category =='intensive')
{
intensive+=''+val.content+'';
}

if (category =='music')
{
musicClasses+=''+val.content+'';
//window.alert("in music")
}
if (category =='setdancing')
{
SetDancingClasses+=''+val.content+'';
}
if (category =='kidsSetDancing')
{
kidsSetDancingClasses+=''+val.content+'';
}
if (category =='musicSessions')
{
musicSessions+=''+val.content+'';
console.log("in music function");

}
if (category =='studioInfo')
{
studioInfo+=''+val.content+'';
}
if (category =='venueHire')
{
venueHire+=''+val.content+'';
}
if (category =='whyJoin')
{
whyJoin+=''+val.content+'';

}
if (category =='howToApply')
{
howToApply+=''+val.content+'';
}

i =i+1;
});
output+='';
morningClasses+='';
eveningClasses+='';
musicClasses+='';
otherMusicClasses+='';
SetDancingClasses += '';
kidsSetDancingClasses += '';
musicSessions += "";
studioInfo +="";
venueHire +="";
whyJoin +="";
howToApply +="";
intensive +="";


LottoList +="";
Results +="";
clubNews +="";



console.log(LottoList);

$('#eventsList').html(output);
$('#morningClass').html(morningClasses);
$('#eveningClass').html(eveningClasses);
$('#musicClass').html(musicClasses);
$('#otherMusicClass').html(otherMusicClasses);
$('#intensive').html(intensive);
$('#setDancing').html(SetDancingClasses);
$('#kidsSetDancing').html(kidsSetDancingClasses);
$('#musicSessions').html(musicSessions);
$('#studioInfo').html(studioInfo);
$('#venueHire').html(venueHire);
$('#whyJoin').html(whyJoin);
$('#howToApply').html(howToApply);

$('#LottoList').html(LottoList);
$('#upcoming_content').html(Results);
$('#clubNews_content').html(clubNews);


}
}
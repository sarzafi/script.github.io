
<ul id='random-posts'>

<script type="text/javascript">
var rdp_numposts=9;var rdp_snippet_length=100;var rdp_info='no';var rdp_comment='Comment';var rdp_disable='';var rdp_current=[];var rdp_total_posts=0;var rdp_current=new Array(rdp_numposts);function totalposts(a){rdp_total_posts=a.feed.openSearch$totalResults.$t}document.write('<script type=\"text/javascript\" src="http://www.seword.club/feeds/posts/default/-/Politik?alt=json-in-script&max-results=0&callback=totalposts\"><\/script>');function getvalue(){for(var i=0;i<rdp_numposts;i++){var a=false;var b=get_random();for(var j=0;j<rdp_current.length;j++){if(rdp_current[j]==b){a=true;break}};if(a){i--}else{rdp_current[i]=b}}};function get_random(){var a=1+Math.round(Math.random()*(rdp_total_posts-1));return a};
</script>

<script type="text/javascript">
function random_posts(b){a=location.href;y=a.indexOf('?m=0');for(var i=0;i<rdp_numposts;i++){var c=b.feed.entry[i];var d=c.title.$t;if('content'in c){var e=c.content.$t}else{if('summary'in c){var e=c.summary.$t}else{var e=""}};e=e.replace(/<[^>]*>/g,"");if(e.length<rdp_snippet_length){var f=e}else{e=e.substring(0,rdp_snippet_length);var g=e.lastIndexOf(" ");f=e.substring(0,g)+"…"};for(var j=0;j<c.link.length;j++){if('thr$total'in c){var h=c.thr$total.$t+' '+rdp_comment}else{h=rdp_disable};if(c.link[j].rel=='alternate'){var k=c.link[j].href;if(y!=-1){k=k+'?m=0'}var l=c.published.$t;if('media$thumbnail'in c){var m=c.media$thumbnail.url}else{m="https://lh5.googleusercontent.com/-hxY0rTdcuyM/UfUyPpaoBKI/AAAAAAAACsQ/vFtqfUwj074/s72-no/no-image.PNG"}}};document.write('<li>');document.write('<a href="'+k+'" rel="nofollow" alt="'+d+'" title="'+d+'"><img alt="'+d+'" title="'+d+'" src="'+m+'"/></a>');document.write('<div><a href="'+k+'" rel="nofollow" alt="'+d+'" title="'+d+'"><p>'+d+'</p></a></div>');if(rdp_info=='yes'){document.write('<span>'+l.substring(8,10)+'/'+l.substring(5,7)+'/'+l.substring(0,4)+' - '+h)+'</span>'}document.write('<div style="clear:both"></div></li>')}};getvalue();for(var i=0;i<rdp_numposts;i++){document.write('<script type=\"text/javascript\" src="http://www.seword.club/feeds/posts/default/-/Politik?alt=json-in-script&start-index='+rdp_current[i]+'&max-results=1&callback=random_posts\"><\/script>')};
</script>

</ul>

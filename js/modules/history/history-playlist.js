define(["underscore","backbone","./history-model","collections/youtube_search_results"],function(t,e,i,s){var n=e.Model.extend({url:"https://www.googleapis.com/youtube/v3/videos",list:function(t){this.fetch({data:{part:"contentDetails,statistics",key:"AIzaSyCgrK5ds9uCSRM-WBUFm8V8jPX66q8-Od0",id:this.getIds(t),fields:"items(contentDetails,id,statistics)"}})},getIds:function(t){var e=t.map(function(t){return t.snippet.resourceId.videoId});return e.join(",")},reset:function(){var t=this.attributes.items;t&&t.length?this.attributes.items.length=0:""}}),o=s.extend({model:i,stats:new n,initialize:function(){this.listenTo(this.stats,"change:items",this.updateModels)},addItems:function(t){this.stats.reset(),this.stats.list(t),this.tempItems=t},updateModels:function(t,e){var i=this.tempItems.map(function(t){return t.snippet.resourceId.videoId}),s=this.tempItems.filter(function(t,s){return e[s]&&i.indexOf(e[s].id)>-1?(t.id=e[s].id,t.thumbnail={hqDefault:t.snippet.thumbnails.high.url},t.likeCount=e[s].statistics.likeCount,t.duration=e[s].contentDetails.duration,t):void 0});this.add(s),this.tempItems.length=0}});return o});
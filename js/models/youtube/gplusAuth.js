define(["underscore","backbone","../gapi"],function(e,t,n){var r=n.extend({url:function(){return gapi.client.youtube.playlists},scopes:"https://www.googleapis.com/auth/youtube",immediate:!1,client:{api:"youtube",version:"v3"},initialize:function(){},check:function(){},signOut:function(){gapi.auth.signOut()},defaults:{snippet:{title:"Alice in Chains 2 Playlist",description:"A public playlist created with the YouTube API"},status:{privacy:"public"}}});return r});
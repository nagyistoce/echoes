define(["underscore","backbone"],function(e,t){var n=t.Model.extend({defaults:{isPlaying:!1},getThumbnail:function(){var e=this.attributes.thumbnail,t=e&&e.hqDefault||"";return t}});return n});
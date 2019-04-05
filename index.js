/**
* hexo-tag-emojis-byhj
* https://github.com/honjun/hexo-tag-emojis-byhj.git
* 
/**
* emojis tag
*
* Syntax:
*   {% emoji_hj src, [className] %}
*
* Example
*   {% emoji_hj people/alien %}
*/
hexo.extend.tag.register('emoji_hj', function(args){
  var src = args[0];
  var className = args[1] || 'emoji-hj';

  return `<img class="${className}" src="https://cdn.jsdelivr.net/gh/honjun/hexo-tag-emojis-byhj/emojis/${src}.png">`;
});

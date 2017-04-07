window.Lp = {};
Lp.Foodclub = {};

// Private
Lp.Foodclub.scriptTag = function( url ) {
  return $('<script type="text/javascript" src="' + url + '"></scr' + 'ipt>');
};
Lp.Foodclub.styleTag = function( url ) {
  return $('<link rel="stylesheet" type="text/css" href="' + url + '">');
};

// Constants
Lp.Foodclub.iframeResizerUrl = 'https://rawgit.com/davidjbradshaw/iframe-resizer/master/js/iframeResizer.contentWindow.min.js';
Lp.Foodclub.bootstrapStyleUrl  ='https://bootswatch.com/readable/bootstrap.min.css';

Lp.Foodclub.bootstrapStyleTag = function(){
	return this.styleTag( this.bootstrapStyleUrl );
};

Lp.Foodclub.installBootstrap = function(){
	$(document.head).append( this.bootstrapStyleTag() );
};

Lp.Foodclub.iframeResizerScriptTag = function(){
	return this.scriptTag( this.iframeResizerUrl );
};

Lp.Foodclub.installIframeResizer = function(){
	$(document.head).append( this.iframeResizerScriptTag() );
};


Lp.Foodclub.initialize = function(){
	this.installIframeResizer();
};

// main()
Lp.Foodclub.initialize();


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

Lp.Foodclub.installInvoiceUnitColum = function(){ 

	$(document).ready(function(){

		// TH insertion
		$('.invoiceUserTable').find('th.DescriptionCol').before('<th class="UnitCol">Unit</td>');

		// Unit regex
		unitRegex = /\((.+)\)$/ ;

		// Unit Insertion
		$('.invoiceUserTable').find('td.DescriptionCol').each(function(index, element){
		  
		    
		  var unit = element.innerHTML.match(unitRegex)[1];
		  var fieldContent = element.innerHTML.replace(unitRegex, '').trim();
		  
		  
		  var unitField = $('<td class="UnitCol">' + unit + '</td>');
		                    
		                    
		  $(element).before(unitField);
		  
		  // Trim unit out of description
		  element.innerHTML = fieldContent;
		  
		})
	})
};

Lp.Foodclub.addDeliveryDayHeader = function(){
	var deliveryDayHeader = $('<h1>Onsdag</h1>');
	$(document).ready(function(){
		$('.normalPrintInvoices .invoiceUserDiv').prepend(deliveryDayHeader);
	})
};


Lp.Foodclub.initialize = function(){
	this.installIframeResizer();
	this.installInvoiceUnitColum();
	this.addDeliveryDayHeader();
};

// main()
Lp.Foodclub.initialize();


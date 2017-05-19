// Namespace
window.Lp = {};
Lp.Foodclub = {};

// Class definitions

// I represent a listing of items such as user invoices or the order sent to farmer
Lp.Foodclub.LineItemListing = {}; 
Lp.Foodclub.LineItemListing.selector = 'abstract';
Lp.Foodclub.LineItemListing.installUnitColumn = function(){ 
	var self = this;

	// TH insertion
	$(self.selector).find('th.DescriptionCol').before('<th class="UnitCol">Unit</td>');

	// Unit regex
	unitRegex = /\((.+)\)$/ ;

	// Unit Insertion
	$(self.selector).find('td.DescriptionCol').each(function(index, element){
	  var unit = element.innerHTML.match(unitRegex)[1];
	  var fieldContent = element.innerHTML.replace(unitRegex, '').trim();
	  var unitField = $('<td class="UnitCol">' + unit + '</td>');
	  $(element).before(unitField);
	  
	  // Trim unit out of description
	  element.innerHTML = fieldContent;
	})
};

Lp.Foodclub.UserInvoice = { 
	__proto__	: Lp.Foodclub.LineItemListing,
	selector	: '.invoiceUserTable'
};

Lp.Foodclub.UserInvoice.addDeliveryDayHeader = function() {
	var deliveryDayHeader = $('<h1>Onsdag</h1>');
	$(document).ready(function(){
		$('.normalPrintInvoices .invoiceUserDiv').prepend(deliveryDayHeader);
	})
};

Lp.Foodclub.ProducerOrder = { 
	__proto__	: Lp.Foodclub.LineItemListing,
	selector	: '#finalOrderTable'
};

Lp.Foodclub.ProducerOrder.add


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
	$(document).ready(function(){ Lp.Foodclub.UserInvoice.installUnitColumn(); });
	$(document).ready(function(){ Lp.Foodclub.UserInvoice.addDeliveryDayHeader(); });
  $(document).ready(function(){ Lp.Foodclub.ProducerOrder.installUnitColumn(); });
};

// main()
Lp.Foodclub.initialize();

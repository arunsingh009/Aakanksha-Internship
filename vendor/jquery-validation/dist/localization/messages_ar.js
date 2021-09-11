(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery", "../jquery.validate"], factory );
	} else if (typeof module === "object" && module.exports) {
		module.exports = factory( require( "jquery" ) );
	} else {
		factory( jQuery );
	}
}(function( $ ) {


$.extend( $.validator.messages, {
	required: "This field is mandatory",
	remote: "Please correct this field to continue",
	email: "Please enter a valid email address",
	url: "Please enter a valid website address",
	number: "Please enter a number correctly",
	digits: "Please enter numbers only",
	maxlength: $.validator.format( "The maximum number of characters is {0}" ),
	minlength: $.validator.format( "The minimum number of characters is {0}" ),
	rangelength: $.validator.format( "The minimum number of characters is {0} و {1}" ),
	range: $.validator.format( "Please enter a number whose value is between {0} و {1}" ),
	max: $.validator.format( "Please enter a number less than or equal to {0}" ),
	min: $.validator.format( "Please enter a number greater than or equal to {0}" )
} );
return $;
}));

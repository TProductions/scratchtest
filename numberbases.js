class numberbases {
    getInfo() {
	return {
	    "id": "numberbases",
	    "name": "numberbases",
	    "blocks": [{
		    "opcode": "hexconv",
		    "blockType": "reporter",
		    "text": "convert [number] to hex",
		    "arguments": {
		    	"number": {
			    "type": "number",
			    "defaultValue": "10"
		    	}
		    }
	    	},
	    }],
	"menus": {
	}
    };
    hexconv({number}) {
	return number.toString(16);
    };
}
Scratch.extensions.register(new numberbases());
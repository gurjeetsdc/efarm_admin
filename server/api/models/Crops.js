/**
 * Crops.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */


module.exports = {

  attributes: {
  		
  		user_id:{
	      model:'users'
	    },

  		name: {
            type: 'string',
            required: true
        },     

        description: {
            type: 'text',
        },

        variety: {
            type: 'string'
        },

        offer_price: {
            type: 'integer'
        },

        offer_price_unit: {
            type: 'string'
        },

        quantity: {
            type: 'integer',
            required: true
        },

        quatity_unit: {
            type: 'string'
        },

        service_fee: {
            type: 'integer'
        },

        service_fee_type: {
            type: 'string'
        },

        discount_type: {
            type: 'string'
        },

        discount_value: {
            type: 'integer'
        },
        
        currency_cd: {
            type: 'string',
        },
        
        timezone: {
            type: 'string'
        },
        
        address_line1: {
            type: 'text'
        },

        address_line2: {
            type: 'text'
        },

        city: {
            type: 'string'
        },

        state: {
            type: 'string'
        },

        postal_code: {
            type: 'string'
        },

        country: {
            type: 'string'
        },

        lat: {
            type: 'string'
        },

        lng: {
            type: 'string'
        },
        createdAt: { type: 'Date', default: Date.now},
		modifiedAt: { type: 'Date', default: Date.now},


  // 	 	name: { type: String, required: true},
		// description: { type: String},
		// variety: { type: String, required: true},
		// offer_price: { type: Number, required: true, default: 0},
		// offer_price_unit: { type: Number, required: true, default: 0},
		// quantity: { type: Number, required: true, default: 0},
		// quatity_unit: { type: String, required: true},
		// service_fee: { type: Number},
		// service_fee_type: { type: Number},
		// discount_type: { type: String},
		// discount_value: { type: Number},
		// currency_cd: { type: String},
		// timezone: { type: String},
		// address_line1: { type: String},
		// address_line2: { type: String},
		// city: { type: String},
		// state: { type: String},
		// postal_code: { type: String},
		// country: { type: String},
		// lat: { type: Number},
		// lng: { type: Number},
		// images: { type: Array},
		// status: { type: Boolean, default: false},
		// is_verified: { type: Boolean, default: false},
		// ready_on: { type: Date},
		// expired: { type: Date},
		// created: { type: Date, default: Date.now},
		// created_by: { type: Date},
		// modified: { type: Date, default: Date.now},
		// modified_by: { type: String},   
  //  	userId: { type: String,required: true },
  }
};


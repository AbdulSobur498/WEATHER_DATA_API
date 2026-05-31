export const cityValidationSchema = {
    q: {

    notEmpty: {
        errorMessage: 'Insert a city either by number or string'
    },

    isLength: {
        options: {
            min: 3,
            max: 35
        },
        errorMessage: 'City name must be between 3 to 35'
    }
  } 
};

export const forecastValidationSchema = {
    lat: {

        notEmpty: {
            errorMessage: 'Please insert a valid Latitude'
        },

        isLength: {
            options: {
                min: 0,
                max: 90.0000
            },
            errorMessage: 'Latitude value must range from 0 to 90.0000'
        }
    },


    lon:  {
        
        notEmpty: {
            errorMessage: 'Please insert a valid Longitude'
        },

        isLength: {
            options: {
                min: 0,
                max: 180.000000
            },
            errorMessage: 'Longitude value must range from 0 to 180.000000'
        }
    }
}
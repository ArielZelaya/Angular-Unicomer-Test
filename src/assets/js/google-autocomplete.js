
var placeSearch, autocomplete;

var componentForm = {
    street_number: 'short_name',
    route: 'long_name',
    locality: 'long_name',
    administrative_area_level_1: 'short_name',
    postal_code: 'short_name'

};

function initAutocomplete() {
    // Create the autocomplete object, restricting the search predictions to
    // geographical location types.
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('homeaddress'), {types: ['geocode']});
    // Avoid paying for data that you don't need by restricting the set of
    // place fields that are returned to just the address components.
    autocomplete.setFields(['address_component']);

    // When the user selects an address from the drop-down, populate the
    // address fields in the form.
    autocomplete.addListener('place_changed', fillInAddress);

}

function fillInAddress() {
    console.log("entra en el fill address ");
    // Get the place details from the autocomplete object.
    var place = autocomplete.getPlace();
    var address_data;

    // for (var component in componentForm) {
    //     document.getElementById(component).value = '';
    //     // document.getElementById(component).disabled = false;
    //     console.log("funcion  get element by id");
    // }
    // console.log("salio de funcion get element by id ");
    // Get each component of the address from the place details,
    // and then fill-in the corresponding field on the form.
    for (var i = 0; i < place.address_components.length; i++) {

        console.log("Address component : ");
        console.log(addressType);
        console.log(place.address_components.length);
        var addressType = place.address_components[i].types[0];
        if (componentForm[addressType]) {
            var val = place.address_components[i][componentForm[addressType]];
            // var address1_route;

            if (addressType == "street_number"){
                var address1_street_number = place.address_components[i][componentForm[addressType]];

            }else if (addressType=="route"){
                var address1_route = place.address_components[i][componentForm[addressType]];

            }

            // console.log("valor de cada address type");
            // console.log(val);
            document.getElementById(addressType).value = val;

        }
    }

    if (!address1_street_number){

        document.getElementById("homeaddress").value =address1_route;
    }
    else{

        document.getElementById("homeaddress").value = address1_street_number +" "+ address1_route;
    }


}

function geolocate() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var geolocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            var circle = new google.maps.Circle(
                {center: geolocation, radius: position.coords.accuracy});
            autocomplete.setBounds(circle.getBounds());
        });
    }
}



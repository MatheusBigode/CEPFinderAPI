

function buscaCep() {
    let cep = document.getElementById("inputCEP").value 

    let cityResult = document.getElementById("outputCity")
    let stateResult = document.getElementById("outputState")
    let districtResult = document.getElementById("outputDistrict")
    let addressResult = document.getElementById("outputAddress")

    let cepValid = cep.substr(0,5) + "-" + cep.substr(5) + ".json"
    let url = "https://cdn.apicep.com/file/apicep/" + cepValid
    fetch(url)
        .then(res => res.json())

        .then (data => {
            cityResult.value = data.city 
            stateResult.value = data.state 
            districtResult.value = data.district  
            addressResult.value= data.address  
        })
    

}

function limpar () {
    let cep = document.getElementById("inputCEP")
    let cityResult = document.getElementById("outputCity")
    let stateResult = document.getElementById("outputState")
    let districtResult = document.getElementById("outputDistrict")
    let addressResult = document.getElementById("outputAddress")

    let cleanCep = cep.value = ("")
    let cleanCity = cityResult.value = ("")
    let cleanState = stateResult.value = ("")
    let cleanDisctrict = districtResult.value = ("")
    let cleanAddress = addressResult.value = ("")
}
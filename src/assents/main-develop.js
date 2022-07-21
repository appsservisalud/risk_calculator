


document.getElementById("gender_user").onchange = function() {

    gender_user = document.querySelector("#gender_user")
    body_mass_index_user = document.querySelector("#body_mass_index_user")

    if(gender_user.value != "none"){

        if(gender_user.value == 0){

        body_mass_index_user.style.display = "block"

        body_mass_index_user.innerHTML = `<label>¿Perimetro de cintura de hombres por debajo de las costillas en cm?:</label>
        <select name="body_mass_index_user_man"  id="body_mass_index_user_man" class="field" required >

            <option value="none"  selected>Seleccione una opción</option>
            <option value=0>Menos de 94 cm</option>
            <option value=4>94 cm ó mas</option>
        </select>
        <br/>`

    }else{
        body_mass_index_user.style.display = "block"

        body_mass_index_user.innerHTML = ` <label>¿Perimetro de cintura de mujeres por debajo de las costillas en cm?:</label>
        <select name="body_mass_index_user_woman" id="body_mass_index_user_woman" class="field" required>

            <option value="none"  selected>Seleccione una opción</option>
            <option value=0>Menos de 90 cm</option>
            <option value=4>90 cm ó mas</option>
        </select>
        <br/>`

    }
   }
}






document.getElementById('form').addEventListener('submit',function(e)

{
e.preventDefault();

//Objeto diccionario de las preguntas basicas para el usuario
let basic_user_data = 
    
    { 
        cc_user:document.querySelector("#cc_user").value,
        registration_date:document.querySelector("#registration_date").value,
        name_user:document.querySelector("#name_user").value,
        last_name_user:document.querySelector("#last_name_user").value,
        email_user:document.querySelector("#email_user").value,
        mail_delivery_user:document.querySelector("#mail_delivery_user").value,
        age_user:document.querySelector("#age_user").value
    }

    //Objeto diccionario de las preguntas medicas
    let user_medical_data = 

    {
            gender_user:parseInt(document.querySelector("#gender_user").value),
            body_mass_index_user_man:parseInt(document.querySelector("#body_mass_index_user_man").value),
            body_mass_index_user_woman:parseInt(document.querySelector("#body_mass_index_user_woman").value),
            body_mass_index_user:parseInt(document.querySelector("#body_mass_index_user").value),
            physical_activity_user:parseInt(document.querySelector("#physical_activity_user").value),
            fruits_vegetables:parseInt(document.querySelector("#fruits_vegetables").value),
            hipertension_medication:parseInt(document.querySelector("#hipertension_medication").value),
            high_glucose_values:parseInt(document.querySelector("#high_glucose_values").value),
            diabetes_diagnosis:parseInt(document.querySelector("#diabetes_diagnosis").value),
        
    };
    
    let body_mass_index_user = document.querySelector('#body_mass_index_user')

    //Obtenemos el puntaje de las preguntas realizadas
    let get_scores_user = Object.entries(user_medical_data).map(([k,v]) => {
    return v  

    });
    
    //Sumamos los puntajes almacenados
    let sum_user_score = get_scores_user.reduce((a,b) => a + b,0)

    //Clasificamos el riesgo deacuerdo a suma total del puntaje
    function get_risk_range()
    {
        let risk_range = {"Riesgo alto":sum_user_score >12,
                        "Riesgo moderado":10<= sum_user_score  && sum_user_score <=12,
                        "Riesgo bajo":sum_user_score <10
                    }
        
        //Retornamos el tipo de riesgo
        for(const [key,value] of Object.entries(risk_range))
        {

            if(value === true){
                return key
            }

        }


   }

   alert(`Señor(@) ${basic_user_data.name_user}.Usted se encuentra en un riesgo ${get_risk_range()} de diabetes`)

})

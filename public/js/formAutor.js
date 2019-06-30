
var GetValues = function(){
    var isbnInput = document.querySelector("#isbn");
    var titleInput = document.querySelector("#title");
    var priceInput = document.querySelector("#price");
    var releaseDateInput = document.querySelector("#releaseDate");
    var authorInput = document.querySelector("#author");
    
    var validate = (isbn, title, price, release, author) => {
        var error = false;
        if (isbn === "") {
            error = true;
            isbnInput.classList.add("error");
        }
        else {
            isbnInput.classList.remove("error");
        }
        if (title === "") {
            error = true;
            titleInput.classList.add("error");
        }
        else {
            titleInput.classList.remove("error");
        }
        if (price === "") {
            error = true;
            priceInput.classList.add("error");
        }
        else {
            priceInput.classList.remove("error");
        }
        if (release == "Invalid Date") {
            error = true;
            releaseDateInput.classList.add("error");
        }
        else {
            releaseDateInput.classList.remove("error");
        }
        if (author === "") {
            error = true;
            authorInput.classList.add("error");
        }
        else {
            authorInput.classList.remove("error");
        }
        return error;
    }
    
    var showData = () => {
        var isbn = isbnInput.value;
        var title = titleInput.value;
        var price = priceInput.value;
        var release = new Date(releaseDateInput.value);
        var releaseFormat = release.getUTCDate() + "/" + (release.getUTCMonth() + 1) + "/" + release.getFullYear();
        var author = authorInput.value;
        var error = validate(isbn, title, price, release, author);
        
        if(!error){
            Swal.fire( {
                    //json format
                    type:'success',
                    title: 'Se ha enviado su mensaje exitosamente',
                    text:'Se ha creado el libro: '+title+' del autor '+author+' con el ISBN de '+isbn+' y el precio de '+price+' estrenado el dia '+releaseFormat+''
            });
        }
        else{
            Swal.fire( {
                //json format
                type:'warning',
                title: 'No se ha enviado su mensaje exitosamente',
                text:'Revise los campos resaltados e intételo de nuevo'
            });
        }
    }
    return{
        showData:showData 
    }
};

var getData = GetValues();
document.querySelector("#save").addEventListener("click", getData.showData);


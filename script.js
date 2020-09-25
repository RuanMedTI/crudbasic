var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["iden"] = document.getElementById("iden").value;
    formData["nome"] = document.getElementById("nome").value;
    formData["nascimento"] = document.getElementById("nascimento").value;
    formData["cadastro"] = document.getElementById("cadastro").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.iden;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.nome;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.nascimento;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.cadastro;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("iden").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("nascimento").value = "";
    document.getElementById("cadastro").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("iden").value = selectedRow.cells[0].innerHTML;
    document.getElementById("nome").value = selectedRow.cells[1].innerHTML;
    document.getElementById("nascimento").value = selectedRow.cells[2].innerHTML;
    document.getElementById("cadastro").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.iden;
    selectedRow.cells[1].innerHTML = formData.nome;
    selectedRow.cells[2].innerHTML = formData.nascimento;
    selectedRow.cells[3].innerHTML = formData.cadastro;
}

function onDelete(td) {
    if (confirm('Quer mesmo excluir ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("iden").value == "") {
        isValid = false;
        document.getElementById("idenValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("idenValidationError").classList.contains("hide"))
            document.getElementById("idenValidationError").classList.add("hide");
    }
    return isValid;
}
$('.slider-principal').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});
(function () {
    'use strict'

    var transformDataFromAPItoDataTableData = ((data, fields_array = [], headings_array = []) => {
        var result = {}
        var fields = []
        if (fields_array !== undefined && fields_array.length > 0) {
            fields = fields_array
        } else {
            fields = Object.keys(data[0])
        }
        if (headings_array !== undefined && headings_array.length > 0) {
            result = {
                headings: headings_array,
                data: []
            }
        } else {
            result = {
                headings: fields,
                data: []
            }
        }
        for (var i = 0; i < data.length; i++) {
            result.data[i] = []
            for (var h in fields) {
                var propertyName = fields[h]
                if (data[i].hasOwnProperty(propertyName)) {
                    result.data[i].push(data[i][propertyName])
                }
            }
        }
        return result
    })

    // ------------------------------- -------------------------------
    // transformDataFromAPItoDataTableData USAGE EXAMPLES:
    // ------------------------------- -------------------------------

    // dataTable = new DataTable("#dataTable",{
    //              data: dataFromAPItoDataTableData(usersFromAPI),
    //              ...

    // dataTable = new DataTable("#dataTable",{
    //              data: dataFromAPItoDataTableData(usersFromAPI,
    //                                               ["name", "email", "age", "department", "id"]),
    //              ...

    // dataTable = new DataTable("#dataTable",{
    //              data: dataFromAPItoDataTableData(usersFromAPI,
    //                                               ["name", "email", "age", "department", "id"],
    //                                               ["Name", "E-Mail", "Age", "Department", "Actions"]),
    //              ...


})()

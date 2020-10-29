(() => {
    let userID;

    const setUserValues = (user) => {
        console.log(user);

        document.getElementById("inputName").value = user.name;
        document.getElementById("inputEmail").value = user.email;
        document.getElementById("inputAge").value = user.age;
        //document.getElementById("inputName").value = user.name;
        const selectElement = document.querySelector("#department_id");
        for (const option of selectElement.options) {
            if(option.value == user.department_id) {
                option.setAttribute("selected", true);
                console.log(option);
            }
        }
    }

    const createSelectOptions = (departments) => {
        console.table(departments);

        const selectElement = document.getElementById("department_id");
        for (const department of departments) {
            let option = document.createElement("option");
            option.value = department.id;
            option.innerHTML = department.name;
            selectElement.appendChild(option);
        }
    }

    const updateUserListener = (event) => {
        event.preventDefault();

        const user = {
            id: userID,
            name: document.getElementById("inputName").value,
            email: document.getElementById("inputEmail").value,
            age: document.getElementById("inputAge").value,
            department_id: document.getElementById("department_id").value
        }

        axios.put("/api/users/"+userID, user).then(r => {
            console.log(r.data);
        })

        console.log(user)
    }


    const fetchData = async () => {

        userID = window.location.pathname.split("/")[2];

        const departments = (await axios.get("/api/departments")).data.data;

        const user = (await axios.get("/api/users/"+userID)).data.data;

        createSelectOptions(departments);
        setUserValues(user);

        document.querySelector("form.form-group button").addEventListener("click", updateUserListener);


    }




    fetchData();

})()

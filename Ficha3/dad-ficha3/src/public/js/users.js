(function () {
    'use strict'

    let page = 1;

    function generateUsersRows (users) {
        var getCRSF_Token = function () {
            var element = document.querySelector('meta[name="csrf-token"]')
            return element.getAttribute("content")
        }
        var addRow = function (parentNode, CRSFToken, id, name, email, age, department) {
            var newtr = document.createElement('tr')
            // Primeira célula (Nome)
            var newtd = document.createElement('td')
            var newlink = document.createElement('a')
            newlink.href = 'users/' + id
            newlink.textContent = name
            newtd.appendChild(newlink)
            newtr.appendChild(newtd)
            // Segunda célula (Email)
            newtd = document.createElement('td')
            newtd.textContent = email
            newtr.appendChild(newtd)
            // Terceira célula (Age)
            newtd = document.createElement('td')
            newtd.textContent = age
            newtr.appendChild(newtd)
            // Quarta célula (department)
            newtd = document.createElement('td')
            newtd.textContent = department
            newtr.appendChild(newtd)
            // Quinta Célula (1 link - edit  - e um formulário para delete)
            // Link:
            newtd = document.createElement('td')
            var newNode = document.createElement('a')
            newNode.textContent = 'Edit'
            newNode.classList.add('btn', 'btn-xs', 'btn-primary')
            newNode.href = 'users/' + id + '/edit'
            //newNode.href = window.location.hostname + '/users/' + id + '/edit'
            newtd.appendChild(newNode)
            // Form
            var formNode = document.createElement('form')
            formNode.action = 'http://' + window.location.hostname + '/users/' + id
            formNode.method = 'post'
            formNode.classList.add('inline')
            newNode = document.createElement('input')
            newNode.type = 'hidden'
            newNode.name = '_method'
            newNode.value = 'DELETE'
            formNode.appendChild(newNode)
            newNode = document.createElement('input')
            newNode.type = 'hidden'
            newNode.name = '_token'
            newNode.value = CRSFToken
            formNode.appendChild(newNode)
            var divNode = document.createElement('div')
            divNode.classList.add('form-group')
            newNode = document.createElement('button')
            newNode.type = 'submit'
            newNode.textContent = 'Delete'
            newNode.classList.add('btn', 'btn-xs', 'btn-danger')
            newNode.setAttribute("data-id", id);
            newNode.addEventListener('click', deleteUserListener);

            divNode.appendChild(newNode)
            formNode.appendChild(divNode)
            newtd.appendChild(formNode)
            newtr.appendChild(newtd)
            parentNode.appendChild(newtr)
        }

        var tbodyElement = document.getElementsByTagName('tbody')[0]
        tbodyElement.innerHTML = "";

        var CRSFToken = getCRSF_Token()
        users.forEach(function (user) {
            addRow(tbodyElement, CRSFToken, user.id, user.name, user.email, user.age, user.department)
        })
    }

    var addNavigation = function(parentNode, navigationData){
        var addNavButton = function(parentUl, pageNumber, textOnly) {
            var newLi = document.createElement('li');
            if (textOnly) {
                newLi.classList.add('active');
                var newSpan = document.createElement('span');
                newSpan.innerHTML = pageNumber;
                newLi.appendChild(newSpan);
            } else {
                var newLink = document.createElement('a');
                newLink.setAttribute('data-page-number', pageNumber);
                newLink.onclick = clickNavigation;
                newLink.text = pageNumber;
                newLi.appendChild(newLink);

            }
            parentUl.appendChild(newLi);
        };

        parentNode.innerHTML = "";

        var newUl = document.createElement('ul');
        newUl.classList.add('pagination');
        var newLi = document.createElement('li');

        var newLink = document.createElement('a');
        newLink.setAttribute('data-page-number', 1);
        newLink.onclick = clickNavigation;

        newLink.innerHTML = '&laquo;';
        newLink.setAttribute('rel', 'prev');

        newLi.appendChild(newLink);
        newUl.appendChild(newLi);

        // marginPages = pages on the left and right of navigator
        var marginPages = 3;
        var startPage = navigationData.current_page - marginPages;

        if (startPage < 1) {
            startPage = 1;
        }

        var endPage = navigationData.current_page - marginPages;
        if (endPage > navigationData.last_page) {
            endPage = navigationData.last_page;
        }

        if ((startPage + 2 * marginPages) >= endPage) {
            endPage = startPage + 2* marginPages;
            if (endPage > navigationData.last_page) {
                endPage = navigationData.last_page;
            }
        }
        if ((endPage -  2 * marginPages) <= startPage) {
            startPage = endPage - 2 * marginPages;
            if (startPage < 1) {
                startPage = 1;
            }
        }

        for (var i = startPage; i <= endPage; i++) {
            addNavButton(newUl, i, navigationData.current_page == i);
        }

        newLi = document.createElement('li');

        newLink = document.createElement('a');
        newLink.setAttribute('data-page-number', navigationData.last_page);
        newLink.onclick = clickNavigation;
        newLink.innerHTML = '&raquo;';
        newLink.setAttribute('rel', 'next');

        newLi.appendChild(newLink);
        newUl.appendChild(newLi);
        parentNode.appendChild(newUl);
    };

    const clickNavigation = (e) => {
        page = e.target.getAttribute("data-page-number")
        fetchUsers();
    }

    const fetchUsers = () => {
        axios.get('/api/users?page='+page).then(r => {
            generateUsersRows(r.data.data);

            const pagination = document.querySelector(".pagination")
            addNavigation(pagination, r.data.meta);
        }).catch(e => {
            console.error(e);
        })
    }

    const deleteUserListener = async (event) => {
        event.preventDefault();
        let id = event.target.getAttribute("data-id");
        let response = await axios.delete("/api/users/"+id);
        console.log(response)
        fetchUsers();
    }

    fetchUsers();


})()

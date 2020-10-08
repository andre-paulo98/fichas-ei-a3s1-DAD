(function () {
    'use strict'

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
            divNode.appendChild(newNode)
            formNode.appendChild(divNode)
            newtd.appendChild(formNode)
            newtr.appendChild(newtd)
            parentNode.appendChild(newtr)
        }

        var tbodyElement = document.getElementsByTagName('tbody')[0]
        var CRSFToken = getCRSF_Token()
        users.forEach(function (user) {
            addRow(tbodyElement, CRSFToken, user.id, user.name, user.email, user.age, user.department)
        })
    }
})()

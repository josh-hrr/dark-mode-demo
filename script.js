const checkbox = document.querySelector('#my-checkbox')
        if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
            checkbox.setAttribute('checked', true)
        }

        checkbox.addEventListener('change', function(event) {
            console.log(this.checked)
            if(this.checked){
                document.body.classList.remove('is-light-mode')
                document.body.classList.add('is-dark-mode')
            }else {
                document.body.classList.add('is-light-mode')
                document.body.classList.remove('is-dark-mode')
            } 
        })
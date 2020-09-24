(function() {
    
    localStorage.setItem("class","DAD");
    sessionStorage.setItem("year",'2017/18');

    // 2.a 
    //console.log(document);
    //console.dir(document);

    var array = [
        {name:'Javascript',link:'https://developer.mozilla.org/en-US/docs/Web/JavaScript'},
        {name:'HTML',link:'https://developer.mozilla.org/en-US/docs/Web/HTML'},
        {name:'CSS',link:'https://developer.mozilla.org/en-US/docs/Web/CSS'},
        {name:'SASS',link:'http://sass-lang.com/'},
        {name:'LESS',link:'http://lesscss.org/'},
        {name:'Laravel',link:'https://laravel.com/'},
        {name:'VUE JS',link:'https://vuejs.org/'},
        {name:'NODE',link:'https://nodejs.org/en/'},
        {name:'Vagrant',link:'https://www.vagrantup.com/'}
   ]

    // 2.b 
    console.table(array);

    // 2.c / 2.d
    for(var i =0; i< array.length; i++){
        console.log(array[i].link);
    }

    // 2.e
    console.log(localStorage.getItem('class'));
    console.log(sessionStorage.getItem('year'));

})();
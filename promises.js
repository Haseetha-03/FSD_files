function fun1(){
    return new Promise(function(resolved){
        setTimeout(function(){
           resolved()
        },1000)
    })
}
function fun2(){
    return new Promise(function(resolved){
        setTimeout(function(){
          resolved() 
        },1000)
    })
}
function fun3(){
    return new Promise(function(resolved){
        setTimeout(function(){
          resolved() 
        },1000)
    })
}
fun1().then(function(){
    console.log("Fun-1 Complted")
    fun2().then(function(){
        console.log("Fun-2 Completed")
    })
    fun3().then(function(){
        console.log("Fun-3 Completed")
    })
})
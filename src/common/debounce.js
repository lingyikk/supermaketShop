// 封装了一个防抖函数
export function debounce(reFun,delay){
    let timer = null

    return ()=>{
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
            // apply：调用一个对象的一个方法，用另一个对象替换当前对象。
            // 例如：B.apply(A, arguments);即A对象调用B对象的方法。
            // 即this调用reFun函数对象中的reFun-->传入的this.$refs.Scroll.refresh
            // this为当前home组件的component，
            reFun.apply(this,reFun)
        }, delay);
    }
}

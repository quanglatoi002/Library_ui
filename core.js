export default function html([first, ...strings], ...values){
    return values.reduce(
        (acc, cur) => acc.concat(cur, strings.shift()),
        [first]
    )
    .filter(x => x && x!== true || x === 0)
    .join('')
}

export function createStore(reducer) {
    // reduce nhận giá trị đầu vào mà lần trước đó nó return(state)
    let state = reducer()
    const roots = new Map()

    function render() {
        for (const [root, component] of roots) {
            const output = component() // lấy chuỗi html
            root.innerHTML = output // đẩy html ra
        }
    }

    return {
        // đẩy view lên
        attach(component, root) {
            roots.set(root, component)
            render()
        },
        // do tk store và view ở xa nhau lên cần 1 p/thuc để ket noi vs nhau
        connect(selector = state => state) {
            return component =>(props, ...args) =>
                component(Object.assign({}, props, selector(state), ...args))
        },
        dispath(action, ...args) {
            // tk reduce nhận lại giá trị đầu tiên trước đó nó return(state) 
            state = reducer(state, action, args) // action sẽ sửa giá trị đầu tiên của state và update lại
            render()
        }
    }
}
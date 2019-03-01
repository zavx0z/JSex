export const aggregation = (baseClass, ...mixins) => {
    class base extends baseClass {
        constructor(...args) {
            super(...args)
            mixins.forEach((mixin) => {
                copyProps(this, (new mixin))
            })
        }
    }

    let copyProps = (target, source) => {
// эта функция копирует все свойства и символы, отфильтровывая некоторые специальные
        Object.getOwnPropertyNames(source)
            .concat(Object.getOwnPropertySymbols(source))
            .forEach((prop) => {
                if (!prop.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/))
                    Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop))
            })
    }
    mixins.forEach((mixin) => {
// вне constructor (), чтобы разрешить агрегацию (A, B, C) .staticFunction () и т. д.
        copyProps(base.prototype, mixin.prototype)
        copyProps(base, mixin)
    })
    return base
}
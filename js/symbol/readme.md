# Symbol
- `Symbol` 是一种基本数据类型，它是不可变的，且唯一。
- 给一个label，然后返回一个唯一的symbol。
为什么需要symbol？
- 常用于对像字面量，key的用法，所以需要symbol，而且大型项目对象复杂，symbol可以保证唯一性。多人协作

- Object.keys() 只能获取对象的key，不能获取symbol
- Object.getOwnPropertySymbols() 可以获取对象的symbol
- Object.entries() 可以获取对象的key和value但没symbol

- Ownproperty() 
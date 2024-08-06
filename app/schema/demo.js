const schema = {
  type: "object",
  properties: {
    foo: {type: "integer"},
    bar: {type: "string"}
  },
  // 表示必须存在的属性
  required: ["foo"],
  // 表示不允许有schema中未定义的额外属性
  additionalProperties: false
}
module.exports = schema

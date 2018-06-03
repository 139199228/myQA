describe("运算功能测试", function () {
    it("运算", function () {
        expect(test(1)).toBe(2)
    })
    it("加法函数测试", function () {
        var add5 = add(1);
        expect(add5(2)).toBe(3)
    });
    it("乘法测试", function () {
        var multis = multi(1)
        expect(multis(5)).toBe(6)
    })
})
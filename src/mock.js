

/*
 * @Description: This is a mock data file
 * @Author: JeanneWu
 * @Date: 2020-03-18 10:26:54
 */
// js文件头部注释之后的内容
const Mock = require('mockjs')

Mock.mock('/api/catagory', () => {
    let list = [
        {
            name: 'Banking/Lending Tech',
            value: 150
        },
        {
            name: 'Payments',
            value: 224
        },
        {
            name: 'Wealth & Capital Markets Tech',
            value: 200
        },
        {
            name: 'Healthcare FinTech',
            value: 237
        },
        {
            name: 'InsurTech',
            value: 157
        },
        {
            name: 'FMS',
            value: 200
        },
        {
            name: 'Financial BPO',
            value: 180
        }
    ]
    return list
})
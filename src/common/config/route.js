/**
 * Created by zeng on 16-8-23.
 */

export default [
    //详情
    [/^article\/(\d+)/, "home/article/detail?id=:1"],
    
    //登录
    [/^login/, 'home/auth/index'],
    [/^exit/, 'home/auth/exit']
]

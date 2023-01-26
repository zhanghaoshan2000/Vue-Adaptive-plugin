import SacleBox from '../package/ScaleBox/SacleBox'

const coms = [SacleBox];

const install = function(Vue){
    coms.forEach((com)=>{
        Vue.component(com.name,com)
    })
}

export default install
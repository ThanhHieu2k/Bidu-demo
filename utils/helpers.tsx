
const convertObjectToParams = (object : any) =>{
    let keyArr = Object.keys(object)
    let result = keyArr.reduce((acc,key,index)=>{
        if(index==0){
            return acc+= `?${key}=${object[key]}`
        }else{
            return acc+=`&${key}=${object[key]}`
        }
    },'')
    return result
}

const formatPrice = (prices:any)=>{
    if(prices){
        const result:any = prices.toString().split('');
        for(let i:any = result.length-3; i>0; i=i-3){
            result.splice(i,0,'.')
        }
        return result.join('')
    }else{
        return '-'
    }
}

export  {convertObjectToParams,formatPrice}
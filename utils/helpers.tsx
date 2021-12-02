


const convertObjectToParams = (object : any) =>{
    return object
}

const formatPrice = (prices:any)=>{

    const result:any = prices.split('');
    for(let i:any = result.length-3; i>0; i=i-3){
        result.splice(i,0,'.')
    }
    return result.join('')
}

export  {convertObjectToParams,formatPrice}
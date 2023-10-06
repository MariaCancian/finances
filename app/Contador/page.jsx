import Counter from '../component/counter/Counter'

export default function Page(){
return(
    <>
    <h1>Page</h1>
    <Counter 
    padrao={0}
        agregacao={1}
        limitMin={0}
       limitMax={10}
    />
    </>
)
}
    


import Header from './Todo/Header';
import Items from './Todo/Items';
import Footer from './Todo/Footer';
import {useState,useEffect} from 'react'

function TodoApp() {
    const activeLen = JSON.parse(localStorage.getItem("testObject"))
    .filter(item=>item.done===false).length;
    const getData =  JSON.parse(localStorage.getItem("testObject"));
    const getIndexData = localStorage.getItem("lastIndex");
    const [list,setList] = useState(getData===null?[]:getData);
    const [listLength,setListLength] = useState(getIndexData===null?[0]:getIndexData);
    const [activeCount,setActiveCount] = useState(activeLen);
    const [isFooterVisible,setIsFooterVisible] = useState(false);

    useEffect(()=>{
        
        const newLen = list.filter(item=>item.done===false).length;
        setActiveCount(newLen);
        
        if(parseInt(list.length)>0){
            setIsFooterVisible(true);
        }else if(parseInt(list.length)===0){
            const getDataLen =  JSON.parse(localStorage.getItem("testObject")).length;
            if(getDataLen===0){
                setIsFooterVisible(false);
            }
        }
    },[list]);

    return (
        <section className={"todoapp"}>
            <Header data={{list,setList,listLength,setListLength}}/>
            <Items data={{list,setList}}/>
            {isFooterVisible&&
            <Footer data={{list,setList,activeCount,setActiveCount,isFooterVisible}}/>}
        </section>
    )
}

export default TodoApp

import React,{Component} from 'react';
import {Text,FlatList,Image,View,TouchableOpacity} from 'react-native'
import Global from '../utils/global'

// 1.创建一个组件类
export default class ProductComponent extends Component{
   constructor(){
     super();
     this.state={list:[],
        pno:1,      //记录当前是第几页
        pageCount:1 //记录一共有多少页
     }
   }
   componentDidMount(){
      var url="product/list.php"
      fetch(Global.baseUrl+url)
      .then((response)=>response.json())
      .then((result)=>{
         
          for(var i=0;i<result.data.length;i++){
            result.data[i].key=i;
          }
          
          this.setState({pageCount:result.pageCount});
          this.setState({list:result.data});
          
      });  
   }
   showItem=(info)=>{
    
      var  imgUrl=Global.baseImgUrl+info.item.pic;   
      return  <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>this.handlePress(info.item.lid)}> 
                  <Image style={{height:40,width:40}} source={{uri:imgUrl}}></Image>              
                  <Text>{info.item.title}</Text>
              </TouchableOpacity>
   }
   handlePress=(lid)=>{
      this.props.navigation.navigate("detail",{lid:lid});
   }
   loadMore=()=>{
     var nowPno = this.state.pno;  //当前页
     nowPno++;                     //下一页
     if(nowPno>this.state.pageCount){
         return;
     } 
     fetch(Global.baseUrl+"product/list.php?pno="+nowPno)
     .then(response=>response.json())
     .then((result)=>{
        this.setState({pno:nowPno});
        var listLength=this.state.list.length;
        for(var i=0;i<result.data.length;i++){
          result.data[i].key=listLength+i;
        }
        var nowList=this.state.list;
        nowList=nowList.concat(result.data);
        this.setState({list:nowList});
     })
   }

   render(){
     return  <FlatList onEndReached={this.loadMore} renderItem={this.showItem} data={this.state.list}>
            </FlatList>
     }
}
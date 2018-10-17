import React,{Component} from 'react';
import {Text,Image,TextInput,Button,View,StyleSheet,FlatList,TouchableOpacity} from 'react-native'
import Global from "../utils/global"
// 1.创建一个组件类
export default class UserListCompoent extends Component{
  constructor(){
    super();
    this.state={userList:[]};
  }
   componentDidMount(){
     var url="user/user_list.php";
     fetch(Global.baseUrl+url)
     .then(response=>response.json())
     .then((result)=>{
        this.setState({userList:result.data});
        console.log(result.data);
     });
   }
   showAvatar=(info)=>{
      //如果头像为null,显示default
      //否侧，显示指定的头像
      if(info.item.avatar){
          //显示对应的头像
          return      <Image style={{width:50,height:50}} source={{uri:Global.baseImgUrl+info.item.avatar}}></Image>
      }else{
        return      <Image style={{width:50,height:50}} source={{uri:Global.baseImgUrl+"img/avatar/default.png"}}></Image>
      }

   }

   showItem=(info)=>{    
      return  <TouchableOpacity style={{flexDirection:'row'}}>
                   {
                     this.showAvatar(info)
                   }
                  <Text>{info.item.uname}</Text>
              </TouchableOpacity>
   }
   render(){
     return   <FlatList renderItem={this.showItem} data={this.state.userList}></FlatList>   
   }
}



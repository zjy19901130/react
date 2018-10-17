import React,{Component} from 'react';
import {Text,Image,TextInput,Button,View,StyleSheet,ActivityIndicator} from 'react-native'
import Global from "../utils/global"
// 1.创建一个组件类
export default class LoginCompoent extends Component{
  constructor(){
    super();
    this.state={uname:"",upwd:"",isLoading:false};
  }
   handleLogin=()=>{
       this.setState({isLoading:true});
       var url="user/login.php?uname="+this.state.uname+"&upwd="+this.state.upwd;
       console.log(Global.baseUrl+url)
       fetch(Global.baseUrl+url)
       .then((response)=>response.json())
       .then((result)=>{
        this.setState({isLoading:false});
          if(result.code==200){
             
             this.props.navigation.navigate("main");  

          }else{
            alert("登录失败");
          }
          this.setState({uname:"",upwd:""});
       }); 
   }
   saveUname=(msg)=>{
      this.setState({uname:msg});
   }
   saveUpwd=(msg)=>{
     this.setState({upwd:msg});
   }
   render(){
     return   <View>
                <Image  style={myStyle.myText} source={require("../../img/3.jpg")} 
               ></Image>
                <TextInput value={this.state.uname} placeholder="请输入用户名" onChangeText={this.saveUname}></TextInput>
                <TextInput secureTextEntry={true} value={this.state.upwd} placeholder="请输入密码" onChangeText={this.saveUpwd}></TextInput>
                <Button title="登陆" onPress={this.handleLogin}></Button>
                {
                   this.state.isLoading
                   &&
                  <ActivityIndicator size="large" color="blue"></ActivityIndicator>
                }
                
              </View>      
   }
}


var myStyle=StyleSheet.create({
   myText:{
    width:80,height:80,borderRadius:40,alignSelf:'center'
   }
});
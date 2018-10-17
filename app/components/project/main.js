import React,{Component} from 'react';
import {Text,View,StyleSheet,Image,TouchableOpacity,ScrollView} from 'react-native'
import Row from '../utils/row'
import Col from '../utils/cloumn'
// 1.创建一个组件类
export default class MainComponent extends Component{
  jump=(desPath)=>{
      this.props.navigation.navigate(desPath);
  }
   render(){
     return  <ScrollView style={{backgroundColor:"powderblue"}}>
                 <Row> 
                    <Col>
                      <View style={[myStyles.myBorder,myStyles.myNewCol]}>
                         <Text style={{fontSize:30,color:'red'}}>200</Text>
                         <Text>当日PC端pv量</Text>
                      </View>
                    </Col>
                    <Col>
                      <View style={[myStyles.myBorder,myStyles.myNewCol]}>
                          <Text style={{fontSize:30,color:'green'}}>700</Text>
                          <Text>当日PC端pv量</Text>
                      </View>
                    </Col>
                 </Row>
                 <Row> 
                  <Col>
                    <View style={[myStyles.myBorder,myStyles.myNewCol]}>
                         <Text style={{fontSize:30,color:'red'}}>800</Text>
                         <Text>已完成订单的总数</Text>
                    </View>
                  </Col>
                   <Col>
                    <View style={[myStyles.myBorder,myStyles.myNewCol]}>
                        <Text style={{fontSize:30,color:'green'}}>1200</Text>
                         <Text>当日app下载量</Text>
                    </View>
                    </Col>
                 </Row>
                 <Text>{'\n'}</Text>
                 <Row> 
                 <Col>
                   <TouchableOpacity style={myStyles.myNewCol}>
                         <Image style={myStyles.myImage} source={require("../../img/order.png")}></Image>
                         <Text>订单管理</Text>
                    </TouchableOpacity>
                    </Col>
                    <Col>
                    <TouchableOpacity style={myStyles.myNewCol} onPress={()=>this.jump("userList")}>
                         <Image style={myStyles.myImage} source={require("../../img/user.png")}></Image>
                         <Text>用户管理</Text>
                    </TouchableOpacity>
                    </Col>
                 </Row>
                 <Text>{'\n'}</Text>
                 <Row> 
                   <Col>
                   <TouchableOpacity style={myStyles.myNewCol}  onPress={()=>this.jump("list")}>
                         <Image style={myStyles.myImage} source={require("../../img/product.png")}></Image>
                         <Text>商品管理</Text>
                    </TouchableOpacity>
                    </Col>
                    <Col>
                    <TouchableOpacity style={myStyles.myNewCol}>
                         <Image style={myStyles.myImage} source={require("../../img/setting.png")}></Image>
                         <Text>设置</Text>
                    </TouchableOpacity>
                    </Col>
                    </Row>
                 <Text>{'\n\n'}</Text>
             </ScrollView>
   }
}

var myStyles=StyleSheet.create({
   myBorder:{  
    height:100, 
    borderRightWidth:2,
    borderBottomWidth:2,
    borderColor:'white'
   },
   myNewCol:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',   
   },
   myRow:{
    flexDirection:'row',
    
   },
   myImage:{
     width:80,
     height:80
   }
});
